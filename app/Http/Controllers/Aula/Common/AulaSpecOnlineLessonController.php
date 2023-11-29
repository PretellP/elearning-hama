<?php

namespace App\Http\Controllers\Aula\Common;

use App\Http\Controllers\Controller;
use App\Models\{Event, SpecCourse};
use Auth;
use Illuminate\Http\Request;

class AulaSpecOnlineLessonController extends Controller
{
    public function index(SpecCourse $specCourse)
    {
        $user = Auth::user();

        $query = $specCourse->events()->where('events.active', 'S')
                                    ->whereHas('specCourse', function ($q) {
                                        $q->where('spec_courses.active', 'S');
                                    })
                                    ->with('user')
                                    ->where('date', getCurrentDate());

        if ($user->role == 'instructor') {
            $query->where('user_id', $user->id);
        }
        else {
            $query->whereHas('certifications', function ($q2) use ($user) {
                $q2->where('certifications.user_id', $user->id);
            });
        }

        $events = $query->get();

        return view('aula.common.specCourses.onlinelessons.index', compact(
            'specCourse',
            'events'
        ));
    }

    public function show(Event $event)
    {
        $room = $event->room;
        $specCourse = $event->specCourse;

        return view('aula.common.specCourses.onlinelessons.show', compact(
            'room',
            'specCourse'
        ));
    }
}
