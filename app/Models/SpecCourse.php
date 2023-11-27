<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SpecCourse extends Model
{
    use HasFactory;

    protected $table = 'spec_courses';
    protected $fillable = [
        'title',
        'subtitle',
        'date',
        'time_start',
        'time_end',
        'active',
    ];

    public function file()
    {
        return $this->morphOne(File::class, 'fileable');
    }

    public function files()
    {
        return $this->morphMany(File::class, 'fileable');
    }

    public function modules()
    {
        return $this->hasMany(CourseModule::class, 'spec_course_id');
    }

    public function events()
    {
        return $this->hasManyThrough(Event::class, CourseModule::class, 'spec_course_id', 'course_module_id');
    }

    public function loadImage()
    {
        return $this->load(['file' => fn ($q) => $q->where('file_type', 'imagenes')]);
    }

    public function loadCounts()
    {
        return $this->loadCount(['modules', 'events']);
    }

    public function getModulesLastOrder()
    {
        $this->loadMax('modules', 'order');

        return $this->modules_max_order ?? 0;
    }

    public function loadRelationships()
    {
        return $this->load(
                [
                    'modules' => fn ($q) => $q->withCount('events')
                                            ->orderBy('order', 'ASC'),
                    'file' => fn ($q2) => $q2->where('file_type', 'imagenes'),
                ]
            )
            ->loadCount(['modules', 'events']);
    }
}
