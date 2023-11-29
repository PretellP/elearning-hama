<?php

namespace App\Http\Controllers\Aula\Common;

use App\Http\Controllers\Controller;
use App\Models\{SpecCourse};
use App\Services\SpecCourseService;
use Auth;
use Illuminate\Http\Request;

class AulaSpecCourseController extends Controller
{
    private $specCourseService;

    public function __construct(SpecCourseService $service)
    {
        $this->specCourseService = $service;
    }

    public function index()
    {
        $user = Auth::user();

        $specCourses = $this->specCourseService->getSpecCourses();

        return view('aula.common.specCourses.index', compact(
            'specCourses'
        ));
    }

    public function show(SpecCourse $specCourse)
    {
        return view('aula.common.specCourses.show', compact(
            'specCourse'
        ));
    }
}
