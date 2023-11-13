<!-- VIDEO.JS ---->

<script src="https://vjs.zencdn.net/8.3.0/video.min.js"></script>

<!-- General JS Scripts -->

{{-- <script src="https://code.jquery.com/jquery-3.7.0.min.js"
    integrity="sha256-2Pmvv0kuTBOenSvLm6bvfBSSHrUJ+3A7x6P5Ebd07/g=" crossorigin="anonymous"></script> --}}

<script src="{{asset('assets/common/modules/jquery.min.js')}}"></script>
<script src="{{asset('assets/common/js/jquery.validator.js')}}"></script>

<!----   Jquery UI ---->

<script src="{{ asset('assets/common/js/jquery-ui.min.js') }}"></script>



<!----   Jquery UI TOUCH PUNCH ---->

<script src="{{ asset('assets/common/js/jquery.ui.touch-punch.min.js') }}"></script>


<script src="{{asset('assets/common/modules/popper.js')}}"></script>
<script src="{{asset('assets/common/modules/tooltip.js')}}"></script>
<script src="{{asset('assets/common/modules/bootstrap/js/bootstrap.min.js')}}"></script>

<script src="{{asset('assets/common/modules/nicescroll/jquery.nicescroll.min.js')}}"></script>
<script src="{{asset('assets/common/modules/moment.min.js')}}"></script>
<script src="{{asset('assets/common/js/stisla.js')}}"></script>

<!-- JS Libraies -->
<script src="{{asset('assets/common/modules/jquery.sparkline.min.js')}}"></script>

<script src="{{asset('assets/common/modules/chart.min.js')}}"></script>


<script src="{{asset('assets/common/modules/summernote/summernote-bs4.js')}}"></script>
<script src="{{asset('assets/common/modules/summernote/lang/summernote-es-ES.js')}}"></script>

<script src="{{asset('assets/common/modules/chocolat/dist/js/jquery.chocolat.min.js')}}"></script>


{{--------- IZI MODAL -------}}

<script src="https://cdnjs.cloudflare.com/ajax/libs/izimodal/1.6.1/js/iziModal.min.js"
    integrity="sha512-lR/2z/m/AunQdfBTSR8gp9bwkrjwMq1cP0BYRIZu8zd4ycLcpRYJopB+WsBGPDjlkJUwC6VHCmuAXwwPHlacww=="
    crossorigin="anonymous" referrerpolicy="no-referrer"></script>


<script src="{{asset('assets/common/modules/izitoast/js/iziToast.min.js')}}"></script>


<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

<!-- Page Specific JS File -->

{{-- <script src="{{asset('assets/aula/js/page/index.js')}}"></script> --}}

<!-- Template JS File -->


<script src="{{asset('assets/common/js/scripts.js')}}"></script>
<script type="module" src="{{asset('assets/aula/js/custom.js')}}"></script>

@yield('extra-script')