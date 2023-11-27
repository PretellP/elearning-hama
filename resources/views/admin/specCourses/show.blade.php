@extends('admin.common.layouts.masterpage')

@section('content')

<div class="row content">

    <div class="main-container-page">

        <div class="card page-title-container">
            <div class="card-header">
                <div class="total-width-container">
                    <h4>CURSOS DE ESPECIALIZACIÓN</h4>
                </div>
            </div>
        </div>

        <div class="card-body card z-index-2 principal-container">

            <h5 class="title-header-show">
                <i class="fa-solid fa-chevron-left fa-xs"></i>
                <a href="{{ route('admin.specCourses.index') }}">Inicio</a>
                /
                <span id="specCourse-description-text-principal" class="to-capitalize">
                    {{ mb_strtolower($specCourse->title, 'UTF-8') }}
                </span>
            </h5>

            <div id="specCourse-box-container" class="info-element-box mt-4 mb-4">

                @include('admin.specCourses.partials.components._specCourse_box')

            </div>

            <div class="principal-splitted-container">

                <div class="principal-inner-container left">

                    <div class="inner-title-container">
                        <div id="btn-drowdown-sections-list" class="btn-dropdown-container show">
                            <h5 class="title-header-show"> Módulos </h5>
                            <div class="btn-row-container">
                                <div>
                                    <span class="text-dropdown-cont">
                                        Ocultar
                                    </span>
                                    <i class="fa-solid fa-chevron-down ms-2"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="mt-4 action-btn-dropdown-container outside show top-container-inner-box">
                        <button class="btn btn-primary" id="btn-register-module-modal" data-toggle="modal"
                            data-target="#registerModuleModal">
                            <i class="fa-solid fa-plus"></i> &nbsp; Añadir Módulo
                        </button>
                    </div>

                    <div id="modules-list-container"
                        class="sections-list-container related-dropdown-container mt-0 show">
                        
                        @include('admin.specCourses.partials.components._modules_list')
                    </div>

                </div>

                <div class="principal-inner-container right">

                    <div class="inner-title-container">
                        <div id="btn-drowdown-chapters-list" class="btn-dropdown-container vertical show">
                            <h5 class="title-header-show">
                                Eventos
                                <span id="top-event-table-title-info">

                                </span>
                            </h5>
                            <div class="btn-row-container">
                                <div>
                                    <span class="text-dropdown-cont">
                                        Ocultar
                                    </span>
                                    <i class="fa-solid fa-chevron-down ms-2"></i>
                                </div>
                            </div>
                        </div>

                        <div id="events-list-container" class="related-dropdown-container table-container show">

                            @include('admin.specCourses.partials.components._events_list_empty')

                        </div>
                    </div>

                </div>


            </div>

        </div>

    </div>

</div>

@endsection

@section('modals')

@include('admin.specCourses.partials.modals._edit', ['place' => 'show'])

@include('admin.specCourses.partials.modals._register_module')
@include('admin.specCourses.partials.modals._edit_module')

@include('admin.specCourses.partials.modals._register_event', ['place' => 'index'])
@include('admin.specCourses.partials.modals._edit_event', ['place' => 'index'])

@endsection

@section('extra-script')
<script type="module" src="{{ asset('assets/admin/js/spec-courses.js') }}"></script>
@endsection