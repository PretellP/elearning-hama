<?php

namespace App\Http\Controllers\Pdf;

use App\Http\Controllers\Controller;
use App\Models\{Certification, File, MiningUnit};
use App\Services\Pdf\{PdfCertificationService};


class PdfCertificationController extends Controller
{
    private $pdfCertificationService;

    public function __construct(PdfCertificationService $service)
    {
        $this->pdfCertificationService = $service;
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

    public function downloadFile(File $file)
    {
        $storage = env('FILESYSTEM_DRIVER');

        if (!$this->pdfCertificationService->downloadFile($file, $storage)) {
            return redirect()->route('certifications.index');
        }
    }
}
