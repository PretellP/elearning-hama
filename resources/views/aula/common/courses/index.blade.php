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
                <div class="course-img-container">
                    <img class="card-img-top course-img" src="{{verifyImage($course->file)}}"
                        alt="Card image cap">
                </div>

                <div class="card-body">

                    <div class="start-button-container">
                        @if(Auth::user()->role == 'participants')
                            <a href="{{route('aula.course.participant.show', $course)}}">
                        @elseif(Auth::user()->role == 'instructor')
                            <a href="{{route('aula.course.instructor.show', $course)}}">
                        @endif
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
