<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Carta de Compromiso</title>

    <style>
       
        * {
            padding: 0;
            margin: 0;
            font-family: Arial, Helvetica, sans-serif;
            /* line-height: 1.3em; */
            box-sizing: border-box;
        }

        body { margin: 1.2cm 3cm; }

        .text-center {text-align: center;}
        .text-left {text-align: left;}
        .text-right {text-align: right;}
        .text-bold {font-weight: bold;}
        .capitalize {text-transform: capitalize;}
        .m-0 {margin: 0;}
        .mt-1 {margin-top: 0.25em;}
        .mt-2 {margin-top: 0.5em;}
        .mt-3 {margin-top: 0.75em;}
        .ms-1 {margin-left: 0.25em;}
        .ms-2 {margin-left: 0.5em;}
        .ms-3 {margin-left: 0.75em;}
        .me-1 {margin-right: 0.25em;}
        .me-2 {margin-right: 0.5em;}
        .me-3 {margin-right: 0.75em;}
        .mb-1 {margin-bottom: 0.25em;}
        .mb-2 {margin-bottom: 0.5em;}
        .mb-3 {margin-bottom: 0.75em;}
        .f-left {float: left;}
        .f-right {float: right;}
        .f-clear {clear: both;}
        .p-0 {padding: 0;}
        .p-1 {padding: 0.15cm;}
        .pt-1 {padding-top: 0.15cm;}
        .pb-1 {padding-bottom: 0.15cm;}
        .p-2 {padding: 0.5em;}
        .bg-dark {background-color: rgb(66, 66, 66);}
        .bg-primary {background-color: rgb(179, 69, 69);}
        .text-white {color: white;}
        .border {border: 1px solid rgb(66, 66, 66);}
        .border-top {border-top: 1px solid rgb(66, 66, 66);}
        .border-bottom {border-bottom: 1px solid rgb(66, 66, 66);}
        .ms-auto {margin-left: auto;}
        .pos-relative {position: relative;}
        .d-block {display: block;}

        .div-sello-parada {
            position: absolute;
            transform: translateX(580px) translateY(-10px);
        }

        .img-sello-parada {
            width: 90px;
            height: auto;
        }

        .content {
            font-family: helvetica;
        }

        .page_break {
            page-break-before: always;
        }

        .center {
            text-align: center;
        }

        .title {
            font-weight: bold;
            margin-top: 20px;
            margin-bottom: 10px;
        }

        .fecha {
            margin-top: 20px;
            margin-bottom: 10px;
        }

        .usuario {
            margin-top: 15px;
            /* margin-left: 60px; */
        }

        .presentacion {
            margin-top: 15px;
            margin-bottom: 15px;
        }

        .datos {}

        .div-compromiso1 {
            margin-top: 10px;
            /* margin-left: 70px; */
        }

        .img-compromiso {
            height: auto;
            width: 620px;
        }

        .signature-section {}

        .signature-manager {
            margin-top: 20px;
            height: 40px;
        }

        .manager-nombre {
            /* position: absolute; */
            /* transform: translateX(50px) translateY(10px); */
            text-align: center;
            float: left;
            margin-left: 230px;
            /* width: 300px; */
            height: inherit;

        }

        .manager-firma {
            /* position: absolute; */
            /* transform: translateX(350px) translateY(10px); */
            float: left;
            margin-right: 65px;
            /* width: 230px; */
            height: inherit;
            text-align: center;
            font-size: 14px;
        }

        .signature-user {
            margin-top: 10px;
        }

        .user-datos {
            font-size: 16px;
            /* margin-left: 115px; */
        }

        .user-firma {
            margin-top: 5px;
            font-size: 10px;

        }

        .user-firma-detalles {
            display: inline-block;
            /* margin-left: 420px; */
        }

        .div-img-firma {
            display: inline-block;
        }

        .signature-user-img {
            height: 70px;
            width: auto;
        }

        hr.style1 {
            border-top: 0.1px solid;
        }
    </style>
</head>

<body>

    <div class="div-sello-parada">
        <img src="{{ public_path('assets/certificates/images/nexalogo.png') }}" class="img-sello-parada" alt="">
    </div>

    <div class="content">
        <div class="">
            <div class="">
                <div class="title center">
                    CARTA COMPROMISO - REGLAS DE ORO, REGLAS POR LA VIDA
                </div>
                <div class="fecha center">
                    {{ ucwords(strtolower($miningUnit->district ?? ' - ')) }}, {{ $certification->event->date_es}}
                </div>

                <div class="usuario">
                    <div class="presentacion">
                        Señor/a
                    </div>
                    <div class="datos">
                        <span>
                            {{ strtoupper($certification->user->full_name_complete_reverse) }}
                        </span>
                        <span style="margin-left:15px;">
                            DNI: {{ $certification->user->dni }}
                        </span>
                    </div>
                </div>

            </div>


            <div class="div-compromiso1">
                <img src="" class="img-compromiso" alt="">
            </div>


        </div>
        
        <div class="page_break">

            <div class="div-compromiso1">
                <img src="" class="img-compromiso" alt="">
            </div>

            <div class="signature-section">
                <div class="signature-manager">
                    <div class="manager-nombre">

                        <span style="font-weight: ; font-style: italic;">
                            Carlos Garcia
                        </span><br>

                        <span style="font-size: 13px;">
                            Gerente General
                            @if (in_array($sufix, ['C']))
                            de Cerro Lindo
                            @else
                            del Complejo Pasco
                            @endif
                        </span>
                    </div>


                    <div class="manager-firma">
                        <hr class="style1">
                        <span>Residente Empresa Especializada</span>
                    </div>

                    {{-- @if (in_array($sufix, ['C']))
                    <div class="manager-firma">
                        <hr class="style1">
                        <span>Residente Empresa Especializada</span>
                    </div>
                    @endif --}}
                </div>

                <div class="signature-user">
                    <div class="user-datos">
                        <div class="">
                            <span>
                                Apellidos y Nombres: {{ strtoupper($certification->user->full_name_complete_reverse) }}
                            </span>

                        </div>
                        <div class="">
                            <span>
                                DNI: {{ $certification->user->dni }}
                            </span>
                        </div>
                        <div class="">
                            <span>
                                Fecha: {{ getCarbonInstance($certification->event->date)->isoFormat('DD / MM / YYYY') }}
                            </span>
                            <span style="margin-left:150px;">
                                Firma:
                            </span>
                        </div>
                    </div>

                    <div class="user-firma">
                        <div class="user-firma-detalles">
                            <span>Documento firmado el </span><br>
                            <span>{{ getCarbonInstance($certification->event->date)->isoFormat('DD-MM-YYYY')
                                }}</span><br>
                            <span>por el usuario</span><br>
                            <span>con DNI: {{ $certification->user->dni }}</span>
                        </div>
                        <div class="div-img-firma">
                            <img src="{{ $certification->user->file->file_url ?? '#'}}" class="signature-user-img"
                                style="height:70px; width: auto;" align="middle" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

</html>