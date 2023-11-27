<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\SpecCourse\SpecCourseRequest;
use App\Models\SpecCourse;
use App\Services\SpecCourseService;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;

class SpecCourseController extends Controller
{
    private $specCourseService;

    public function __construct(SpecCourseService $service)
    {
        $this->specCourseService = $service;
    }

    public function index(Request $request)
    {
        if ($request->ajax()) {
            return $this->specCourseService->getDataTable();
        }

        return view('admin.specCourses.index');
    }

    public function show(SpecCourse $specCourse)
    {
        $specCourse->loadRelationships();

        $moduleActive = '';

        return view('admin.specCourses.show', compact(
            'specCourse',
            'moduleActive'
        ));
    }

    public function store(SpecCourseRequest $request)
    {   
        $storage = env('FILESYSTEM_DRIVER');

        try {
            $specCourse = $this->specCourseService->store($request, $storage);
            $success = $specCourse ? true : false;
        } catch (Exception $e) {
            $success = false;
        }

        $success = true;

        $message = getMessageFromSuccess($success, 'stored');

        $route = $request['verifybtn'] == 'show' ? route('admin.specCourses.show', $specCourse) : null;
        $show = $route ? true : false;

        return response()->json([
            "success" => $success,
            "message" => $message,
            "route" => $route,
            "show" => $show,
        ]);
    }   

    public function edit(SpecCourse $specCourse)
    {
        $specCourse->loadImage();
        $specCourse->time_start = getTimeforHummans($specCourse->time_start);
        $specCourse->time_end = getTimeforHummans($specCourse->time_end);
        $url_image = verifyImage($specCourse->file);

        return response()->json([
            "specCourse" => $specCourse,
            "url_image" => $url_image
        ]);
    }

    public function update(SpecCourseRequest $request, SpecCourse $specCourse)
    {
        $specCourse->loadImage();
        $storage = env('FILESYSTEM_DRIVER');

        $html = null;
        $show = false;

        try{
            $success = $this->specCourseService->update($request, $specCourse, $storage);
        }catch (Exception $e) {
            $success = false;
        }

        $message = getMessageFromSuccess($success, 'updated');

        if ($request['place'] == 'show') {
            $specCourse->loadCounts();
            $specCourse->loadImage();
            $html = view('admin.specCourses.partials.components._specCourse_box', compact('specCourse'))->render();
            $show = true;
        } 

        return response()->json([
            "success" => $success,
            'message' => $message,
            'show' => $show,
            'html' => $html,
            'title' => mb_strtolower($specCourse->title, 'UTF-8'),
        ]);
    }

    public function destroy(Request $request, SpecCourse $specCourse)
    {
        $specCourse->loadImage();
        $storage = env('FILESYSTEM_DRIVER');

        $show = false;
        $route = null;

        try{
            $success = $this->specCourseService->destroy($specCourse, $storage);
        }catch (Exception $e) {
            $success = false;
        }

        $message = getMessageFromSuccess($success, 'deleted');

        if ($request['place'] == 'show') {
            $route = route('admin.specCourses.index');
            $show = true;
        }

        return response()->json([
            'success' => $success,
            'message' => $message,
            'route' => $route,
            'show' => $show,
        ]);
    }
}
