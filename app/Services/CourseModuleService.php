<?php

namespace App\Services;

use App\Models\{CourseModule, SectionChapter, SpecCourse};
use Exception;

class CourseModuleService
{
    public function store($request, SpecCourse $specCourse)
    {
        $data = normalizeInputStatus($request->validated());

        $lastOrder = $specCourse->getModulesLastOrder();

        if ($courseModule = $specCourse->modules()->create($data + [
            "order" => $lastOrder + 1,
        ])) {
            return $courseModule;
        }

        throw new Exception(config('parameters.exception_message'));
    }

    public function update($request, CourseModule $module)
    {
        $data = normalizeInputStatus($request->validated());

        if ($this->updateOrder($data['order'], $module)) {
            return $module->update($data);
        }

        throw new Exception(config('parameters.exception_message'));
    }

    public function updateOrder($order, CourseModule $module)
    {
        if ($module->order != $order) {

            if(CourseModule::where('spec_course_id', $module->spec_course_id)
                ->where('order', $order)
                ->update([
                    "order" => $module->order,
            ])) {
                return $module->update([
                    "order" => $order
                ]);
            }
            else {
                return false;
            }
        }

        return true;
    }

    public function destroy(CourseModule $module, SpecCourse $specCourse)
    {
        if ($module->delete()) {
            $this->updateAllOrders($specCourse);
            return true;
        }

        throw new Exception(config('parameters.exception_message'));
    }

    private function updateAllOrders(SpecCourse $specCourse)
    {
        $modules = $specCourse->modules()->orderBy('order', 'ASC')->get();

        $order = 1;
        foreach ($modules as $module) {
            $module->update([
                "order" => $order,
            ]);
            $order++;
        }
    }
}