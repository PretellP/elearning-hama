<?php

namespace App\Http\Controllers\Admin;

use App\Exports\{ParticipantsAreaImportTemplate, ParticipantsImportTemplate, ParticipantsScoreImportTemplate};
use App\Http\Controllers\Controller;
use App\Http\Requests\FileImportRequest;
use App\Imports\ParticipantsAreaImport;
use App\Imports\ParticipantsImport;
use App\Imports\ParticipantsScoreImport;
use App\Models\{Certification, Company, Course, Event, MiningUnit};
use App\Services\{CertificationService};
use Exception;
use Illuminate\Http\Request;

class AdminCertificationsController extends Controller
{
    private $certificationService;

    public function __construct(CertificationService $service)
    {
        $this->certificationService = $service;
    }

    public function store(Request $request, Event $event)
    {
        $event->loadRelationships();
        $dnis = $request['users-selected'];

        try{
            $info = $this->certificationService->store($dnis, $event);
            $message = config('parameters.stored_message');
        } catch (Exception $e) {
            $info = array("success" => false, "status" => "error", "note" => config('parameters.exception_message'));
            $message = $e->getMessage();    
        }

        $event->loadCounts();
        $html = view('admin.events.partials._box_event', compact('event'))->render();

        return response()->json([
            "success" => $info['success'],
            "status" => $info['status'],
            "note" => $info['note'],
            "message" => $message,
            "html" => $html
        ]);
    }

    public function updateAssist(Request $request, Certification $certification)
    {
        try{
            $success = $this->certificationService->updateAssist($request, $certification);
            $message = config('parameters.updated_message');
        } catch (Exception $e) {
            $success = false;
            $message = $e->getMessage();
        }

        return response()->json([
            "success" => $success,
            "message" => $message
        ]);
    }

    public function edit(Certification $certification) 
    {
        $certification->loadRelationships();

        return response()->json([
            "all" => [
                "miningUnits" => MiningUnit::get(['id', 'description']),
                "companies" => Company::get(['id', 'description'])
            ],
            "selected" => [
                "miningUnits" => $certification->miningUnits->pluck('id'),
                'company' => $certification->company,
                'participant' => $certification->user->full_name_complete
            ],
            "flg_assist_status" => $certification->event_assist_status,
            "certification" => $certification
        ]);
    }

    public function update(Request $request, Certification $certification) 
    {   
        $message = null;

        try {
            $success = $this->certificationService->update($request, $certification);
        } catch (Exception $e) {
            $success = false;
            $message = $e->getMessage();
        }

        if($success){
            $message = config('parameters.updated_message');
        }

        return response()->json([
            "success" => $success,
            "message" => $message
        ]);
    }

    public function destroy(Certification $certification)
    {
        $certification->load('testCertification');
        $html = null;

        try{
            $success = $this->certificationService->destroy($certification);
            $message = config('parameters.deleted_message');
        } catch (Exception $e) {
            $success = false;
            $message = $e->getMessage();    
        }

        if ($success) {
            $event = $certification->event->loadCounts();
            $html = view('admin.events.partials._box_event', compact('event'))->render();
        }

        return response()->json([
            "success" => $success,
            "message" => $message,
            "html" => $html
        ]);
    }

    public function show(Certification $certification)
    {
        $certification->loadRelationships();

        $user = $certification->user;
        $user['name'] = $user->full_name;
        $event = $certification->event;
        $certification['status_txt'] = config('parameters.certification_status')[$certification->status];

        return response()->json([
            "title" => $certification->id,
            "participant" => $user,
            "event" => $event,
            "certification" => $certification,
        ]);
    }

    public function downloadImportTemplate()
    {
        $participantsImportTemplate = new ParticipantsImportTemplate();

        return $participantsImportTemplate->download('participantes_plantilla_registro_masivo.xlsx');
    }

    public function downloadImportScoreTemplate()
    {
        $participantsScoreTemplate = new ParticipantsScoreImportTemplate();

        return $participantsScoreTemplate->download('registro_de_notas_masivo_plantilla.xlsx');
    }

    public function downloadImportAreaTemplate()
    {
        $participantsAreaTemplate = new ParticipantsAreaImportTemplate();

        return $participantsAreaTemplate->download('registro_de_area_observaciones_plantilla.xlsx');
    }

    public function storeMassive(FileImportRequest $request, Event $event)
    {
        $event->loadRelationships();

        $validationFailure = false;
        $failureMessage = null;

        try {
            $participantsImport = new ParticipantsImport;
            $participantsImport->import($request->file('file'));
            $dnis = $participantsImport->getDnis();

            $info = $this->certificationService->store($dnis, $event);
            $message = config('parameters.stored_message');

            if ($participantsImport->failures()->isNotEmpty()) {
                $validationFailure = true;
                $failureMessage= 'Se encontró errores de validación';
            }

        } catch (Exception $e) {
            $info = array("success" => false, "status" => "error", "note" => config('parameters.exception_message'));
            $message = $e->getMessage();  
        }
        
        $event->loadCounts();
        $html = view('admin.events.partials._box_event', compact('event'))->render();

        return response()->json([
            "success" => $info['success'],
            "status" => $info['status'],
            "note" => $info['note'],
            "validationFailure" => $validationFailure,
            "failureMessage" => $failureMessage,
            "message" => $message,
            "html" => $html
        ]);
    }

    public function storeScoresMasive(FileImportRequest $request, Event $event)
    {
        $event->load(['certifications' => fn ($q) =>
                        $q->where('evaluation_type', 'certification')
                            ->select('id','event_id','user_id','score','evaluation_type')
                    ]);

        $validationFailure = false;
        $failureMessage = null;

        try {
            $participantsScoreImport = new ParticipantsScoreImport;
            $participantsScoreImport->import($request->file('file'));
            $rows = $participantsScoreImport->getDnis();

            $info = $this->certificationService->storeMassiveFromContext($rows, $event, 'score');
            $message = config('parameters.updated_message');

            if ($participantsScoreImport->failures()->isNotEmpty()) {
                $validationFailure = true;
                $failureMessage= 'Se encontró errores de validación';
            }

        } catch (Exception $e) {
            $info = array("success" => false, "isStored" => false);
            $message = $e->getMessage();  
        }

        return response()->json([
            "success" => $info['success'],
            "isStored" => $info['isStored'],
            "validationFailure" => $validationFailure,
            "failureMessage" => $failureMessage,
            "message" => $message,
        ]);
    }

    public function updateAreaMassive(FileImportRequest $request, Event $event)
    {
        $event->load(['certifications' => fn ($q) =>
                        $q->where('evaluation_type', 'certification')
                            ->select('id','event_id','user_id','score','evaluation_type')
                    ]);

        $validationFailure = false;
        $failureMessage = null;

        try {
            $participantsAreaImport = new ParticipantsAreaImport;
            $participantsAreaImport->import($request->file('file'));
            $rows = $participantsAreaImport->getDnis();

            $info = $this->certificationService->storeMassiveFromContext($rows, $event, 'area');
            $message = config('parameters.updated_message');

            if ($participantsAreaImport->failures()->isNotEmpty()) {
                $validationFailure = true;
                $failureMessage= 'Se encontró errores de validación';
            }

        } catch (Exception $e) {
            $info = array("success" => false, "isStored" => false);
            $message = $e->getMessage();  
        }

        return response()->json([
            "success" => $info['success'],
            "isStored" => $info['isStored'],
            "validationFailure" => $validationFailure,
            "failureMessage" => $failureMessage,
            "message" => $message,
        ]);
    }

    public function reset(Certification $certification)
    {
        try {
            $this->certificationService->reset($certification);
            $success = true;
            $message = config('parameters.updated_message');
        } catch (Exception $e) {
            $success = false;
            $message = config('parameters.exception_message');
        }

        return response()->json([
            "success" => $success,
            "message" => $message
        ]);
    }








    // ------------------- CERTIFICATION MODULE ------------------------


    public function index(Request $request) 
    {
        if ($request->ajax()) {
            return $this->certificationService->getCertificationDataTable($request);
        }

        $companies = Company::get(['id', 'description']);
        $courses = Course::where('course_type', 'REGULAR')->get(['id', 'description']);

        return view('admin.certifications.index', compact(
            'companies',
            'courses'
        ));
    }
}
