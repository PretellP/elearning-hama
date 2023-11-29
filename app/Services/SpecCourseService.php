<?php

namespace App\Services;

use App\Models\{SpecCourse};
use Auth;
use Datatables;
use DB;
use Exception;
use Illuminate\Support\Carbon;

class SpecCourseService
{
    public function getDataTable()
    {
        $query = SpecCourse::withCount('modules');

        $allSpecCourses = DataTables::of($query)
            ->editColumn('title', function ($specCourse) {
                return '<a href="' . route('admin.specCourses.show', $specCourse) . '">' . $specCourse->title . '</a>';
            })
            ->editColumn('subtitle', function ($specCourse) {
                return $specCourse->subtitle ?? '-';
            })
            ->editColumn('time_start', function ($specCourse) {
                return getTimeforHummans($specCourse->time_start);
            })
            ->editColumn('time_end', function ($specCourse) {
                return  getTimeforHummans($specCourse->time_end);
            })
            ->editColumn('active', function ($specCourse) {
                return getStatusButton($specCourse->active);
            })
            ->addColumn('action', function ($specCourse) {
                $btn = '<button data-toggle="modal" data-id="' .
                    $specCourse->id . '"
                    data-url="' . route('admin.specCourses.update', $specCourse) . '"
                    data-send="' . route('admin.specCourses.edit', $specCourse) . '"
                    data-place="index"
                    data-original-title="edit" class="me-3 edit btn btn-warning btn-sm
                    editSpecCourse"><i class="fa-solid fa-pen-to-square"></i></button>';

                if ($specCourse->modules_count == 0) {
                    $btn .= '<a href="javascript:void(0)" data-id="' .
                        $specCourse->id . '" data-original-title="delete"
                        data-url="' . route('admin.specCourses.destroy', $specCourse) . '"
                        data-place="index"
                        class="ms-3 edit btn btn-danger btn-sm
                        deleteSpecCourse"><i class="fa-solid fa-trash-can"></i></a>';
                }

                return $btn;
            })
            ->rawColumns(['title', 'active', 'action'])
            ->make(true);

        return $allSpecCourses;
    }

    public function store($request, $storage)
    {
        $data = normalizeInputStatus($request->validated());
        $data['time_start'] = Carbon::createFromFormat('g:i A', $data['time_start'])->format('H:i:s');
        $data['time_end'] = Carbon::createFromFormat('g:i A', $data['time_end'])->format('H:i:s');

        if ($specCourse = SpecCourse::create($data)) {

            if ($request->hasFile('image')) {

                $file_type = 'imagenes';
                $category = 'cursosespec';
                $belongsTo = 'cursosespec';
                $relation = 'one_one';

                $file = $request->file('image');

                return app(FileService::class)->store(
                    $specCourse,
                    $file_type,
                    $category,
                    $file,
                    $storage,
                    $belongsTo,
                    $relation
                );
            }

            return $specCourse;
        }

        throw new Exception(config('parameters.exception_message'));
    }

    public function update($request, SpecCourse $specCourse, $storage)
    {
        $data = normalizeInputStatus($request->validated());
        $data['time_start'] = Carbon::createFromFormat('g:i A', $data['time_start'])->format('H:i:s');
        $data['time_end'] = Carbon::createFromFormat('g:i A', $data['time_end'])->format('H:i:s');

        if ($specCourse->update($data)) {

            if ($request->hasFile('image')) {

                app(FileService::class)->destroy($specCourse->file, $storage);

                $file_type = 'imagenes';
                $category = 'cursosespec';
                $belongsTo = 'cursosespec';
                $relation = 'one_one';

                $file = $request->file('image');

                return app(FileService::class)->store(
                    $specCourse,
                    $file_type,
                    $category,
                    $file,
                    $storage,
                    $belongsTo,
                    $relation
                );
            }

            return true;
        }

        throw new Exception(config('parameters.exception_message'));
    }

    public function destroy(SpecCourse $specCourse, $storage)
    {
        if ($specCourse->file) {
            app(FileService::class)->destroy($specCourse->file, $storage);
        }

        return $specCourse->delete();
    }


    // ------------- AULA ------------------

    public function getSpecCourses()
    {
        $user = Auth::user();

        if ($user->role == 'instructor') {

            $specCourses = SpecCourse::whereHas('events', function ($q) use ($user) {
                $q->where('user_id', $user->id)
                    ->where('events.active', 'S');
            })
                ->with([
                    'events' => fn ($q) => $q->with([
                        'user:id,name,paternal',
                    ])
                        ->select('events.id', 'events.course_module_id', 'events.user_id')
                        ->where('events.active', 'S')
                        ->whereHas('courseModule', function ($q2) {
                            $q2->where('active', 'S');
                        }),
                    'file' => fn ($q) => $q->where('file_type', 'imagenes'),
                ])
                ->withCount(['specCourseCertifications as participants_count' => function ($q) use ($user) {
                    $q->select(DB::raw('count(distinct(certifications.user_id))'))
                        ->where('events.user_id', $user->id)
                        ->where('events.active', 'S');
                }])
                ->where('active', 'S')
                ->withMax('events', 'date')
                ->get()
                ->sortByDesc('events_max_date');

        } elseif ($user->role == 'participants') {
        }

        return $specCourses ?? collect();
    }
}
