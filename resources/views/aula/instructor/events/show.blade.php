@extends('aula.common.layouts.masterpage')

@section('content')


<div class="content global-container">

    <div class="card page-title-container">
        <div class="card-header">
            <div class="total-width-container">
                <h4>
                    <a href="{{route('aula.course.index')}}">
                        <i class="fa-solid fa-circle-chevron-left"></i> Cursos
                    </a>
                    <span> / {{$event->course->description}} </span> /
                    <a href="{{ route('aula.course.show', ["course" => $event->course]) }}">
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
                    <a href="{{ route('aula.course.events.instructor.index', ["course" => $event->course]) }}">
                        Eventos
                    </a>
                    <span> / {{ $event->description }} </span>
                </h4>
            </div>
        </div>
    </div>


    <div class="card-body body-global-container card z-index-2 principal-container">

        <div class="course-container">

            <table id="participants-table" class="table table-hover" data-url="{{ route('aula.course.events.instructor.show', $event) }}">
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

<script type="module" src="{{ asset('assets/aula/js/pages/events.js') }}"></script>

@endsection
