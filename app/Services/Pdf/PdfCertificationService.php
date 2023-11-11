<?php

namespace App\Services\Pdf;

use App\Models\{Certification, File};
use App\Services\{FileService};
use Exception;
use Auth;
use Carbon\Carbon;
use Barryvdh\DomPDF\Facade\Pdf;

class PdfCertificationService
{
    public function exportExamPdf(Certification $certification)
    {
        $pdf = Pdf::loadView('admin.common.pdf.certification_exam', compact(
            'certification'
        ));

        return $pdf->stream('certificado-'. $certification->id .'.pdf');
    }

    public function exportCertificationPdf(Certification $certification)
    {
        if ($this->isEnableExport($certification)) {

            $pdf = Pdf::loadView('pdf.certification', compact(
                'certification'
            ))->setPaper('letter', 'portrait');
    
            return $pdf->stream('certificado_'. $certification->user->id . '_' . $certification->event->id .'.pdf');
        }

        abort(403, 'Acceso no autorizado');
    }

    public function exportCommitmentPdf(Certification $certification, $miningUnit, $sufix)
    {
        if ($this->isEnableExport($certification)) {

            $pdf = Pdf::loadView('pdf.commitment', compact(
                'certification',
                'sufix',
                'miningUnit'
            ))->setPaper('letter', 'portrait');

            return $pdf->stream('compromisos_'. $certification->user->id . '_' . $certification->event->id . '_' . $sufix . '.pdf');
        }

        abort(403, 'Acceso no autorizado');
    }

    private function isEnableExport(Certification $certification)
    {
        return $certification->score >= $certification->event->min_score;
    }

    public function downloadFile(File $file, $storage)
    {
        return app(FileService::class)->download($file, $storage);
    }
}