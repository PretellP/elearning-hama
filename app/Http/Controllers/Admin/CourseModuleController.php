<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\CourseModule\{StoreCourseModuleRequest, UpdateCourseModuleRequest};
use App\Models\{CourseModule, SpecCourse};
use App\Services\CourseModuleService;
use Exception;
use Illuminate\Http\Request;

class CourseModuleController extends Controller
{
    private $courseModuleService;

    public function __construct(CourseModuleService $service)
    {
        $this->courseModuleService = $service;
    }

    public function store(StoreCourseModuleRequest $request, SpecCourse $specCourse)
    {
        $htmlSecCourse = null;
        $htmlModules = null;

        try{
            $courseModule = $this->courseModuleService->store($request, $specCourse);
            $success = $courseModule ? true : false;
        } catch (Exception $e) {
            $success = false;
        }

        $message = getMessageFromSuccess($success, 'stored');

        if($success)
        {
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
            "htmlSecCourse" => $htmlSecCourse,
            "htmlModules" => $htmlModules
        ]);
    }

    public function edit(CourseModule $module)
    {
        $modules = CourseModule::where('spec_course_id', $module->spec_course_id)
                    ->orderBy('order', 'ASC')
                    ->get(['id', 'order']);

        return response()->json([
            "module" => $module,
            "modules" => $modules
        ]);
    }

    public function update(UpdateCourseModuleRequest $request, CourseModule $module)
    {
        $htmlModules = null;

        try {
            $success = $this->courseModuleService->update($request, $module);
        } catch (Exception $e) {
            $success = false;
        }

        $message = getMessageFromSuccess($success, 'updated');


        if ($success) {
            $specCourse = $module->specCourse;
            $specCourse->loadRelationships();
            $moduleActive = getActiveSection($request['id']);
            
            $htmlModules = view('admin.specCourses.partials.components._modules_list', compact(
                'specCourse',
                'moduleActive'
            ))->render();
        }

        return response()->json([
            "success" => $success,
            "message" => $message,
            "htmlModules" => $htmlModules,
            "active" => $moduleActive,
            "id" => $module->id,
            "title" => $module->title
        ]);
    }

    public function updateOrder(Request $request, CourseModule $module)
    {
        $specCourse = $module->specCourse;
        
        $order = $request['value'];

        $html = null;

        try {
            $success = $this->courseModuleService->updateOrder($order, $module);
        } catch (Exception $e) {
            $success = false;
        }

        $message = getMessageFromSuccess($success, 'updated');

        if ($success) {
            $specCourse->loadRelationships();
            $moduleActive = getActiveSection($request['id']);
            $html = view('admin.specCourses.partials.components._modules_list', compact(
                'specCourse',
                'moduleActive'
            ))->render();
        }

        return response()->json([
            "success" => $success,
            "message" => $message,
            "html" => $html
        ]);
    }

    public function destroy(Request $request, CourseModule $module)
    {
        $specCourse = $module->specCourse;

        try{
            $success = $this->courseModuleService->destroy($module, $specCourse);
        } catch (Exception $e) {
            $success = false;
        }
    
        $message = getMessageFromSuccess($success, 'deleted');

        if ($success) {

            $specCourse->loadRelationships();
            $moduleActive = getActiveSection($request['id']);

            $htmlSecCourse = view('admin.specCourses.partials.components._specCourse_box', compact('specCourse'))->render();
            $htmlModules = view('admin.specCourses.partials.components._modules_list', compact(
                'specCourse',
                'moduleActive'
            ))->render();
        }

        list($is_active, $htmlEvents) = $request['active'] == 'active' ?
                                        [1, view('admin.specCourses.partials.components._events_list_empty')->render()] 
                                        : 
                                        [0, null];

        return response()->json([
            "success" => $success,
            "message" => $message,
            "htmlSecCourse" => $htmlSecCourse,
            "htmlModules" => $htmlModules,
            "is_active" => $is_active,
            "htmlEvents" => $htmlEvents
        ]);
    }
}
