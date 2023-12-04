<?php

namespace App\Services;

use App\Models\{Course, SpecCourse};
use Auth;
use Exception;

class EvaluationService
{
    public function getCertificationsFromCourse(Course $course)
    {
        $user = Auth::user();

        $certifications = $user->certifications()
            ->select(
                'id',
                'user_id',
                'event_id',
                'evaluation_type',
                'status',
                'score',
                'assist_user',
                'evaluation_time'
            )
            ->with('evaluations:id,certification_id,points')
            ->whereHas('event', function ($q) {
                $q->doesntHave('courseModule');
            })
            ->with([
                'event' => fn ($query) => $query
                    ->select('id', 'exam_id', 'type', 'date', 'description', 'user_id', 'min_score', 'questions_qty')
                    ->with('user:id,name,paternal,maternal')
                    ->with([
                        'exam' => fn ($query2) => $query2
                            ->select('id', 'course_id', 'owner_company_id', 'exam_time')
                            ->with('ownerCompany:id,name')
                            ->withCount('questions')
                            ->withAvg('questions', 'points')
                    ])
                    ->doesntHave('courseModule')
            ])
            ->get()
            ->filter(function ($certification) use ($course) {
                if ($certification->event->exam->course_id == $course->id && $certification->evaluation_type == 'certification')
                    return $certification;
            })->sortByDesc('id');

        return $certifications;
    }

    public function getModulesFromSpecCourse(SpecCourse $specCourse)
    {
        $user = Auth::user();

        $modules = $user->certifications()
            ->select(
                'id',
                'user_id',
                'event_id',
                'evaluation_type',
                'status',
                'score',
                'assist_user',
                'evaluation_time'
            )
            ->with('evaluations:id,certification_id,points')
            ->where('evaluation_type', 'certification')
            ->whereHas('event', function ($q) {
                $q->has('courseModule');
            })
            ->with([
                'event' => fn ($query) => $query
                    ->select('id', 'exam_id', 'type', 'date', 'description', 'user_id', 'min_score', 'questions_qty', 'course_module_id')
                    ->with('user:id,name,paternal,maternal')
                    ->with([
                        'exam' => fn ($query2) => $query2
                            ->select('id', 'course_id', 'owner_company_id', 'exam_time')
                            ->with('ownerCompany:id,name')
                            ->withCount('questions')
                            ->withAvg('questions', 'points'),

                        'courseModule'
                    ])
                    ->has('courseModule')
            ])
            ->whereHas('event.specCourse', function ($q2) use ($specCourse) {
                $q2->where('spec_courses.id', $specCourse->id);
            })
            ->get()
            ->groupBy('event.courseModule.id');

        return $modules;
    }
}
