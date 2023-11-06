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
                    <span> / {{$course->description}} </span> /
                    <a href="{{route('aula.course.participant.show', $course)}}">
                        MENÚ
                    </a> /
                    CONTENIDO
                </h4>
            </div>
        </div>
    </div>

    <div class="card-body body-global-container card z-index-2 principal-container">

        <div class="mb-2 folder-btn-back">
            <a class="btn-folder-home" href="{{route('aula.course.folder.index', $course)}}">
                <i class="fa-solid fa-folder-open"></i>
            </a>
            @foreach ($parentFoldersCollection as $parent_folder)
            <i class="fa-solid fa-chevron-right"></i>
            <a href="{{route('aula.course.folder.show', [$course, $parent_folder])}}">
                {{$parent_folder->name}}
            </a>
            @endforeach
            <i class="fa-solid fa-chevron-right"></i>
            <a href="{{route('aula.course.folder.show', [$course, $folder])}}"> {{$folder->name}} </a>
        </div>

        <hr>

        <div class="subfolders-box mb-4 folders-container">

            @foreach ($folder->subfolders as $subfolder)

            <a href="{{route('aula.course.folder.show', [$course, $subfolder])}}" class="folder-link">
                <div class="folder-block subfolder">
                    <img class="card-img-top folder-img" src="{{asset('assets/common/images/subfolder.png')}}">
                    <div class="card-body">
                        <p class="card-text">{{$subfolder->name}}</p>
                    </div>
                </div>
            </a>
    
            @endforeach

        </div>

        <hr>

        <div class="files-container">

            @forelse ($folder->files as $file)

            <div class="file-box">
                <a href="{{route('aula.file.download', $file)}}">

                    <img src="{{asset('assets/common/images/file-types/'.getFileExtension($file).'.svg')}}" alt="">

                    <div class="filename">
                        {{basename($file->file_url)}}
                    </div>

                </a>
            </div>

            @empty

            <h4 class="text-center">
                Aún no hay Archivos
                <img src="{{asset('assets/common/images/emptyfolder.png')}}" alt=""> 
            </h4>

            @endforelse


        </div>

    </div>




</div>


@endsection