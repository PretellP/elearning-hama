<?php

namespace App\Http\Controllers\Aula\Participant;

use App\Http\Controllers\Controller;
use App\Models\{Certification, Course};

class AulaEvaluationController extends Controller
{

    public function index(Course $course)
    {
        $certifications = getCertificationsFromCourse($course);

        return view('aula.viewParticipant.courses.evaluations.index', [
            'certifications'=> $certifications,
            'course' => $course
        ]);
    }



    public function getAjaxCertification(Certification $certification)
    {
        $event = $certification->event->load('exam');
        $exam = $event->exam;
        $n_questions = $event->questions_qty;

        return response()->json([
            'total_time' => $exam->exam_time,
            'question_time' => $exam->exam_time / $n_questions
        ]);
    }

}
