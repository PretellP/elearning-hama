<?php

namespace App\Http\Controllers\Aula\Participant;

use App\Http\Controllers\Controller;
use App\Services\{CourseService, FreeCourseService, SpecCourseService};
use Auth;

class AulaMyProgressController extends Controller
{
    private $freeCourseService;
    private $courseService;
    private $specCourseService;

    public function __construct(FreeCourseService $fcService, CourseService $cService, SpecCourseService $scService)
    {
        $this->freeCourseService = $fcService;
        $this->courseService = $cService;
        $this->specCourseService = $scService;
    }

    public function index()
    {
        $user = Auth::user();

        $courses = $this->courseService->getCoursesBasedOnRole($user);

        $freeCourses = $this->freeCourseService->withFreeCourseRelationshipsQuery()
            ->where('active', 'S')
            ->with('courseChapters.progressUsers', function ($q) use ($user) {
                $q->wherePivot('user_id', $user->id);
            })
            ->whereHas('courseChapters.progressUsers', function ($query) use ($user) {
                $query->where('user_course_progress.user_id', $user->id);
            })
            ->get();

        $specCourses = $this->specCourseService->getSpecCourses();

        return view('aula.viewParticipant.myprogress.index', compact(
            'courses',
            'freeCourses',
            'specCourses'
        ));
    }
}
