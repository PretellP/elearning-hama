@extends('aula.common.layouts.masterpage')

@section('content')


<div class="content global-container">

    <div class="card page-title-container">
        <div class="card-header">
            <div class="total-width-container">
                <h4>E-LEARNING</h4>
            </div>
        </div>
    </div>

    <div class="card-body body-global-container card z-index-2 principal-container">

        <div class="info-count-courses">
            Tienes <span> {{count($courses)}} </span>  cursos en total
        </div>

        <div class="courses-cards-container">

            @forelse($courses as $course)
            @php
            $instructors = getInstructorsBasedOnUserAndCourse($course);
            @endphp

            <div class="card course-card">
                @if ($course->events_max_date == getCurrentDate())
                <div class="disclaimer-current-event">
                    <span class="text-white font-italic">
                        <i class="fa-regular fa-calendar-check me-2"></i>
                        Tiene eventos programados para hoy
                    </span>
                </div>
                @endif
                
                <div class="course-img-container">
                    <img class="card-img-top course-img" src="{{verifyImage($course->file)}}"
                        alt="Card image cap">
                </div>

                <div class="card-body">

                    <div class="start-button-container">
                            <a href="{{route('aula.course.show', $course)}}">
                                Comenzar &nbsp;
                                <i class="fa-solid fa-chevron-right"></i>
                            </a>
                    </div>

                    <div class="course-title-box">
                        {{$course->description}}
                    </div>

                    <div class="instructor-name-box">
                        <div class="instructor-icon">
                            <i class="fa-solid fa-user-tie"></i>
                        </div>
                        <div class="instructor-name">
                            @foreach ($instructors as $instructor)
                            <div>
                                {{strtolower($instructor->name)}}
                                {{strtolower($instructor->paternal)}}
                            </div>
                            @endforeach
                        </div>
                    </div>

                    <div class="course-info-box">
                        <div class="hours-box">
                            <i class="fa-regular fa-clock"></i> 
                            Duración: {{$course->hours}} hrs.
                        </div>
                        <div class="students-box">
                            <i class="fa-solid fa-graduation-cap"></i>
                            {{getNStudentsFromCourse($course)}} Estudiantes
                        </div>
                    </div>

                </div>

            </div>

            @empty

            <h4 class="text-center empty-records-message"> No hay Cursos que mostrar aún </h4>

            @endforelse
        </div>


    </div>

</div>


@endsection
