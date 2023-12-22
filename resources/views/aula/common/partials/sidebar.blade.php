<div class="main-sidebar sidebar-style-2">
    <aside id="sidebar-wrapper">

        <div class="sidebar-brand">
            <a href="{{route('aula.index')}}">
                <img src="{{asset('assets/common/images/logo-red.png')}}" alt="">
            </a>
        </div>

        <div class="sidebar-brand hidden sidebar-brand-sm">
            <a href="{{route('aula.index')}}">
                <img src="{{asset('assets/common/images/logo-red.png')}}" alt="">
            </a>
        </div>

        <ul class="sidebar-menu">

            <li class="{{setActive('aula.index')}}">
                <a href="{{route('aula.index')}}" class="nav-link">
                    <i class="fa-solid fa-house"></i>
                    <span>Inicio</span>
                </a>
            </li>

            <li class="dropdown profile-dropdown {{setActive('aula.profile.*')}}" >
                <a href="#" class="nav-link has-dropdown">
                    <div class="img-avatar-box" id="sidebar-avatar-img">
                       @include('aula.common.partials.boxes._sidebar_profile_image')
                    </div>
                    <span>
                        <div class="name">
                            {{strtolower(Auth::user()->name)}}
                        </div>
                        <div class="email">
                            {{strtolower(Auth::user()->email)}}
                        </div>
                    </span>
                </a>
                <ul class="dropdown-menu">
                    <li>
                        <a href="{{route('aula.profile.index')}}" class="nav-link">
                            <i class="fa-solid fa-circle fa-2xs"></i>
                            Ver Perfil
                        </a>
                    </li>
                </ul>
            </li>

            @can(['denySecurity','denyCompany'])

            <li class="{{setActive('aula.signatures.*')}}">
                <a href="{{ route('aula.signatures.index') }}" class="nav-link">
                    <i class="fa-solid fa-signature"></i>
                    <span>Firma Digital</span>
                </a>
            </li>

            @endcan

            @can('denyCompany')

            <li class="{{setActive('aula.course.*')}}">
                <a href="{{route('aula.course.index')}}" class="nav-link">
                    <i class="fa-solid fa-book"></i>
                    <span>E-Learning</span>
                </a>
            </li>
            @endcan

            @can(['denySecurity','denyCompany'])

            <li class="{{ setActive('aula.specCourses.*') }}">
                <a href="{{ route('aula.specCourses.index') }}" class="nav-link">
                    <i class="fa-solid fa-graduation-cap"></i>
                    <span>Cursos de Especialización</span>
                </a>
            </li>

            @endcan

            @can(['denyInstructor', 'denySecurity','denyCompany'])

            <li class="{{setActive('aula.freecourse.*')}}">
                <a href="{{route('aula.freecourse.index')}}" class="nav-link">
                    <i class="fa-solid fa-laptop-file"></i>
                    <span>Cursos Libres</span>
                </a>
            </li>

            <li class="{{setActive('aula.myprogress.*')}}">
                <a class="nav-link" href="{{route('aula.myprogress.index')}}">
                    <i class="fa-solid fa-chart-pie"></i>
                    <span>Mi Progreso</span>
                </a>
            </li>

            <li class="{{setActive('aula.surveys.*')}}">
                <a href="{{route('aula.surveys.index')}}" class="nav-link">
                    <i class="fa-solid fa-square-poll-vertical"></i>
                    <span>Encuestas</span>
                    @if (validateSurveys())
                    <i class="fa-solid fa-circle-exclamation surveys-notify"></i>
                    @endif
                </a>
            </li>

            @endcan

            @can('allCompany')
                <li class="{{setActive('aula.company.kpisCompany.*')}}">
                    <a href="{{ route('aula.kpisCompany.index') }}" class="nav-link">
                        <i class="fa-solid fa-chart-simple"></i>
                        <span>KPIs de la empresa</span>
                    </a>
                </li>
                <li class="{{setActive('aula.company.docCompany.*')}}">
                    <a href="{{ route('aula.docCompany.index') }}" class="nav-link">
                        <i class="fa-regular fa-folder-open"></i>
                        <span>Documentos de la empresa</span>
                    </a>
                </li>
                <li class="{{setActive('aula.company.userCompany.*')}}">
                    <a href="{{ route('aula.userCompany.index') }}" class="nav-link">
                        <i class="fa-solid fa-users"></i>
                        <span>Usuarios de la empresa</span>
                    </a>
                </li>
               
                <li class="{{setActive('aula.company.upFilesCompany.*')}}">
                    <a href="{{ route('aula.upFilesCompany.index') }}" class="nav-link">
                        <i class="fa-solid fa-upload"></i>
                        <span>Archivos Subidos</span>
                    </a>
                </li>

            @endcan


            <li>
                <a href="#" class="nav-link" onclick="event.preventDefault();
                document.getElementById('logout-form').submit();">
                   <i class="fa-solid fa-right-from-bracket"></i>
                    <span>Cerrar sesión</span>
                </a>
                <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                    @csrf
                </form>
            </li>

        </ul>

    </aside>
</div>
