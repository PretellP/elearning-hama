@extends('aula.common.layouts.masterpage')

@section('content')


<div class="content global-container">

    <div class="card page-title-container">
        <div class="card-header">
            <div class="total-width-container">
                <h4>
                    <a href="{{ route('aula.specCourses.index') }}">
                        <i class="fa-solid fa-circle-chevron-left"></i> Cursos de especialización
                    </a>
                    <span> / {{$specCourse->title}} </span> / MENÚ
                </h4>
            </div>
        </div>
    </div>

    <div class="card-body body-global-container card z-index-2 principal-container">


        <div class="row navigation-boxes-container">


            <a href="{{ route('aula.specCourses.onlinelesson.index', $specCourse) }}" class="link-box-navigation-course">
                <div class="navigation-box online-lesson card">
                    <div class="img-container">
                        <img src="{{asset('assets/aula/img/courses/online-lesson.png')}}" alt="">
                    </div>
                    <div class="text-nav-container">
                        <span>
                            Clase Virtual
                        </span>
                        <span class="bg-nav-course-box"></span>
                    </div>
                </div>
            </a>

            @can('denyInstructor')

            <a href="{{ route('aula.specCourses.evaluations.index', $specCourse) }}" class="link-box-navigation-course">
                <div class="navigation-box evaluation card">
                    <div class="img-container">
                        <img src="{{asset('assets/aula/img/courses/quiz.png')}}" alt="">
                    </div>
                    <div class="text-nav-container">
                        <span>
                            Evaluaciones
                        </span>
                        <span class="bg-nav-course-box"></span>
                    </div>
                </div>
            </a>

            @endcan

            @can('allowInstructor')

            <a href="{{ route('aula.specCourses.modules.index', $specCourse) }}" class="link-box-navigation-course">
                <div class="navigation-box evaluation card">
                    <div class="img-container">
                        <img src="{{asset('assets/aula/img/courses/events.png')}}" alt="">
                    </div>
                    <div class="text-nav-container">
                        <span>
                            Módulos
                        </span>
                        <span class="bg-nav-course-box"></span>
                    </div>
                </div>
            </a>

            @endcan

        </div>


    </div>

</div>

@endsection
