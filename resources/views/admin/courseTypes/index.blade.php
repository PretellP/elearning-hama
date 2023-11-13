@extends('admin.common.layouts.masterpage')

@section('content')

<div class="row content">

    <div class="main-container-page">
        <div class="card page-title-container">
            <div class="card-header">
                <div class="total-width-container">
                    <h4>TIPOS DE CURSO</h4>
                </div>
            </div>
        </div>

        <div class="card-body card z-index-2 principal-container">

            <div class="mb-4">
                <button class="btn btn-primary" data-toggle="modal" data-target="#RegisterCoursetypeModal">
                    <i class="fa-solid fa-square-plus"></i>  &nbsp; Registrar
                </button>
            </div>

            <table id="coursetypes-table" class="table table-hover" data-url="{{ route('admin.coursetypes.index') }}">
                <thead>
                    <tr>
                        <th>N°</th>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Fecha de creación</th>
                        <th>Fecha de actualización</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
            </table>
            
        </div>
    </div>
</div>

@endsection

@section('modals')
@include('admin.courseTypes.partials.modals._register')
@include('admin.courseTypes.partials.modals._edit')
@endsection