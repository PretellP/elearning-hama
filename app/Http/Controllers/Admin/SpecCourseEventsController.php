<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\EventRequest;
use App\Models\{Company, CourseModule, Event, Exam, OwnerCompany, Room, User};
use App\Services\{CertificationService, EventService};
use Exception;
use Illuminate\Http\Request;

class SpecCourseEventsController extends Controller
{
    private $eventService;

    public function __construct(EventService $service)
    {
        $this->eventService = $service;
    }

    public function getDataTable(Request $request, CourseModule $module)
    {
        if ($request->ajax()) {

            if ($request['type'] == 'html') {

                $html = view('admin.specCourses.partials.components._events_list', compact(
                    'module'
                ))->render();

                return response()->json([
                    'html' => $html,
                    'title' => $module->title,
                ]);
            }
            else if ($request['type'] == 'table') {
                return $this->eventService->getSpecCourseDataTable($module->id);
            }
        }

        abort(403);
    }

    public function create()
    {
        $allExams = Exam::withCount('questions')->having('questions_count', '>=', 2)
            ->get(['id', 'title', 'exam_type']);

        $exams = $allExams->where('exam_type', 'dynamic');

        $types_array = array();
        $types = $this->eventService->getTypes();
        foreach ($types as $key => $type) {
            array_push($types_array, [
                $key => $type,
            ]);
        }

        $responsables_array = array();
        $responsables = User::getResponsablesQuery()->get(['id', 'name', 'paternal']);
        foreach ($responsables as $responsable) {
            array_push($responsables_array, [
                $responsable->id => $responsable->full_name,
            ]);
        }

        $instructors_array = array();
        $instructors = User::getInstructorsQuery()->get(['id', 'name', 'paternal']);
        foreach ($instructors as $instructor) {
            array_push($instructors_array, [
                $instructor->id => $instructor->full_name,
            ]);
        }

        $rooms_array = array();
        $rooms = Room::get(['id', 'description']);
        foreach ($rooms as $room) {
            array_push($rooms_array, [
                $room->id => $room->description,
            ]);
        }

        $owner_companies_array = array();
        $owner_companies = OwnerCompany::get(['id', 'name']);
        foreach ($owner_companies as $owner_company) {
            array_push($owner_companies_array, [
                $owner_company->id => $owner_company->name,
            ]);
        }

        $exams_array = array();
        foreach ($exams as $exam) {
            array_push($exams_array, [
                $exam->id => $exam->title,
            ]);
        }

        return response()->json([
            "type" => $types_array,
            "user_id" => $instructors_array,
            "responsable_id" => $responsables_array,
            "room_id" => $rooms_array,
            "owner_companies_id" => $owner_companies_array,
            "exam_id" => $exams_array,
        ]);
    }

    public function store(EventRequest $request, CourseModule $module)
    {
        try {
            $eventModel = $this->eventService->specCourseStore($request, $module);
            $success = $eventModel ? true : false;
        } catch (Exception $e) {
            $success = false;
        }

        $message = getMessageFromSuccess($success, 'stored');

        if ($success) {
            $specCourse = $module->specCourse;
            $specCourse->loadRelationships();
            $moduleActive = getActiveSection($request['id']);

            $htmlSecCourse = view('admin.specCourses.partials.components._specCourse_box', compact('specCourse'))->render();
            $htmlModules = view('admin.specCourses.partials.components._modules_list', compact(
                'specCourse',
                'moduleActive'
            ))->render();
        }

        return response()->json([
            "success" => $success,
            "message" => $message,
            "htmlCourse" => $htmlSecCourse,
            "htmlModule" => $htmlModules,
        ]);
    }

    public function edit(Event $event)
    {
        $event->loadRelationships()->loadParticipantsCount();

        $allExams = Exam::withCount(['questions' => fn ($q) => $q->where('active', 'S')])->having('questions_count', '>=', 2)
            ->get(['id', 'title', 'exam_type']);

        $exams = $allExams->where('exam_type', 'dynamic');

        $event['type'] = verifyEventType($event->type);

        return response()->json([
            "all" => [
                "types" => $this->eventService->getTypes(),
                "instructors" => User::getInstructorsQuery()->get(['id', 'name', 'paternal']),
                "responsables" => User::getResponsablesQuery()->get(['id', 'name', 'paternal']),
                "rooms" => Room::where('capacity', '>=', $event->participants_count)->get(['id', 'description', 'capacity']),
                "ownerCompanies" => OwnerCompany::get(['id', 'name']),
                "exams" => $exams,
            ],
            "event" => $event
        ]);
    }

    public function update(EventRequest $request, Event $event)
    {
        $event->loadParticipantsCount();

        try {
            $success = $this->eventService->update($request, $event);
        } catch (Exception $e) {
            $success = false;
        }

        $message = getMessageFromSuccess($success, 'updated');

        if ($request['place'] == 'show') {
            $event->loadRelationships();
            $html = view('admin.events.partials._box_event', compact('event'))->render();
            $show = true;
        }

        return response()->json([
            "success" => $success,
            "message" => $message,
            "show" => $show ?? null,
            "html" => $html ?? null,
            "title" => mb_strtolower($event->description, 'UTF-8')
        ]);
    }

    public function destroy(Request $request, Event $event)
    {
        try {
            $success = $this->eventService->destroy($event);
        } catch (Exception $e) {
            $success = false;
        }

        $message = getMessageFromSuccess($success, 'deleted');

        if ($success) {
            $specCourse = $event->courseModule->specCourse;
            $specCourse->loadRelationships();
            $moduleActive = getActiveSection($request['id']);

            $htmlSecCourse = view('admin.specCourses.partials.components._specCourse_box', compact('specCourse'))->render();
            $htmlModules = view('admin.specCourses.partials.components._modules_list', compact(
                'specCourse',
                'moduleActive'
            ))->render();

            if ($request['place'] == 'show') {
                $route = route('admin.specCourses.show', $specCourse);
                $show = true;
            }
        }

        return response()->json([
            "success" => $success,
            "message" => $message,
            "htmlCourse" => $htmlSecCourse ?? null,
            "htmlModule" => $htmlModules ?? null,
            "route" => $route ?? null,
            "show" => $show ?? false,
        ]);
    }






    public function show(Request $request, Event $event)
    {
        if ($request->ajax()) {
            return app(CertificationService::class)->getParticipantsTable($request, $event);
        }

        $event->loadRelationships();
        $companies = Company::get(['id', 'description']);

        return view('admin.specCourses.events.index', compact(
            'event',
            'companies'
        ));
    }
}
