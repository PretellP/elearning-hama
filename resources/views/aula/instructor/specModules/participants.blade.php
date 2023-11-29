@extends('aula.common.layouts.masterpage')

@section('content')


<div class="content global-container">

    <div class="card page-title-container">
        <div class="card-header">
            <div class="total-width-container">
                <h4>
                    <a href="{{ route('aula.specCourses.index') }}">
                        <i class="fa-solid fa-circle-chevron-left"></i> Cursos
                    </a>
                    <span> / {{$event->specCourse->title}} </span> /
                    <a href="{{ route('aula.specCourses.show', ["specCourse" => $event->specCourse]) }}">
                        MENÚ
                    </a>
                </h4>
            </div>
        </div>
    </div>

    <div class="card page-title-container">
        <div class="card-header">
            <div class="total-width-container">
                <h4>
                    <a href="{{ route('aula.specCourses.modules.index', ["specCourse" => $event->specCourse]) }}">
                        MÓDULOS
                    </a>
                    <span> / {{ $event->courseModule->title }} / </span>
                    <a href="{{ route('aula.specCourses.modules.show', ["module" => $event->courseModule]) }}">EVENTOS</a>
                    <span>
                        / {{ $event->description }}
                    </span>
                </h4>
            </div>
        </div>
    </div>


    <div class="card-body body-global-container card z-index-2 principal-container">

        <div class="course-container">

            <table id="participants-table" class="table table-hover" data-url="">
                <thead>
                    <tr>
                        <th>Cod. Certificado</th>
                        <th>DNI</th>
                        <th>Nombre</th>
                        <th>Apellido Paterno</th>
                        <th>Apellido Materno</th>
                        <th>Estado</th>
                        <th>Asistencia</th>
                        <th>Perfil</th>
                    </tr>
                </thead>
            </table>

        </div>

    </div>

</div>

@endsection

@section('extra-script')

<script type="module" src="{{ asset('assets/aula/js/pages/spec_modules.js') }}"></script>

@endsection
