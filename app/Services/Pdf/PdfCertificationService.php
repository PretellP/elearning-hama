<?php

namespace App\Services\Pdf;

use App\Models\{Certification, File};
use App\Services\{FileService};
use Barryvdh\DomPDF\Facade\Pdf;
use Intervention\Image\Facades\Image;

class PdfCertificationService
{
    public function exportExamPdf(Certification $certification)
    {
        $pdf = Pdf::loadView('admin.common.pdf.certification_exam', compact(
            'certification'
        ));

        return $pdf->stream('certificado-' . $certification->id . '.pdf');
    }

    public function exportCertificationPdf(Certification $certification)
    {
        if ($this->isEnableExport($certification)) {

            $pdf = Pdf::loadView('pdf.certification', compact(
                'certification'
            ))->setPaper('letter', 'portrait');

            return $pdf->stream('certificado_' . $certification->user->id . '_' . $certification->event->id . '.pdf');
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

            return $pdf->stream('compromisos_' . $certification->user->id . '_' . $certification->event->id . '_' . $sufix . '.pdf');
        }

        abort(403, 'Acceso no autorizado');
    }

    public function exportExtCertificationPdf(Certification $certification)
    {
        if ($this->isEnableExport($certification)) {

            $pdf = Pdf::loadView('pdf.external_certification', compact(
                'certification',
            ))->setPaper(array(0, 0, 580.00, 800.00), 'landscape');

            $pdf_name = 'certificados_' . $certification->user->dni . '_' . $certification->event->id . '.pdf';

            return $pdf->stream($pdf_name);
        }

        abort(403, 'Acceso no autorizado');
    }

    public function exportWebCertificationPdf(Certification $certification)
    {
        if ($this->isEnableExport($certification)) {

            $original_image = $certification->event->user->file->file_url;

            $mask = Image::make($original_image)
                ->greyscale()
                ->contrast(100)
                ->trim('top-left', null, 40)
                ->invert();

            $new_image = Image::canvas($mask->width(), $mask->height(), '#000000')
                ->mask($mask)
                ->encode('png', 100);

            $pdf = PDF::loadView('pdf.webinar_certification', compact(
                'certification',
                'new_image'
            ))->setPaper('a4', 'landscape');

            $pdf_name = 'certificado_' . $certification->user->dni . '_' . $certification->event->id . '.pdf';

            return $pdf->stream($pdf_name);
            // return $pdf->download($pdf_name);
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
