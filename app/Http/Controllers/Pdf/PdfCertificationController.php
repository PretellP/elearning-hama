<?php

namespace App\Http\Controllers\Pdf;

use App\Http\Controllers\Controller;
use App\Models\{Certification, File, MiningUnit};
use App\Services\FileService;
use App\Services\Pdf\{PdfCertificationService};
use Storage;

class PdfCertificationController extends Controller
{
    private $pdfCertificationService;
    private $fileService;

    public function __construct(PdfCertificationService $pdfCertificationService, FileService $fileService)
    {
        $this->pdfCertificationService = $pdfCertificationService;
        $this->fileService = $fileService;
    }   

    public function examPdf(Certification $certification)
    {
        $certification->load(
            [
                'event.exam.course', 
                'company', 
                'user', 
                'evaluations.question.alternatives.droppableOption',
                'evaluations.question.alternatives.file',
                'evaluations.question.droppableOptions'
            ]
        );

        return $this->pdfCertificationService->exportExamPdf($certification);

    }

    public function certificationPdf(Certification $certification)
    {
        $certification->load([
            'course',
            'user',
            'event.ownerCompany',
            'event.user.file' => fn ($q) => $q->where('category', 'firmas'),
            'miningUnits'
        ]);

        return $this->pdfCertificationService->exportCertificationPdf($certification);
    }

    public function commitmentPdf(Certification $certification, MiningUnit $miningUnit)
    {
        $sufix = getMiningUnitSufix($miningUnit->description);
        
        $certification->load([
            'user.file' => fn($q) => $q->where('category', 'firmas'),
            'event'
        ]);

        return $this->pdfCertificationService->exportCommitmentPdf($certification, $miningUnit, $sufix);
    }

    public function extCertificationPdf(Certification $certification)
    {
        $certification->load([
            'course',
            'event.user.file' => fn ($q) => $q->where('category', 'firmas'),
            'event.responsable.file' => fn ($q2) => $q2->where('category', 'firmas'),
        ]);

        return $this->pdfCertificationService->exportExtCertificationPdf($certification);
    }

    public function webCertificationPdf(Certification $certification)
    {
        $certification->load([
            'event.user.file' => fn ($q) => $q->where('category', 'firmas'),
            'course',
            'user'
        ]);

        return $this->pdfCertificationService->exportWebCertificationPdf($certification);
    }

    public function anexoPdf(Certification $certification, MiningUnit $miningUnit)
    {
        $storage = env('FILESYSTEM_DRIVER');

        $certification->load([
            'course',
            'user',
            'company',
            'event' => fn($q) => 
                $q->with([
                    'user.file' => fn($q2) => $q2->where('category', 'firmas'),
                    'security',
                    'securityPor'
                ]),
        ]);

        return $this->pdfCertificationService->exportAnexoPdf($certification, $miningUnit, $storage);
    }

    public function downloadFile(File $file)
    {
        $storage = env('FILESYSTEM_DRIVER');

        if ($this->fileService->validateDownload($file, $storage)) {
            return $this->fileService->download($file, $storage);
        }

        return redirect()->route('certifications.index')->with('flash_message', 'fileNotFound');
    }
}
