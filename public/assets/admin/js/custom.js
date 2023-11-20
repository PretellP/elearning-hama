$(function () {

    /* ------ GENERAL ------*/

    var DataTableEs = {
        "processing": "Procesando...",
        "lengthMenu": "Mostrar _MENU_ registros",
        "zeroRecords": "No se encontraron resultados",
        "emptyTable": "Ningún dato disponible en esta tabla",
        "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
        "infoFiltered": "(filtrado de un total de _MAX_ registros)",
        "search": "Buscar:",
        "infoThousands": ",",
        "loadingRecords": "Cargando...",
        "paginate": {
            "first": "Primero",
            "last": "Último",
            "next": "Siguiente",
            "previous": "Anterior"
        },
        "aria": {
            "sortAscending": ": Activar para ordenar la columna de manera ascendente",
            "sortDescending": ": Activar para ordenar la columna de manera descendente"
        },
        "buttons": {
            "copy": "Copiar",
            "colvis": "Visibilidad",
            "collection": "Colección",
            "colvisRestore": "Restaurar visibilidad",
            "copyKeys": "Presione ctrl o u2318 + C para copiar los datos de la tabla al portapapeles del sistema. <br /> <br /> Para cancelar, haga clic en este mensaje o presione escape.",
            "copySuccess": {
                "1": "Copiada 1 fila al portapapeles",
                "_": "Copiadas %ds fila al portapapeles"
            },
            "copyTitle": "Copiar al portapapeles",
            "csv": "CSV",
            "excel": "Excel",
            "pageLength": {
                "-1": "Mostrar todas las filas",
                "_": "Mostrar %d filas"
            },
            "pdf": "PDF",
            "print": "Imprimir",
            "renameState": "Cambiar nombre",
            "updateState": "Actualizar",
            "createState": "Crear Estado",
            "removeAllStates": "Remover Estados",
            "removeState": "Remover",
            "savedStates": "Estados Guardados",
            "stateRestore": "Estado %d"
        },
        "autoFill": {
            "cancel": "Cancelar",
            "fill": "Rellene todas las celdas con <i>%d</i>",
            "fillHorizontal": "Rellenar celdas horizontalmente",
            "fillVertical": "Rellenar celdas verticalmentemente"
        },
        "decimal": ",",
        "searchBuilder": {
            "add": "Añadir condición",
            "button": {
                "0": "Constructor de búsqueda",
                "_": "Constructor de búsqueda (%d)"
            },
            "clearAll": "Borrar todo",
            "condition": "Condición",
            "conditions": {
                "date": {
                    "after": "Despues",
                    "before": "Antes",
                    "between": "Entre",
                    "empty": "Vacío",
                    "equals": "Igual a",
                    "notBetween": "No entre",
                    "notEmpty": "No Vacio",
                    "not": "Diferente de"
                },
                "number": {
                    "between": "Entre",
                    "empty": "Vacio",
                    "equals": "Igual a",
                    "gt": "Mayor a",
                    "gte": "Mayor o igual a",
                    "lt": "Menor que",
                    "lte": "Menor o igual que",
                    "notBetween": "No entre",
                    "notEmpty": "No vacío",
                    "not": "Diferente de"
                },
                "string": {
                    "contains": "Contiene",
                    "empty": "Vacío",
                    "endsWith": "Termina en",
                    "equals": "Igual a",
                    "notEmpty": "No Vacio",
                    "startsWith": "Empieza con",
                    "not": "Diferente de",
                    "notContains": "No Contiene",
                    "notStartsWith": "No empieza con",
                    "notEndsWith": "No termina con"
                },
                "array": {
                    "not": "Diferente de",
                    "equals": "Igual",
                    "empty": "Vacío",
                    "contains": "Contiene",
                    "notEmpty": "No Vacío",
                    "without": "Sin"
                }
            },
            "data": "Data",
            "deleteTitle": "Eliminar regla de filtrado",
            "leftTitle": "Criterios anulados",
            "logicAnd": "Y",
            "logicOr": "O",
            "rightTitle": "Criterios de sangría",
            "title": {
                "0": "Constructor de búsqueda",
                "_": "Constructor de búsqueda (%d)"
            },
            "value": "Valor"
        },
        "searchPanes": {
            "clearMessage": "Borrar todo",
            "collapse": {
                "0": "Paneles de búsqueda",
                "_": "Paneles de búsqueda (%d)"
            },
            "count": "{total}",
            "countFiltered": "{shown} ({total})",
            "emptyPanes": "Sin paneles de búsqueda",
            "loadMessage": "Cargando paneles de búsqueda",
            "title": "Filtros Activos - %d",
            "showMessage": "Mostrar Todo",
            "collapseMessage": "Colapsar Todo"
        },
        "select": {
            "cells": {
                "1": "1 celda seleccionada",
                "_": "%d celdas seleccionadas"
            },
            "columns": {
                "1": "1 columna seleccionada",
                "_": "%d columnas seleccionadas"
            },
            "rows": {
                "1": "1 fila seleccionada",
                "_": "%d filas seleccionadas"
            }
        },
        "thousands": ".",
        "datetime": {
            "previous": "Anterior",
            "next": "Proximo",
            "hours": "Horas",
            "minutes": "Minutos",
            "seconds": "Segundos",
            "unknown": "-",
            "amPm": [
                "AM",
                "PM"
            ],
            "months": {
                "0": "Enero",
                "1": "Febrero",
                "2": "Marzo",
                "3": "Abril",
                "4": "Mayo",
                "5": "Junio",
                "6": "Julio",
                "7": "Agosto",
                "8": "Septiembre",
                "9": "Octubre",
                "10": "Noviembre",
                "11": "Diciembre"
            },
            "weekdays": [
                "Dom",
                "Lun",
                "Mar",
                "Mie",
                "Jue",
                "Vie",
                "Sab"
            ]
        },
        "editor": {
            "close": "Cerrar",
            "create": {
                "button": "Nuevo",
                "title": "Crear Nuevo Registro",
                "submit": "Crear"
            },
            "edit": {
                "button": "Editar",
                "title": "Editar Registro",
                "submit": "Actualizar"
            },
            "remove": {
                "button": "Eliminar",
                "title": "Eliminar Registro",
                "submit": "Eliminar",
                "confirm": {
                    "1": "¿Está seguro que desea eliminar 1 fila?",
                    "_": "¿Está seguro que desea eliminar %d filas?"
                }
            },
            "error": {
                "system": "Ha ocurrido un error en el sistema (<a target=\"\\\" rel=\"\\ nofollow\" href=\"\\\">Más información&lt;\\/a&gt;).</a>"
            },
            "multi": {
                "title": "Múltiples Valores",
                "info": "Los elementos seleccionados contienen diferentes valores para este registro. Para editar y establecer todos los elementos de este registro con el mismo valor, hacer click o tap aquí, de lo contrario conservarán sus valores individuales.",
                "restore": "Deshacer Cambios",
                "noMulti": "Este registro puede ser editado individualmente, pero no como parte de un grupo."
            }
        },
        "info": "Mostrando _START_ a _END_ de _TOTAL_ registros",
        "stateRestore": {
            "creationModal": {
                "button": "Crear",
                "name": "Nombre:",
                "order": "Clasificación",
                "paging": "Paginación",
                "search": "Busqueda",
                "select": "Seleccionar",
                "columns": {
                    "search": "Búsqueda de Columna",
                    "visible": "Visibilidad de Columna"
                },
                "title": "Crear Nuevo Estado",
                "toggleLabel": "Incluir:"
            },
            "emptyError": "El nombre no puede estar vacio",
            "removeConfirm": "¿Seguro que quiere eliminar este %s?",
            "removeError": "Error al eliminar el registro",
            "removeJoiner": "y",
            "removeSubmit": "Eliminar",
            "renameButton": "Cambiar Nombre",
            "renameLabel": "Nuevo nombre para %s",
            "duplicateError": "Ya existe un Estado con este nombre.",
            "emptyStates": "No hay Estados guardados",
            "removeTitle": "Remover Estado",
            "renameTitle": "Cambiar Nombre Estado"
        }
    };

    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    const ToastError = Swal.mixin({
        icon: 'error',
        text: '¡Ocurrió un error inesperado!',
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    const SwalDelete = Swal.mixin({
        title: '¿Estás seguro?',
        text: "¡Esta acción no podrá ser revertida!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: '¡Sí!',
        cancelButtonText: 'Cancelar',
        reverseButtons: true,
    })


    /* ---- DROPDOWN BUTTON -------*/

    $('.main-content').on('click', '.btn-dropdown-container', function () {

        if (window.matchMedia('(min-width: 992px)').matches) {
            $('#btn-drowdown-category-list').removeClass('vertical')
        } else {
            $('#btn-drowdown-category-list').addClass('vertical')
        }

        var button = $(this)
        var txtCont = button.find('.text-dropdown-cont')
        var parent = button.closest('.principal-inner-container')
        var dropdownContainer = parent.find('.related-dropdown-container')
        var actionButtonContainer = parent.find('.action-btn-dropdown-container.outside')

        if (button.hasClass('show')) {
            txtCont.html('Mostrar')
            actionButtonContainer.slideToggle(300)
            actionButtonContainer.addClass('hide')
        } else {
            if (actionButtonContainer.hasClass('hide')) {
                actionButtonContainer.slideToggle(300)
            }

            txtCont.html('Ocultar')
        }

        if (button.hasClass('vertical')) {
            dropdownContainer.slideToggle(300)
        } else {
            dropdownContainer.toggle('slide')
        }

        button.toggleClass('show')
    })

    $.caretTo = function (el, index) {
        if (el.createTextRange) {
            var range = el.createTextRange();
            range.move("character", index);
            range.select();
        } else if (el.selectionStart != null) {
            el.focus();
            el.setSelectionRange(index, index);
        }
    };

    $.fn.caretTo = function (index, offset) {
        return this.queue(function (next) {
            if (isNaN(index)) {
                var i = $(this).val().indexOf(index);

                if (offset === true) {
                    i += index.length;
                } else if (offset) {
                    i += offset;
                }

                $.caretTo(this, i);
            } else {
                $.caretTo(this, index);
            }

            next();
        });
    };

    $.fn.caretToStart = function () {
        return this.caretTo(0);
    };

    $.fn.caretToEnd = function () {
        return this.queue(function (next) {
            $.caretTo(this, $(this).val().length);
            next();
        });
    };








    if ($('#companies-table').length) {

        var companiesTableEle = $('#companies-table');
        var getDataUrl = companiesTableEle.data('url');
        var companiesTable = companiesTableEle.DataTable({
            responsive: true,
            language: DataTableEs,
            serverSide: true,
            processing: true,
            ajax: getDataUrl,
            columns: [
                { data: 'id', name: 'id' },
                { data: 'description', name: 'description' },
                { data: 'abbreviation', name: 'abbreviation' },
                { data: 'ruc', name: 'ruc' },
                { data: 'address', name: 'address' },
                { data: 'telephone', name: 'telephone' },
                { data: 'status-btn', name: 'status-btn' },
                { data: 'action', name: 'action', orderable: false, searchable: false },
            ]
        });

        $('#register-company-status-checkbox').change(function () {
            var txtDesc = $('#txt-register-description-company');
            if (this.checked) {
                txtDesc.html('Activo');
            } else {
                txtDesc.html('Inactivo')
            }
        });

        /* -------- REGISTRAR ---------*/

        var registerCompanyForm = $('#registerCompanyForm').validate({
            rules: {
                name: {
                    required: true,
                    maxlength: 255
                },
                ruc: {
                    required: true,
                    maxlength: 15,
                    remote: {
                        param: {
                            url: $('#registerCompanyForm').attr('action'),
                            method: $('#registerCompanyForm').attr('method'),
                            dataType: 'JSON',
                            data: {
                                ruc: function () {
                                    return $('#registerCompanyForm').find('input[name=ruc]').val()
                                },
                                type: 'validate'
                            },
                        },
                    }
                },
                abreviation: {
                    maxlength: 100
                },
                address: {
                    required: true,
                    maxlength: 255
                },
                phone: {
                    maxlength: 20
                },
                referName: {
                    maxlength: 255
                },
                referPhone: {
                    maxlength: 20
                },
                referEmail: {
                    maxlength: 50,
                    email: true
                }
            },
            messages: {
                ruc: {
                    remote: 'Este RUC ya está registrado'
                }
            },
            submitHandler: function (form, event) {
                event.preventDefault()
                var form = $(form)
                var loadSpinner = form.find('.loadSpinner')
                var modal = $('#RegisterCompanyModal')

                loadSpinner.toggleClass('active')

                $.ajax({
                    method: form.attr('method'),
                    url: form.attr('action'),
                    data: {
                        data: form.serialize(),
                        type: 'store'
                    },
                    dataType: 'JSON',
                    success: function (data) {
                        registerCompanyForm.resetForm()
                        companiesTable.draw()
                        form.trigger('reset')
                        loadSpinner.toggleClass('active')
                        modal.modal('toggle')
                        Toast.fire({
                            icon: 'success',
                            text: '¡Registrado exitosamente!'
                        })
                    },
                    error: function (data) {
                        console.log(data)
                    }
                })
            }
        })

        /* ---------- ELIMINAR ---------*/

        $('.main-content').on('click', '.deleteCompany', function () {
            var url = $(this).data('url')

            SwalDelete.fire().then(function (e) {
                if (e.value === true) {
                    $.ajax({
                        type: 'DELETE',
                        url: url,
                        dataType: 'JSON',
                        success: function (result) {
                            if (result.success === true) {
                                companiesTable.draw();
                                Toast.fire({
                                    icon: 'success',
                                    text: '¡Registro eliminado!',
                                })
                            }
                        },
                        error: function (result) {
                            Toast.fire({
                                icon: 'error',
                                title: '¡Ocurrió un error inesperado!',
                            });
                        }
                    });
                } else {
                    e.dismiss;
                }
            }, function (dismiss) {
                return false;
            });
        })

        /* ------------ EDITAR --------*/

        $('#edit-company-status-checkbox').change(function () {
            var txtDesc = $('#txt-edit-description-company');
            if (this.checked) {
                txtDesc.html('Activo');
            } else {
                txtDesc.html('Inactivo')
            }
        });

        var editCompanyform = $('#EditCompanyForm').validate({
            rules: {
                name: {
                    required: true,
                    maxlength: 255
                },
                ruc: {
                    required: true,
                    maxlength: 15,
                    remote: {
                        url: $('#EditCompanyForm').data('validate'),
                        type: 'POST',
                        dataType: 'JSON',
                        data: {
                            ruc: function () {
                                return $('#EditCompanyForm').find('input[name=ruc]').val()
                            },
                            id: function () {
                                return $('#EditCompanyForm').find('input[name=id]').val()
                            }
                        },
                    }
                },
                abreviation: {
                    maxlength: 100
                },
                address: {
                    required: true,
                    maxlength: 255
                },
                phone: {
                    maxlength: 20
                },
                referName: {
                    maxlength: 255
                },
                referPhone: {
                    maxlength: 20
                },
                referEmail: {
                    maxlength: 50,
                    email: true
                }
            },
            messages: {
                ruc: {
                    remote: 'Este RUC ya está registrado'
                }
            },
            submitHandler: function (form, event) {
                event.preventDefault()
                var form = $(form)
                var loadSpinner = form.find('.loadSpinner')
                var modal = $('#EditCompanyModal')

                loadSpinner.toggleClass('active')

                $.ajax({
                    method: form.attr('method'),
                    url: form.attr('action'),
                    data: form.serialize(),
                    dataType: 'JSON',
                    success: function (data) {
                        console.log(data)
                        companiesTable.draw()
                        loadSpinner.toggleClass('active')
                        modal.modal('toggle')
                        Toast.fire({
                            icon: 'success',
                            text: '¡Registro actualizado!'
                        })
                    },
                    error: function (data) {
                        console.log(data)
                    }
                })
            }
        })

        $('.main-content').on('click', '.editCompany', function () {
            var modal = $('#EditCompanyModal')
            var getDataUrl = $(this).data('send')
            var url = $(this).data('url')
            var form = modal.find('#EditCompanyForm')
            editCompanyform.resetForm();

            form.attr('action', url)

            $.ajax({
                type: 'GET',
                url: getDataUrl,
                dataType: 'JSON',
                success: function (data) {

                    modal.find('input[name=id]').val(data.id);
                    modal.find('input[name=name]').val(data.description);
                    modal.find('input[name=abreviation]').val(data.abbreviation);
                    modal.find('input[name=ruc]').val(data.ruc);
                    modal.find('input[name=address]').val(data.address);
                    modal.find('input[name=phone]').val(data.telephone);
                    modal.find('input[name=referName]').val(data.name_ref);
                    modal.find('input[name=referPhone]').val(data.telephone_ref);
                    modal.find('input[name=referEmail]').val(data.email_ref);

                    if (data.active == 'S') {
                        modal.find('#edit-company-status-checkbox').prop('checked', true);
                        $('#txt-edit-description-company').html('Activo');
                    } else {
                        modal.find('#edit-company-status-checkbox').prop('checked', false);
                        $('#txt-edit-description-company').html('Inactivo');
                    }
                },
                complete: function (data) {
                    modal.modal('toggle')
                },
                error: function (data) {
                    console.log(data)
                }
            })
        })

    }

    if ($('#rooms-table').length) {

        var roomsTableEle = $('#rooms-table');
        var getDataUrl = roomsTableEle.data('url');
        var roomsTable = roomsTableEle.DataTable({
            responsive: true,
            language: DataTableEs,
            serverSide: true,
            processing: true,
            ajax: getDataUrl,
            columns: [
                { data: 'id', name: 'id' },
                { data: 'description', name: 'description' },
                { data: 'capacity', name: 'capacity' },
                { data: 'created_at', name: 'created_at' },
                { data: 'status-btn', name: 'status-btn' },
                { data: 'action', name: 'action', orderable: false, searchable: false },
            ]
        });


        $('#register-room-status-checkbox').change(function () {
            var txtDesc = $('#txt-register-description-room');
            if (this.checked) {
                txtDesc.html('Activo');
            } else {
                txtDesc.html('Inactivo')
            }
        });

        /* ----------- REGISTRAR -----------*/

        var registerRoomForm = $('#registerRoomForm').validate({
            rules: {
                name: {
                    required: true,
                    maxlength: 255,
                    remote: {
                        url: $('#registerRoomForm').data('validate'),
                        method: $('#registerRoomForm').attr('method'),
                        dataType: 'JSON',
                        data: {
                            name: function () {
                                return $('#registerRoomForm').find('input[name=name]').val()
                            }
                        }
                    }
                },
                capacity: {
                    required: true
                }
            },
            messages: {
                name: {
                    remote: 'Esta sala ya está registrada'
                }
            },
            submitHandler: function (form, event) {
                event.preventDefault()
                var form = $(form)
                var loadSpinner = form.find('.loadSpinner')
                var modal = $('#RegisterRoomModal')

                loadSpinner.toggleClass('active')

                $.ajax({
                    method: form.attr('method'),
                    url: form.attr('action'),
                    data: form.serialize(),
                    dataType: 'JSON',
                    success: function (data) {
                        registerRoomForm.resetForm()
                        roomsTable.draw()
                        form.trigger('reset')
                        loadSpinner.toggleClass('active')
                        modal.modal('toggle')
                        Toast.fire({
                            icon: 'success',
                            text: '¡Registrado exitosamente!'
                        })
                    },
                    error: function (data) {
                        console.log(data)
                    }
                })
            }
        })

        /* ---------- EDITAR ----------*/


        $('#edit-room-status-checkbox').change(function () {
            var txtDesc = $('#txt-edit-description-room');
            if (this.checked) {
                txtDesc.html('Activo');
            } else {
                txtDesc.html('Inactivo')
            }
        });

        var editRoomForm = $('#editRoomForm').validate({
            rules: {
                name: {
                    required: true,
                    maxlength: 255,
                    remote: {
                        url: $('#editRoomForm').data('validate'),
                        method: $('#editRoomForm').attr('method'),
                        dataType: 'JSON',
                        data: {
                            name: function () {
                                return $('#editRoomForm').find('input[name=name]').val()
                            },
                            id: function () {
                                return $('#editRoomForm').find('input[name=id]').val()
                            }
                        }
                    }
                },
                capacity: {
                    required: true
                }
            },
            messages: {
                name: {
                    remote: 'Esta sala ya está registrada'
                }
            },
            submitHandler: function (form, event) {
                event.preventDefault()
                var form = $(form)
                var loadSpinner = form.find('.loadSpinner')
                var modal = $('#EditRoomModal')

                loadSpinner.toggleClass('active')

                $.ajax({
                    method: form.attr('method'),
                    url: form.attr('action'),
                    data: form.serialize(),
                    dataType: 'JSON',
                    success: function (data) {
                        roomsTable.draw()
                        form.trigger('reset')
                        loadSpinner.toggleClass('active')
                        modal.modal('toggle')
                        Toast.fire({
                            icon: 'success',
                            text: '¡Registro actualizado!'
                        })
                    },
                    error: function (data) {
                        console.log(data)
                    }
                })
            }
        })


        $('.main-content').on('click', '.editRoom', function () {
            var modal = $('#EditRoomModal')
            var getDataUrl = $(this).data('send')
            var url = $(this).data('url')
            var form = modal.find('#editRoomForm')

            editRoomForm.resetForm();

            form.attr('action', url)

            $.ajax({
                type: 'GET',
                url: getDataUrl,
                dataType: 'JSON',
                success: function (data) {

                    modal.find('input[name=id]').val(data.id);
                    modal.find('input[name=name]').val(data.description);
                    modal.find('input[name=capacity]').val(data.capacity);
                    modal.find('input[name=url]').val(data.url_zoom);

                    if (data.active == 'S') {
                        modal.find('#edit-room-status-checkbox').prop('checked', true);
                        $('#txt-edit-description-room').html('Activo');
                    } else {
                        modal.find('#edit-room-status-checkbox').prop('checked', false);
                        $('#txt-edit-description-room').html('Inactivo');
                    }
                },
                complete: function (data) {
                    modal.modal('toggle')
                },
                error: function (data) {
                    console.log(data)
                }
            })
        })


        /* ----------- ELIMINAR ---------------*/

        $('.main-content').on('click', '.deleteRoom', function () {
            var url = $(this).data('url')

            SwalDelete.fire().then(function (e) {
                if (e.value === true) {
                    $.ajax({
                        type: 'DELETE',
                        url: url,
                        dataType: 'JSON',
                        success: function (result) {
                            if (result.success === true) {
                                roomsTable.draw();
                                Toast.fire({
                                    icon: 'success',
                                    text: '¡Registro eliminado!',
                                })
                            }
                        },
                        error: function (result) {
                            Toast.fire({
                                icon: 'error',
                                title: '¡Ocurrió un error inesperado!',
                            });
                        }
                    });
                } else {
                    e.dismiss;
                }
            }, function (dismiss) {
                return false;
            });
        })


    }

    if ($('#users-table').length) {

        /* -------- SELECT ----------*/

        $('#registerRoleSelect').select2({
            dropdownParent: $("#RegisterUserModal"),
            placeholder: 'Selecciona un rol'
        })

        $('#registerCompanySelect').select2({
            dropdownParent: $("#RegisterUserModal"),
            placeholder: 'Selecciona una empresa'
        })

        $('#registerMiningUnitsSelect').select2({
            dropdownParent: $("#RegisterUserModal"),
            placeholder: 'Selecciona una o más unidades mineras',
            closeOnSelect: false
        });

        $('#editRoleSelect').select2({
            dropdownParent: $("#EditUserModal"),
            placeholder: 'Selecciona un rol'
        })

        $('#editCompanySelect').select2({
            dropdownParent: $("#EditUserModal"),
            placeholder: 'Selecciona una empresa'
        })

        $('#editMiningUnitsSelect').select2({
            dropdownParent: $("#EditUserModal"),
            placeholder: 'Selecciona una o más unidades mineras',
            closeOnSelect: false
        })


        /* --------------------------------*/

        var usersTableEle = $('#users-table');
        var getDataTable = usersTableEle.data('url');
        var usersTable = usersTableEle.DataTable({
            responsive: true,
            language: DataTableEs,
            serverSide: true,
            processing: true,
            ajax: getDataTable,
            columns: [
                { data: 'id', name: 'id' },
                { data: 'dni', name: 'dni' },
                { data: 'name', name: 'name' },
                { data: 'email', name: 'email' },
                { data: 'role', name: 'role' },
                { data: 'company.description', name: 'company.description'},
                { data: 'status-btn', name: 'status-btn', orderable: false, searchable: false },
                { data: 'action', name: 'action', orderable: false, searchable: false },
            ],
            order: [
                [0, 'desc']
            ]
        });


        $('#register-user-status-checkbox').change(function () {
            var txtDesc = $('#txt-register-description-user');
            if (this.checked) {
                txtDesc.html('Activo');
            } else {
                txtDesc.html('Inactivo')
            }
        });


        /* ------------ REGISTRAR -------------*/

        var inputUserImageStore = $('#input-user-image-store');
        inputUserImageStore.on("change", function () {

            if ($(this).val()) {
                // $('#registerUserForm').validate()
                // $('#image-upload-category-edit').rules('add', { required: true })
                var img_path = $(this)[0].value;
                var img_holder = $(this).closest('#registerUserForm').find('.img-holder');
                var currentImagePath = $(this).data('value');
                var img_extension = img_path.substring(img_path.lastIndexOf('.') + 1).toLowerCase();

                if (img_extension == 'jpeg' || img_extension == 'jpg' || img_extension == 'png') {
                    if (typeof (FileReader) != 'undefined') {
                        img_holder.empty()
                        var reader = new FileReader();
                        reader.onload = function (e) {
                            $('<img/>', { 'src': e.target.result, 'class': 'img-fluid avatar_img' }).
                                appendTo(img_holder);
                        }
                        img_holder.show();
                        reader.readAsDataURL($(this)[0].files[0]);
                    } else {
                        $(img_holder).html('Este navegador no soporta Lector de Archivos');
                    }
                } else {
                    $(img_holder).html(currentImagePath);
                    inputUserImageStore.val('')
                    Toast.fire({
                        icon: 'warning',
                        title: '¡Selecciona una imagen!',
                    });
                }
            }
        })

        var registerUserForm = $('#registerUserForm').validate({
            rules: {
                dni: {
                    required: true,
                    maxlength: 11,
                    remote: {
                        url: $('#registerUserForm').data('validate'),
                        method: $('#registerUserForm').attr('method'),
                        dataType: 'JSON',
                        data: {
                            dni: function () {
                                return $('#registerUserForm').find('input[name=dni]').val()
                            }
                        }
                    }
                },
                name: {
                    required: true,
                    maxlength: 255
                },
                paternal: {
                    required: true,
                    maxlength: 255
                },
                maternal: {
                    required: true,
                    maxlength: 255
                },
                email: {
                    required: true,
                    maxlength: 255,
                    email: true
                },
                password: {
                    required: true
                },
                telephone: {
                    maxlength: 20
                },
                role: {
                    required: true
                },
                cip: {
                    maxlength: 10
                },
                company_id: {
                    required: true
                },
                "id_mining_units[]": {
                    required: true
                },
                position: {
                    maxlength: 255
                }
            },
            messages: {
                dni: {
                    remote: 'Este usuario ya está registrado'
                }
            },
            submitHandler: function (form, event) {
                event.preventDefault()
                var form = $(form)
                var loadSpinner = form.find('.loadSpinner')
                var modal = $('#RegisterUserModal')

                loadSpinner.toggleClass('active')
                form.find('.btn-save').attr('disabled', 'disabled')

                var formData = new FormData(form[0])

                $.ajax({
                    method: form.attr('method'),
                    url: form.attr('action'),
                    data: formData,
                    processData: false,
                    contentType: false,
                    dataType: 'JSON',
                    success: function (data) {

                        if (data.success) {

                            registerUserForm.resetForm()
                            usersTable.ajax.reload(null, false)

                            form.trigger('reset')
                            modal.modal('hide')

                            Toast.fire({
                                icon: 'success',
                                text: data.message
                            })
                        }
                        else {
                            Toast.fire({
                                icon: 'error',
                                text: data.message
                            })
                        }

                    },
                    complete: function (data) {
                        form.find('.btn-save').removeAttr('disabled')
                        loadSpinner.toggleClass('active')
                    },
                    error: function (data) {
                        console.log(data)
                        ToastError.fire()
                    }
                })
            }
        })

        $('#btn-register-user-modal').on('click', function () {
            var modal = $('#RegisterUserModal')
            var button = $(this)
            var select = modal.find('#registerCompanySelect')
            var url = button.data('url')

            registerUserForm.resetForm()
            select.html('');

            $.ajax({
                type: 'GET',
                url: url,
                dataType: 'JSON',
                success: function (data) {
                    var companies = data['companies']
                    select.append('<option></option>')

                    $.each(companies, function (key, values) {
                        select.append('<option value="' + values.id + '">' + values.description + '</option>');
                    })
                },
                complete: function (data) {
                    modal.modal('toggle')
                },
                error: function (data) {
                    console.log(data)
                }
            })

            // modal.modal('toggle')
        })


        /* ---------------- EDITAR  ----------------- */

        $('#edit-user-status-checkbox').change(function () {
            var txtDesc = $('#txt-edit-description-user');
            if (this.checked) {
                txtDesc.html('Activo');
            } else {
                txtDesc.html('Inactivo')
            }
        });

        var editUserForm = $('#editUserForm').validate({
            rules: {
                dni: {
                    required: true,
                    maxlength: 11,
                    remote: {
                        url: $('#editUserForm').data('validate'),
                        method: $('#editUserForm').attr('method'),
                        dataType: 'JSON',
                        data: {
                            dni: function () {
                                return $('#editUserForm').find('input[name=dni]').val()
                            },
                            id: function () {
                                return $('#editUserForm').find('input[name=id]').val()
                            }
                        }
                    }
                },
                name: {
                    required: true,
                    maxlength: 255
                },
                paternal: {
                    required: true,
                    maxlength: 255
                },
                maternal: {
                    required: true,
                    maxlength: 255
                },
                email: {
                    required: true,
                    maxlength: 255,
                    email: true
                },
                telephone: {
                    maxlength: 20
                },
                role: {
                    required: true
                },
                cip: {
                    maxlength: 10
                },
                company_id: {
                    required: true
                },
                "id_mining_units[]": {
                    required: true
                },
                position: {
                    maxlength: 255
                }
            },
            messages: {
                dni: {
                    remote: 'Este usuario ya está registrado'
                }
            },
            submitHandler: function (form, event) {
                event.preventDefault()
                var form = $(form)
                var loadSpinner = form.find('.loadSpinner')
                var modal = $('#EditUserModal')

                var formData = new FormData(form[0])

                loadSpinner.toggleClass('active')

                form.find('.btn-save').attr('disabled', 'disabled')

                $.ajax({
                    method: form.attr('method'),
                    url: form.attr('action'),
                    data: formData,
                    processData: false,
                    contentType: false,
                    dataType: 'JSON',
                    success: function (data) {

                        if (data.success) {

                            usersTable.ajax.reload(null, false)
                            form.trigger('reset')
                            modal.modal('hide')

                            Toast.fire({
                                icon: 'success',
                                text: data.message
                            })
                        }
                        else {
                            Toast.fire({
                                icon: 'error',
                                text: data.message
                            })
                        }
                    },
                    complete: function (data) {
                        loadSpinner.toggleClass('active')
                        form.find('.btn-save').removeAttr('disabled')
                    },
                    error: function (data) {
                        console.log(data)
                    }
                })
            }
        })

        var inputUserImageEdit = $('#input-user-image-edit');
        inputUserImageEdit.on("change", function () {

            if ($(this).val()) {

                var img_path = $(this)[0].value;
                var img_holder = $(this).closest('#editUserForm').find('.img-holder');
                var currentImagePath = $(this).data('value');
                var img_extension = img_path.substring(img_path.lastIndexOf('.') + 1).toLowerCase();

                if (img_extension == 'jpeg' || img_extension == 'jpg' || img_extension == 'png') {
                    if (typeof (FileReader) != 'undefined') {
                        img_holder.empty()
                        var reader = new FileReader();
                        reader.onload = function (e) {
                            $('<img/>', { 'src': e.target.result, 'class': 'img-fluid avatar_img' }).
                                appendTo(img_holder);
                        }
                        img_holder.show();
                        reader.readAsDataURL($(this)[0].files[0]);
                    } else {
                        $(img_holder).html('Este navegador no soporta Lector de Archivos');
                    }
                } else {
                    $(img_holder).html(currentImagePath);
                    inputUserImageEdit.val('')
                    Toast.fire({
                        icon: 'warning',
                        title: '¡Selecciona una imagen!',
                    });
                }
            }
        })

        $('.main-content').on('click', '.editUser', function () {
            var modal = $('#EditUserModal')
            var getDataUrl = $(this).data('send')
            var url = $(this).data('url')
            var form = modal.find('#editUserForm')
            var selectCompany = modal.find('#editCompanySelect')
            var selectRole = modal.find('#editRoleSelect')
            var selectMiningUnits = modal.find('#editMiningUnitsSelect')

            selectCompany.html('')
            selectMiningUnits.html('')
            editUserForm.resetForm()
            form.trigger('reset')

            form.attr('action', url)

            $.ajax({
                type: 'GET',
                url: getDataUrl,
                dataType: 'JSON',
                success: function (data) {

                    var user = data['user'];

                    modal.find('input[name=id]').val(user.id);
                    modal.find('input[name=dni]').val(user.dni);
                    modal.find('input[name=name]').val(user.name);
                    modal.find('input[name=paternal]').val(user.paternal);
                    modal.find('input[name=maternal]').val(user.maternal);
                    modal.find('input[name=email]').val(user.email);
                    modal.find('input[name=telephone]').val(user.telephone);
                    modal.find('input[name=cip]').val(user.cip);
                    modal.find('input[name=position]').val(user.position);

                    selectRole.val(user.role).change();
                    selectCompany.append('<option></option>')
                    $.each(data['companies'], function (key, values) {
                        selectCompany.append('<option value="' + values.id + '">' + values.description + '</option>')
                    })

                    selectCompany.val(user.company_id).change()

                    selectMiningUnits.append('<option></option>')
                    $.each(data.miningUnits, function (key, values) {
                        selectMiningUnits.append('<option value="' + values.id + '">' + values.description + '</option>')
                    })

                    selectMiningUnits.val(data.miningUnitsSelect).change()

                    modal.find('.img-holder').html('<img class="img-fluid avatar_img" id="image-avatar-edit" src="' + data.url_img + '"></img>');
                    modal.find('#input-user-image-edit').attr('data-value', '<img scr="' + data.url_img + '" class="img-fluid avatar_img"></img>');
                    modal.find('#input-user-image-edit').val('');

                    if (user.active == 'S') {
                        modal.find('#edit-user-status-checkbox').prop('checked', true);
                        $('#txt-edit-description-user').html('Activo');
                    } else {
                        modal.find('#edit-user-status-checkbox').prop('checked', false);
                        $('#txt-edit-description-user').html('Inactivo');
                    }

                    if (data.isAuth) {
                        selectRole.attr('readonly', true)
                    } else {
                        selectRole.removeAttr('readonly')
                    } 
                },
                complete: function (data) {
                    modal.modal('toggle')
                },
                error: function (data) {
                    console.log(data)
                }
            })
        })


        /* ----------- ELIMINAR ---------------*/

        $('.main-content').on('click', '.deleteUser', function () {
            var url = $(this).data('url')

            SwalDelete.fire().then(function (e) {
                if (e.value === true) {
                    $.ajax({
                        type: 'DELETE',
                        url: url,
                        dataType: 'JSON',
                        success: function (result) {
                            if (result.success === true) {
                                usersTable.ajax.reload(null, false)
                                Toast.fire({
                                    icon: 'success',
                                    text: '¡Registro eliminado!',
                                })
                            }
                        },
                        error: function (result) {
                            Toast.fire({
                                icon: 'error',
                                title: '¡Ocurrió un error inesperado!',
                            });
                        }
                    });
                } else {
                    e.dismiss;
                }
            }, function (dismiss) {
                return false;
            });
        })



        // ----------- REGISTRO MASIVO -----------


        var registerUserMassiveForm = $('#registerUserMassiveForm').validate({
            rules: {
                file: {
                    required: true,
                },
            },
            submitHandler: function (form, event) {
                event.preventDefault()
                var form = $(form)
                var loadSpinner = form.find('.loadSpinner')
                var modal = $('#RegisterUserMassiveModal')

                loadSpinner.toggleClass('active')
                form.find('.btn-save').attr('disabled', 'disabled')

                var formData = new FormData(form[0])

                $.ajax({
                    method: form.attr('method'),
                    url: form.attr('action'),
                    data: formData,
                    processData: false,
                    contentType: false,
                    dataType: 'JSON',
                    success: function (data) {

                        if (data.success) {

                            usersTable.ajax.reload(null, false)

                            registerUserMassiveForm.resetForm()
                            form.trigger('reset')
                            modal.modal('hide')

                            Toast.fire({
                                icon: 'success',
                                text: data.message
                            }).then((result) => {
                                if (result.dismiss === Swal.DismissReason.timer) {
                                    if (data.foundDuplicates) {
                                        var notebody = $('<ul/>')
                                        $.each(data.notebody, function (key, values) {
                                            var sub_li = $('<li/>').html(values)
                                            notebody.append(sub_li)
                                        })

                                        Swal.fire({
                                            toast: true,
                                            position: 'top-end',
                                            showConfirmButton: true,
                                            timerProgressBar: false,
                                            icon: 'warning',
                                            title: data.note,
                                            html: notebody[0].outerHTML
                                        })
                                    }
                                }
                            })
                        }
                        else {
                            Toast.fire({
                                icon: 'error',
                                text: data.message
                            })
                        }

                    },
                    complete: function (data) {
                        form.find('.btn-save').removeAttr('disabled')
                        loadSpinner.toggleClass('active')
                    },
                    error: function (data) {
                        console.log(data)
                        ToastError.fire()
                    }
                })
            }
        })


    }

    if ($('#ownerCompanies-table').length) {

        var ownerCompaniesTableEle = $('#ownerCompanies-table');
        var getDataUrl = ownerCompaniesTableEle.data('url');
        var ownerCompaniesTable = ownerCompaniesTableEle.DataTable({
            responsive: true,
            language: DataTableEs,
            serverSide: true,
            processing: true,
            ajax: getDataUrl,
            columns: [
                { data: 'id', name: 'id' },
                { data: 'name', name: 'name' },
                { data: 'created_at', name: 'created_at' },
                { data: 'action', name: 'action', orderable: false, searchable: false },
            ]
        });


        /* ------------ REGISTRAR -------------*/

        var registerOwnerCompanyForm = $('#registerCompanyForm').validate({
            rules: {
                name: {
                    required: true,
                    maxlength: 50,
                    remote: {
                        url: $('#registerCompanyForm').data('validate'),
                        method: $('#registerCompanyForm').attr('method'),
                        dataType: 'JSON',
                        data: {
                            name: function () {
                                return $('#registerCompanyForm').find('input[name=name]').val()
                            }
                        }
                    }
                }
            },
            messages: {
                name: {
                    remote: 'Esta empresa titular ya está registrada'
                }
            },
            submitHandler: function (form, event) {
                event.preventDefault()
                var form = $(form)
                var loadSpinner = form.find('.loadSpinner')
                var modal = $('#RegisterCompanyModal')

                loadSpinner.toggleClass('active')

                $.ajax({
                    method: form.attr('method'),
                    url: form.attr('action'),
                    data: form.serialize(),
                    dataType: 'JSON',
                    success: function (data) {
                        registerOwnerCompanyForm.resetForm()
                        ownerCompaniesTable.draw()
                        form.trigger('reset')
                        loadSpinner.toggleClass('active')
                        modal.modal('toggle')
                        Toast.fire({
                            icon: 'success',
                            text: '¡Registrado exitosamente!'
                        })
                    },
                    error: function (data) {
                        console.log(data)
                    }
                })
            }
        })


        /* -------------- EDITAR  ---------------*/

        var editOwnerCompanyForm = $('#EditCompanyForm').validate({
            rules: {
                name: {
                    required: true,
                    maxlength: 50,
                    remote: {
                        url: $('#EditCompanyForm').data('validate'),
                        method: $('#EditCompanyForm').attr('method'),
                        dataType: 'JSON',
                        data: {
                            name: function () {
                                return $('#EditCompanyForm').find('input[name=name]').val()
                            },
                            id: function () {
                                return $('#EditCompanyForm').find('input[name=id]').val()
                            }
                        }
                    }
                }

            },
            messages: {
                dni: {
                    remote: 'Esta empresa titular ya está registrada'
                }
            },
            submitHandler: function (form, event) {
                event.preventDefault()
                var form = $(form)
                var loadSpinner = form.find('.loadSpinner')
                var modal = $('#EditCompanyModal')

                loadSpinner.toggleClass('active')

                $.ajax({
                    method: form.attr('method'),
                    url: form.attr('action'),
                    data: form.serialize(),
                    dataType: 'JSON',
                    success: function (data) {
                        editOwnerCompanyForm.resetForm()
                        ownerCompaniesTable.draw()
                        form.trigger('reset')
                        loadSpinner.toggleClass('active')
                        modal.modal('toggle')
                        Toast.fire({
                            icon: 'success',
                            text: '¡Registro actualizado!'
                        })
                    },
                    error: function (data) {
                        console.log(data)
                    }
                })
            }
        })

        $('.main-content').on('click', '.editCompany', function () {
            var modal = $('#EditCompanyModal')
            var getDataUrl = $(this).data('send')
            var url = $(this).data('url')
            var form = modal.find('#EditCompanyForm')

            editOwnerCompanyForm.resetForm()
            form.trigger('reset')

            form.attr('action', url)

            $.ajax({
                type: 'GET',
                url: getDataUrl,
                dataType: 'JSON',
                success: function (data) {
                    modal.find('input[name=id]').val(data.id);
                    modal.find('input[name=name]').val(data.name);
                },
                complete: function (data) {
                    modal.modal('toggle')
                },
                error: function (data) {
                    console.log(data)
                }
            })
        })


        /* ----------- ELIMINAR ---------------*/

        $('.main-content').on('click', '.deleteCompany', function () {
            var url = $(this).data('url')

            SwalDelete.fire().then(function (e) {
                if (e.value === true) {
                    $.ajax({
                        type: 'DELETE',
                        url: url,
                        dataType: 'JSON',
                        success: function (result) {
                            if (result.success === true) {
                                ownerCompaniesTable.draw();
                                Toast.fire({
                                    icon: 'success',
                                    text: '¡Registro eliminado!',
                                })
                            }
                        },
                        error: function (result) {
                            Toast.fire({
                                icon: 'error',
                                title: '¡Ocurrió un error inesperado!',
                            });
                        }
                    });
                } else {
                    e.dismiss;
                }
            }, function (dismiss) {
                return false;
            });
        })
    }

    if ($('#mining-units-table').length) {

        var miningUnitTableEle = $('#mining-units-table');
        var getDataUrl = miningUnitTableEle.data('url');
        var miningUnitsTable = miningUnitTableEle.DataTable({
            responsive: true,
            language: DataTableEs,
            serverSide: true,
            processing: true,
            ajax: getDataUrl,
            columns: [
                { data: 'id', name: 'id' },
                { data: 'description', name: 'description' },
                { data: 'owner', name: 'owner' },
                { data: 'district', name: 'district' },
                { data: 'Province', name: 'Province' },
                { data: 'action', name: 'action', orderable: false, searchable: false },
            ]
        });

        /* ------------ REGISTRAR -------------*/

        var registerMiningUnitForm = $('#registerMiningUnitForm').validate({
            rules: {
                description: {
                    required: true,
                }
            },
            submitHandler: function (form, event) {
                event.preventDefault()
                var form = $(form)
                var loadSpinner = form.find('.loadSpinner')
                var modal = $('#RegisterMiningUnitModal')

                loadSpinner.toggleClass('active')

                $.ajax({
                    method: form.attr('method'),
                    url: form.attr('action'),
                    data: form.serialize(),
                    dataType: 'JSON',
                    success: function (data) {
                        registerMiningUnitForm.resetForm()
                        miningUnitsTable.draw()
                        form.trigger('reset')
                        loadSpinner.toggleClass('active')
                        modal.modal('toggle')
                        Toast.fire({
                            icon: 'success',
                            text: '¡Registrado exitosamente!'
                        })
                    },
                    error: function (data) {
                        console.log(data)
                    }
                })
            }
        })


        /* ---------------- EDITAR -----------------*/

        var editMiningUnitForm = $('#editMiningUnitForm').validate({
            rules: {
                description: {
                    required: true,
                }
            },
            submitHandler: function (form, event) {
                event.preventDefault()
                var form = $(form)
                var loadSpinner = form.find('.loadSpinner')
                var modal = $('#editMiningUnitModal')

                loadSpinner.toggleClass('active')

                $.ajax({
                    method: form.attr('method'),
                    url: form.attr('action'),
                    data: form.serialize(),
                    dataType: 'JSON',
                    success: function (data) {
                        editMiningUnitForm.resetForm()
                        miningUnitsTable.draw()
                        form.trigger('reset')
                        loadSpinner.toggleClass('active')
                        modal.modal('toggle')
                        Toast.fire({
                            icon: 'success',
                            text: '¡Registro actualizado!'
                        })
                    },
                    error: function (data) {
                        ToastError.fire()
                        // console.log(data)
                    }
                })
            }
        })

        $('.main-content').on('click', '.editMiningUnit', function () {
            var button = $(this)
            var modal = $('#editMiningUnitModal')
            var form = modal.find('#editMiningUnitForm')
            var getDataUrl = button.data('send')
            var url = button.data('url')

            editMiningUnitForm.resetForm()
            form.trigger('reset')
            form.attr('action', url)

            $.ajax({
                type: 'GET',
                url: getDataUrl,
                dataType: 'JSON',
                success: function (data) {

                    form.find('input[name=description]').val(data.description)
                    form.find('input[name=owner]').val(data.owner)
                    form.find('input[name=district]').val(data.district)
                    form.find('input[name=Province]').val(data.Province)

                },
                complete: function (data) {
                    modal.modal('toggle')
                },
                error: function (data) {
                    console.log(data)
                }
            })

        })

        /* ----------- ELIMINAR ---------------*/

        $('.main-content').on('click', '.deleteMiningUnit', function () {
            var url = $(this).data('url')

            SwalDelete.fire().then(function (e) {
                if (e.value === true) {
                    $.ajax({
                        type: 'DELETE',
                        url: url,
                        dataType: 'JSON',
                        success: function (result) {
                            if (result.success === true) {
                                miningUnitsTable.draw();
                                Toast.fire({
                                    icon: 'success',
                                    text: '¡Registro eliminado!',
                                })
                            }
                        },
                        error: function (result) {
                            ToastError.fire()
                        }
                    });
                } else {
                    e.dismiss;
                }
            }, function (dismiss) {
                return false;
            });
        })

    }

    if ($('#coursetypes-table').length) {

        var coursestypesTableEle = $('#coursetypes-table');
        var getDataUrl = coursestypesTableEle.data('url');
        var coursetypesTable = coursestypesTableEle.DataTable({
            responsive: true,
            language: DataTableEs,
            serverSide: true,
            processing: true,
            ajax: getDataUrl,
            columns: [
                { data: 'id', name: 'id' },
                { data: 'name', name: 'name' },
                { data: 'description', name: 'description' },
                { data: 'created_at', name: 'created_at' },
                { data: 'updated_at', name: 'updated_at' },
                { data: 'action', name: 'action', orderable: false, searchable: false },
            ]
        });

        // ------------- REGISTRAR ---------------

        var registerCoursetypeForm = $('#registerCoursetypeForm').validate({
            rules: {
                name: {
                    required: true,
                    maxlength: 255
                },
                description: {
                    maxlength: 255
                },
            },
            submitHandler: function (form, event) {
                event.preventDefault()

                var form = $(form)
                var loadSpinner = form.find('.loadSpinner')
                var modal = $('#RegisterCoursetypeModal')

                loadSpinner.toggleClass('active')
                form.find('.btn-save').attr('disabled', 'disabled')

                var formData = new FormData(form[0])

                $.ajax({
                    method: form.attr('method'),
                    url: form.attr('action'),
                    data: formData,
                    processData: false,
                    contentType: false,
                    dataType: 'JSON',
                    success: function (data) {

                        if (data.success) {
                            registerCoursetypeForm.resetForm()
                            form.trigger('reset')
                            coursetypesTable.ajax.reload(null, false)
                            modal.modal('hide')
    
                            Toast.fire({
                                icon: 'success',
                                text: data.message
                            })
                        }
                        else {
                            Toast.fire({
                                icon: 'error',
                                text: data.message
                            })
                        }
                    },
                    complete: function (data) {
                        loadSpinner.toggleClass('active')
                        form.find('.btn-save').removeAttr('disabled')
                    },
                    error: function (data) {
                        console.log(data)
                        ToastError.fire()
                    }
                })
            }
        })

        // ----------- EDIT --------------

        var editCoursetypeForm = $('#editCoursetypeForm').validate({
            rules: {
                name: {
                    required: true,
                    maxlength: 255
                },
                description: {
                    maxlength: 255
                },
            },
            submitHandler: function (form, event) {
                event.preventDefault()
                var form = $(form)
                var loadSpinner = form.find('.loadSpinner')
                var modal = $('#EditCoursetypeModal')

                loadSpinner.toggleClass('active')
                form.find('.btn-save').attr('disabled', 'disabled')

                var formData = new FormData(form[0])

                $.ajax({
                    method: form.attr('method'),
                    url: form.attr('action'),
                    data: formData,
                    processData: false,
                    contentType: false,
                    dataType: 'JSON',
                    success: function (data) {

                        if (data.success) {

                            editCoursetypeForm.resetForm()
                            coursetypesTable.ajax.reload(null, false)
                           
                            modal.modal('hide')
    
                            Toast.fire({
                                icon: 'success',
                                text: data.message
                            })
                        }
                        else {
                            Toast.fire({
                                icon: 'error',
                                text: data.message
                            })
                        }
                    },
                    complete: function (data) {
                        loadSpinner.toggleClass('active')
                        form.find('.btn-save').removeAttr('disabled')
                    },
                    error: function (data) {
                        console.log(data)
                        ToastError.fire()
                    }
                })
            }
        })

        $('html').on('click', '.editCoursetype', function () {

            var modal = $('#EditCoursetypeModal')
            var getDataUrl = $(this).data('send')
            var url = $(this).data('url')
            var form = modal.find('#editCoursetypeForm')

            editCoursetypeForm.resetForm()
            form.trigger('reset')

            form.attr('action', url)

            $.ajax({
                type: 'GET',
                url: getDataUrl,
                dataType: 'JSON',
                success: function (data) {

                    let coursetype = data.coursetype

                    form.find('input[name=name]').val(coursetype.name)
                    form.find('input[name=description]').val(coursetype.description)

                },
                complete: function (data) {
                    modal.modal('show')
                },
                error: function (data) {
                    console.log(data)
                }
            })
        })

        // -------- DELETE ---------

        $('html').on('click', '.deleteCoursetype', function () {
            var url = $(this).data('url')

            SwalDelete.fire().then(function (e) {
                if (e.value === true) {
                    $.ajax({
                        type: 'DELETE',
                        url: url,
                        dataType: 'JSON',
                        success: function (data) {
                            if (data.success) {
                                coursetypesTable.ajax.reload(null, false)
                                Toast.fire({
                                    icon: 'success',
                                    text: data.message
                                })
                            }
                            else {
                                Toast.fire({
                                    icon: 'error',
                                    text: data.message
                                })
                            }
                        },
                        error: function (result) {
                            ToastError.fire()
                        }
                    });
                } else {
                    e.dismiss;
                }
            }, function (dismiss) {
                return false;
            });
        })
    }

    if ($('#courses-table').length) {

        function initTypeSelect (select, parent) {
            select.select2({
                dropdownParent: parent,
                placeholder: 'Selecciona un tipo',
                allowClear: true,
                minimumResultsForSearch: -1
            })
        }

        var coursesTableEle = $('#courses-table');
        var getDataUrl = coursesTableEle.data('url');
        var coursesTable = coursesTableEle.DataTable({
            responsive: true,
            language: DataTableEs,
            serverSide: true,
            processing: true,
            ajax: getDataUrl,
            columns: [
                { data: 'id', name: 'id' },
                { data: 'course_type_id', name: 'course_type_id' },
                { data: 'description', name: 'description' },
                { data: 'subtitle', name: 'subtitle' },
                { data: 'date', name: 'date' },
                { data: 'time_start', name: 'time_start' },
                { data: 'time_end', name: 'time_end' },
                { data: 'active', name: 'active' },
                { data: 'action', name: 'action', orderable: false, searchable: false },
            ]
        });

        /* ----------- REGISTER --------------*/

        var formRegister = $('#registerCourseForm')
        initTypeSelect(formRegister.find('.coursetype_select'), formRegister);

        var courseImageRegister = $("#course-image-register");
        courseImageRegister.val('');
        courseImageRegister.on("change", function () {
            var img_path = $(this)[0].value;
            var img_holder = $(this).closest('#registerCourseForm').find('.img-holder');
            var img_extension = img_path.substring(img_path.lastIndexOf('.') + 1).toLowerCase();

            if (img_extension == 'jpeg' || img_extension == 'jpg' || img_extension == 'png') {
                if (typeof (FileReader) != 'undefined') {
                    img_holder.empty()
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        $('<img/>', { 'src': e.target.result, 'class': 'img-fluid course_img' }).
                            appendTo(img_holder);
                    }
                    img_holder.show();
                    reader.readAsDataURL($(this)[0].files[0]);
                } else {
                    $(img_holder).html('Este navegador no soporta Lector de Archivos');
                }
            } else {
                $(img_holder).empty();
                Toast.fire({
                    icon: 'warning',
                    title: '¡Selecciona una imagen!'
                });
            }
        })

        $('#register-course-status-checkbox').change(function () {
            var txtDesc = $('#txt-register-description-course');
            if (this.checked) {
                txtDesc.html('Activo');
            } else {
                txtDesc.html('Inactivo')
            }
        });

        var registerCourseForm = $('#registerCourseForm').validate({
            rules: {
                description: {
                    required: true,
                    maxlength: 255
                },
                subtitle: {
                    maxlength: 255
                },
                date: {
                    required: true
                },
                hours: {
                    required: true,
                    number: true,
                    step: 0.1
                },
                time_start: {
                    required: true
                },
                time_end: {
                    required: true
                }
            },
            submitHandler: function (form, event) {
                event.preventDefault()

                var form = $(form)
                var loadSpinner = form.find('.loadSpinner')
                var modal = $('#RegisterCourseModal')
                var img_holder = form.find('.img-holder')

                loadSpinner.toggleClass('active')
                form.find('.btn-save').attr('disabled', 'disabled')
                var formData = new FormData(form[0])

                $.ajax({
                    method: form.attr('method'),
                    url: form.attr('action'),
                    data: formData,
                    processData: false,
                    contentType: false,
                    dataType: 'JSON',
                    success: function (data) {

                        if (data.success) {

                            registerCourseForm.resetForm()
                            coursesTable.draw()
                            $(img_holder).empty()
                            modal.modal('hide')
                            form.find('input[name=description]').val('')
                            form.find('input[name=subtitle]').val('')
                            form.find('input[name=hours]').val('')
    
                            Toast.fire({
                                icon: 'success',
                                text: data.message
                            })
                        }
                        else {
                            Toast.fire({
                                icon: 'error',
                                text: data.message
                            })
                        }

                    },
                    complete: function (data) {
                        loadSpinner.toggleClass('active')
                        form.find('.btn-save').removeAttr('disabled')
                    },
                    error: function (data) {
                        console.log(data)
                        ToastError.fire()
                    }
                })
            }
        })

        /* -------------- EDIT  ---------------*/

        var formEdit = $('#editCourseForm')
        initTypeSelect(formEdit.find('.coursetype_select'), formEdit);

        $('#edit-course-status-checkbox').change(function () {
            var txtDesc = $('#txt-edit-description-course');
            if (this.checked) {
                txtDesc.html('Activo');
            } else {
                txtDesc.html('Inactivo')
            }
        });

        var inputCourseEdit = $('#input-course-image-update');
        inputCourseEdit.on("change", function () {
            var img_path = $(this)[0].value;
            var img_holder = $(this).closest('#editCourseForm').find('.img-holder');
            var currentImagePath = $(this).data('value');
            var img_extension = img_path.substring(img_path.lastIndexOf('.') + 1).toLowerCase();

            if (img_extension == 'jpeg' || img_extension == 'jpg' || img_extension == 'png') {
                if (typeof (FileReader) != 'undefined') {
                    img_holder.empty()
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        $('<img/>', { 'src': e.target.result, 'class': 'img-fluid course_img' }).
                            appendTo(img_holder);
                    }
                    img_holder.show();
                    reader.readAsDataURL($(this)[0].files[0]);
                } else {
                    $(img_holder).html('Este navegador no soporta Lector de Archivos');
                }
            } else {
                $(img_holder).html(currentImagePath);
                Toast.fire({
                    icon: 'warning',
                    title: '¡Selecciona una imagen!',
                });
            }

        })

        var editCourseForm = $('#editCourseForm').validate({
            rules: {
                description: {
                    required: true,
                    maxlength: 255
                },
                subtitle: {
                    maxlength: 255
                },
                date: {
                    required: true
                },
                hours: {
                    required: true,
                    number: true,
                    step: 0.1
                },
                time_start: {
                    required: true
                },
                time_end: {
                    required: true
                }
            },
            submitHandler: function (form, event) {
                event.preventDefault()
                var form = $(form)
                var loadSpinner = form.find('.loadSpinner')
                var modal = $('#editCourseModal')
                var img_holder = form.find('.img-holder')

                loadSpinner.toggleClass('active')
                form.find('.btn-save').attr('disabled', 'disabled')
                var formData = new FormData(form[0])

                $.ajax({
                    method: form.attr('method'),
                    url: form.attr('action'),
                    data: formData,
                    processData: false,
                    contentType: false,
                    dataType: 'JSON',
                    success: function (data) {

                        if (data.success) {
                            editCourseForm.resetForm()
                            coursesTable.ajax.reload(null, false)
                            modal.modal('hide')
    
                            $(img_holder).empty()
    
                            Toast.fire({
                                icon: 'success',
                                text: data.message
                            })
                        }
                        else {
                            Toast.fire({
                                icon: 'error',
                                text: data.message
                            })
                        }
                        
                    },
                    complete: function (data) {
                        loadSpinner.toggleClass('active')
                        form.find('.btn-save').removeAttr('disabled')
                    },
                    error: function (data) {
                        console.log(data)
                        ToastError.fire()
                    }
                })
            }
        })

        $('.main-content').on('click', '.editCourse', function () {
            var modal = $('#editCourseModal')
            var getDataUrl = $(this).data('send')
            var url = $(this).data('url')
            var form = modal.find('#editCourseForm')

            editCourseForm.resetForm()
            form.trigger('reset')

            form.attr('action', url)

            $.ajax({
                type: 'GET',
                url: getDataUrl,
                dataType: 'JSON',
                success: function (data) {

                    let typeSelect = form.find('.coursetype_select')
                    typeSelect.val(data.course_type_id).change();

                    modal.find('input[name=id]').val(data.id);
                    modal.find('input[name=description]').val(data.name);
                    modal.find('input[name=subtitle]').val(data.subtitle);
                    modal.find('input[name=date]').val(data.date);
                    modal.find('input[name=hours]').val(data.hours);
                    modal.find('input[name=time_start]').val(data.time_start);
                    modal.find('input[name=time_end]').val(data.time_end);
                    modal.find('.img-holder').html('<img class="img-fluid course_img" id="image-course-edit" src="' + data.url_img + '"></img>');
                    modal.find('#input-course-image-update').attr('data-value', '<img scr="' + data.url_img + '" class="img-fluid course_img"');
                    modal.find('#input-course-image-update').val('');

                    if (data.status == 'S') {
                        modal.find('#edit-course-status-checkbox').prop('checked', true);
                        $('#txt-edit-description-course').html('Activo');
                    } else {
                        modal.find('#edit-course-status-checkbox').prop('checked', false);
                        $('#txt-edit-description-course').html('Inactivo');
                    }
                },
                complete: function (data) {
                    modal.modal('toggle')
                },
                error: function (data) {
                    console.log(data)
                }
            })
        })

        /* ----------- DELETE ---------------*/

        $('.main-content').on('click', '.deleteCourse', function () {
            var url = $(this).data('url')

            SwalDelete.fire().then(function (e) {
                if (e.value === true) {
                    $.ajax({
                        type: 'DELETE',
                        url: url,
                        dataType: 'JSON',
                        success: function (result) {
                            if (result.success === true) {
                                coursesTable.ajax.reload(null, false)
                                Toast.fire({
                                    icon: 'success',
                                    text: '¡Registro eliminado!',
                                })
                            }
                        },
                        error: function (result) {
                            Toast.fire({
                                icon: 'error',
                                title: '¡Ocurrió un error inesperado!',
                            });
                        }
                    });
                } else {
                    e.dismiss;
                }
            }, function (dismiss) {
                return false;
            });
        })

    }

    if ($('#files-folder-course-table').length) {

        var filesTableEle = $('#files-folder-course-table');
        var getDataUrl = filesTableEle.data('url');
        var filesTable = filesTableEle.DataTable({
            responsive: true,
            language: DataTableEs,
            serverSide: true,
            processing: true,
            ajax: getDataUrl,
            columns: [
                { data: 'id', name: 'id' },
                { data: 'filename', name: 'filename', orderable: false },
                { data: 'file_type', name: 'file_type' },
                { data: 'category', name: 'category' },
                { data: 'parent_folder', name: 'parent_folder', orderable: false },
                { data: 'created_at', name: 'created_at' },
                { data: 'updated_at', name: 'updated_at' },
                { data: 'action', name: 'action', orderable: false, searchable: false },
            ]
        });

        $('.main-content').on('click', '.deleteFile', function () {
            var url = $(this).data('url')

            SwalDelete.fire().then(function (e) {
                if (e.value === true) {
                    $.ajax({
                        type: 'DELETE',
                        url: url,
                        dataType: 'JSON',
                        success: function (result) {
                            if (result.success === true) {
                                filesTable.draw();
                                Toast.fire({
                                    icon: 'success',
                                    text: '¡Archivo eliminado!',
                                })
                            }
                        },
                        error: function (result) {
                            Toast.fire({
                                icon: 'error',
                                title: '¡Ocurrió un error inesperado!',
                            });
                        }
                    });
                } else {
                    e.dismiss;
                }
            }, function (dismiss) {
                return false;
            });
        })

        $('#btn-destroy-folder').on('click', function (e) {
            e.preventDefault()
            var form = $('#delete-folder-form')

            Swal.fire({
                title: '¿Eliminar carpeta?',
                text: "¡Esto eliminará todo el contenido de la carpeta!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: '¡Sí!',
                cancelButtonText: 'Cancelar',
                reverseButtons: true,
            }).then(function (e) {
                if (e.value === true) {
                    form.submit();
                } else {
                    e.dismiss;
                }
            }, function (dismiss) {
                return false;
            });
        })
    }







    /*-------- FREECOURSES INDEX --------*/


    if ($('#freeCourses-table').length) {

        /* ----- FREECOURSES TABLE ------*/

        var freeCoursesTableEle = $('#freeCourses-table');
        var getDataUrl = freeCoursesTableEle.data('url');
        var freeCoursesTable = freeCoursesTableEle.DataTable({
            responsive: true,
            language: DataTableEs,
            serverSide: true,
            processing: true,
            ajax: getDataUrl,
            columns: [
                { data: 'id', name: 'id' },
                { data: 'description', name: 'description' },
                { data: 'subtitle', name: 'subtitle' },
                { data: 'course_category.description', name: 'courseCategory.description', orderable: false },
                { data: 'sections', name: 'sections', orderable: false },
                { data: 'chapters', name: 'chapters', orderable: false },
                { data: 'duration', name: 'duration', orderable: false },
                { data: 'active', name: 'active', orderable: false, searchable: false },
                { data: 'recom', name: 'recom', orderable: false, searchable: false, className: 'text-center' },
            ],
            // dom: 'rtip'
        });



        /*------- CATEGORIES ----------*/

        /* ------- REGISTER ----------*/

        $('#register-category-status-checkbox').change(function () {
            var txtDesc = $('#txt-register-description-category');
            if (this.checked) {
                txtDesc.html('Activo');
            } else {
                txtDesc.html('Inactivo')
            }
        });

        var categoryImageRegister = $('#input-category-image-register');
        categoryImageRegister.val('');
        categoryImageRegister.on("change", function () {
            var img_path = $(this)[0].value;
            var img_holder = $(this).closest('#registerCategoryForm').find('.img-holder');
            var img_extension = img_path.substring(img_path.lastIndexOf('.') + 1).toLowerCase();

            if (img_extension == 'jpeg' || img_extension == 'jpg' || img_extension == 'png') {
                if (typeof (FileReader) != 'undefined') {
                    img_holder.empty()
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        $('<img/>', { 'src': e.target.result, 'class': 'img-fluid category_img' }).
                            appendTo(img_holder);
                    }
                    img_holder.show();
                    reader.readAsDataURL($(this)[0].files[0]);
                } else {
                    $(img_holder).html('Este navegador no soporta Lector de Archivos');
                }
            } else {
                $(img_holder).empty();
                categoryImageRegister.val('')
                Toast.fire({
                    icon: 'warning',
                    title: '¡Selecciona una imagen!'
                });
            }
        })


        var registerCategoryForm = $('#registerCategoryForm').validate({
            rules: {
                description: {
                    required: true,
                    maxlength: 100
                },
                image: {
                    required: true
                }
            },
            submitHandler: function (form, event) {
                event.preventDefault()

                var form = $(form)
                var loadSpinner = form.find('.loadSpinner')
                var modal = $('#RegisterCategoryModal')
                var img_holder = form.find('.img-holder')


                loadSpinner.toggleClass('active')

                var formData = new FormData(form[0])

                $.ajax({
                    method: form.attr('method'),
                    url: form.attr('action'),
                    data: formData,
                    processData: false,
                    contentType: false,
                    dataType: 'JSON',
                    success: function (data) {

                        var listContainer = $('#categories-list-container')
                        listContainer.html(data.html)
                        categoryImageRegister.val('')
                        registerCategoryForm.resetForm()
                        loadSpinner.toggleClass('active')

                        $(img_holder).empty()
                        modal.modal('toggle')
                        form.find('input[name=description]').val('')
                        Toast.fire({
                            icon: 'success',
                            text: '¡Registrado exitosamente!'
                        })
                    },
                    error: function (data) {
                        console.log(data)
                    }
                })
            }
        })


        /* ---------- EDIT -----------*/


        $('#edit-category-status-checkbox').change(function () {
            var txtDesc = $('#txt-edit-description-category');
            if (this.checked) {
                txtDesc.html('Activo');
            } else {
                txtDesc.html('Inactivo')
            }
        });

        var editCategoryForm = $('#editCategoryForm').validate({
            rules: {
                description: {
                    required: true,
                    maxlength: 100
                }
            },
            submitHandler: function (form, event) {
                event.preventDefault()
                var form = $(form)
                var loadSpinner = form.find('.loadSpinner')
                var modal = $('#editCategoryModal')
                var img_holder = form.find('.img-holder')

                loadSpinner.toggleClass('active')

                var formData = new FormData(form[0])

                $.ajax({
                    method: form.attr('method'),
                    url: form.attr('action'),
                    data: formData,
                    processData: false,
                    contentType: false,
                    dataType: 'JSON',
                    success: function (data) {

                        var listContainer = $('#categories-list-container')
                        listContainer.html(data.html)
                        freeCoursesTable.draw()
                        editCategoryForm.resetForm()

                        loadSpinner.toggleClass('active')
                        modal.modal('toggle')

                        $(img_holder).empty()

                        Toast.fire({
                            icon: 'success',
                            text: '¡Registro actualizado!'
                        })
                    },
                    error: function (data) {
                        console.log(data)
                    }
                })
            }
        })

        var inputCategoryEdit = $('#image-upload-category-edit');
        inputCategoryEdit.on("change", function () {
            $('#editCategoryForm').validate()
            $('#image-upload-category-edit').rules('add', { required: true })

            var img_path = $(this)[0].value;
            var img_holder = $(this).closest('#editCategoryForm').find('.img-holder');
            var currentImagePath = $(this).data('value');
            var img_extension = img_path.substring(img_path.lastIndexOf('.') + 1).toLowerCase();

            if (img_extension == 'jpeg' || img_extension == 'jpg' || img_extension == 'png') {
                if (typeof (FileReader) != 'undefined') {
                    img_holder.empty()
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        $('<img/>', { 'src': e.target.result, 'class': 'img-fluid category_img' }).
                            appendTo(img_holder);
                    }
                    img_holder.show();
                    reader.readAsDataURL($(this)[0].files[0]);
                } else {
                    $(img_holder).html('Este navegador no soporta Lector de Archivos');
                }
            } else {
                $(img_holder).html(currentImagePath);
                inputCategoryEdit.val('')
                Toast.fire({
                    icon: 'warning',
                    title: '¡Selecciona una imagen!',
                });
            }

        })


        $('.main-content').on('click', '.editCategory-btn', function () {
            var modal = $('#editCategoryModal')
            var getDataUrl = $(this).data('send')
            var url = $(this).data('url')
            var form = modal.find('#editCategoryForm')

            $('#editCategoryForm').validate()
            $('#image-upload-category-edit').rules('remove', 'required')

            editCategoryForm.resetForm()
            form.trigger('reset')

            form.attr('action', url)

            $.ajax({
                type: 'GET',
                url: getDataUrl,
                dataType: 'JSON',
                success: function (data) {

                    modal.find('input[name=description]').val(data.description);
                    modal.find('.img-holder').html('<img class="img-fluid course_img" id="image-category-edit" src="' + data.url_img + '"></img>');
                    modal.find('#image-upload-category-edit').attr('data-value', '<img scr="' + data.url_img + '" class="img-fluid category_img"');
                    modal.find('#image-upload-category-edit').val('');

                    if (data.status == 'S') {
                        modal.find('#edit-category-status-checkbox').prop('checked', true);
                        $('#txt-edit-description-category').html('Activo');
                    } else {
                        modal.find('#edit-category-status-checkbox').prop('checked', false);
                        $('#txt-edit-description-category').html('Inactivo');
                    }
                },
                complete: function (data) {
                    modal.modal('toggle')
                },
                error: function (data) {
                    console.log(data)
                }
            })
        })



        /* ----------- DELETE ---------------*/

        $('.main-content').on('click', '.deleteCategory-btn', function () {
            var url = $(this).data('url')

            SwalDelete.fire().then(function (e) {
                if (e.value === true) {
                    $.ajax({
                        method: 'POST',
                        url: url,
                        dataType: 'JSON',
                        success: function (result) {
                            if (result.success === true) {

                                var listContainer = $('#categories-list-container')
                                listContainer.html(result.html)

                                Toast.fire({
                                    icon: 'success',
                                    text: '¡Registro eliminado!',
                                })
                            }
                        },
                        error: function (result) {
                            Toast.fire({
                                icon: 'error',
                                title: '¡Ocurrió un error inesperado!',
                            });
                        }
                    });
                } else {
                    e.dismiss;
                }
            }, function (dismiss) {
                return false;
            });
        })



        /* ------------  FREE COURSES ------------*/


        /* ----------- SELECT -------------*/

        $('#registerfreeCourseSelect').select2({
            dropdownParent: $("#RegisterfreeCourseModal"),
            placeholder: 'Selecciona una categoría'
        })


        /* ----------- REGISTER -----------*/

        var freeCourseImageRegister = $('#image-freecourse-register');
        freeCourseImageRegister.val('');
        freeCourseImageRegister.on("change", function () {
            var img_path = $(this)[0].value;
            var img_holder = $(this).closest('#registerFreeCourseForm').find('.img-holder');
            var img_extension = img_path.substring(img_path.lastIndexOf('.') + 1).toLowerCase();

            if (img_extension == 'jpeg' || img_extension == 'jpg' || img_extension == 'png') {
                if (typeof (FileReader) != 'undefined') {
                    img_holder.empty()
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        $('<img/>', { 'src': e.target.result, 'class': 'img-fluid freecourse_img' }).
                            appendTo(img_holder);
                    }
                    img_holder.show();
                    reader.readAsDataURL($(this)[0].files[0]);
                } else {
                    $(img_holder).html('Este navegador no soporta Lector de Archivos');
                }
            } else {
                $(img_holder).empty();
                freeCourseImageRegister.val('')
                Toast.fire({
                    icon: 'warning',
                    title: '¡Selecciona una imagen!'
                });
            }
        })


        $('#register-course-status-checkbox').change(function () {
            var txtDesc = $('#txt-register-description-course');
            if (this.checked) {
                txtDesc.html('Activo');
            } else {
                txtDesc.html('Inactivo')
            }
        });

        $('#registerFreeCourseForm button[type=submit]').click(function () {
            $('button[type=submit]', $(this).parents('form')).removeAttr('clicked').removeAttr('name')
            $(this).attr('clicked', 'true').attr('name', 'verifybtn')
        })

        var registerFreeCourseForm = $('#registerFreeCourseForm').validate({
            rules: {
                description: {
                    required: true,
                    maxlength: 255
                },
                subtitle: {
                    maxlength: 255
                },
                category_id: {
                    required: true,
                },
                image: {
                    required: true,
                },
            },
            submitHandler: function (form, event) {
                event.preventDefault()

                var form = $(form)
                var button = form.find('button[type=submit][clicked=true]')
                var loadSpinner = button.find('.loadSpinner')
                var modal = $('#RegisterfreeCourseModal')
                var img_holder = form.find('.img-holder')

                loadSpinner.toggleClass('active')

                form.find('.btn-save').attr('disabled', 'disabled')

                $.ajax({
                    method: form.attr('method'),
                    url: form.attr('action'),
                    data: new FormData(form[0]),
                    processData: false,
                    contentType: false,
                    dataType: 'JSON',
                    success: function (data) {

                        if (data.success) {

                            if (data.show == true) {

                                window.location.href = data.route

                            } else {

                                if ($('#categories-list-container').length) {
                                    var listContainer = $('#categories-list-container')
                                    listContainer.html(data.html)
                                }
                            }

                            $(img_holder).empty()
                            freeCoursesTable.draw()
                            freeCourseImageRegister.val('')

                            Toast.fire({
                                icon: 'success',
                                text: data.message
                            })

                        } else {
                            Toast.fire({
                                icon: 'error',
                                text: data.message
                            })
                        }
                    },
                    complete: function (data) {
                        registerFreeCourseForm.resetForm()
                        form.trigger('reset')
                        loadSpinner.toggleClass('active')
                        form.find('.btn-save').removeAttr('disabled')
                        modal.modal('hide')
                    },
                    error: function (data) {
                        console.log(data)
                        ToastError.fire()
                    }
                })
            }
        })

        $('#btn-register-freecourse-modal').on('click', function () {
            var button = $(this)
            var modal = $('#RegisterfreeCourseModal')
            var loadSpinner = button.find('.loadSpinner')
            var url = button.data('url')
            var select = modal.find('#registerfreeCourseSelect')

            loadSpinner.toggleClass('active')
            button.attr('disabled', 'disabled')
            registerFreeCourseForm.resetForm()
            select.html('')

            $.ajax({
                type: 'GET',
                url: url,
                dataType: 'JSON',
                success: function (data) {
                    var categories = data['categories']
                    select.append('<option></option>')

                    $.each(categories, function (key, values) {
                        select.append('<option value="' + values.id + '">' + values.description + '</option>');
                    })
                },
                complete: function (data) {
                    loadSpinner.toggleClass('active')
                    button.removeAttr('disabled')
                    modal.modal('show')
                },
                error: function (data) {
                    console.log(data)
                }
            })
        })

    }


    /*--------- CATEGORY SHOW ---------*/


    if ($('#freecourse-category-show-table').length) {

        var freeCoursesTableCatShowEle = $('#freecourse-category-show-table');
        var getDataUrl = freeCoursesTableCatShowEle.data('url');
        var freeCoursesCatShowTable = freeCoursesTableCatShowEle.DataTable({
            responsive: true,
            language: DataTableEs,
            serverSide: true,
            processing: true,
            ajax: getDataUrl,
            columns: [
                { data: 'id', name: 'id' },
                { data: 'description', name: 'description' },
                { data: 'subtitle', name: 'subtitle' },
                { data: 'course_category.description', name: 'courseCategory.description', orderable: false },
                { data: 'sections', name: 'sections', orderable: false },
                { data: 'chapters', name: 'chapters', orderable: false },
                { data: 'duration', name: 'duration', orderable: false },
                { data: 'active', name: 'active', orderable: false, searchable: false },
                { data: 'recom', name: 'recom', orderable: false, searchable: false, className: 'text-center' },
            ]
        });


        /* ---------- EDIT -----------*/


        $('#edit-category-status-checkbox').change(function () {
            var txtDesc = $('#txt-edit-description-category');
            if (this.checked) {
                txtDesc.html('Activo');
            } else {
                txtDesc.html('Inactivo')
            }
        });

        var editCategoryForm = $('#editCategoryForm').validate({
            rules: {
                description: {
                    required: true,
                    maxlength: 100
                }
            },
            submitHandler: function (form, event) {
                event.preventDefault()
                var form = $(form)
                var loadSpinner = form.find('.loadSpinner')
                var modal = $('#editCategoryModal')
                var img_holder = form.find('.img-holder')

                loadSpinner.toggleClass('active')

                var formData = new FormData(form[0])

                $.ajax({
                    method: form.attr('method'),
                    url: form.attr('action'),
                    data: formData,
                    processData: false,
                    contentType: false,
                    dataType: 'JSON',
                    success: function (data) {

                        var boxCategory = $('#categorybox-show')
                        var boxDescription = $('#description-span')
                        var modalDescription = $('#category-description-register-modal')
                        boxCategory.html(data.html)
                        boxDescription.html(data.description)
                        modalDescription.html(data.description)
                        freeCoursesCatShowTable.draw()

                        editCategoryForm.resetForm()

                        loadSpinner.toggleClass('active')
                        modal.modal('toggle')

                        $(img_holder).empty()

                        Toast.fire({
                            icon: 'success',
                            text: '¡Registro actualizado!'
                        })
                    },
                    error: function (data) {
                        console.log(data)
                    }
                })
            }
        })

        var inputCategoryEdit = $('#image-upload-category-edit');
        inputCategoryEdit.on("change", function () {
            $('#editCategoryForm').validate()
            $('#image-upload-category-edit').rules('add', { required: true })

            var img_path = $(this)[0].value;
            var img_holder = $(this).closest('#editCategoryForm').find('.img-holder');
            var currentImagePath = $(this).data('value');
            var img_extension = img_path.substring(img_path.lastIndexOf('.') + 1).toLowerCase();

            if (img_extension == 'jpeg' || img_extension == 'jpg' || img_extension == 'png') {
                if (typeof (FileReader) != 'undefined') {
                    img_holder.empty()
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        $('<img/>', { 'src': e.target.result, 'class': 'img-fluid category_img' }).
                            appendTo(img_holder);
                    }
                    img_holder.show();
                    reader.readAsDataURL($(this)[0].files[0]);
                } else {
                    $(img_holder).html('Este navegador no soporta Lector de Archivos');
                }
            } else {
                $(img_holder).html(currentImagePath);
                inputCategoryEdit.val('')
                Toast.fire({
                    icon: 'warning',
                    title: '¡Selecciona una imagen!',
                });
            }

        })


        $('.main-content').on('click', '.editCategory-btn', function () {
            var modal = $('#editCategoryModal')
            var getDataUrl = $(this).data('send')
            var url = $(this).data('url')
            var form = modal.find('#editCategoryForm')

            $('#editCategoryForm').validate()
            $('#image-upload-category-edit').rules('remove', 'required')

            editCategoryForm.resetForm()
            form.trigger('reset')

            form.attr('action', url)

            $.ajax({
                type: 'GET',
                url: getDataUrl,
                dataType: 'JSON',
                success: function (data) {

                    modal.find('input[name=description]').val(data.description);
                    modal.find('.img-holder').html('<img class="img-fluid course_img" id="image-category-edit" src="' + data.url_img + '"></img>');
                    modal.find('#image-upload-category-edit').attr('data-value', '<img scr="' + data.url_img + '" class="img-fluid category_img"></img>');
                    modal.find('#image-upload-category-edit').val('');

                    if (data.status == 'S') {
                        modal.find('#edit-category-status-checkbox').prop('checked', true);
                        $('#txt-edit-description-category').html('Activo');
                    } else {
                        modal.find('#edit-category-status-checkbox').prop('checked', false);
                        $('#txt-edit-description-category').html('Inactivo');
                    }
                },
                complete: function (data) {
                    modal.modal('toggle')
                },
                error: function (data) {
                    console.log(data)
                }
            })
        })


        /* ----------- DELETE ---------------*/

        $('.main-content').on('click', '.deleteCategory-btn', function () {
            var button = $(this)
            var url = button.data('url')
            var place = button.data('place')

            SwalDelete.fire().then(function (e) {
                if (e.value === true) {
                    $.ajax({
                        method: 'POST',
                        url: url,
                        data: {
                            place: place
                        },
                        dataType: 'JSON',
                        success: function (result) {
                            window.location.href = result.route
                        },
                        error: function (result) {
                            Toast.fire({
                                icon: 'error',
                                title: '¡Ocurrió un error inesperado!',
                            });
                        }
                    });
                } else {
                    e.dismiss;
                }
            }, function (dismiss) {
                return false;
            });
        })




        /* -------- FREE COURSE CATEGORY SHOW -------*/

        /*--------- REGISTER -------*/

        var freeCourseImageRegister = $('#image-course-register');
        freeCourseImageRegister.val('');
        freeCourseImageRegister.on("change", function () {
            var img_path = $(this)[0].value;
            var img_holder = $(this).closest('#registerFreeCourseForm').find('.img-holder');
            var img_extension = img_path.substring(img_path.lastIndexOf('.') + 1).toLowerCase();

            if (img_extension == 'jpeg' || img_extension == 'jpg' || img_extension == 'png') {
                if (typeof (FileReader) != 'undefined') {
                    img_holder.empty()
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        $('<img/>', { 'src': e.target.result, 'class': 'img-fluid freecourse_img' }).
                            appendTo(img_holder);
                    }
                    img_holder.show();
                    reader.readAsDataURL($(this)[0].files[0]);
                } else {
                    $(img_holder).html('Este navegador no soporta Lector de Archivos');
                }
            } else {
                $(img_holder).empty();
                freeCourseImageRegister.val('')
                Toast.fire({
                    icon: 'warning',
                    title: '¡Selecciona una imagen!'
                });
            }
        })

        $('#register-course-status-checkbox').change(function () {
            var txtDesc = $('#txt-register-description-course');
            if (this.checked) {
                txtDesc.html('Activo');
            } else {
                txtDesc.html('Inactivo')
            }
        });

        $('#registerFreeCourseForm button[type=submit]').click(function () {
            $('button[type=submit]', $(this).parents('form')).removeAttr('clicked').removeAttr('name')
            $(this).attr('clicked', 'true').attr('name', 'verifybtn')
        })

        var registerFreeCourseForm = $('#registerFreeCourseForm').validate({
            rules: {
                description: {
                    required: true,
                    maxlength: 255
                },
                subtitle: {
                    maxlength: 255
                },
                image: {
                    required: true,
                },
                category_id: {
                    required: true
                }
            },
            submitHandler: function (form, event) {
                event.preventDefault()

                var form = $(form)
                var button = form.find('button[type=submit][clicked=true]')
                var loadSpinner = button.find('.loadSpinner')
                var modal = $('#RegisterfreeCourseModal')
                var img_holder = form.find('.img-holder')

                loadSpinner.toggleClass('active')
                form.find('.btn_save').attr('disabled', 'disabled')

                $.ajax({
                    method: form.attr('method'),
                    url: form.attr('action'),
                    data: new FormData(form[0]),
                    processData: false,
                    contentType: false,
                    dataType: 'JSON',
                    success: function (data) {

                        registerFreeCourseForm.resetForm()

                        if (data.success) {

                            if (data.show == true) {

                                window.location.href = data.route
                            }
                            else {
                                var boxCategory = $('#categorybox-show')
                                boxCategory.html(data.html)
                            }

                            $(img_holder).empty()

                            freeCoursesCatShowTable.draw()
                            form.trigger('reset')
                            freeCourseImageRegister.val('')

                            Toast.fire({
                                icon: 'success',
                                text: data.message
                            })
                        }
                        else {
                            Toast.fire({
                                icon: 'error',
                                text: data.message
                            })
                        }
                    },
                    complete: function (data) {
                        form.find('.btn-save').removeAttr('disabled')
                        loadSpinner.toggleClass('active')
                        modal.modal('hide')
                    },
                    error: function (data) {
                        console.log(data)
                        ToastError.fire()
                    }
                })
            }
        })

        $('#btn-register-freecourse-modal').on('click', function () {
            var button = $(this)
            var modal = $('#RegisterfreeCourseModal')
            var loadSpinner = button.find('.loadSpinner')

            loadSpinner.toggleClass('active')
            registerFreeCourseForm.resetForm()

            loadSpinner.toggleClass('active')
            modal.modal('toggle')

        })

    }

    // --------- FREE COURSE SHOW ---------


    if ($('#course-box-container').length) {

        /* ------------ EDIT --------------*/

        $('#edit-course-status-checkbox').change(function () {
            var txtDesc = $('#txt-edit-description-course');
            if (this.checked) {
                txtDesc.html('Activo');
            } else {
                txtDesc.html('Inactivo')
            }
        });

        var freeCourseImageEdit = $('#image-upload-freecourse-edit');
        freeCourseImageEdit.val('');
        freeCourseImageEdit.on("change", function () {
            $('#editFreeCourseForm').validate()
            $('#image-upload-freecourse-edit').rules('add', { required: true })

            var img_path = $(this)[0].value;
            var img_holder = $(this).closest('#editFreeCourseForm').find('.img-holder');
            var currentImagePath = $(this).data('value');
            var img_extension = img_path.substring(img_path.lastIndexOf('.') + 1).toLowerCase();

            if (img_extension == 'jpeg' || img_extension == 'jpg' || img_extension == 'png') {
                if (typeof (FileReader) != 'undefined') {
                    img_holder.empty()
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        $('<img/>', { 'src': e.target.result, 'class': 'img-fluid course_img' }).
                            appendTo(img_holder);
                    }
                    img_holder.show();
                    reader.readAsDataURL($(this)[0].files[0]);
                } else {
                    $(img_holder).html('Este navegador no soporta Lector de Archivos');
                }
            } else {
                $(img_holder).html(currentImagePath);
                freeCourseImageEdit.val('')
                Toast.fire({
                    icon: 'warning',
                    title: '¡Selecciona una imagen!',
                });
            }

        })

        var editFreeCourseForm = $('#editFreeCourseForm').validate({
            rules: {
                description: {
                    required: true,
                    maxlength: 255
                },
                subtitle: {
                    maxlength: 255
                },
                category_id: {
                    required: true
                }
            },
            submitHandler: function (form, event) {
                event.preventDefault()

                var form = $(form)
                var loadSpinner = form.find('.loadSpinner')
                var modal = $('#editFreeCourseModal')
                var img_holder = form.find('.img-holder')

                loadSpinner.toggleClass('active')
                form.find('.btn-save').attr('disabled', 'disabled')

                $.ajax({
                    method: form.attr('method'),
                    url: form.attr('action'),
                    data: new FormData(form[0]),
                    processData: false,
                    contentType: false,
                    dataType: 'JSON',
                    success: function (data) {

                        if (data.success) {
                            editFreeCourseForm.resetForm()

                            var courseBox = $('#course-box-container')
                            var descriptionCont = $('#course-description-text-principal')
                            courseBox.html(data.html)
                            descriptionCont.html(data.description)

                            $(img_holder).empty()

                            form.trigger('reset')
                            freeCourseImageEdit.val('')
                            modal.modal('hide')

                            Toast.fire({
                                icon: 'success',
                                text: data.message
                            })
                        }
                        else {
                            Toast.fire({
                                icon: 'error',
                                text: data.message
                            })
                        }
                    },
                    complete: function (data) {
                        loadSpinner.toggleClass('active')
                        form.find('.btn-save').removeAttr('disabled')
                    },
                    error: function (data) {
                        console.log(data)
                        ToastError.fire()
                    }
                })
            }
        })

        $('.main-content').on('click', '#freecourse-edit-btn', function () {
            var button = $(this)
            var getDataUrl = button.data('send')
            var modal = $('#editFreeCourseModal')

            $('#editFreeCourseForm').validate()
            $('#image-upload-freecourse-edit').rules('remove', 'required')

            $.ajax({
                type: 'GET',
                url: getDataUrl,
                dataType: 'JSON',
                success: function (data) {

                    modal.find('input[name=description]').val(data.description);
                    modal.find('input[name=subtitle]').val(data.subtitle);
                    modal.find('.img-holder').html('<img class="img-fluid course_img" id="image-course-edit" src="' + data.url_img + '"></img>');
                    modal.find('#image-upload-freecourse-edit').attr('data-value', '<img class="img-fluid course_img" id="image-course-edit" scr="' + data.url_img + '" >');
                    modal.find('#image-upload-freecourse-edit').val('');

                    if (data.status == 'S') {
                        modal.find('#edit-course-status-checkbox').prop('checked', true);
                        $('#txt-edit-description-course').html('Activo');
                    } else {
                        modal.find('#edit-course-status-checkbox').prop('checked', false);
                        $('#txt-edit-description-course').html('Inactivo');
                    }

                    if (data.recom == 1) {
                        modal.find('#edit-course-recom-checkbox').prop('checked', true);
                    } else {
                        modal.find('#edit-course-recom-checkbox').prop('checked', false);
                    }
                },
                complete: function (data) {
                    modal.modal('show')
                },
                error: function (data) {
                    console.log(data)
                }
            })

        })


        /* ----------- DELETE ---------------*/

        $('.main-content').on('click', '.delete-course-btn', function () {
            var button = $(this)
            var url = button.data('url')
            var type = button.data('type')

            SwalDelete.fire().then(function (e) {
                if (e.value === true) {
                    $.ajax({
                        method: 'POST',
                        url: url,
                        data: {
                            type: type
                        },
                        dataType: 'JSON',
                        success: function (result) {

                            if (result.success) {
                                window.location.href = result.route
                                Toast.fire({
                                    icon: 'success',
                                    text: result.message
                                })
                            }
                            else {
                                Toast.fire({
                                    icon: 'error',
                                    text: result.message
                                })
                            }
                        },
                        error: function (result) {
                            console.log(result)
                            ToastError.fire()
                        }
                    });
                } else {
                    e.dismiss;
                }
            }, function (dismiss) {
                return false;
            });
        })


        /* --------- SECTIONS ----------*/



        /* ----------- SELECT -------------*/

        $('.order-section-select').select2({
            minimumResultsForSearch: -1
        })

        /* -------- UPDATE ORDER ----------*/

        $('.main-content').on('change', '.order-section-select', function () {

            var url = $(this).data('url')
            var value = $(this).val()

            var sectionActive = $('#sections-list-container').find('.course-section-box.active').data('id')

            $.ajax({
                method: 'POST',
                url: url,
                data: {
                    value: value,
                    id: sectionActive
                },
                dataType: 'JSON',
                success: function (data) {
                    var sectionList = $('#sections-list-container')
                    sectionList.html(data.html)
                    $('.order-section-select').select2({
                        minimumResultsForSearch: -1
                    })
                    Toast.fire({
                        icon: 'success',
                        text: '¡Registro actualizado!',
                    });
                },
                error: function (result) {
                    Toast.fire({
                        icon: 'error',
                        title: '¡Ocurrió un error inesperado!',
                    });
                }
            });
        })

        /* -------- REGISTER -------  */


        var registerSectionForm = $('#registerSectionForm').validate({
            rules: {
                title: {
                    required: true,
                    maxlength: 100
                },
                course_id: {
                    required: true
                }
            },
            submitHandler: function (form, event) {
                event.preventDefault()

                var form = $(form)
                var loadSpinner = form.find('.loadSpinner')
                var modal = $('#registerSectionModal')
                var sectionActive = $('#sections-list-container').find('.course-section-box.active').data('id')

                loadSpinner.toggleClass('active')
                form.find('.btn-save').attr('disabled', 'disabled')

                $.ajax({
                    method: form.attr('method'),
                    url: form.attr('action'),
                    data: {
                        form: form.serialize(),
                        id: sectionActive
                    },
                    dataType: 'JSON',
                    success: function (data) {

                        if (data.success) {
                            registerSectionForm.resetForm()

                            var boxCourse = $('#course-box-container')
                            var boxSections = $('#sections-list-container')
                            boxCourse.html(data.htmlCourse)
                            boxSections.html(data.htmlSection)

                            $('.order-section-select').select2({
                                minimumResultsForSearch: -1
                            })

                            form.trigger('reset')

                            Toast.fire({
                                icon: 'success',
                                text: data.message
                            })
                        }
                        else {
                            Toast.fire({
                                icon: 'error',
                                text: data.message
                            })
                        }
                    },
                    complete: function (data) {
                        modal.modal('hide')
                        loadSpinner.toggleClass('active')
                        form.find('.btn-save').removeAttr('disabled')
                    },
                    error: function (data) {
                        console.log(data)
                        ToastError.fire()
                    }
                })
            }
        })


        /* ----- EDIT --------*/

        $('#editOrderSelect').select2({
            dropdownParent: $("#editSectionModal"),
            minimumResultsForSearch: -1
        })

        var editSectionForm = $('#editSectionForm').validate({
            rules: {
                title: {
                    required: true,
                    maxlength: 100
                },
                section_order: {
                    required: true
                }
            },
            submitHandler: function (form, event) {
                event.preventDefault()

                var form = $(form)
                var loadSpinner = form.find('.loadSpinner')
                var modal = $('#editSectionModal')
                var sectionActive = $('#sections-list-container').find('.course-section-box.active').data('id')

                loadSpinner.toggleClass('active')
                form.find('.btn-save').attr('disabled', 'disabled')

                $.ajax({
                    method: form.attr('method'),
                    url: form.attr('action'),
                    data: {
                        form: form.serialize(),
                        id: sectionActive
                    },
                    dataType: 'JSON',
                    success: function (data) {

                        if (data.success) {

                            editSectionForm.resetForm()

                            var boxSections = $('#sections-list-container')
                            boxSections.html(data.htmlSection)

                            if (data.active == data.id) {
                                var topTableInfo = $('#top-chapter-table-title-info')
                                topTableInfo.html('<span class="text-bold"> de: </span> \
                                                    <span class="title-chapter-top-table">'+ data.title + '</span>')
                            }

                            $('.order-section-select').select2({
                                minimumResultsForSearch: -1
                            })

                            form.trigger('reset')

                            Toast.fire({
                                icon: 'success',
                                text: data.message
                            })
                        }
                        else {
                            Toast.fire({
                                icon: 'error',
                                text: data.message
                            })
                        }
                    },
                    complete: function (data) {
                        loadSpinner.toggleClass('active')
                        form.find('.btn-save').removeAttr('disabled')
                        modal.modal('hide')
                    },
                    error: function (data) {
                        console.log(data)
                        ToastError.fire()
                    }
                })
            }
        })

        $('.main-content').on('click', '.section-edit-btn', function () {
            var button = $(this)
            var getDataUrl = button.data('send')
            var url = button.data('url')
            var modal = $('#editSectionModal')
            var form = modal.find('#editSectionForm')
            var select = $('#editOrderSelect')
            select.html('')

            editSectionForm.resetForm()
            form.trigger('reset')

            form.attr('action', url)

            $.ajax({
                type: 'GET',
                url: getDataUrl,
                dataType: 'JSON',
                success: function (data) {

                    form.find('input[name=title]').val(data.title);

                    $.each(data.sections, function (key, values) {
                        select.append('<option value="' + values.section_order + '">' + values.section_order + '</option>')
                    })

                    select.val(data.order).change()
                    modal.modal('show')
                },
                error: function (data) {
                    console.log(data)
                }
            })

        })

        /* -------- DELETE ----------*/

        $('.main-content').on('click', '.delete-section-btn', function () {
            var button = $(this)
            var url = button.data('url')
            var active = button.closest('.course-section-box').data('active')

            var sectionActive = $('#sections-list-container').find('.course-section-box.active').data('id')

            SwalDelete.fire().then(function (e) {
                if (e.value === true) {
                    $.ajax({
                        method: 'POST',
                        url: url,
                        data: {
                            active: active,
                            id: sectionActive
                        },
                        dataType: 'JSON',
                        success: function (data) {

                            if (data.success) {

                                var courseBox = $('#course-box-container')
                                var sectionBox = $('#sections-list-container')

                                courseBox.html(data.htmlCourse)
                                sectionBox.html(data.htmlSection)

                                if (data.is_active == 1) {
                                    var chapterBox = $('#chapters-list-container')
                                    var topTableInfo = $('#top-chapter-table-title-info')
                                    chapterBox.html(data.htmlChapter)
                                    topTableInfo.html('')
                                }

                                $('.order-section-select').select2({
                                    minimumResultsForSearch: -1
                                })

                                Toast.fire({
                                    icon: 'success',
                                    text: data.message,
                                })
                            }
                            else {
                                Toast.fire({
                                    icon: 'error',
                                    text: data.message,
                                })
                            }
                        },
                        error: function (result) {
                            console.log(result)
                            ToastError.fire()
                        }
                    });
                } else {
                    e.dismiss;
                }
            }, function (dismiss) {
                return false;
            });
        })



        /* ---------- CHAPTERS -----------*/

        /* ------- CHAPTERS TABLE ---------*/

        function chapterTable(ele, lang, url) {
            var chaptersTable = ele.DataTable({
                responsive: true,
                language: lang,
                serverSide: true,
                processing: true,
                ajax: {
                    "url": url,
                    "data": {
                        "type": "table"
                    }
                },
                order: [[3, 'asc']],
                columns: [
                    { data: 'title', name: 'title', className: 'text-bold' },
                    { data: 'description', name: 'description' },
                    { data: 'duration', name: 'duration' },
                    { data: 'chapter_order', name: 'chapter_order' },
                    { data: 'view', name: 'view', orderable: false, searchable: false, className: 'text-center' },
                    { data: 'action', name: 'action', orderable: false, searchable: false, className: 'action-with' },
                ],
                dom: 'rtip'
            });
        }


        /* ----- SET ACTIVE -----*/

        $('.main-content').on('click', '.course-section-box .title-container', function () {
            var sectionBox = $(this).closest('.course-section-box')

            if (!sectionBox.hasClass('active')) {

                sectionBox.addClass('active').attr('data-active', 'active')
                sectionBox.siblings().removeClass('active').attr('data-active', '')

                var url = sectionBox.data('table')

                $.ajax({
                    type: 'GET',
                    url: url,
                    data: {
                        type: 'html'
                    },
                    dataType: 'JSON',
                    success: function (data) {

                        var chaptersBox = $('#chapters-list-container')
                        var topTableInfo = $('#top-chapter-table-title-info')

                        topTableInfo.html('<span class="text-bold"> de: </span> \
                                            <span class="title-chapter-top-table">'+ data.title + '</span>')
                        chaptersBox.html(data.html)

                        var chaptersTableEle = $('#freeCourses-chapters-table');
                        chapterTable(chaptersTableEle, DataTableEs, url);

                    },
                    error: function (result) {
                        console.log(result)
                        Toast.fire({
                            icon: 'error',
                            title: '¡Ocurrió un error inesperado!',
                        });
                    }

                });

            }

        })


        /*-------  REGISTER  ------*/

        var registerChapterForm = $('#registerChapterForm').validate({
            rules: {
                title: {
                    required: true,
                    maxlength: 100
                },
                description: {
                    required: true,
                    maxlength: 500
                },
                video: {
                    required: true,
                }
            },
        })

        /*----- STORE DATA -------*/


        $('.main-content').on('click', '#btn-register-chapter-modal', function () {
            var button = $(this)
            var url = button.data('url')
            var modal = $('#registerChapterModal')
            var form = $('#registerChapterForm')
            var loadSpinner = form.find('.loadSpinner')

            if (!$('#input-chapter-video-container').hasClass('dz-clickable')) {

                var chapterVideoInput = $("#input-chapter-video-container").dropzone({
                    url: url,
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    },
                    paramName: "file",
                    addRemoveLinks: true,
                    uploadMultiple: false,
                    autoProcessQueue: false,
                    maxFiles: 1,
                    hiddenInputContainer: '#input-chapter-video-container',
                    maxfilesexceeded: function (file) {
                        this.removeAllFiles();
                        this.addFile(file);
                    },
                    accept: function (file, done) {
                        $('#registerChapterForm').find('.message-file-invalid').removeClass('show')
                        if (!file.type.match('video/*')) {
                            Toast.fire({
                                icon: 'warning',
                                text: '¡Solo puedes subir videos!'
                            })
                            this.removeFile(file);
                            return false;
                        }
                        if (file.size > 50 * 1024 * 1024) {
                            Toast.fire({
                                icon: 'warning',
                                text: '¡Tu archivo pesa más de 50MB!'
                            })
                            this.removeFile(file);
                            return false;
                        }
                        return done();
                    },
                    init: function () {
                        var myDropzone = this;

                        myDropzone.on("processing", function (file) {
                            this.options.url = $('#btn-register-chapter-modal').data('url');
                        });

                        $('#registerChapterForm').on('submit', function (e) {
                            e.preventDefault()
                            e.stopPropagation();
                            var messageInvalid = $(this).find('.message-file-invalid')

                            if (myDropzone.getQueuedFiles().length == 1) {
                                messageInvalid.removeClass('show')

                                if ($('#registerChapterForm').valid()) {
                                    myDropzone.processQueue();
                                }
                            }
                            else {
                                myDropzone.removeAllFiles();
                                messageInvalid.addClass('show')
                            }

                        })
                    },
                    sending: function (file, xhr, formData) {

                        let title = form.find('input[name=title]').val()
                        let description = form.find('#description-text-area-register').val()

                        let sectionActive = $('#sections-list-container').find('.course-section-box.active').data('id')

                        formData.append('title', title)
                        formData.append('description', description)
                        formData.append('sectionActive', sectionActive)

                        loadSpinner.toggleClass('active')
                        form.find('.btn-save').attr('disabled', 'disabled')
                    },
                    success: function (file, response) {

                        if (response.success) {
                            // let modal = $('#registerChapterModal')
                            let urlTable = $('#section-box-' + response.id).data('table')

                            this.removeAllFiles();
                            registerChapterForm.resetForm()
                            form.trigger('reset')

                            var chaptersBox = $('#chapters-list-container')
                            var sectionsBox = $('#sections-list-container')
                            var courseBox = $('#course-box-container')

                            chaptersBox.html(response.htmlChapter)
                            sectionsBox.html(response.htmlSection)
                            courseBox.html(response.htmlCourse)

                            $('.order-section-select').select2({
                                minimumResultsForSearch: -1
                            })

                            var chaptersTableEle = $('#freeCourses-chapters-table');
                            chapterTable(chaptersTableEle, DataTableEs, urlTable);

                            Toast.fire({
                                icon: 'success',
                                text: response.message,
                            });
                        }
                        else {
                            Toast.fire({
                                icon: 'error',
                                text: response.message,
                            });
                        }

                        modal.modal('hide')
                        loadSpinner.toggleClass('active')
                    },
                    complete: function () {
                        form.find('.btn-save').removeAttr('disabled')
                    },
                    error: function (file, response) {
                        console.log(response)
                    }
                })
            }

        })


        /*--------- EDIT ............*/


        $('#editOrderSelectChapter').select2({
            dropdownParent: $("#editChapterModal"),
            minimumResultsForSearch: -1
        })

        var editChapterForm = $('#editChapterForm').validate({
            rules: {
                title: {
                    required: true,
                    maxlength: 100
                },
                description: {
                    required: true,
                    maxlength: 500
                },
            },
        })

        $('.main-content').on('click', '.editChapter', function () {
            var button = $(this)
            var modal = $('#editChapterModal')
            var getDataUrl = button.data('send')
            var url = button.data('url')
            var form = $('#editChapterForm')
            var loadSpinner = form.find('.loadSpinner')

            $('#editOrderSelectChapter').html('')

            button.closest('tr').siblings().find('.editChapter').removeClass('active')
            button.addClass('active')

            if (!$('#input-chapter-video-container-edit').hasClass('dz-clickable')) {

                let chapterVideoInputEdit = $("#input-chapter-video-container-edit").dropzone({
                    url: url,
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    },
                    paramName: "file",
                    addRemoveLinks: true,
                    uploadMultiple: false,
                    autoProcessQueue: false,
                    maxFiles: 1,
                    hiddenInputContainer: '#input-chapter-video-container-edit',
                    maxfilesexceeded: function (file) {
                        this.removeAllFiles();
                        this.addFile(file);
                    },
                    accept: function (file, done) {
                        if (!file.type.match('video/*')) {
                            Toast.fire({
                                icon: 'warning',
                                text: '¡Solo puedes subir videos!'
                            })
                            this.removeFile(file);
                            return false;
                        }
                        if (file.size > 50 * 1024 * 1024) {
                            Toast.fire({
                                icon: 'warning',
                                text: '¡Tu archivo pesa más de 50MB!'
                            })
                            this.removeFile(file);
                            return false;
                        }
                        return done();
                    },
                    init: function () {
                        var myDropzone = this;

                        $('#editChapterForm').on('submit', function (e) {
                            e.preventDefault()
                            e.stopPropagation();

                            let urlChanged = $('.editChapter.active').data('url');

                            myDropzone.options.url = urlChanged;

                            if ($('#editChapterForm').valid()) {

                                if (myDropzone.getQueuedFiles().length == 1) {
                                    myDropzone.processQueue();
                                }
                                else {
                                    myDropzone.removeAllFiles();

                                    loadSpinner.toggleClass('active')
                                    form.find('.btn-save').attr('disabled', 'disabled')

                                    $.ajax({
                                        method: form.attr('method'),
                                        url: urlChanged,
                                        data: form.serialize(),
                                        dataType: 'JSON',
                                        success: function (data) {

                                            if (data.success) {

                                                let urlTable = $('#section-box-' + data.id).data('table')
                                                let chaptersBox = $('#chapters-list-container')

                                                chaptersBox.html(data.htmlChapter)

                                                let chaptersTableEle = $('#freeCourses-chapters-table');
                                                chapterTable(chaptersTableEle, DataTableEs, urlTable);

                                                editChapterForm.resetForm()
                                                form.trigger('reset')

                                                Toast.fire({
                                                    icon: 'success',
                                                    text: data.message
                                                });
                                            }
                                            else {
                                                Toast.fire({
                                                    icon: 'error',
                                                    text: data.message
                                                })
                                            }
                                        },
                                        complete: function (data) {
                                            loadSpinner.toggleClass('active')
                                            $('#editChapterModal').modal('hide')
                                            form.find('.btn-save').removeAttr('disabled')
                                        },
                                        error: function (data) {
                                            console.log(data)
                                        }
                                    })
                                }
                            }

                        })
                    },
                    sending: function (file, xhr, formData) {

                        let title = form.find('input[name=title]').val()
                        let description = form.find('#description-text-area-edit').val()
                        let order = form.find('#editOrderSelectChapter').val()

                        formData.append('title', title)
                        formData.append('description', description)
                        formData.append('chapter_order', order)

                        loadSpinner.toggleClass('active')
                        form.find('.btn-save').attr('disabled', 'disabled')
                    },
                    success: function (file, response) {
                        this.removeAllFiles();

                        if (response.success) {

                            let urlTable = $('#section-box-' + response.id).data('table')
                            let chaptersBox = $('#chapters-list-container')
                            let courseBox = $('#course-box-container')

                            courseBox.html(response.htmlCourse)
                            chaptersBox.html(response.htmlChapter)

                            var chaptersTableEle = $('#freeCourses-chapters-table');
                            chapterTable(chaptersTableEle, DataTableEs, urlTable);

                            editChapterForm.resetForm()
                            form.trigger('reset')

                            Toast.fire({
                                icon: 'success',
                                text: response.message
                            });
                        }
                        else {
                            Toast.fire({
                                icon: 'error',
                                text: response.message
                            });
                        }

                        modal.modal('hide')
                        loadSpinner.toggleClass('active')

                    },
                    complete: function () {
                        form.find('.btn-save').removeAttr('disabled')
                    },
                    error: function (file, response) {
                        console.log(response)
                    }
                })
            }

            $.ajax({
                type: 'GET',
                url: getDataUrl,
                dataType: 'JSON',
                success: function (data) {

                    var chapter = data.chapter
                    form.find('input[name=title]').val(chapter.title);
                    form.find('#description-text-area-edit').val(chapter.description)

                    var select = $('#editOrderSelectChapter')

                    select.select2({
                        dropdownParent: $("#editChapterModal"),
                        minimumResultsForSearch: -1
                    })

                    $.each(data.chapters_list, function (key, values) {
                        select.append('<option value="' + values.chapter_order + '">' + values.chapter_order + '</option>')
                    })

                    select.val(chapter.chapter_order).change()
                },
                complete: function (data) {
                    modal.modal('show')
                },
                error: function (data) {
                    console.log(data)
                }
            })

        })


        /* -------- PREVIEW VIDEO ---------*/

        $('.main-content').on('click', '.preview-chapter-video-button', function (e) {
            e.preventDefault();

            var modal = $('#previewChapterModal')
            var url = $(this).data('url')
            var video_container = $('#video-chapter-container')
            video_container.html('<video id="chapter-video" class="video-js chapter-video"></video>')

            $.ajax({
                type: 'GET',
                url: url,
                dataType: 'JSON',
                success: function (data) {

                    modal.find('.title-preview-section').html(data.section)
                    modal.find('.title-preview-chapter').html(data.chapter)

                    var playerChapter = videojs('chapter-video', {
                        controls: true,
                        fluid: true,
                        playbackRates: [0.5, 1, 1.5, 2],
                        autoplay: false,
                        preload: 'auto'
                    });

                    playerChapter.src(data.url_video);

                    modal.modal('toggle')
                },
                error: function (data) {
                    console.log(data)
                }
            })

        })

        $('#previewChapterModal').on('hidden.bs.modal', function () {
            videojs('chapter-video').dispose()
        })

        /* -------- DELETE ----------*/

        $('.main-content').on('click', '.deleteChapter', function () {
            var button = $(this)
            var url = button.data('url')

            var sectionActive = $('#sections-list-container').find('.course-section-box.active').data('id')

            Swal.fire({
                title: '¡Cuidado!',
                text: "¡Esto también eliminará el progreso de los usuarios!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Continuar y eliminar',
                cancelButtonText: 'Cancelar',
                reverseButtons: true,
            }).then(function (e) {
                if (e.value === true) {
                    $.ajax({
                        method: 'POST',
                        url: url,
                        data: {
                            id: sectionActive
                        },
                        dataType: 'JSON',
                        success: function (data) {

                            if (data.success) {
                                var courseBox = $('#course-box-container')
                                var sectionBox = $('#sections-list-container')
                                var chaptersBox = $('#chapters-list-container')

                                courseBox.html(data.htmlCourse)
                                sectionBox.html(data.htmlSection)
                                chaptersBox.html(data.htmlChapter)

                                let urlTable = $('#section-box-' + data.id).data('table')
                                var chaptersTableEle = $('#freeCourses-chapters-table');
                                chapterTable(chaptersTableEle, DataTableEs, urlTable);

                                $('.order-section-select').select2({
                                    minimumResultsForSearch: -1
                                })

                                Toast.fire({
                                    icon: 'success',
                                    text: data.message
                                })
                            }
                            else {
                                Toast.fire({
                                    icon: 'error',
                                    text: data.message
                                })
                            }
                        },
                        error: function (result) {
                            console.log(result)
                            ToastError.fire()
                        }
                    });
                } else {
                    e.dismiss;
                }
            }, function (dismiss) {
                return false;
            });
        })
    }








    // ------------ EXAMS  INDEX -----------------


    if ($('#exams-table').length) {

        /* ----- EXAMS TABLE ------*/

        var examsTableEle = $('#exams-table');
        var getDataUrl = examsTableEle.data('url');
        var examsTable = examsTableEle.DataTable({
            responsive: true,
            language: DataTableEs,
            serverSide: true,
            processing: true,
            ajax: getDataUrl,
            columns: [
                { data: 'id', name: 'id' },
                { data: 'title', name: 'title' },
                { data: 'owner_company.name', name: 'ownerCompany.name' },
                { data: 'course.description', name: 'course.description' },
                { data: 'exam_time', name: 'exam_time' },
                { data: 'active', name: 'active' },
                { data: 'action', name: 'action', orderable: false, searchable: false },
            ],
            order: [
                [0, 'desc']
            ]
            // dom: 'rtip'
        });

        // ----- REGISTER ----------

        $('#registerOwnerCompanySelect').select2({
            dropdownParent: $("#RegisterExamModal"),
            placeholder: 'Selecciona una empresa titular'
        })

        $('#registerCourseSelect').select2({
            dropdownParent: $("#RegisterExamModal"),
            placeholder: 'Selecciona un curso'
        })

        $('#register-exam-status-checkbox').change(function () {
            var txtDesc = $('#txt-register-description-exam');
            if (this.checked) {
                txtDesc.html('Activo');
            } else {
                txtDesc.html('Inactivo')
            }
        });

        $('#registerExamForm button[type=submit]').click(function () {
            $('button[type=submit]', $(this).parents('form')).removeAttr('clicked').removeAttr('name')
            $(this).attr('clicked', 'true').attr('name', 'verifybtn')
        })

        var registerExamForm = $('#registerExamForm').validate({
            rules: {
                title: {
                    required: true,
                    maxlength: 255
                },
                owner_company_id: {
                    required: true
                },
                course_id: {
                    required: true
                },
                exam_time: {
                    required: true,
                    number: true,
                    step: 1,
                    min: 1,
                },
            },
            submitHandler: function (form, event) {
                event.preventDefault()

                var form = $(form)
                var modal = $('#RegisterExamModal')
                var button = form.find('button[type=submit][clicked=true]')
                var loadSpinner = button.find('.loadSpinner')
                var coursesSelect = form.find('#registerOwnerCompanySelect')
                var ownerCompaniesSelect = form.find('#registerCourseSelect')

                modal.find('.btn-save').attr('disabled', 'disabled')

                loadSpinner.toggleClass('active')

                $.ajax({
                    method: form.attr('method'),
                    url: form.attr('action'),
                    data: form.serialize(),
                    dataType: 'JSON',
                    success: function (data) {

                        registerExamForm.resetForm()

                        form.trigger('reset');
                        loadSpinner.toggleClass('active')
                        modal.modal('hide')
                        modal.find('.btn-save').removeAttr('disabled')

                        coursesSelect.val('').change()
                        ownerCompaniesSelect.val('').change()

                        if (data.success) {

                            if (data.show) {

                                window.location.href = data.route

                            } else {
                                examsTable.draw()

                                Toast.fire({
                                    icon: 'success',
                                    text: '¡Registrado exitosamente!'
                                })
                            }

                        } else {

                            Toast.fire({
                                icon: 'error',
                                text: data.message
                            })
                        }

                    },
                    error: function (data) {
                        console.log(data)
                        ToastError.fire()
                    }
                })
            }
        })

        // ------------- EDIT ---------------

        $('#editOwnerCompanySelect').select2({
            dropdownParent: $("#editExamModal"),
            placeholder: 'Selecciona una empresa titular'
        })

        $('#editCourseSelect').select2({
            dropdownParent: $("#editExamModal"),
            placeholder: 'Selecciona un curso'
        })

        $('#edit-exam-status-checkbox').change(function () {
            var txtDesc = $('#txt-edit-description-exam');
            if (this.checked) {
                txtDesc.html('Activo');
            } else {
                txtDesc.html('Inactivo')
            }
        });

        var editExamForm = $('#editExamForm').validate({
            rules: {
                title: {
                    required: true,
                    maxlength: 255
                },
                owner_company_id: {
                    required: true
                },
                course_id: {
                    required: true
                },
                exam_time: {
                    required: true,
                    number: true,
                    step: 1,
                    min: 1,
                },
            },
            submitHandler: function (form, event) {
                event.preventDefault()
                var form = $(form)
                var loadSpinner = form.find('.loadSpinner')
                var modal = $('#editExamModal')
                modal.find('.btn-save').attr('disabled', 'disabled')

                loadSpinner.toggleClass('active')

                $.ajax({
                    method: form.attr('method'),
                    url: form.attr('action'),
                    data: form.serialize(),
                    dataType: 'JSON',
                    success: function (data) {

                        editExamForm.resetForm()
                        modal.find('.btn-save').removeAttr('disabled')
                        loadSpinner.toggleClass('active')
                        modal.modal('hide')

                        if (data.success) {

                            examsTable.draw()
                            Toast.fire({
                                icon: 'success',
                                text: '¡Registro actualizado!'
                            })

                        }
                        else {
                            Toast.fire({
                                icon: 'error',
                                text: data.message
                            })
                        }
                    },
                    error: function (data) {
                        console.log(data)
                        ToastError.fire()
                    }
                })
            }
        })

        $('.main-content').on('click', '.editExam-btn', function () {

            var modal = $('#editExamModal')
            var getDataUrl = $(this).data('send')
            var url = $(this).data('url')
            var form = modal.find('#editExamForm')
            var courseSelect = modal.find('#editCourseSelect')
            var companySelect = modal.find('#editOwnerCompanySelect')

            courseSelect.html('')
            companySelect.html('')

            $('#editExamForm').validate()

            editExamForm.resetForm()
            form.trigger('reset')

            form.attr('action', url)

            $.ajax({
                type: 'GET',
                url: getDataUrl,
                dataType: 'JSON',
                success: function (data) {

                    let exam = data.exam

                    modal.find('input[name=title]').val(exam.title)
                    modal.find('input[name=exam_time]').val(exam.exam_time)

                    courseSelect.append('<option></option>')
                    $.each(data.courses, function (key, values) {
                        courseSelect.append('<option value="' + values.id + '">' + values.description + '</option>')
                    })
                    courseSelect.val(exam.course_id).change()

                    companySelect.append('<option></option>')
                    $.each(data.ownerCompanies, function (key, values) {
                        companySelect.append('<option value="' + values.id + '">' + values.name + '</option>')
                    })
                    companySelect.val(exam.owner_company_id).change()

                    if (exam.active == 'S') {
                        modal.find('#edit-exam-status-checkbox').prop('checked', true);
                        $('#txt-edit-description-exam').html('Activo');
                    } else {
                        modal.find('#edit-exam-status-checkbox').prop('checked', false);
                        $('#txt-edit-description-exam').html('Inactivo');
                    }
                },
                complete: function (data) {
                    modal.modal('show')
                },
                error: function (data) {
                    console.log(data)
                }
            })
        })

        /* ----------- DELETE ---------------*/

        $('.main-content').on('click', '.deleteExam-btn', function () {
            var url = $(this).data('url')

            SwalDelete.fire().then(function (e) {
                if (e.value === true) {
                    $.ajax({
                        method: 'POST',
                        url: url,
                        dataType: 'JSON',
                        success: function (result) {

                            if (result.success === true) {

                                examsTable.draw()

                                Toast.fire({
                                    icon: 'success',
                                    text: '¡Registro eliminado!',
                                })
                            }
                            else {
                                Toast.fire({
                                    icon: 'error',
                                    text: result.message,
                                })
                            }
                        },
                        error: function (result) {
                            Toast.fire({
                                icon: 'error',
                                title: '¡Ocurrió un error inesperado!',
                            });
                        }
                    });
                } else {
                    e.dismiss;
                }
            }, function (dismiss) {
                return false;
            });
        })

    }


    // ------------- EXAM SHOW -------------------


    if ($('#questions-table').length) {

        /* ----- QUESTIONs TABLE ------*/

        var questionsTableEle = $('#questions-table');
        var getDataUrl = questionsTableEle.data('url');
        var questionsTable = questionsTableEle.DataTable({
            responsive: true,
            language: DataTableEs,
            serverSide: true,
            processing: true,
            ajax: getDataUrl,
            columns: [
                { data: 'id', name: 'id' },
                { data: 'question_type.description', name: 'questionType.description' },
                { data: 'statement', name: 'statement' },
                { data: 'points', name: 'points' },
                { data: 'created_at', name: 'created_at' },
                { data: 'updated_at', name: 'updated_at' },
                { data: 'active', name: 'active' },
                { data: 'action', name: 'action', orderable: false, searchable: false },
            ],
        });

        // ------------- EDIT EXAM ---------------

        $('#editOwnerCompanySelect').select2({
            dropdownParent: $("#editExamModal"),
            placeholder: 'Selecciona una empresa titular'
        })

        $('#editCourseSelect').select2({
            dropdownParent: $("#editExamModal"),
            placeholder: 'Selecciona un curso'
        })

        $('#edit-exam-status-checkbox').change(function () {
            var txtDesc = $('#txt-edit-description-exam');
            if (this.checked) {
                txtDesc.html('Activo');
            } else {
                txtDesc.html('Inactivo')
            }
        });

        var editExamForm = $('#editExamForm').validate({
            rules: {
                title: {
                    required: true,
                    maxlength: 255
                },
                owner_company_id: {
                    required: true
                },
                course_id: {
                    required: true
                },
                exam_time: {
                    required: true,
                    number: true,
                    step: 1,
                    min: 1,
                },
            },
            submitHandler: function (form, event) {
                event.preventDefault()
                var form = $(form)
                var loadSpinner = form.find('.loadSpinner')
                var modal = $('#editExamModal')
                modal.find('.btn-save').attr('disabled', 'disabled')

                loadSpinner.toggleClass('active')

                $.ajax({
                    method: form.attr('method'),
                    url: form.attr('action'),
                    data: form.serialize(),
                    dataType: 'JSON',
                    success: function (data) {

                        editExamForm.resetForm()
                        modal.find('.btn-save').removeAttr('disabled')
                        loadSpinner.toggleClass('active')
                        modal.modal('hide')

                        if (data.success) {

                            let data_show = data.data_show

                            var exam_box = $('#exam-box-container')
                            var title_cont = $('#exam-description-text-principal')
                            exam_box.html(data_show.html)
                            title_cont.html(data_show.title)

                            Toast.fire({
                                icon: 'success',
                                text: '¡Registro actualizado!'
                            })

                        }
                        else {
                            Toast.fire({
                                icon: 'error',
                                text: data.message
                            })
                        }
                    },
                    error: function (data) {
                        console.log(data)
                        ToastError.fire()
                    }
                })
            }
        })

        $('.main-content').on('click', '#exam-edit-btn', function () {

            var modal = $('#editExamModal')
            var getDataUrl = $(this).data('send')
            var url = $(this).data('url')
            var form = modal.find('#editExamForm')
            var courseSelect = modal.find('#editCourseSelect')
            var companySelect = modal.find('#editOwnerCompanySelect')

            courseSelect.html('')
            companySelect.html('')

            $('#editExamForm').validate()

            editExamForm.resetForm()
            form.trigger('reset')

            form.attr('action', url)

            $.ajax({
                type: 'GET',
                url: getDataUrl,
                dataType: 'JSON',
                success: function (data) {

                    let exam = data.exam

                    modal.find('input[name=title]').val(exam.title)
                    modal.find('input[name=exam_time]').val(exam.exam_time)

                    courseSelect.append('<option></option>')
                    $.each(data.courses, function (key, values) {
                        courseSelect.append('<option value="' + values.id + '">' + values.description + '</option>')
                    })
                    courseSelect.val(exam.course_id).change()

                    companySelect.append('<option></option>')
                    $.each(data.ownerCompanies, function (key, values) {
                        companySelect.append('<option value="' + values.id + '">' + values.name + '</option>')
                    })
                    companySelect.val(exam.owner_company_id).change()

                    if (exam.active == 'S') {
                        modal.find('#edit-exam-status-checkbox').prop('checked', true);
                        $('#txt-edit-description-exam').html('Activo');
                    } else {
                        modal.find('#edit-exam-status-checkbox').prop('checked', false);
                        $('#txt-edit-description-exam').html('Inactivo');
                    }
                },
                complete: function (data) {
                    modal.modal('show')
                },
                error: function (data) {
                    console.log(data)
                }
            })
        })

        /* ----------- DELETE EXAM ---------------*/

        $('.main-content').on('click', '.delete-exam-btn', function () {
            var url = $(this).data('url')

            SwalDelete.fire().then(function (e) {
                if (e.value === true) {
                    $.ajax({
                        method: 'POST',
                        url: url,
                        data: {
                            place: 'show'
                        },
                        dataType: 'JSON',
                        success: function (result) {

                            if (result.success === true) {

                                window.location.href = result.route
                            }
                            else {
                                Toast.fire({
                                    icon: 'error',
                                    text: result.message,
                                })
                            }
                        },
                        error: function (result) {
                            Toast.fire({
                                icon: 'error',
                                title: '¡Ocurrió un error inesperado!',
                            });
                        }
                    });
                } else {
                    e.dismiss;
                }
            }, function (dismiss) {
                return false;
            });
        })






        // --------------- QUESTIONS -----------------



        // ------------------ REGISTRAR -----------------------

        var storeQuestions = $('#registerQuestionForm').validate({
            rules: {
                question_type_id: {
                    required: true,
                },
                statement: {
                    required: true,
                    maxlength: 1000,
                },
                points: {
                    required: true,
                    number: true,
                    step: 1,
                    min: 1,
                },
                'alternative[]': {
                    required: true,
                    maxlength: 500,
                },
                'droppable-option[]': {
                    required: true,
                    maxlength: 500,
                },
                is_correct: {
                    required: true
                }
            },
            submitHandler: function (form, event) {
                event.preventDefault()
                var form = $(form)
                var loadSpinner = form.find('.loadSpinner')

                Swal.fire({
                    title: 'Registrar enunciado',
                    text: 'Confirme antes de continuar',
                    icon: 'question',
                    showCancelButton: true,
                    confirmButtonText: 'Confirmar',
                    cancelButtonText: 'Cancelar',
                    reverseButtons: true,
                }).then((result) => {
                    if (result.value) {

                        form.find('.btn-save').attr('disabled', 'disabled')

                        loadSpinner.toggleClass('active')

                        var formData = new FormData(form[0])

                        $.ajax({
                            method: form.attr('method'),
                            url: form.attr('action'),
                            data: formData,
                            processData: false,
                            contentType: false,
                            dataType: 'JSON',
                            success: function (data) {

                                if (data.success) {

                                    let data_show = data.data_show
                                    let exam_box = $('#exam-box-container')
                                    let question_box = $('#question-type-container')

                                    exam_box.html(data_show.html)
                                    question_box.html(data_show.htmlQuestion)
                                    questionsTable.draw()

                                    Toast.fire({
                                        icon: 'success',
                                        text: '¡Registrado con éxito!'
                                    })
                                }
                                else {
                                    Toast.fire({
                                        icon: 'error',
                                        text: data.message
                                    })
                                }
                            },
                            complete: function (data) {
                                storeQuestions.resetForm()
                                form.find('.btn-save').removeAttr('disabled')
                                loadSpinner.toggleClass('active')
                            },
                            error: function (data) {
                                console.log(data)
                                ToastError.fire()
                            }
                        })

                    }
                    else {
                        return false;
                    }
                });


            }
        })


        /* -------------- EDIT -----------------*/


        $('#edit-category-status-checkbox').change(function () {
            var txtDesc = $('#txt-edit-description-category');
            if (this.checked) {
                txtDesc.html('Activo');
            } else {
                txtDesc.html('Inactivo')
            }
        });

        var editCategoryForm = $('#editCategoryForm').validate({
            rules: {
                description: {
                    required: true,
                    maxlength: 100
                }
            },
            submitHandler: function (form, event) {
                event.preventDefault()
                var form = $(form)
                var loadSpinner = form.find('.loadSpinner')
                var modal = $('#editCategoryModal')
                var img_holder = form.find('.img-holder')

                loadSpinner.toggleClass('active')

                var formData = new FormData(form[0])

                $.ajax({
                    method: form.attr('method'),
                    url: form.attr('action'),
                    data: formData,
                    processData: false,
                    contentType: false,
                    dataType: 'JSON',
                    success: function (data) {

                        var listContainer = $('#categories-list-container')
                        listContainer.html(data.html)
                        freeCoursesTable.draw()
                        editCategoryForm.resetForm()

                        loadSpinner.toggleClass('active')
                        modal.modal('toggle')

                        $(img_holder).empty()

                        Toast.fire({
                            icon: 'success',
                            text: '¡Registro actualizado!'
                        })
                    },
                    error: function (data) {
                        console.log(data)
                    }
                })
            }
        })

        var inputCategoryEdit = $('#image-upload-category-edit');
        inputCategoryEdit.on("change", function () {
            $('#editCategoryForm').validate()
            $('#image-upload-category-edit').rules('add', { required: true })

            var img_path = $(this)[0].value;
            var img_holder = $(this).closest('#editCategoryForm').find('.img-holder');
            var currentImagePath = $(this).data('value');
            var img_extension = img_path.substring(img_path.lastIndexOf('.') + 1).toLowerCase();

            if (img_extension == 'jpeg' || img_extension == 'jpg' || img_extension == 'png') {
                if (typeof (FileReader) != 'undefined') {
                    img_holder.empty()
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        $('<img/>', { 'src': e.target.result, 'class': 'img-fluid category_img' }).
                            appendTo(img_holder);
                    }
                    img_holder.show();
                    reader.readAsDataURL($(this)[0].files[0]);
                } else {
                    $(img_holder).html('Este navegador no soporta Lector de Archivos');
                }
            } else {
                $(img_holder).html(currentImagePath);
                inputCategoryEdit.val('')
                Toast.fire({
                    icon: 'warning',
                    title: '¡Selecciona una imagen!',
                });
            }

        })


        $('.main-content').on('click', '.editCategory-btn', function () {
            var modal = $('#editCategoryModal')
            var getDataUrl = $(this).data('send')
            var url = $(this).data('url')
            var form = modal.find('#editCategoryForm')

            $('#editCategoryForm').validate()
            $('#image-upload-category-edit').rules('remove', 'required')

            editCategoryForm.resetForm()
            form.trigger('reset')

            form.attr('action', url)

            $.ajax({
                type: 'GET',
                url: getDataUrl,
                dataType: 'JSON',
                success: function (data) {

                    modal.find('input[name=description]').val(data.description);
                    modal.find('.img-holder').html('<img class="img-fluid course_img" id="image-category-edit" src="' + data.url_img + '"></img>');
                    modal.find('#image-upload-category-edit').attr('data-value', '<img scr="' + data.url_img + '" class="img-fluid category_img"');
                    modal.find('#image-upload-category-edit').val('');

                    if (data.status == 'S') {
                        modal.find('#edit-category-status-checkbox').prop('checked', true);
                        $('#txt-edit-description-category').html('Activo');
                    } else {
                        modal.find('#edit-category-status-checkbox').prop('checked', false);
                        $('#txt-edit-description-category').html('Inactivo');
                    }
                },
                complete: function (data) {
                    modal.modal('toggle')
                },
                error: function (data) {
                    console.log(data)
                }
            })
        })


        // ------------------- ELIMINAR -------------------

        $('.main-content').on('click', '.deleteQuestion-btn', function () {
            var url = $(this).data('url')

            SwalDelete.fire().then(function (e) {
                if (e.value === true) {
                    $.ajax({
                        method: 'POST',
                        url: url,
                        dataType: 'JSON',
                        success: function (result) {

                            if (result.success === true) {

                                let exam_box = $('#exam-box-container')

                                exam_box.html(result.html)
                                questionsTable.draw()

                                Toast.fire({
                                    icon: 'success',
                                    text: '¡Registro eliminado!',
                                })
                            }
                            else {
                                Toast.fire({
                                    icon: 'error',
                                    text: result.message,
                                })
                            }
                        },
                        error: function (result) {
                            console.log(result)
                            Toast.fire({
                                icon: 'error',
                                title: '¡Ocurrió un error inesperado!',
                            });
                        }
                    });
                } else {
                    e.dismiss;
                }
            }, function (dismiss) {
                return false;
            });
        })


    }



    // ---------- QUESTIONS GENERAL --------------

    if ($('#question-type-container').length) {


        if ($('#dropdown-questions-create').length) {

            $('#registerQuestionTypeSelect').select2({
                placeholder: 'Selecciona un tipo de enunciado'
            })

            $('.main-content').on('change', '#registerQuestionTypeSelect', function () {

                var value = $(this).val()
                var url = $(this).data('url')

                $('#registerQuestionTypeSelect').select2({
                    placeholder: 'Selecciona un tipo de enunciado',
                    disabled: true
                })

                $.ajax({
                    type: 'GET',
                    url: url,
                    data: {
                        value: value
                    },
                    dataType: 'JSON',
                    success: function (data) {

                        if (data.success) {
                            let questionBox = $('#question-type-container')
                            questionBox.html(data.html)
                        }
                        else {
                            Toast.fire({
                                icon: 'error',
                                text: data.message
                            })
                        }

                    },
                    complete: function (data) {
                        $('#registerQuestionTypeSelect').select2({
                            placeholder: 'Selecciona un tipo de enunciado',
                            disabled: false
                        })
                    },
                    error: function (data) {
                        console.log(data)
                        ToastError.fire()
                    }
                })

            })
        }

        function addAlternativeHtml(question_type, count) {
            if (question_type == 1) {
                return '<tr class="alternative-row" data-index="' + count + '"> \
                            <td> \
                                <div class="input-group"> \
                                    <div class="input-group-prepend"> \
                                        <div class="input-group-text text-bold alternative-number"> \
                                            '+ (parseInt(count) + 1) + ' \
                                        </div> \
                                    </div> \
                                    <input type="text" name="alternative[]" class="form-control alternative no-label-error" \
                                        placeholder="Ingresa la alternativa"> \
                                </div> \
                            </td> \
                            <td class="text-center flex-center"> \
                                <label class="is_correct_button position-relative"> \
                                    <input type="radio" name="is_correct" value="'+ count + '" class="selectgroup-input"> \
                                    <span class="selectgroup-button selectgroup-button-icon is_correct_btn"> \
                                        <i class="fa-solid fa-check"></i> \
                                    </span> \
                                </label> \
                            </td> \
                            <td class="text-center btn-action-container"> \
                                <span class="delete-btn delete-alternative-btn"> \
                                    <i class="fa-solid fa-trash-can"></i> \
                                </span> \
                            </td> \
                        </tr>'
            }
            else if (question_type == 2) {
                return '<tr class="alternative-row" data-index="' + count + '"> \
                            <td> \
                                <div class="input-group"> \
                                    <div class="input-group-prepend"> \
                                        <div class="input-group-text text-bold alternative-number"> \
                                            '+ (parseInt(count) + 1) + ' \
                                        </div> \
                                    </div> \
                                    <input type="text" name="alternative[]" class="form-control alternative no-label-error" \
                                        placeholder="Ingresa la alternativa"> \
                                </div> \
                            </td> \
                            <td class="text-center flex-center"> \
                                <div class="custom-checkbox custom-input-height flex-center"> \
                                    <input type="checkbox" name="is_correct_'+ count + '" data-checkboxes="alternatives-multiple-checkbox" \
                                        class="custom-control-input" id="checkbox-'+ count + '"> \
                                    <label for="checkbox-'+ count + '" class="selectgroup-button selectgroup-button-icon custom-checkbox-question margin-0"> \
                                        <i class="fa-solid fa-check"></i> \
                                    <label> \
                                </div> \
                            </td> \
                            <td class="text-center btn-action-container"> \
                                <span class="delete-btn delete-alternative-btn"> \
                                    <i class="fa-solid fa-trash-can"></i> \
                                </span> \
                            </td> \
                        </tr>'
            }
            else if (question_type == 4) {
                return '<tr class="alternative-row" data-index="' + count + '"> \
                            <td> \
                                <div class="input-group"> \
                                    <div class="input-group-prepend"> \
                                        <div class="input-group-text text-bold alternative-number"> \
                                        '+ (parseInt(count) + 1) + ' \
                                        </div> \
                                    </div> \
                                    <input type="text" name="alternative[]" class="form-control alternative no-label-error" \
                                        placeholder="Ingresa la(s) respuesta(s)"> \
                                </div> \
                            </td> \
                            <td class="text-center btn-action-container"> \
                                <span class="delete-btn delete-alternative-btn"> \
                                    <i class="fa-solid fa-trash-can"></i> \
                                </span> \
                            </td> \
                        </tr>'
            }
            else if (question_type == 5) {
                return '<tr class="alternative-row" data-index="' + count + '"> \
                            <td class="input-matching-column input-matching-column-width"> \
                                <div class="input-group"> \
                                    <div class="input-group-prepend"> \
                                        <div class="input-group-text text-bold alternative-number"> \
                                        '+ (parseInt(count) + 1) + ' \
                                        </div> \
                                    </div> \
                                    <input type="text" name="alternative[]" class="form-control alternative no-label-error" \
                                        placeholder="Ingresa la alternativa"> \
                                    <span class="position-relative image-icon-alternative"> \
                                        <label for="alternative-image-'+ count + '" class="margin-0"> \
                                            <i class="fa-solid fa-image fa-xl"></i> \
                                            <span class="inner-icon-context"> \
                                                <i class="fa-solid fa-plus fa-xs"></i> \
                                            </span> \
                                        </label> \
                                        <input type="file" name="image-'+ count + '" id="alternative-image-' + count + '" class="input-alternative-image" data-value=""> \
                                    </span> \
                                </div> \
                                <div class="img-alternative-holder position-relative"> \
                                </div> \
                            </td> \
                            <td class="text-center relation-icon-column"> \
                                <span class="matching-relation-column"> \
                                </span> \
                            </td> \
                            <td class="input-matching-column-width"> \
                                <input type="text" name="droppable-option[]" class="form-control droppable no-label-error" \
                                    placeholder="Ingresa la respuesta"> \
                            </td> \
                            <td class="text-center btn-action-container"> \
                                <span class="delete-btn delete-alternative-btn"> \
                                    <i class="fa-solid fa-trash-can"></i> \
                                </span> \
                            </td> \
                        </tr>'
            }
            else {
                return ""
            }

        }

        function deleteAlternative(row, questionType) {

            /*--------------- QUESTION: RELLLENAR ESPACIO EN BLANCO  ------------------*/

            if (questionType == 4) {

                let row_index = row.data('index')
                let currentVal = $('#statement-fill-blank').val()
                let regex = /\[+ ___________ +\]/gm

                let matches = [...currentVal.matchAll(regex)];


                if (row_index > 0 && row_index in matches) {

                    let match = matches[row_index]
                    let match_start = match.index
                    let match_end = match_start + match[0].length

                    $('#statement-fill-blank').
                        val(currentVal.substring(0, match_start) + "" + currentVal.substring(match_end + 1))
                }

            }

            row.remove()

            $('tr.alternative-row').each(function (index) {

                $(this).attr('data-index', index)
                $(this).find('.alternative-number').html(index + 1)

                /*--------------- QUESTION: RESPUESTA ÚNICA  ------------------*/

                if (questionType == 1) {

                    $(this).find('input[name=is_correct]').val(index)
                }

                /*--------------- QUESTION: RESPUESTA MÚLTIPLE  ------------------*/

                if (questionType == 2) {

                    $(this).find('input[type=checkbox]').attr('name', 'is_correct_' + index).attr('id', 'checkbox-' + index)
                        .next('label').attr('for', 'checkbox-' + index)
                }

                /*--------------- QUESTION: RELACIONAR  ------------------*/

                if (questionType == 5) {

                    $(this).find('.image-icon-alternative label').attr('for', 'alternative-image-' + index)
                    $(this).find('input[type=file].input-alternative-image').attr('name', 'image-' + index)
                        .attr('id', 'alternative-image-' + index)

                }
            })
        }

        function deleteImage(row) {
            var column = row.find('.input-matching-column')
            var img_input = row.find('input[type=file].input-alternative-image')
            var img_holder = row.find('.img-alternative-holder')

            column.removeClass('with-image')
            column.find('.image-icon-alternative .inner-icon-context').html('<i class="fa-solid fa-plus fa-xs"></i>')
            img_holder.removeClass('show').empty()
            img_input.val('')
        }


        $('html').on('change', '#question-status-checkbox', function () {
            var txtDesc = $('#txt-status-question');
            if (this.checked) {
                txtDesc.html('Activo');
            } else {
                txtDesc.html('Inactivo')
            }
        });


        // ---------------- AÑADIR ALTERNATIVA --------------

        $('.main-content').on('click', '.add_alternative_button', function () {

            var questionType = $('input#typeQuestionValue').val()

            /*--------------- QUESTION: RESPUESTA ÚNICA ------------------*/
            /*--------------- QUESTION: RESPUESTA MÚLTIPLE ------------------*/
            /*--------------- QUESTION: RELLAR ESPACIO EN BLANCO ------------------*/
            /*--------------- QUESTION: RELACIONAR ------------------*/

            var type = $('input#typeQuestionValue').val()
            var alternativesTable = $('#alternatives-table')

            let count = alternativesTable.find('.alternative-row').length
            alternativesTable.append(addAlternativeHtml(type, count))

        })


        // -------------- ELIMINAR ALTERNATIVA ----------------

        $('.main-content').on('click', '.delete-alternative-btn', function () {

            var questionType = $('input#typeQuestionValue').val()
            var row = $(this).closest('tr.alternative-row')
            var dataStored = $(this).data('stored')

            if (dataStored == true) {

                var url = $(this).data('url')

                SwalDelete.fire().then(function (e) {
                    if (e.value === true) {
                        $.ajax({
                            method: 'POST',
                            url: url,
                            dataType: 'JSON',
                            success: function (result) {

                                if (result.success === true) {

                                    deleteAlternative(row, questionType)

                                    Toast.fire({
                                        icon: 'success',
                                        text: '¡Registro eliminado!',
                                    })
                                }
                                else {
                                    Toast.fire({
                                        icon: 'error',
                                        text: result.message,
                                    })
                                }
                            },
                            error: function (result) {
                                ToastError.fire()
                            }
                        });
                    } else {
                        e.dismiss;
                    }
                }, function (dismiss) {
                    return false;
                });

            }
            else {
                deleteAlternative(row, questionType)

            }
        })


        // -------------- CAMBIAR PREGUNTA CORRECTA ---------------

        $('.main-content').on('change', '.alternative-row input[name=is_correct]', function () {

            var questionType = $('input#typeQuestionValue').val()

            /*--------------- QUESTION: RESPUESTA ÚNICA ------------------*/

            if (questionType == 1) {

                if ($('#questions-table').length) {

                    let row = $(this).closest('tr.alternative-row')
                    row.find('.delete-btn').removeClass('delete-alternative-btn').addClass('disabled')
                    row.siblings().find('.delete-btn').removeClass('disabled').addClass('delete-alternative-btn')
                }
            }
        })



        // -------------- AÑADIR ESPACIO EN BLANCO ---------------

        $('.main-content').on('click', '.add-blank-space-btn', function () {

            var curPos = document.getElementById("statement-fill-blank").selectionStart;

            var input = $('#statement-fill-blank')
            let value = input.val();

            if (value != '') {
                input.val(value.slice(0, curPos) + ' [ ' + '_'.repeat(11) + ' ] ' + value.slice(curPos));
                input.caretTo(curPos + 17);
            }

            var currentVal = $('#statement-fill-blank').val()

            var regex = /\[+ ___________ +\]/gm

            var alternativesTable = $('#alternatives-table')

            let matches = [...currentVal.matchAll(regex)];
            let count = alternativesTable.find('.alternative-row').length
            var type = $('input#typeQuestionValue').val()


            if (matches.length > count) {
                alternativesTable.append(addAlternativeHtml(type, count))
            }
        })



        // -------------- CARGAR IMAGEN ----------------

        $('.main-content').on('change', 'input[type=file].input-alternative-image', function () {

            var img_path = $(this).val();
            var row = $(this).closest('.alternative-row')
            var column = row.find('.input-matching-column')
            var img_holder = row.find('.img-alternative-holder')

            var img_extension = img_path.substring(img_path.lastIndexOf('.') + 1).toLowerCase();

            if (img_extension == 'jpeg' || img_extension == 'jpg' || img_extension == 'png') {

                if (typeof (FileReader) != 'undefined') {
                    img_holder.empty()
                    var reader = new FileReader()

                    reader.onload = function (e) {
                        $('<img/>', { 'src': e.target.result, 'class': 'img-fluid alternative_img' }).
                            appendTo(img_holder);
                    }

                    img_holder.append('<span class="delete-image-alternative"> \
                                        <i class="fa-regular fa-circle-xmark fa-lg"></i> \
                                    </span>')

                    reader.readAsDataURL($(this)[0].files[0])

                    column.addClass('with-image')
                    column.find('.image-icon-alternative .inner-icon-context').html('<i class="fa-solid fa-arrows-rotate"></i>')

                    img_holder.addClass('show')
                }
                else {
                    img_holder.html('Este navegador no soporta Lector de Archivos');
                }
            }
            else {
                column.removeClass('with-image')
                column.find('.image-icon-alternative .inner-icon-context').html('<i class="fa-solid fa-plus fa-xs"></i>')
                img_holder.removeClass('show').empty()
                $(this).val('')

                Toast.fire({
                    icon: 'warning',
                    title: '¡Selecciona una imagen!'
                });
            }


        })


        // ------------ ELIMINAR IMAGEN ----------------

        $('.main-content').on('click', '.delete-image-alternative', function () {

            var row = $(this).closest('.alternative-row')
            var dataStored = $(this).data('stored')
            var url = $(this).data('url')

            if (dataStored) {

                var url = $(this).data('url')

                SwalDelete.fire().then(function (e) {
                    if (e.value === true) {
                        $.ajax({
                            method: 'POST',
                            url: url,
                            dataType: 'JSON',
                            success: function (result) {

                                if (result.success === true) {

                                    deleteImage(row)

                                    Toast.fire({
                                        icon: 'success',
                                        text: '¡Registro eliminado!',
                                    })
                                }
                                else {
                                    Toast.fire({
                                        icon: 'error',
                                        text: result.message,
                                    })
                                }
                            },
                            error: function (result) {
                                Toast.fire({
                                    icon: 'error',
                                    title: '¡Ocurrió un error inesperado!',
                                });
                            }
                        });
                    } else {
                        e.dismiss;
                    }
                }, function (dismiss) {
                    return false;
                });

            }
            else {
                deleteImage(row)
            }

        })



        if ($('#question-box-container').length) {

            // ------------------ ACTUALIZAR -----------------------

            var updateQuestions = $('#updateQuestionForm').validate({
                rules: {
                    question_type_id: {
                        required: true,
                    },
                    statement: {
                        required: true,
                        maxlength: 1000,
                    },
                    points: {
                        required: true,
                        number: true,
                        step: 1,
                        min: 1,
                    },
                    'alternative[]': {
                        required: true,
                        maxlength: 500,
                    },
                    'droppable-option[]': {
                        required: true,
                        maxlength: 500,
                    },
                    is_correct: {
                        required: true
                    }
                },
                submitHandler: function (form, event) {
                    event.preventDefault()
                    var form = $(form)
                    var loadSpinner = form.find('.loadSpinner')

                    Swal.fire({
                        title: 'Actualizar registro',
                        text: 'Confirme los cambios antes de continuar',
                        icon: 'question',
                        showCancelButton: true,
                        confirmButtonText: 'Confirmar',
                        cancelButtonText: 'Cancelar',
                        reverseButtons: true,
                    }).then((result) => {
                        if (result.value) {

                            form.find('.btn-save').attr('disabled', 'disabled')

                            loadSpinner.toggleClass('active')

                            var formData = new FormData(form[0])

                            $.ajax({
                                method: form.attr('method'),
                                url: form.attr('action'),
                                data: formData,
                                processData: false,
                                contentType: false,
                                dataType: 'JSON',
                                success: function (data) {

                                    if (data.success) {

                                        let question_box = $('#question-type-container')
                                        let question_statement = $('#question-statement-container')

                                        question_box.html(data.html)
                                        question_statement.html(data.statement)

                                        Toast.fire({
                                            icon: 'success',
                                            text: '¡Registro actualizado!'
                                        })
                                    }
                                    else {
                                        Toast.fire({
                                            icon: 'error',
                                            text: data.message
                                        })
                                    }
                                },
                                complete: function (data) {

                                    form.find('.btn-save').removeAttr('disabled')
                                    loadSpinner.toggleClass('active')

                                },
                                error: function (data) {
                                    console.log(data)
                                    ToastError.fire()
                                }
                            })

                        } else {
                            return false;
                        }
                    })


                }
            })

        }

    }







    // ------------- EVENTS  INDEX------------------

    function infoQtyText(qty) {
        return '( ! ) Este examen tiene <b>' + qty + '</b> enunciados'
    }

    function infoScoreText(score) {
        return '( ! ) La puntuación máxima es ' + score
    }


    if ($('#events-table').length) {


        if ($('#date-range-input-event').length) {

            $('#date-range-input-event').val('Todos los registros');

            $('.daterange-cus').daterangepicker({
                locale: { format: 'YYYY-MM-DD' },
                drops: 'down',
                opens: 'right'
            });

            $('#daterange-btn-events').daterangepicker({
                ranges: {
                    'Todo': [moment('1970-01-01'), moment('3000-01-01')],
                    'Hoy': [moment(), moment().add(1, 'days')],
                    'Ayer': [moment().subtract(1, 'days'), moment()],
                    'Últimos 7 días': [moment().subtract(6, 'days'), moment().add(1, 'days')],
                    'Últimos 30 días': [moment().subtract(29, 'days'), moment().add(1, 'days')],
                    'Este mes': [moment().startOf('month'), moment().endOf('month').add(1, 'days')],
                    'Último mes': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month').add(1, 'days')]
                },
                startDate: moment('1970-01-01'),
                endDate: moment('3000-01-01'),
            }, function (start, end) {
                if (start.format('YYYY-MM-DD') == '1970-01-01') {
                    $('#date-range-input-event').val('Todos los registros');
                } else {
                    $('#date-range-input-event').val('Del: ' + start.format('YYYY-MM-DD') + ' hasta el: ' + end.format('YYYY-MM-DD'))
                }

                eventsTable.draw()
            });
        }

        /* ---------- FILTER SELECT ----------*/

        $('.main-content').on('change', '.select-filter-event', function () {
            eventsTable.draw()
        })

        /* ----- EVENTS TABLE ------*/

        var eventsTableEle = $('#events-table');
        var getDataUrl = eventsTableEle.data('url');
        var eventsTable = eventsTableEle.DataTable({
            responsive: true,
            language: DataTableEs,
            serverSide: true,
            processing: true,
            ajax: {
                'url': getDataUrl,
                "data": function (data) {
                    data.from_date = $('#daterange-btn-events').data('daterangepicker').startDate.format('YYYY-MM-DD')
                    data.end_date = $('#daterange-btn-events').data('daterangepicker').endDate.format('YYYY-MM-DD')
                    data.search_course = $('#search_from_course_select').val();
                    data.search_instructor = $('#search_from_instructor_select').val();
                    data.search_responsable = $('#search_from_responsable_select').val();
                }
            },
            columns: [
                { data: 'id', name: 'id' },
                { data: 'description', name: 'description' },
                { data: 'type', name: 'type' },
                { data: 'date', name: 'date' },
                { data: 'exam.course.description', name: 'exam.course.description' },
                { data: 'user.name', name: 'user.name' },
                { data: 'responsable.name', name: 'responsable.name' },
                { data: 'flg_asist', name: 'flg_asist' },
                { data: 'active', name: 'active' },
                { data: 'action', name: 'action', orderable: false, searchable: false },
            ],
            order: [
                [3, 'desc']
            ]
            // dom: 'rtip'
        });

        // --------------- REGISTRAR -----------------

        if ($('#registerEventForm').length) {

            $('#registerTypeSelect').select2({
                dropdownParent: $("#registerEventModal"),
                placeholder: 'Selecciona un tipo de evento'
            })

            $('#registerInstructorSelect').select2({
                dropdownParent: $("#registerEventModal"),
                placeholder: 'Selecciona un instructor'
            })

            $('#registerResponsableSelect').select2({
                dropdownParent: $("#registerEventModal"),
                placeholder: 'Selecciona un responsable'
            })

            $('#registerRoomSelect').select2({
                dropdownParent: $("#registerEventModal"),
                placeholder: 'Selecciona un sala'
            })

            $('#registerOwnerCompanySelect').select2({
                dropdownParent: $("#registerEventModal"),
                placeholder: 'Selecciona una empresa titular',
                allowClear: true
            })

            $('#registerExamSelect').select2({
                dropdownParent: $("#registerEventModal"),
                placeholder: 'Selecciona un examen'
            })

            $('#registerTestExamSelect').select2({
                dropdownParent: $("#registerEventModal"),
                placeholder: 'Selecciona un examen de prueba',
                allowClear: true
            })

            $('#registerElearningSelect').select2({
                dropdownParent: $("#registerEventModal"),
                placeholder: 'Selecciona un e-learning',
                allowClear: true
            })


            $('#register-status-checkbox').change(function () {
                var txtDesc = $('#txt-register-status');
                if (this.checked) {
                    txtDesc.html('Activo');
                } else {
                    txtDesc.html('Inactivo')
                }
            });

            var registerEventForm = $('#registerEventForm').validate({
                rules: {
                    description: {
                        required: true,
                        maxlength: 255
                    },
                    type: {
                        required: true,
                    },
                    date: {
                        required: true
                    },
                    user_id: {
                        required: true
                    },
                    responsable_id: {
                        required: true
                    },
                    room_id: {
                        required: true
                    },
                    exam_id: {
                        required: true
                    },
                    questions_qty: {
                        required: true,
                        step: 1,
                        min: 2
                    },
                    min_score: {
                        required: true,
                        step: 1
                    }
                },
                submitHandler: function (form, event) {
                    event.preventDefault()

                    var form = $(form)
                    var loadSpinner = form.find('.loadSpinner')
                    var modal = $('#registerEventModal')

                    loadSpinner.toggleClass('active')
                    form.find('.btn-save').attr('disabled', 'disabled')

                    $.ajax({
                        method: form.attr('method'),
                        url: form.attr('action'),
                        data: form.serialize(),
                        dataType: 'JSON',
                        success: function (data) {

                            if (data.success) {

                                eventsTable.draw()
                                registerEventForm.resetForm()
                                form.trigger('reset');

                                Toast.fire({
                                    icon: 'success',
                                    text: '¡Registrado exitosamente!'
                                })
                            }
                            else {
                                Toast.fire({
                                    icon: 'error',
                                    text: data.message
                                })
                            }
                        },
                        complete: function (data) {

                            form.find('.btn-save').removeAttr('disabled')
                            loadSpinner.toggleClass('active')
                            modal.modal('hide')
                        },
                        error: function (data) {
                            console.log(data)
                            ToastError.fire()
                        }
                    })
                }
            })

            $('.main-content').on('click', '#btn-register-event-modal', function () {
                var button = $(this)
                var url = button.data('url')
                var modal = $('#registerEventModal')
                var loadSpinner = button.find('.loadSpinner')
                var form = modal.find('#registerEventForm')

                var typeSelect = form.find('#registerTypeSelect')
                var instructorSelect = form.find('#registerInstructorSelect')
                var responsableSelect = form.find('#registerResponsableSelect')
                var roomSelect = form.find('#registerRoomSelect')
                var ownerCompanySelect = form.find('#registerOwnerCompanySelect')
                var examSelect = form.find('#registerExamSelect')
                var testExamSelect = form.find('#registerTestExamSelect')
                var elearningSelect = form.find('#registerElearningSelect')

                var dateInput = form.find('input[name=date]')

                registerEventForm.resetForm()
                form.trigger('reset')

                typeSelect.empty()
                instructorSelect.empty()
                responsableSelect.empty()
                roomSelect.empty()
                ownerCompanySelect.empty()
                examSelect.empty()
                testExamSelect.empty()
                elearningSelect.empty()

                dateInput.val(moment().format('YYYY-MM-DD'))

                loadSpinner.toggleClass('active')
                button.attr('disabled', 'disabled')

                $.ajax({
                    type: 'GET',
                    url: url,
                    dataType: 'JSON',
                    success: function (data) {

                        typeSelect.append('<option></option>')
                        $.each(data.types, function (key, values) {
                            typeSelect.append('<option value="' + key + '">' + values + '</option>')
                        })

                        instructorSelect.append('<option></option>')
                        $.each(data.instructors, function (key, values) {
                            instructorSelect.append('<option value="' + values.id + '">' +
                                values.name + ' ' + values.paternal +
                                '</option>')
                        })

                        responsableSelect.append('<option></option>')
                        $.each(data.responsables, function (key, values) {
                            responsableSelect.append('<option value="' + values.id + '">' +
                                values.name + ' ' + values.paternal +
                                '</option>')
                        })

                        roomSelect.append('<option></option>')
                        $.each(data.rooms, function (key, values) {
                            roomSelect.append('<option value="' + values.id + '">' +
                                values.description +
                                '</option>')
                        })

                        ownerCompanySelect.append('<option></option>')
                        $.each(data.ownerCompanies, function (key, values) {
                            ownerCompanySelect.append('<option value="' + values.id + '">' +
                                values.name +
                                '</option>')
                        })

                        examSelect.append('<option></option>')
                        $.each(data.exams, function (key, values) {
                            examSelect.append('<option value="' + values.id + '">' +
                                values.title +
                                '</option>')
                        })

                        testExamSelect.append('<option></option>')
                        $.each(data.examsTest, function (key, values) {
                            testExamSelect.append('<option value="' + values.id + '">' +
                                values.title +
                                '</option>')
                        })

                        elearningSelect.append('<option></option>')
                        $.each(data.eLearnings, function (key, values) {
                            elearningSelect.append('<option value="' + values.id + '">' +
                                values.title +
                                '</option>')
                        })

                        form.find('input[name=questions_qty]').val('').attr('disabled', 'disabled').addClass('input-disabled')
                        form.find('input[name=min_score]').val('').attr('disabled', 'disabled').addClass('input-disabled')
                        form.find('#info-qty-questions').html('')
                        form.find('#info-min-score').html('')

                    },
                    complete: function (data) {
                        loadSpinner.toggleClass('active')
                        button.removeAttr('disabled')
                        modal.modal('show')
                    },
                    error: function (data) {
                        console.log(data)
                    }
                })
            })

            $('html').on('change', '#registerExamSelect', function () {
                var form = $('#registerEventForm')
                var qttyInput = form.find('input[name=questions_qty]')
                var minScoreInput = form.find('input[name=min_score]')
                var url = $(this).data('url')

                let infoQtyBox = form.find('#info-qty-questions')
                let infoScoreBox = form.find('#info-min-score')
                infoQtyBox.empty()
                infoScoreBox.empty()

                qttyInput.val('')
                qttyInput.attr('disabled', 'disabled').addClass('input-disabled')
                minScoreInput.val('')
                minScoreInput.attr('disabled', 'disabled').addClass('input-disabled')

                $.ajax({
                    type: 'GET',
                    url: url,
                    data: {
                        type: 'qtyQuestions',
                        value: $(this).val()
                    },
                    dataType: 'JSON',
                    success: function (data) {

                        let qty = (data.qty > 10) ? 10 : data.qty

                        infoQtyBox.html(infoQtyText(data.qty))
                        qttyInput.removeAttr('disabled').removeClass('input-disabled')

                        form.validate()
                        qttyInput.rules('add', { max: data.qty })
                        qttyInput.val(qty)

                        let avg = data.avg
                        let maxScore = Math.round(avg * qty)
                        let minScore = Math.round(maxScore * 0.7)

                        infoScoreBox.html(infoScoreText(maxScore))
                        minScoreInput.removeAttr('disabled').removeClass('input-disabled')
                        minScoreInput.rules('add', { max: maxScore })
                        minScoreInput.val(minScore)

                    },
                    error: function (data) {
                        console.log(data)
                        ToastError.fire()
                    }
                })

            })

            $('html').on('keyup', '#input-qty-questions', function () {
                var form = $('#registerEventForm')
                var input = $(this)
                var examSelect = form.find('#registerExamSelect')
                var inputScore = form.find('input[name=min_score]')
                var infoScoreBox = form.find('#info-min-score')
                var value = input.val()
                var url = input.data('url')

                if (value) {

                    input.attr('disabled', 'disabled')

                    $.ajax({
                        type: 'GET',
                        url: url,
                        data: {
                            type: 'qtyQuestions',
                            value: examSelect.val(),
                            qty: value
                        },
                        dataType: 'JSON',
                        success: function (data) {

                            if (value <= data.qty && value >= 2) {

                                infoScoreBox.html(infoScoreText(data.maxScore))
                                inputScore.removeAttr('disabled').removeClass('input-disabled')

                                let minScore = Math.round(data.maxScore * 0.7)

                                form.validate()
                                inputScore.rules('add', { max: data.maxScore })
                                inputScore.val(minScore)
                            }
                            else {
                                inputScore.val('')
                                infoScoreBox.empty()
                                inputScore.attr('disabled', 'disabled').addClass('input-disabled')
                            }
                        },
                        complete: function (data) {
                            input.removeAttr('disabled')
                            input.focus()
                        },
                        error: function (data) {
                            console.log(data)
                            ToastError.fire()
                        }
                    })
                }
                else {
                    inputScore.val('')
                    infoScoreBox.empty()
                    inputScore.attr('disabled', 'disabled').addClass('input-disabled')
                }
            })
        }

        /* -------------- EDITAR ---------------*/

        if ($('#editEventForm').length) {

            $('#editTypeSelect').select2({
                dropdownParent: $("#editEventModal"),
                placeholder: 'Selecciona un tipo de evento'
            })

            $('#editInstructorSelect').select2({
                dropdownParent: $("#editEventModal"),
                placeholder: 'Selecciona un instructor'
            })

            $('#editResponsableSelect').select2({
                dropdownParent: $("#editEventModal"),
                placeholder: 'Selecciona un responsable'
            })

            $('#editRoomSelect').select2({
                dropdownParent: $("#editEventModal"),
                placeholder: 'Selecciona un sala'
            })

            $('#editOwnerCompanySelect').select2({
                dropdownParent: $("#editEventModal"),
                placeholder: 'Selecciona una empresa titular',
                allowClear: true
            })

            $('#editExamSelect').select2({
                dropdownParent: $("#editEventModal"),
                placeholder: 'Selecciona un examen'
            })

            $('#editTestExamSelect').select2({
                dropdownParent: $("#editEventModal"),
                placeholder: 'Selecciona un examen de prueba',
                allowClear: true
            })

            $('#editElearningSelect').select2({
                dropdownParent: $("#editEventModal"),
                placeholder: 'Selecciona un e-learning',
                allowClear: true
            })


            $('#edit-status-checkbox').change(function () {
                var txtDesc = $('#txt-edit-status');
                if (this.checked) {
                    txtDesc.html('Activo');
                } else {
                    txtDesc.html('Inactivo')
                }
            });

            var editEventForm = $('#editEventForm').validate({
                rules: {
                    description: {
                        required: true,
                        maxlength: 255
                    },
                    type: {
                        required: true,
                    },
                    date: {
                        required: true
                    },
                    user_id: {
                        required: true
                    },
                    responsable_id: {
                        required: true
                    },
                    room_id: {
                        required: true
                    },
                    exam_id: {
                        required: true
                    },
                    questions_qty: {
                        required: true,
                        step: 1,
                        min: 2
                    },
                    min_score: {
                        required: true,
                        step: 1
                    }
                },
                submitHandler: function (form, event) {
                    event.preventDefault()

                    var form = $(form)
                    var loadSpinner = form.find('.loadSpinner')
                    var modal = $('#editEventModal')

                    loadSpinner.toggleClass('active')
                    form.find('.btn-save').attr('disabled', 'disabled')

                    $.ajax({
                        method: form.attr('method'),
                        url: form.attr('action'),
                        data: form.serialize(),
                        dataType: 'JSON',
                        success: function (data) {

                            if (data.success) {

                                eventsTable.draw()
                                editEventForm.resetForm()
                                form.trigger('reset');

                                Toast.fire({
                                    icon: 'success',
                                    text: '¡Registro actualizado!'
                                })
                            }
                            else {
                                Toast.fire({
                                    icon: 'error',
                                    text: data.message
                                })
                            }
                        },
                        complete: function (data) {

                            form.find('.btn-save').removeAttr('disabled')
                            loadSpinner.toggleClass('active')
                            modal.modal('hide')
                        },
                        error: function (data) {
                            console.log(data)
                            ToastError.fire()
                        }
                    })
                }
            })

            $('.main-content').on('click', '.editEvent-btn', function () {
                var getDataUrl = $(this).data('send')
                var url = $(this).data('url')
                var modal = $('#editEventModal');
                var form = modal.find('#editEventForm')

                var typeSelect = form.find('#editTypeSelect')
                var instructorSelect = form.find('#editInstructorSelect')
                var responsableSelect = form.find('#editResponsableSelect')
                var roomSelect = form.find('#editRoomSelect')
                var ownerCompanySelect = form.find('#editOwnerCompanySelect')
                var examSelect = form.find('#editExamSelect')
                var testExamSelect = form.find('#editTestExamSelect')
                var elearningSelect = form.find('#editElearningSelect')

                var activeChk = form.find('#edit-status-checkbox')
                var flgTestChk = form.find('#edit-flg-test-checkbox')
                var flgAssist = form.find('#edit-flg-assist-checkbox')
                var flgSurveyCourse = form.find('#edit-flg-survey-course')
                var flgSurveyEvaluation = form.find('#edit-flg-survey-evaluation')

                editEventForm.resetForm()
                form.trigger('reset')

                typeSelect.empty()
                instructorSelect.empty()
                responsableSelect.empty()
                roomSelect.empty()
                ownerCompanySelect.empty()
                examSelect.empty()
                testExamSelect.empty()
                elearningSelect.empty()

                form.attr('action', url)

                $.ajax({
                    type: 'GET',
                    url: getDataUrl,
                    dataType: 'JSON',
                    success: function (data) {

                        let all = data.all
                        let event = data.event

                        if (all != null) {

                            typeSelect.append('<option></option>')
                            $.each(all.types, function (key, values) {
                                typeSelect.append('<option value="' + key + '">' + values + '</option>')
                            })
                            typeSelect.val(event.type).change()

                            instructorSelect.append('<option></option>')
                            $.each(all.instructors, function (key, values) {
                                instructorSelect.append('<option value="' + values.id + '">' +
                                    values.name + ' ' + values.paternal +
                                    '</option>')
                            })
                            instructorSelect.val(event.user_id).change()

                            responsableSelect.append('<option></option>')
                            $.each(all.responsables, function (key, values) {
                                responsableSelect.append('<option value="' + values.id + '">' +
                                    values.name + ' ' + values.paternal +
                                    '</option>')
                            })
                            responsableSelect.val(event.responsable_id).change()

                            roomSelect.append('<option></option>')
                            $.each(all.rooms, function (key, values) {
                                roomSelect.append('<option value="' + values.id + '">' +
                                    values.description +
                                    '</option>')
                            })
                            roomSelect.val(event.room_id).change()

                            ownerCompanySelect.append('<option></option>')
                            $.each(all.ownerCompanies, function (key, values) {
                                ownerCompanySelect.append('<option value="' + values.id + '">' +
                                    values.name +
                                    '</option>')
                            })
                            ownerCompanySelect.val(event.owner_companies_id).change()

                            examSelect.append('<option></option>')
                            $.each(all.exams, function (key, values) {
                                examSelect.append('<option value="' + values.id + '">' +
                                    values.title +
                                    '</option>')
                            })
                            examSelect.val(event.exam_id).change()

                            testExamSelect.append('<option></option>')
                            $.each(all.examsTest, function (key, values) {
                                testExamSelect.append('<option value="' + values.id + '">' +
                                    values.title +
                                    '</option>')
                            })
                            testExamSelect.val(event.test_exam_id).change()

                            elearningSelect.append('<option></option>')
                            $.each(all.eLearnings, function (key, values) {
                                elearningSelect.append('<option value="' + values.id + '">' +
                                    values.title +
                                    '</option>')
                            })
                            elearningSelect.val(event.elearning_id).change()
                        }

                        if (event.active == 'S') {
                            activeChk.prop('checked', true);
                            $('#txt-edit-status').html('Activo');
                        } else {
                            activeChk.prop('checked', false);
                            $('#txt-edit-status').html('Inactivo');
                        }

                        if (event.flg_test_exam == 'S') {
                            flgTestChk.prop('checked', true);
                        } else {
                            flgTestChk.prop('checked', false);
                        }

                        if (event.flg_asist == 'S') {
                            flgAssist.prop('checked', true);
                        } else {
                            flgAssist.prop('checked', false);
                        }

                        if (event.flg_survey_course == 'S') {
                            flgSurveyCourse.prop('checked', true);
                        } else {
                            flgSurveyCourse.prop('checked', false);
                        }

                        if (event.flg_survey_evaluation == 'S') {
                            flgSurveyEvaluation.prop('checked', true);
                        } else {
                            flgSurveyEvaluation.prop('checked', false);
                        }

                        form.find('input[name=description]').val(event.description)

                        $('#dateinputEdit').data('daterangepicker').setStartDate(event.date);
                        $("#dateinputEdit").data('daterangepicker').setEndDate(event.date);

                        let inputQuestionQty = form.find('input[name=questions_qty]')
                        let inputMinScore = form.find('input[name=min_score]')

                        inputQuestionQty.val(event.questions_qty)
                        inputMinScore.val(event.min_score)

                        let questQty = event['exam'].questions_count
                        let maxScore = Math.round(event.questions_qty * event['exam'].questions_avg_points)

                        form.find('#info-qty-questions').html(infoQtyText(questQty))
                        form.find('#info-min-score').html(infoScoreText(maxScore))

                        form.validate()
                        inputQuestionQty.rules('add', { max: questQty })
                        inputMinScore.rules('add', { max: maxScore })

                        if (event.finished_certifications_count != 0) {
                            examSelect.attr('readonly', 'true')
                            inputQuestionQty.attr('readonly', 'true').addClass('not-user-allowed')
                            inputMinScore.attr('readonly', 'true').addClass('not-user-allowed')
                        } else {
                            examSelect.removeAttr('readonly')
                            inputQuestionQty.removeAttr('readonly').removeClass('not-user-allowed')
                            inputMinScore.removeAttr('readonly').removeClass('not-user-allowed')
                        }
                    },
                    complete: function (data) {
                        modal.modal('show')
                    },
                    error: function (data) {
                        console.log(data)
                    }
                })
            })

            $('html').on('change', '#editExamSelect', function () {

                var modal = $('#editEventModal')

                if (modal.hasClass('show')) {

                    var form = $('#editEventForm')
                    var qttyInput = form.find('input[name=questions_qty]')
                    var minScoreInput = form.find('input[name=min_score]')
                    var url = $(this).data('url')

                    let infoQtyBox = form.find('#info-qty-questions')
                    let infoScoreBox = form.find('#info-min-score')
                    infoQtyBox.empty()
                    infoScoreBox.empty()

                    qttyInput.val('')
                    qttyInput.attr('disabled', 'disabled').addClass('input-disabled')
                    minScoreInput.val('')
                    minScoreInput.attr('disabled', 'disabled').addClass('input-disabled')

                    $.ajax({
                        type: 'GET',
                        url: url,
                        data: {
                            type: 'qtyQuestions',
                            value: $(this).val()
                        },
                        dataType: 'JSON',
                        success: function (data) {

                            let qty = (data.qty > 10) ? 10 : data.qty

                            infoQtyBox.html(infoQtyText(data.qty))
                            qttyInput.removeAttr('disabled').removeClass('input-disabled')

                            form.validate()
                            qttyInput.rules('add', { max: data.qty })
                            qttyInput.val(qty)

                            let avg = data.avg
                            let maxScore = Math.round(avg * qty)
                            let minScore = Math.round(maxScore * 0.7)

                            infoScoreBox.html(infoScoreText(maxScore))
                            minScoreInput.removeAttr('disabled').removeClass('input-disabled')
                            minScoreInput.rules('add', { max: maxScore })
                            minScoreInput.val(minScore)

                        },
                        error: function (data) {
                            console.log(data)
                            ToastError.fire()
                        }
                    })
                }

            })

            $('html').on('keyup', '#input-qty-questions-edit', function () {
                var form = $('#editEventForm')
                var input = $(this)
                var examSelect = form.find('#editExamSelect')
                var inputScore = form.find('input[name=min_score]')
                var infoScoreBox = form.find('#info-min-score')
                var value = input.val()
                var url = input.data('url')

                if (value) {

                    input.attr('disabled', 'disabled')

                    $.ajax({
                        type: 'GET',
                        url: url,
                        data: {
                            type: 'qtyQuestions',
                            value: examSelect.val(),
                            qty: value
                        },
                        dataType: 'JSON',
                        success: function (data) {

                            if (value <= data.qty && value >= 2) {

                                infoScoreBox.html(infoScoreText(data.maxScore))
                                inputScore.removeAttr('disabled').removeClass('input-disabled')

                                let minScore = Math.round(data.maxScore * 0.7)

                                form.validate()
                                inputScore.rules('add', { max: data.maxScore })
                                inputScore.val(minScore)
                            }
                            else {
                                inputScore.val('')
                                infoScoreBox.empty()
                                inputScore.attr('disabled', 'disabled').addClass('input-disabled')
                            }
                        },
                        complete: function (data) {
                            input.removeAttr('disabled')
                            input.focus()
                        },
                        error: function (data) {
                            console.log(data)
                            ToastError.fire()
                        }
                    })
                }
                else {
                    inputScore.val('')
                    infoScoreBox.empty()
                    inputScore.attr('disabled', 'disabled').addClass('input-disabled')
                }
            })
        }


        /* ------------- ELIMINAR ----------------*/

        $('.main-content').on('click', '.deleteEvent-btn', function () {
            var url = $(this).data('url')

            SwalDelete.fire().then(function (e) {
                if (e.value === true) {
                    $.ajax({
                        type: 'DELETE',
                        url: url,
                        dataType: 'JSON',
                        success: function (result) {
                            if (result.success === true) {
                                eventsTable.draw();
                                Toast.fire({
                                    icon: 'success',
                                    text: '¡Registro eliminado!',
                                })
                            }
                            else {
                                Toast.fire({
                                    icon: 'error',
                                    text: result.message
                                })
                            }
                        },
                        error: function (result) {
                            Toast.fire({
                                icon: 'error',
                                title: '¡Ocurrió un error inesperado!',
                            });
                        }
                    });
                } else {
                    e.dismiss;
                }
            }, function (dismiss) {
                return false;
            });
        })

    }



    // ------------- EVENT SHOW -------------------


    if ($('#certifications-table').length) {

        $('#search_from_status_select').select2({
            minimumResultsForSearch: -1
        })

        /* ----- CERTIFICATIONS TABLE ------*/

        var certificationsTableEle = $('#certifications-table');
        var getDataUrl = certificationsTableEle.data('url');
        var certificationsTable = certificationsTableEle.DataTable({
            responsive: true,
            language: DataTableEs,
            serverSide: true,
            processing: true,
            ajax: {
                "url": getDataUrl,
                "data": function (data) {
                    data.from_status = $('#search_from_status_select').val()
                }
            },
            columns: [
                { data: 'id', name: 'id' },
                { data: 'user.dni', name: 'user.dni' },
                { data: 'user.name', name: 'user.name' },
                { data: 'user.company.description', name: 'user.company.description' },
                { data: 'score', name: 'score' },
                { data: 'status', name: 'status' },
                { data: 'enabled', name: 'enabled', orderable: false },
                { data: 'assit', name: 'assit', orderable: false, searchable: false, className: 'text-center' },
                { data: 'action', name: 'action', orderable: false, searchable: false, className: 'text-center' },
            ],
            order: [
                [0, 'desc']
            ]
            // dom: 'rtip'
        });

        $('html').on('change', '#search_from_status_select', function () {
            certificationsTable.ajax.reload(null, false)
        })


        // ------------ UPDATE ASSIST -------------


        $('.main-content').on('change', 'input[type=checkbox].flg_assist_user_checkbox', function () {
            var button = $(this)
            var value = button.prop('checked')
            var url = button.data('url')

            button.attr('disabled', 'disabled').addClass('disabled')

            $.ajax({
                method: 'POST',
                url: url,
                data: {
                    assist_user: value
                },
                dataType: 'JSON',
                success: function (data) {

                    if (data.success) {
                        certificationsTable.ajax.reload(null, false)
                    }
                    else {
                        Toast.fire({
                            icon: 'error',
                            text: data.message
                        })
                    }
                },
                complete: function (data) {

                    button.removeAttr('disabled', 'disabled').removeClass('disabled')
                },
                error: function (data) {
                    console.log(data)
                    ToastError.fire()
                }
            })

        })

        /* --------------- EDITAR ------------------*/

        if ($('#editEventForm').length) {

            $('#editTypeSelect').select2({
                dropdownParent: $("#editEventModal"),
                placeholder: 'Selecciona un tipo de evento'
            })

            $('#editInstructorSelect').select2({
                dropdownParent: $("#editEventModal"),
                placeholder: 'Selecciona un instructor'
            })

            $('#editResponsableSelect').select2({
                dropdownParent: $("#editEventModal"),
                placeholder: 'Selecciona un responsable'
            })

            $('#editRoomSelect').select2({
                dropdownParent: $("#editEventModal"),
                placeholder: 'Selecciona un sala'
            })

            $('#editOwnerCompanySelect').select2({
                dropdownParent: $("#editEventModal"),
                placeholder: 'Selecciona una empresa titular',
                allowClear: true
            })

            $('#editExamSelect').select2({
                dropdownParent: $("#editEventModal"),
                placeholder: 'Selecciona un examen'
            })

            $('#editTestExamSelect').select2({
                dropdownParent: $("#editEventModal"),
                placeholder: 'Selecciona un examen de prueba',
                allowClear: true,
            })

            $('#editElearningSelect').select2({
                dropdownParent: $("#editEventModal"),
                placeholder: 'Selecciona un e-learning',
                allowClear: true,
            })


            $('#edit-status-checkbox').change(function () {
                var txtDesc = $('#txt-edit-status');
                if (this.checked) {
                    txtDesc.html('Activo');
                } else {
                    txtDesc.html('Inactivo')
                }
            });

            var editEventForm = $('#editEventForm').validate({
                rules: {
                    description: {
                        required: true,
                        maxlength: 255
                    },
                    type: {
                        required: true,
                    },
                    date: {
                        required: true
                    },
                    user_id: {
                        required: true
                    },
                    responsable_id: {
                        required: true
                    },
                    room_id: {
                        required: true
                    },
                    exam_id: {
                        required: true
                    },
                    questions_qty: {
                        required: true,
                        step: 1,
                        min: 2
                    },
                    min_score: {
                        required: true,
                        step: 1
                    }
                },
                submitHandler: function (form, event) {
                    event.preventDefault()

                    var form = $(form)
                    var loadSpinner = form.find('.loadSpinner')
                    var modal = $('#editEventModal')
                    var eventBoxContainer = $('#event-box-container')

                    loadSpinner.toggleClass('active')
                    form.find('.btn-save').attr('disabled', 'disabled')

                    $.ajax({
                        method: form.attr('method'),
                        url: form.attr('action'),
                        data: form.serialize(),
                        dataType: 'JSON',
                        success: function (data) {

                            if (data.success) {

                                eventBoxContainer.html(data.html)
                                $('#event-description-text-principal').html(data.title)
                                certificationsTable.ajax.reload(null, false)
                                editEventForm.resetForm()
                                form.trigger('reset');

                                Toast.fire({
                                    icon: 'success',
                                    text: data.message
                                })
                            }
                            else {
                                Toast.fire({
                                    icon: 'error',
                                    text: data.message
                                })
                            }
                        },
                        complete: function (data) {

                            form.find('.btn-save').removeAttr('disabled')
                            loadSpinner.toggleClass('active')
                            modal.modal('hide')
                        },
                        error: function (data) {
                            console.log(data)
                            ToastError.fire()
                        }
                    })
                }
            })


            $('.main-content').on('click', '.editEvent-btn', function () {
                var getDataUrl = $(this).data('send')
                var url = $(this).data('url')
                var modal = $('#editEventModal');
                var form = modal.find('#editEventForm')

                var typeSelect = form.find('#editTypeSelect')
                var instructorSelect = form.find('#editInstructorSelect')
                var responsableSelect = form.find('#editResponsableSelect')
                var roomSelect = form.find('#editRoomSelect')
                var ownerCompanySelect = form.find('#editOwnerCompanySelect')
                var examSelect = form.find('#editExamSelect')
                var testExamSelect = form.find('#editTestExamSelect')
                var elearningSelect = form.find('#editElearningSelect')

                var activeChk = form.find('#edit-status-checkbox')
                var flgAssist = form.find('#edit-flg-assist-checkbox')
                var flgSurveyCourse = form.find('#edit-flg-survey-course')
                var flgSurveyEvaluation = form.find('#edit-flg-survey-evaluation')

                typeSelect.empty()
                instructorSelect.empty()
                responsableSelect.empty()
                roomSelect.empty()
                ownerCompanySelect.empty()
                examSelect.empty()
                testExamSelect.empty()
                elearningSelect.empty()

                form.attr('action', url)

                $.ajax({
                    type: 'GET',
                    url: getDataUrl,
                    dataType: 'JSON',
                    success: function (data) {

                        let all = data.all
                        let event = data.event

                        if (all != null) {

                            typeSelect.append('<option></option>')
                            $.each(all.types, function (key, values) {
                                typeSelect.append('<option value="' + key + '">' + values + '</option>')
                            })
                            typeSelect.val(event.type).change()

                            instructorSelect.append('<option></option>')
                            $.each(all.instructors, function (key, values) {
                                instructorSelect.append('<option value="' + values.id + '">' +
                                    values.name + ' ' + values.paternal +
                                    '</option>')
                            })
                            instructorSelect.val(event.user_id).change()

                            responsableSelect.append('<option></option>')
                            $.each(all.responsables, function (key, values) {
                                responsableSelect.append('<option value="' + values.id + '">' +
                                    values.name + ' ' + values.paternal +
                                    '</option>')
                            })
                            responsableSelect.val(event.responsable_id).change()

                            roomSelect.append('<option></option>')
                            $.each(all.rooms, function (key, values) {
                                roomSelect.append('<option value="' + values.id + '">' +
                                    values.description +
                                    '</option>')
                            })
                            roomSelect.val(event.room_id).change()

                            ownerCompanySelect.append('<option></option>')
                            $.each(all.ownerCompanies, function (key, values) {
                                ownerCompanySelect.append('<option value="' + values.id + '">' +
                                    values.name +
                                    '</option>')
                            })
                            ownerCompanySelect.val(event.owner_companies_id).change()

                            examSelect.append('<option></option>')
                            $.each(all.exams, function (key, values) {
                                examSelect.append('<option value="' + values.id + '">' +
                                    values.title +
                                    '</option>')
                            })
                            examSelect.val(event.exam_id).change()

                            testExamSelect.append('<option></option>')
                            $.each(all.examsTest, function (key, values) {
                                testExamSelect.append('<option value="' + values.id + '">' +
                                    values.title +
                                    '</option>')
                            })
                            testExamSelect.val(event.test_exam_id).change()

                            elearningSelect.append('<option></option>')
                            $.each(all.eLearnings, function (key, values) {
                                elearningSelect.append('<option value="' + values.id + '">' +
                                    values.title +
                                    '</option>')
                            })
                            elearningSelect.val(event.elearning_id).change()
                        }

                        if (event.active == 'S') {
                            activeChk.prop('checked', true);
                            $('#txt-edit-status').html('Activo');
                        } else {
                            activeChk.prop('checked', false);
                            $('#txt-edit-status').html('Inactivo');
                        }

                        if (event.flg_asist == 'S') {
                            flgAssist.prop('checked', true);
                        } else {
                            flgAssist.prop('checked', false);
                        }

                        if (event.flg_survey_course == 'S') {
                            flgSurveyCourse.prop('checked', true);
                        } else {
                            flgSurveyCourse.prop('checked', false);
                        }

                        if (event.flg_survey_evaluation == 'S') {
                            flgSurveyEvaluation.prop('checked', true);
                        } else {
                            flgSurveyEvaluation.prop('checked', false);
                        }

                        form.find('input[name=description]').val(event.description)

                        $('#dateinputEdit').data('daterangepicker').setStartDate(event.date);
                        $("#dateinputEdit").data('daterangepicker').setEndDate(event.date);

                        let inputQuestionQty = form.find('input[name=questions_qty]')
                        let inputMinScore = form.find('input[name=min_score]')

                        inputQuestionQty.val(event.questions_qty)
                        inputMinScore.val(event.min_score)

                        let questQty = event['exam'].questions_count
                        let maxScore = Math.round(event.questions_qty * event['exam'].questions_avg_points)

                        form.find('#info-qty-questions').html(infoQtyText(questQty))
                        form.find('#info-min-score').html(infoScoreText(maxScore))

                        form.validate()
                        inputQuestionQty.rules('add', { max: questQty })
                        inputMinScore.rules('add', { max: maxScore })

                        if (event.finished_certifications_count != 0) {
                            examSelect.attr('readonly', 'true')
                            inputQuestionQty.attr('readonly', 'true').addClass('not-user-allowed')
                            inputMinScore.attr('readonly', 'true').addClass('not-user-allowed')
                        } else {
                            examSelect.removeAttr('readonly')
                            inputQuestionQty.removeAttr('readonly').removeClass('not-user-allowed')
                            inputMinScore.removeAttr('readonly').removeClass('not-user-allowed')
                        }
                    },
                    complete: function (data) {
                        modal.modal('show')
                    },
                    error: function (data) {
                        console.log(data)
                    }
                })
            })

            $('html').on('change', '#editExamSelect', function () {

                var modal = $('#editEventModal')

                if (modal.hasClass('show')) {

                    var form = $('#editEventForm')
                    var qttyInput = form.find('input[name=questions_qty]')
                    var minScoreInput = form.find('input[name=min_score]')
                    var url = $(this).data('url')

                    let infoQtyBox = form.find('#info-qty-questions')
                    let infoScoreBox = form.find('#info-min-score')
                    infoQtyBox.empty()
                    infoScoreBox.empty()

                    qttyInput.val('')
                    qttyInput.attr('disabled', 'disabled').addClass('input-disabled')
                    minScoreInput.val('')
                    minScoreInput.attr('disabled', 'disabled').addClass('input-disabled')

                    $.ajax({
                        type: 'GET',
                        url: url,
                        data: {
                            type: 'qtyQuestions',
                            value: $(this).val()
                        },
                        dataType: 'JSON',
                        success: function (data) {

                            let qty = (data.qty > 10) ? 10 : data.qty

                            infoQtyBox.html(infoQtyText(data.qty))
                            qttyInput.removeAttr('disabled').removeClass('input-disabled')

                            form.validate()
                            qttyInput.rules('add', { max: data.qty })
                            qttyInput.val(qty)

                            let avg = data.avg
                            let maxScore = Math.round(avg * qty)
                            let minScore = Math.round(maxScore * 0.7)

                            infoScoreBox.html(infoScoreText(maxScore))
                            minScoreInput.removeAttr('disabled').removeClass('input-disabled')
                            minScoreInput.rules('add', { max: maxScore })
                            minScoreInput.val(minScore)

                        },
                        error: function (data) {
                            console.log(data)
                            ToastError.fire()
                        }
                    })
                }

            })

            $('html').on('keyup', '#input-qty-questions-edit', function () {
                var form = $('#editEventForm')
                var input = $(this)
                var examSelect = form.find('#editExamSelect')
                var inputScore = form.find('input[name=min_score]')
                var infoScoreBox = form.find('#info-min-score')
                var value = input.val()
                var url = input.data('url')

                if (value) {

                    input.attr('disabled', 'disabled')

                    $.ajax({
                        type: 'GET',
                        url: url,
                        data: {
                            type: 'qtyQuestions',
                            value: examSelect.val(),
                            qty: value
                        },
                        dataType: 'JSON',
                        success: function (data) {

                            if (value <= data.qty && value >= 2) {

                                infoScoreBox.html(infoScoreText(data.maxScore))
                                inputScore.removeAttr('disabled').removeClass('input-disabled')

                                let minScore = Math.round(data.maxScore * 0.7)

                                form.validate()
                                inputScore.rules('add', { max: data.maxScore })
                                inputScore.val(minScore)
                            }
                            else {
                                inputScore.val('')
                                infoScoreBox.empty()
                                inputScore.attr('disabled', 'disabled').addClass('input-disabled')
                            }
                        },
                        complete: function (data) {
                            input.removeAttr('disabled')
                            input.focus()
                        },
                        error: function (data) {
                            console.log(data)
                            ToastError.fire()
                        }
                    })
                }
                else {
                    inputScore.val('')
                    infoScoreBox.empty()
                    inputScore.attr('disabled', 'disabled').addClass('input-disabled')
                }
            })
        }

        /* ---------------- ELIMINAR EVENTO -----------------*/

        $('.main-content').on('click', '.deleteEvent-btn', function () {
            var url = $(this).data('url')

            SwalDelete.fire().then(function (e) {
                if (e.value === true) {
                    $.ajax({
                        type: 'DELETE',
                        url: url,
                        data: {
                            place: 'show'
                        },
                        dataType: 'JSON',
                        success: function (result) {
                            if (result.success === true) {

                                Toast.fire({
                                    icon: 'success',
                                    text: result.message
                                })

                                window.location.href = result.route
                            }
                            else {
                                Toast.fire({
                                    icon: 'error',
                                    text: result.message
                                })
                            }
                        },
                        error: function (result) {
                            ToastError.fire()
                            console.log(result)
                        }
                    });
                } else {
                    e.dismiss;
                }
            }, function (dismiss) {
                return false;
            });
        })


        // ---------------- REGISTRAR PARTICIPANTES ---------------

        const buttonDisabled = '<button class="btn btn-primary btn-save not-user-allowed" disabled> \
                                    Registrar participantes \
                                    <i class="fa-solid fa-spinner fa-spin loadSpinner ms-1"></i> \
                                </button>'

        const buttonEnabled = '<button type="submit" class="btn btn-primary btn-save"> \
                                    Registrar participantes \
                                    <i class="fa-solid fa-spinner fa-spin loadSpinner ms-1"></i> \
                                </button>'

        var participantsTable;

        $('html').on('change', '#search_from_company_select', function () {
            participantsTable.draw()
        })

        $('.main-content').on('click', '#btn-register-participant-modal', function () {

            var modal = $('#registerParticipantsModal')

            if (!$('#users-participants-table_wrapper').length) {

                var usersParticipantsTableEle = $('#users-participants-table');
                var getDataUrl = usersParticipantsTableEle.data('url');

                participantsTable = usersParticipantsTableEle.DataTable({
                    responsive: true,
                    language: DataTableEs,
                    serverSide: true,
                    processing: true,
                    ajax: {
                        "url": getDataUrl,
                        "data": function (data) {
                            data.search_company = $('#search_from_company_select').val()
                        }
                    },
                    columns: [
                        { data: 'choose', name: 'choose', orderable: false, searchable: false, className: 'text-center' },
                        { data: 'id', name: 'id' },
                        { data: 'dni', name: 'dni' },
                        { data: 'name', name: 'name' },
                        { data: 'position', name: 'position' },
                        { data: 'company.description', name: 'company.description', orderable: false, searchable: false },
                    ],
                    order: [
                        [1, 'asc']
                    ]
                    // dom: 'rtip'
                });
            }
            else {
                participantsTable.draw()
            }

            modal.modal('show')
        })

        $('#users-participants-table').on('draw.dt', function () {
            $('#btn-store-participant-container').html(buttonDisabled)
        });

        $('html').on('click', '.checkbox-user-label', function () {
            let input = $('#' + $(this).attr('for'))
            let buttonContainer = $('#btn-store-participant-container')
            let count = 0

            if (input.is(':checked')) { count-- } else { count++ }
            count += $('.checkbox-user-input:checked').length

            if (count > 0) {
                buttonContainer.html(buttonEnabled)
            }
            else {
                buttonContainer.html(buttonDisabled)
            }
        })

        $('#register-participants-form').on('submit', function (e) {
            e.preventDefault()

            var form = $(this)

            Swal.fire({
                title: 'Registrar participantes',
                text: "Confirme antes de continuar",
                icon: 'question',
                showCancelButton: true,
                confirmButtonText: 'Confirmar',
                cancelButtonText: 'Cancelar',
                reverseButtons: true,
            }).then(function (e) {
                if (e.value === true) {
                    $.ajax({
                        method: form.attr('method'),
                        url: form.attr('action'),
                        data: form.serialize(),
                        dataType: 'JSON',
                        success: function (data) {

                            if (data.success) {

                                if (data.status == 'exceeded') {
                                    Toast.fire({
                                        icon: 'warning',
                                        text: data.note
                                    })
                                }
                                else {
                                    var dataStatus = data.status

                                    participantsTable.draw()
                                    certificationsTable.draw()
                                    $('#btn-store-participant-container').html(buttonDisabled)
                                    $('#event-box-container').html(data.html)

                                    Toast.fire({
                                        icon: 'success',
                                        text: data.message
                                    }).then((result) => {
                                        if (result.dismiss === Swal.DismissReason.timer) {
                                            if (dataStatus == 'limitreached') {
                                                Toast.fire({
                                                    icon: 'warning',
                                                    text: data.note
                                                })
                                            }
                                        }
                                    })
                                }
                            }
                            else {
                                Toast.fire({
                                    icon: 'error',
                                    text: data.message
                                })
                            }
                        },
                        error: function (data) {
                            console.log(data)
                            ToastError.fire()
                        }
                    });
                } else {
                    e.dismiss;
                }
            }, function (dismiss) {
                return false;
            });

        })


        // ----------------- ELIMINAR PARTICIPANTES ----------------

        $('.main-content').on('click', '.deleteCertification-btn', function () {
            var url = $(this).data('url')

            SwalDelete.fire().then(function (e) {
                if (e.value === true) {
                    $.ajax({
                        type: 'DELETE',
                        url: url,
                        dataType: 'JSON',
                        success: function (result) {
                            if (result.success === true) {

                                certificationsTable.ajax.reload(null, false)
                                $('#event-box-container').html(result.html)

                                Toast.fire({
                                    icon: 'success',
                                    text: result.message
                                })
                            }
                            else {
                                Toast.fire({
                                    icon: 'error',
                                    text: result.message
                                })
                            }
                        },
                        error: function (result) {
                            ToastError.fire()
                            console.log(result)
                        }
                    });
                } else {
                    e.dismiss;
                }
            }, function (dismiss) {
                return false;
            });

        })


        // -------------- VER CERTIFICADO ------------------------

        const statuslabelActive = '<span class="status active">Activo</span>';

        const statuslabelInactive = '<span class="status">Inactivo</span>';


        $('.main-content').on('click', '.showCertification-btn', function () {
            var url = $(this).data('send')
            var modal = $('#showCertificationModal')
            var titlebox = modal.find('#txt-context-element')
            var bodyParticipant = modal.find('#participant-info-table tbody')
            var bodyEvent = modal.find('#event-info-table tbody')
            var bodyCertification = modal.find('#certification-info-table tbody')

            $.ajax({
                type: 'GET',
                url: url,
                dataType: 'JSON',
                success: function (data) {

                    titlebox.html(data.title)

                    let participant = data.participant
                    let partStatus = (participant.active == 'S') ? statuslabelActive : statuslabelInactive

                    let miningUnits = '<ul>'
                    $.each(participant.mining_units, function (key, value) {
                        miningUnits += '<li>' + value.description + '</li>'
                    })
                    miningUnits += '</ul>'

                    bodyParticipant.html('<tr> \
                                            <td>' + participant.id + '</td>\
                                            <td>' + participant.dni + '</td>\
                                            <td>' + participant.name + '</td>\
                                            <td class="p-0">' + miningUnits + '</td>\
                                            <td>' + participant.email + '</td>\
                                            <td>' + participant.company['description'] + '</td>\
                                            <td>' + (participant.position ?? '-') + '</td>\
                                            <td>' + partStatus + '</td>\
                                        </tr>')

                    let event = data.event
                    let eventStatus = (event.active == 'S') ? statuslabelActive : statuslabelInactive
                    let examStatus = (event.exam['active'] == 'S') ? statuslabelActive : statuslabelInactive

                    bodyEvent.html('<tr> \
                                        <td>' + event.id + '</td>\
                                        <td>' + event.description + '</td>\
                                        <td>' + event.date + '</td>\
                                        <td>' + eventStatus + '</td>\
                                        <td>' + event.exam['title'] + '</td>\
                                        <td>' + examStatus + '</td>\
                                        <td>' + event['course'].description + '</td>\
                                    </tr>')

                    let certification = data.certification
                    let assistUser = (certification.assist_user == 'S') ? 'Sí' : 'No'

                    bodyCertification.html('<tr> \
                                                <td>' + (certification.start_time ?? '-') + '</td>\
                                                <td>' + (certification.end_time ?? '-') + '</td>\
                                                <td>' + (certification.total_time ?? '-') + '</td>\
                                                <td>' + (certification.score ?? '-') + '</td>\
                                                <td>\
                                                    <span class="status ' + certification.status + '"> \
                                                        ' + certification.status_txt + ' \
                                                    </span> \
                                                </td>\
                                                <td>' + assistUser + '</td>\
                                            </tr>')
                },
                complete: function () {
                    modal.modal('show')
                },
                error: function (data) {
                    console.log(data)
                }
            })

        })


        // ------------- EDITAR CERTIFICADO --------------------

        $('#editCertMiningUnitSelect').select2({
            dropdownParent: $("#editCertificationModal"),
            placeholder: 'Selecciona una o más unidades mineras',
            closeOnSelect: false
        })

        $('#editCertCompanySelect').select2({
            dropdownParent: $("#editCertificationModal"),
            placeholder: 'Selecciona una empresa'
        })


        var editCertificationForm = $('#editCertificationForm').validate({
            rules: {
                "mining_unit_id[]": {
                    required: true,
                },
                company_id: {
                    required: true,
                },
                area: {
                    maxlength: 100,
                },
                observation: {
                    maxlength: 500,
                }
            },
            submitHandler: function (form, event) {
                event.preventDefault()

                var form = $(form)
                var loadSpinner = form.find('.loadSpinner')
                var modal = $('#editCertificationModal')

                loadSpinner.toggleClass('active')
                form.find('.btn-save').attr('disabled', 'disabled')

                $.ajax({
                    method: form.attr('method'),
                    url: form.attr('action'),
                    data: form.serialize(),
                    dataType: 'JSON',
                    success: function (data) {

                        if (data.success) {

                            certificationsTable.ajax.reload(null, false)
                            editCertificationForm.resetForm()
                            form.trigger('reset');

                            Toast.fire({
                                icon: 'success',
                                text: data.message
                            })
                        }
                        else {
                            Toast.fire({
                                icon: 'error',
                                text: data.message
                            })
                        }
                    },
                    complete: function (data) {

                        form.find('.btn-save').removeAttr('disabled')
                        loadSpinner.toggleClass('active')
                        modal.modal('hide')
                    },
                    error: function (data) {
                        console.log(data)
                        ToastError.fire()
                    }
                })
            }
        })


        $('.main-content').on('click', '.editCertification-btn', function () {
            var modal = $('#editCertificationModal')
            var getDataUrl = $(this).data('send')
            var url = $(this).data('url')
            var form = modal.find('#editCertificationForm')

            let miningUnitsSelect = form.find('#editCertMiningUnitSelect')
            let companySelect = form.find('#editCertCompanySelect')
            let checkbox = form.find('#edit-assist-checkbox')

            miningUnitsSelect.empty()
            companySelect.empty()

            form.attr('action', url)

            $.ajax({
                type: 'GET',
                url: getDataUrl,
                dataType: 'JSON',
                success: function (data) {

                    let all = data.all
                    let selected = data.selected
                    let certification = data.certification

                    form.find('#participant-name').html(selected.participant)

                    miningUnitsSelect.append('<option></option>')
                    $.each(all.miningUnits, function (key, value) {
                        miningUnitsSelect.append('<option value="' + value.id + '">' + value.description + '</option>')
                    })
                    miningUnitsSelect.val(selected.miningUnits).change()

                    companySelect.append('<option></option>')
                    $.each(all.companies, function (key, value) {
                        companySelect.append('<option value="' + value.id + '">' + value.description + '</option>')
                    })
                    companySelect.val(selected['company'].id).change()

                    form.find('input[name=area]').val(certification.area)
                    form.find('input[name=observation]').val(certification.observation)

                    let checkbox_stat = (certification.assist_user == 'S') ? true : false;
                    checkbox.prop('checked', checkbox_stat);

                    if (data.flg_assist_status == 'disabled') {
                        checkbox.attr('readonly', 'readonly').addClass('disabled')
                        checkbox.closest('label').addClass('not-user-allowed')
                    } else {
                        checkbox.removeAttr('readonly').removeClass('disabled')
                        checkbox.closest('label').removeClass('not-user-allowed')
                    }

                },
                complete: function (data) {
                    modal.modal('show')
                },
                error: function (data) {
                    console.log(data)
                }
            })

        })



        // ----------- REGISTRO MASIVO PARTICIPANTES -----------

        var registerParticipantsMassiveForm = $('#registerParticipantsMassiveForm').validate({
            rules: {
                file: {
                    required: true,
                },
            },
            submitHandler: function (form, event) {
                event.preventDefault()
                var form = $(form)
                var loadSpinner = form.find('.loadSpinner')
                var modal = $('#RegisterParticipantsMassiveModal')

                loadSpinner.toggleClass('active')
                form.find('.btn-save').attr('disabled', 'disabled')

                var formData = new FormData(form[0])

                $.ajax({
                    method: form.attr('method'),
                    url: form.attr('action'),
                    data: formData,
                    processData: false,
                    contentType: false,
                    dataType: 'JSON',
                    success: function (data) {

                        if (data.success) {

                            if (data.status == 'exceeded') {
                                Toast.fire({
                                    icon: 'warning',
                                    text: data.note
                                })
                            }
                            else {
                                var dataStatus = data.status

                                certificationsTable.ajax.reload(null, false)
                                registerParticipantsMassiveForm.resetForm()
                                form.trigger('reset')
                                modal.modal('hide')

                                $('#event-box-container').html(data.html)

                                Toast.fire({
                                    icon: 'success',
                                    text: data.message
                                }).then((result) => {
                                    if (result.dismiss === Swal.DismissReason.timer) {
                                        if (dataStatus == 'limitreached') {
                                            Toast.fire({
                                                icon: 'warning',
                                                text: data.note
                                            })
                                        }
                                        if (data.validationFailure) {
                                            Toast.fire({
                                                icon: 'warning',
                                                text: data.failureMessage
                                            })
                                        }
                                    }
                                })
                            }
                        }
                        else {
                            Toast.fire({
                                icon: 'error',
                                text: data.message
                            })
                        }

                    },
                    complete: function (data) {
                        form.find('.btn-save').removeAttr('disabled')
                        loadSpinner.toggleClass('active')
                    },
                    error: function (data) {
                        console.log(data)
                        ToastError.fire()
                    }
                })
            }
        })

        // ------------- REGISTRO MASIVO NOTAS -------------------

        var registerParticipantsScoreForm = $('#registerParticipantsScoreForm').validate({
            rules: {
                file: {
                    required: true,
                },
            },
            submitHandler: function (form, event) {
                event.preventDefault()
                var form = $(form)
                var loadSpinner = form.find('.loadSpinner')
                var modal = $('#RegisterParticipantsScoreModal')

                loadSpinner.toggleClass('active')
                form.find('.btn-save').attr('disabled', 'disabled')

                var formData = new FormData(form[0])

                $.ajax({
                    method: form.attr('method'),
                    url: form.attr('action'),
                    data: formData,
                    processData: false,
                    contentType: false,
                    dataType: 'JSON',
                    success: function (data) {

                        if (data.success) {

                            if (!data.isStored) {
                                Toast.fire({
                                    icon: 'warning',
                                    text: 'No se actualizaron notas, revise su archivo.'
                                })
                            }
                            else {

                                certificationsTable.ajax.reload(null, false)

                                registerParticipantsScoreForm.resetForm()
                                form.trigger('reset')
                                modal.modal('hide')

                                Toast.fire({
                                    icon: 'success',
                                    text: data.message
                                }).then((result) => {
                                    if (result.dismiss === Swal.DismissReason.timer) {
                                        if (data.validationFailure) {
                                            Toast.fire({
                                                icon: 'warning',
                                                text: data.failureMessage
                                            })
                                        }
                                    }
                                })
                            }
                        }
                        else {
                            Toast.fire({
                                icon: 'error',
                                text: data.message
                            })
                        }

                    },
                    complete: function (data) {
                        form.find('.btn-save').removeAttr('disabled')
                        loadSpinner.toggleClass('active')
                    },
                    error: function (data) {
                        console.log(data)
                        ToastError.fire()
                    }
                })
            }
        })

        // ------------- REGISTRO MASIVO AREA -------------------

        var registerParticipantsAreaForm = $('#registerParticipantsAreaForm').validate({
            rules: {
                file: {
                    required: true,
                },
            },
            submitHandler: function (form, event) {
                event.preventDefault()
                var form = $(form)
                var loadSpinner = form.find('.loadSpinner')
                var modal = $('#RegisterParticipantsAreaModal')

                loadSpinner.toggleClass('active')
                form.find('.btn-save').attr('disabled', 'disabled')

                var formData = new FormData(form[0])

                $.ajax({
                    method: form.attr('method'),
                    url: form.attr('action'),
                    data: formData,
                    processData: false,
                    contentType: false,
                    dataType: 'JSON',
                    success: function (data) {

                        if (data.success) {

                            if (!data.isStored) {
                                Toast.fire({
                                    icon: 'warning',
                                    text: 'No se actualizaron datos, revise su archivo.'
                                })
                            }
                            else {

                                certificationsTable.ajax.reload(null, false)
                                registerParticipantsAreaForm.resetForm()
                                form.trigger('reset')
                                modal.modal('hide')

                                Toast.fire({
                                    icon: 'success',
                                    text: data.message
                                }).then((result) => {
                                    if (result.dismiss === Swal.DismissReason.timer) {
                                        if (data.validationFailure) {
                                            Toast.fire({
                                                icon: 'warning',
                                                text: data.failureMessage
                                            })
                                        }
                                    }
                                })
                            }
                        }
                        else {
                            Toast.fire({
                                icon: 'error',
                                text: data.message
                            })
                        }

                    },
                    complete: function (data) {
                        form.find('.btn-save').removeAttr('disabled')
                        loadSpinner.toggleClass('active')
                    },
                    error: function (data) {
                        console.log(data)
                        ToastError.fire()
                    }
                })
            }
        })


        // ---------------- RESETEAR CERTIFICADO ------------

        $('html').on('click', '.resetCertification-btn', function () {
            let url = $(this).data('url')

            Swal.fire({
                title: 'Reiniciar evaluación',
                text: "Confirme antes de continuar",
                icon: 'question',
                showCancelButton: true,
                confirmButtonText: 'Confirmar',
                cancelButtonText: 'Cancelar',
                reverseButtons: true,
            }).then(function (e) {
                if (e.value === true) {
                    $.ajax({
                        method: 'POST',
                        url: url,
                        dataType: 'JSON',
                        success: function (data) {

                            if (data.success) {

                                certificationsTable.ajax.reload(null, false)

                                Toast.fire({
                                    icon: 'success',
                                    text: data.message
                                })

                            }
                            else {
                                Toast.fire({
                                    icon: 'error',
                                    text: data.message
                                })
                            }
                        },
                        error: function (data) {
                            ToastError.fire()
                        }
                    });
                } else {
                    e.dismiss;
                }
            }, function (dismiss) {
                return false;
            });
        })

    }


    // --------------- ANNOUNCEMENTS ----------------

    if ($('#banners-list-container').length) {

        // -------------- REGISTER ----------------

        $('#register-banner-status-checkbox').change(function () {
            var txtDesc = $('#txt-register-status-banner');
            if (this.checked) {
                txtDesc.html('Activo');
            } else {
                txtDesc.html('Inactivo')
            }
        });

        var banerImageRegister = $('#input-banner-image-register');
        banerImageRegister.val('');
        banerImageRegister.on("change", function () {
            var img_path = $(this)[0].value;
            var img_holder = $(this).closest('#registerBannerForm').find('.img-holder');
            var img_extension = img_path.substring(img_path.lastIndexOf('.') + 1).toLowerCase();

            if (img_extension == 'jpeg' || img_extension == 'jpg' || img_extension == 'png') {
                if (typeof (FileReader) != 'undefined') {
                    img_holder.empty()
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        $('<img/>', { 'src': e.target.result, 'class': 'img-fluid category_img' }).
                            appendTo(img_holder);
                    }
                    img_holder.show();
                    reader.readAsDataURL($(this)[0].files[0]);
                } else {
                    $(img_holder).html('Este navegador no soporta Lector de Archivos');
                }
            } else {
                $(img_holder).empty();
                banerImageRegister.val('')
                Toast.fire({
                    icon: 'warning',
                    title: '¡Selecciona una imagen!'
                });
            }
        })

        var registerBannerForm = $('#registerBannerForm').validate({
            rules: {
                content: {
                    maxlength: 1000,
                    url: true
                },
                image: {
                    required: true
                }
            },
            submitHandler: function (form, event) {
                event.preventDefault()

                var form = $(form)
                var loadSpinner = form.find('.loadSpinner')
                var modal = $('#registerBannerModal')
                var img_holder = form.find('.img-holder')

                loadSpinner.toggleClass('active')
                form.find('.btn-save').attr('disabled', 'disabled')

                var formData = new FormData(form[0])

                $.ajax({
                    method: form.attr('method'),
                    url: form.attr('action'),
                    data: formData,
                    processData: false,
                    contentType: false,
                    dataType: 'JSON',
                    success: function (data) {

                        if (data.success) {

                            var bannersContainer = $('#banners-list-container')
                            bannersContainer.html(data.html)
                            banerImageRegister.val('')
                            registerBannerForm.resetForm()

                            $(img_holder).empty()

                            modal.modal('toggle')

                            Toast.fire({
                                icon: 'success',
                                text: data.message
                            })
                        }
                        else {
                            Toast.fire({
                                icon: 'error',
                                text: data.message
                            })
                        }
                    },
                    complete: function (data) {
                        form.find('.btn-save').removeAttr('disabled')
                        loadSpinner.toggleClass('active')
                    },
                    error: function (data) {
                        console.log(data)
                        ToastError.fire()
                    }
                })
            }
        })

        // ------------- EDITAR -----------

        $('#editOrderSelect').select2({
            dropdownParent: '#editBannerForm',
            minimumResultsForSearch: -1,
        })

        $('#edit-banner-status-checkbox').change(function () {
            var txtDesc = $('#txt-edit-status-banner');
            if (this.checked) {
                txtDesc.html('Activo');
            } else {
                txtDesc.html('Inactivo')
            }
        });

        var editBannerForm = $('#editBannerForm').validate({
            rules: {
                content: {
                    maxlength: 5000,
                    url: true
                },
            },
            submitHandler: function (form, event) {
                event.preventDefault()
                var form = $(form)
                var loadSpinner = form.find('.loadSpinner')
                var modal = $('#editBannerModal')
                var img_holder = form.find('.img-holder')

                loadSpinner.toggleClass('active')
                form.find('.btn-save').attr('disabled', 'disabled')

                var formData = new FormData(form[0])

                $.ajax({
                    method: form.attr('method'),
                    url: form.attr('action'),
                    data: formData,
                    processData: false,
                    contentType: false,
                    dataType: 'JSON',
                    success: function (data) {

                        if (data.success) {

                            let bannersBox = $('#banners-list-container')

                            bannersBox.html(data.html)
                            editBannerForm.resetForm()

                            modal.modal('hide')

                            $(img_holder).empty()

                            Toast.fire({
                                icon: 'success',
                                text: data.message
                            })
                        }
                        else {
                            Toast.fire({
                                icon: 'error',
                                text: data.message
                            })
                        }
                    },
                    complete: function (data) {
                        loadSpinner.toggleClass('active')
                        form.find('.btn-save').removeAttr('disabled')
                    },
                    error: function (data) {
                        console.log(data)
                        ToastError.fire()
                    }
                })
            }
        })

        var inputBannerEdit = $('#input-banner-image-edit');
        inputBannerEdit.on("change", function () {
            $('#editBannerForm').validate()
            $('#input-banner-image-edit').rules('add', { required: true })

            var img_path = $(this)[0].value;
            var img_holder = $(this).closest('#editBannerForm').find('.img-holder');
            var currentImagePath = $(this).data('value');
            var img_extension = img_path.substring(img_path.lastIndexOf('.') + 1).toLowerCase();

            if (img_extension == 'jpeg' || img_extension == 'jpg' || img_extension == 'png') {
                if (typeof (FileReader) != 'undefined') {
                    img_holder.empty()
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        $('<img/>', { 'src': e.target.result, 'class': 'img-fluid category_img' }).
                            appendTo(img_holder);
                    }
                    img_holder.show();
                    reader.readAsDataURL($(this)[0].files[0]);
                } else {
                    $(img_holder).html('Este navegador no soporta Lector de Archivos');
                }
            } else {
                $(img_holder).html(currentImagePath);
                inputBannerEdit.val('')
                Toast.fire({
                    icon: 'warning',
                    title: '¡Selecciona una imagen!',
                });
            }

        })

        $('.main-content').on('click', '.edit-banner-btn', function () {
            var modal = $('#editBannerModal')
            var getDataUrl = $(this).data('send')
            var url = $(this).data('url')
            var form = modal.find('#editBannerForm')

            let orderSelect = form.find('#editOrderSelect')

            form.validate()
            $('#input-banner-image-edit').rules('remove', 'required')

            editBannerForm.resetForm()
            orderSelect.empty()
            form.trigger('reset')

            form.attr('action', url)

            $.ajax({
                type: 'GET',
                url: getDataUrl,
                dataType: 'JSON',
                success: function (data) {

                    let banner = data.banner

                    form.find('.banner-url-content-container').html(banner.content)

                    let raw_content = form.find('.banner-url-content-container > a')

                    form.find('input[name=content]').val(raw_content.attr('href'))

                    modal.find('.img-holder').html('<img class="img-fluid banner_img" id="image-banner-edit" src="' + data.url_img + '"></img>');
                    modal.find('#input-banner-image-edit').attr('data-value', '<img scr="' + data.url_img + '" class="img-fluid banner_img"></img>');
                    modal.find('#input-banner-image-edit').val('');


                    $.each(data.orders, function (key, value) {
                        orderSelect.append('<option value"' + value.publishing_order + '">' + value.publishing_order + '</option>')
                    })
                    orderSelect.val(banner.publishing_order).change()

                    if (raw_content.attr('target') == '_BLANK') {
                        form.find('#checkbox-blank-indicator-edit').prop('checked', true)
                    } else {
                        form.find('#checkbox-blank-indicator-edit').prop('checked', false)
                    }

                    if (banner.status == 1) {
                        modal.find('#edit-banner-status-checkbox').prop('checked', true);
                        $('#txt-edit-status-banner').html('Activo');
                    } else {
                        modal.find('#edit-banner-status-checkbox').prop('checked', false);
                        $('#txt-edit-status-banner').html('Inactivo');
                    }
                },
                complete: function (data) {
                    modal.modal('toggle')
                },
                error: function (data) {
                    console.log(data)
                }
            })
        })

        // -------- ELIMINAR --------------

        $('.main-content').on('click', '.delete-banner-btn', function () {
            var url = $(this).data('url')

            SwalDelete.fire().then(function (e) {
                if (e.value === true) {
                    $.ajax({
                        type: 'DELETE',
                        url: url,
                        dataType: 'JSON',
                        success: function (result) {
                            if (result.success === true) {

                                var bannersContainer = $('#banners-list-container')
                                bannersContainer.html(result.html)

                                Toast.fire({
                                    icon: 'success',
                                    text: result.message
                                })
                            }
                            else {
                                Toast.fire({
                                    icon: 'error',
                                    text: result.message
                                })
                            }
                        },
                        error: function (result) {
                            ToastError.fire()
                            console.log(result)
                        }
                    });
                } else {
                    e.dismiss;
                }
            }, function (dismiss) {
                return false;
            });

        })
    }


    // ------------ PUBLISHINGS ---------------

    if ($('#publishings-table').length) {

        /* --------- PUBLISHINGS TABLE ----------*/

        var publishingsTableEle = $('#publishings-table');
        var getDataUrl = publishingsTableEle.data('url');
        var publishingsTable = publishingsTableEle.DataTable({
            responsive: true,
            language: DataTableEs,
            serverSide: true,
            processing: true,
            ajax: getDataUrl,
            columns: [
                { data: 'id', name: 'id' },
                { data: 'title', name: 'title' },
                { data: 'user.name', name: 'user.name' },
                { data: 'publication_time', name: 'publication_time' },
                { data: 'status', name: 'status' },
                { data: 'created_at', name: 'created_at' },
                { data: 'updated_at', name: 'updated_at' },
                { data: 'action', name: 'action', orderable: false, searchable: false, className: 'text-center' },
            ],
            order: [
                [0, 'desc']
            ]
            // dom: 'rtip'
        });

        function getSummernoteConfig(summernoteElement, cardForm) {
            return {
                dialogsInBody: true,
                minHeight: 160,
                disableDragAndDrop: true,
                dialogsFade: true,
                toolbar: [
                    ['style', ['style']],
                    ['font', ['bold', 'underline', 'clear']],
                    ['fontname', ['fontname']],
                    ['color', ['color']],
                    ['insert', ['link']],
                    ['para', ['ul', 'ol', 'paragraph']],
                    ['height', ['height']]
                ],
                lang: 'es-ES',
                lineHeights: [
                    '1.2', '1.4', '1.6', '1.8', '2.0', '3.0'
                ],
                callbacks: {
                    onChange: function (contents, $editable) {
                        summernoteElement.val(summernoteElement.summernote('isEmpty') ? "" : contents);
                        cardForm.element(summernoteElement);
                    }
                }
            }
        }

        // ------------ REGISTER --------------

        var cardImageRegister = $('#input-card-image-register');
        cardImageRegister.val('');

        cardImageRegister.on("change", function () {
            var img_path = $(this)[0].value;

            var img_holder = $(this).closest('#registerCardForm').find('.img-holder');
            var img_extension = img_path.substring(img_path.lastIndexOf('.') + 1).toLowerCase();

            if (img_extension == 'jpeg' || img_extension == 'jpg' || img_extension == 'png') {
                if (typeof (FileReader) != 'undefined') {
                    img_holder.empty()
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        $('<img/>', { 'src': e.target.result, 'class': 'img-fluid card_img' }).
                            appendTo(img_holder);
                    }
                    img_holder.show();
                    reader.readAsDataURL($(this)[0].files[0]);
                } else {
                    $(img_holder).html('Este navegador no soporta Lector de Archivos');
                }
            } else {
                $(img_holder).empty();
                cardImageRegister.val('')
                Toast.fire({
                    icon: 'warning',
                    title: '¡Selecciona una imagen!'
                });
            }

        })

        var summernoteElement = $('#card-content-register')

        var cardRegisterForm = $('#registerCardForm');
        var cardForm = cardRegisterForm.validate({
            rules: {
                content: {
                    maxlength: 6000,
                    required: true
                },
                title: {
                    required: true,
                    maxlength: 100,
                },
                image: {
                    required: true
                }
            },
            errorElement: "label",
            errorClass: 'is-invalid',
            validClass: 'is-valid',
            ignore: ':hidden:not(.summernote-card-editor),.note-editable.card-block',
            errorPlacement: function (error, element) {
                error.addClass("error");
                if (element.prop("type") === "checkbox") {
                    error.insertAfter(element.siblings("label"));
                } else if (element.hasClass("summernote")) {
                    error.insertAfter(element.siblings(".note-editor"));
                } else {
                    error.insertAfter(element);
                }
            },
            submitHandler: function (form, event) {
                event.preventDefault()
                var form = $(form)
                var loadSpinner = form.find('.loadSpinner')
                var modal = $('#registerCardModal')
                var img_holder = form.find('.img-holder')

                loadSpinner.toggleClass('active')
                form.find('.btn-save').attr('disabled', 'disabled')

                var formData = new FormData(form[0])

                $.ajax({
                    method: form.attr('method'),
                    url: form.attr('action'),
                    data: formData,
                    processData: false,
                    contentType: false,
                    dataType: 'JSON',
                    success: function (data) {

                        if (data.success) {

                            summernoteElement.summernote('reset');

                            publishingsTable.draw()
                            cardForm.resetForm()
                            form.trigger('reset')

                            modal.modal('hide')

                            $(img_holder).empty()

                            Toast.fire({
                                icon: 'success',
                                text: data.message
                            })
                        }
                        else {
                            Toast.fire({
                                icon: 'error',
                                text: data.message
                            })
                        }
                    },
                    complete: function (data) {
                        loadSpinner.toggleClass('active')
                        form.find('.btn-save').removeAttr('disabled')
                    },
                    error: function (data) {
                        console.log(data)
                        ToastError.fire()
                    }
                })
            }
        });

        $('#registerCardModal').on('show.bs.modal', function () {
            summernoteElement.summernote(getSummernoteConfig(summernoteElement, cardForm));
            $(this).find('textarea[name=content]').empty()
        })

        $('#registerCardModal').on('hidden.bs.modal', function () {
            summernoteElement.summernote('destroy')
            $(this).find('textarea[name=content]').empty()
        })



        // -------------- EDITAR ------------------



        var summernoteEditElement = $('#card-content-edit')

        var cardImageEdit = $('#input-card-image-edit');
        cardImageEdit.val('');

        cardImageEdit.on("change", function () {
            var img_path = $(this)[0].value;

            var img_holder = $(this).closest('#editCardForm').find('.img-holder');
            var img_extension = img_path.substring(img_path.lastIndexOf('.') + 1).toLowerCase();

            $('#editCardForm').validate()
            $('#input-card-image-edit').rules('add', { required: true })

            if (img_extension == 'jpeg' || img_extension == 'jpg' || img_extension == 'png') {
                if (typeof (FileReader) != 'undefined') {
                    img_holder.empty()
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        $('<img/>', { 'src': e.target.result, 'class': 'img-fluid card_img' }).
                            appendTo(img_holder);
                    }
                    img_holder.show();
                    reader.readAsDataURL($(this)[0].files[0]);
                } else {
                    $(img_holder).html('Este navegador no soporta Lector de Archivos');
                }
            } else {
                $(img_holder).empty();
                cardImageEdit.val('')
                Toast.fire({
                    icon: 'warning',
                    title: '¡Selecciona una imagen!'
                });
            }

        })

        var cardEditForm = $('#editCardForm');
        var cardEditForm = cardEditForm.validate({
            rules: {
                content: {
                    maxlength: 6000,
                    required: true
                },
                title: {
                    required: true,
                    maxlength: 100,
                },
            },
            errorElement: "label",
            errorClass: 'is-invalid',
            validClass: 'is-valid',
            ignore: ':hidden:not(.summernote-card-editor),.note-editable.card-block',
            errorPlacement: function (error, element) {
                error.addClass("error");
                if (element.prop("type") === "checkbox") {
                    error.insertAfter(element.siblings("label"));
                } else if (element.hasClass("summernote")) {
                    error.insertAfter(element.siblings(".note-editor"));
                } else {
                    error.insertAfter(element);
                }
            },
            submitHandler: function (form, event) {
                event.preventDefault()
                var form = $(form)
                var loadSpinner = form.find('.loadSpinner')
                var modal = $('#editCardModal')
                var img_holder = form.find('.img-holder')

                loadSpinner.toggleClass('active')
                form.find('.btn-save').attr('disabled', 'disabled')

                var formData = new FormData(form[0])

                $.ajax({
                    method: form.attr('method'),
                    url: form.attr('action'),
                    data: formData,
                    processData: false,
                    contentType: false,
                    dataType: 'JSON',
                    success: function (data) {

                        if (data.success) {

                            summernoteEditElement.summernote('reset');

                            publishingsTable.draw()
                            cardEditForm.resetForm()
                            form.trigger('reset')

                            $(img_holder).empty()

                            Toast.fire({
                                icon: 'success',
                                text: data.message
                            })
                        }
                        else {
                            Toast.fire({
                                icon: 'error',
                                text: data.message
                            })
                        }
                    },
                    complete: function (data) {
                        modal.modal('hide')
                        loadSpinner.toggleClass('active')
                        form.find('.btn-save').removeAttr('disabled')
                    },
                    error: function (data) {
                        console.log(data)
                        ToastError.fire()
                    }
                })
            }
        });


        $('.main-content').on('click', '.editCard', function () {
            var url = $(this).data('url')
            var getDataUrl = $(this).data('send')
            var modal = $('#editCardModal')
            var form = modal.find('#editCardForm')

            form.attr('action', url)

            form.validate()
            $('#input-card-image-edit').rules('remove', 'required')

            $.ajax({
                type: 'GET',
                url: getDataUrl,
                dataType: 'JSON',
                success: function (data) {

                    let card = data.card

                    modal.find('.img-holder').html('<img class="img-fluid card_img" id="image-card-edit" src="' + data.url_img + '"></img>');
                    modal.find('#input-card-image-edit').attr('data-value', '<img scr="' + data.url_img + '" class="img-fluid card_img"></img>');
                    modal.find('#input-card-image-edit').val('');

                    form.find('input[name=title]').val(card.title)

                    form.find('textarea[name=content]').val(card.content)


                    if (card.status == 1) {
                        modal.find('#edit-card-status-checkbox').prop('checked', true);
                    } else {
                        modal.find('#edit-card-status-checkbox').prop('checked', false);
                    }

                },
                complete: function (data) {
                    modal.modal('show')
                    let dataCard = data.responseJSON

                    modal.find('.note-editable').html(dataCard['card'].content)
                },
                error: function (data) {
                    console.log(data)
                    ToastError.fire()
                }
            })
        })

        $('#editCardModal').on('show.bs.modal', function () {
            summernoteEditElement.summernote(getSummernoteConfig(summernoteEditElement, cardEditForm));
        })

        $('#editCardModal').on('hidden.bs.modal', function () {
            summernoteEditElement.summernote('destroy')
        })


        // -------------- ELIMINAR ------------------

        $('.main-content').on('click', '.deleteCard', function () {
            var url = $(this).data('url')

            SwalDelete.fire().then(function (e) {
                if (e.value === true) {
                    $.ajax({
                        type: 'DELETE',
                        url: url,
                        dataType: 'JSON',
                        success: function (result) {
                            if (result.success === true) {

                                publishingsTable.draw()

                                Toast.fire({
                                    icon: 'success',
                                    text: result.message
                                })
                            }
                            else {
                                Toast.fire({
                                    icon: 'error',
                                    text: result.message
                                })
                            }
                        },
                        error: function (result) {
                            ToastError.fire()
                            console.log(result)
                        }
                    });
                } else {
                    e.dismiss;
                }
            }, function (dismiss) {
                return false;
            });

        })

    }






    // ------------ SURVEYS ---------------

    var surveyTable

    if ($('#surveys-table').length) {

        var surveyTableEle = $('#surveys-table');
        var getDataUrl = surveyTableEle.data('url');
        surveyTable = surveyTableEle.DataTable({
            responsive: true,
            language: DataTableEs,
            serverSide: true,
            processing: true,
            ajax: getDataUrl,
            columns: [
                { data: 'id', name: 'id' },
                { data: 'name', name: 'name' },
                { data: 'destined_to', name: 'destined_to' },
                { data: 'active', name: 'active' },
                { data: 'action', name: 'action', orderable: false, searchable: false },
            ],
            order: [
                [0, 'desc']
            ]
        });

        // ---------------- REGISTER ----------------

        $('#registerSurveyForm button[type=submit]').click(function () {
            $('button[type=submit]', $(this).parents('form')).removeAttr('clicked').removeAttr('name')
            $(this).attr('clicked', 'true').attr('name', 'verifybtn')
        })

        $('#register-survey-status-checkbox').change(function () {
            var txtDesc = $('#txt-register-description-survey');
            if (this.checked) {
                txtDesc.html('Activo');
            } else {
                txtDesc.html('Inactivo')
            }
        });

        $('#registerSurveySelect').select2({
            dropdownParent: $("#RegisterSurveyModal"),
            placeholder: 'Selecciona una categoría'
        })

        var surveyImageRegister = $('#input-image-survey-register');
        surveyImageRegister.val('');
        surveyImageRegister.on("change", function () {
            var img_path = $(this)[0].value;
            var img_holder = $(this).closest('#registerSurveyForm').find('.img-holder');
            var img_extension = img_path.substring(img_path.lastIndexOf('.') + 1).toLowerCase();

            if (img_extension == 'jpeg' || img_extension == 'jpg' || img_extension == 'png') {
                if (typeof (FileReader) != 'undefined') {
                    img_holder.empty()
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        $('<img/>', { 'src': e.target.result, 'class': 'img-fluid survey_img' }).
                            appendTo(img_holder);
                    }
                    img_holder.show();
                    reader.readAsDataURL($(this)[0].files[0]);
                } else {
                    $(img_holder).html('Este navegador no soporta Lector de Archivos');
                }
            } else {
                $(img_holder).empty();
                surveyImageRegister.val('')
                Toast.fire({
                    icon: 'warning',
                    title: '¡Selecciona una imagen!'
                });
            }
        })

        var registerSurveyForm = $('#registerSurveyForm').validate({
            rules: {
                name: {
                    required: true,
                    maxlength: 255
                },
                destined_to: {
                    required: true
                },
            },
            submitHandler: function (form, event) {
                event.preventDefault()

                var form = $(form)
                var button = form.find('button[type=submit][clicked=true]')
                var loadSpinner = button.find('.loadSpinner')
                var modal = $('#RegisterSurveyModal')
                var img_holder = form.find('.img-holder')

                loadSpinner.toggleClass('active')

                form.find('.btn-save').attr('disabled', 'disabled')

                $.ajax({
                    method: form.attr('method'),
                    url: form.attr('action'),
                    data: new FormData(form[0]),
                    processData: false,
                    contentType: false,
                    dataType: 'JSON',
                    success: function (data) {

                        if (data.success) {

                            if (data.show == true) {
                                window.location.href = data.route
                            }

                            $(img_holder).empty()
                            surveyTable.draw()
                            surveyImageRegister.val('')

                            Toast.fire({
                                icon: 'success',
                                text: data.message
                            })

                        } else {
                            Toast.fire({
                                icon: 'error',
                                text: data.message
                            })
                        }
                    },
                    complete: function (data) {
                        registerSurveyForm.resetForm()
                        $('#registerSurveySelect').val('').change()
                        form.trigger('reset')
                        loadSpinner.toggleClass('active')
                        form.find('.btn-save').removeAttr('disabled')
                        modal.modal('hide')
                    },
                    error: function (data) {
                        console.log(data)
                        ToastError.fire()
                    }
                })
            }
        })

    }

    /* -------------- EDIT -----------------*/

    if ($('#editSurveyForm').length) {

        $('#edit-survey-status-checkbox').change(function () {
            var txtDesc = $('#txt-edit-description-survey');
            if (this.checked) {
                txtDesc.html('Activo');
            } else {
                txtDesc.html('Inactivo')
            }
        });

        var editSurveyForm = $('#editSurveyForm').validate({
            rules: {
                name: {
                    required: true,
                    maxlength: 255
                },
                destined_to: {
                    required: true,
                }
            },
            submitHandler: function (form, event) {
                event.preventDefault()
                var form = $(form)
                var loadSpinner = form.find('.loadSpinner')
                var modal = $('#editSurveyModal')
                var img_holder = form.find('.img-holder')

                loadSpinner.toggleClass('active')
                form.find('.btn-save').attr('disabled', 'disabled')

                var formData = new FormData(form[0])

                $.ajax({
                    method: form.attr('method'),
                    url: form.attr('action'),
                    data: formData,
                    processData: false,
                    contentType: false,
                    dataType: 'JSON',
                    success: function (data) {

                        if (data.success) {

                            if (data.location == 'show') {
                                $('#survey-name-text-principal').html(data.title)
                                $('#survey-box-container').html(data.html)
                            }
                            else {
                                surveyTable.draw()
                                editSurveyForm.resetForm()
                            }

                            Toast.fire({
                                icon: 'success',
                                text: data.message
                            })
                        }
                        else {
                            Toast.fire({
                                icon: 'error',
                                text: data.message
                            })
                        }

                    },
                    complete: function (data) {
                        $(img_holder).empty()
                        modal.modal('hide')
                        form.find('.btn-save').removeAttr('disabled')
                        loadSpinner.toggleClass('active')
                    },
                    error: function (data) {
                        console.log(data)
                        ToastError.fire()
                    }
                })
            }
        })

        var inputImageSurveyEdit = $('#input-image-survey-edit');
        inputImageSurveyEdit.on("change", function () {

            var img_path = $(this)[0].value;
            var img_holder = $(this).closest('#editSurveyForm').find('.img-holder');
            var currentImagePath = $(this).data('value');
            var img_extension = img_path.substring(img_path.lastIndexOf('.') + 1).toLowerCase();

            if (img_extension == 'jpeg' || img_extension == 'jpg' || img_extension == 'png') {
                if (typeof (FileReader) != 'undefined') {
                    img_holder.empty()
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        $('<img/>', { 'src': e.target.result, 'class': 'img-fluid category_img' }).
                            appendTo(img_holder);
                    }
                    img_holder.show();
                    reader.readAsDataURL($(this)[0].files[0]);
                } else {
                    $(img_holder).html('Este navegador no soporta Lector de Archivos');
                }
            } else {
                $(img_holder).html(currentImagePath);
                inputImageSurveyEdit.val('')
                Toast.fire({
                    icon: 'warning',
                    title: '¡Selecciona una imagen!',
                });
            }
        })

        $('.main-content').on('click', '.editSurvey', function () {
            var modal = $('#editSurveyModal')
            var getDataUrl = $(this).data('send')
            var url = $(this).data('url')
            var form = modal.find('#editSurveyForm')

            editSurveyForm.resetForm()
            form.trigger('reset')

            form.attr('action', url)

            $.ajax({
                type: 'GET',
                url: getDataUrl,
                dataType: 'JSON',
                success: function (data) {

                    let survey = data.survey

                    modal.find('input[name=name]').val(survey.name)
                    modal.find('input[name=destined_to]').val(survey.destined_to)
                    modal.find($('#input_destined_type')).html(data.destined_to)
                    modal.find('.img-holder').html('<img class="img-fluid survey_img" id="image-survey-edit" src="' + data.url_img + '"></img>');
                    modal.find('#input-image-survey-edit').attr('data-value', '<img scr="' + data.url_img + '" class="img-fluid survey_img"');
                    modal.find('#input-image-survey-edit').val('');

                    if (survey.active == 'S') {
                        modal.find('#edit-survey-status-checkbox').prop('checked', true);
                        $('#txt-edit-description-survey').html('Activo');
                    } else {
                        modal.find('#edit-survey-status-checkbox').prop('checked', false);
                        $('#txt-edit-description-survey').html('Inactivo');
                    }
                },
                complete: function (data) {
                    modal.modal('show')
                },
                error: function (data) {
                    console.log(data)
                }
            })
        })
    }

    //  ---------- DELETE SURVEY ----------------

    $('html').on('click', '.deleteSurvey', function () {
        var button = $(this)
        var url = button.data('url')
        var type = button.data('type')

        SwalDelete.fire().then(function (e) {
            if (e.value === true) {
                $.ajax({
                    type: 'DELETE',
                    url: url,
                    data: {
                        type: type
                    },
                    dataType: 'JSON',
                    success: function (result) {

                        if (result.success) {

                            if (result.location == 'index') {
                                surveyTable.draw()
                            }
                            else {
                                window.location.href = result.route
                            }

                            Toast.fire({
                                icon: 'success',
                                text: result.message
                            })
                        }
                        else {
                            Toast.fire({
                                icon: 'error',
                                text: result.message
                            })
                        }
                    },
                    error: function (result) {
                        console.log(result)
                        ToastError.fire()
                    }
                });
            } else {
                e.dismiss;
            }
        }, function (dismiss) {
            return false;
        });
    })



    // ------- SURVEY SHOW ------------

    // -------- GROUPS TABLE ---------

    var surveyGroupsTable

    if ($('#groups-statements-table').length) {

        var surveyGroupsTableEle = $('#groups-statements-table');
        var getDataUrl = surveyGroupsTableEle.data('url');
        surveyGroupsTable = surveyGroupsTableEle.DataTable({
            responsive: true,
            language: DataTableEs,
            serverSide: true,
            processing: true,
            ajax: getDataUrl,
            columns: [
                { data: 'id', name: 'id' },
                { data: 'name', name: 'name' },
                { data: 'action', name: 'action', orderable: false, searchable: false },
            ],
            order: [
                [0, 'desc']
            ]
        });


        // ----------- REGISTER GROUPS -------------

        $('#registerSurveyGroupsForm button[type=submit]').click(function () {
            $('button[type=submit]', $(this).parents('form')).removeAttr('clicked').removeAttr('name')
            $(this).attr('clicked', 'true').attr('name', 'verifybtn')
        })

        var registerSurveyGroupForm = $('#registerSurveyGroupsForm').validate({
            rules: {
                name: {
                    required: true,
                    maxlength: 255
                },
                description: {
                    required: true,
                    maxlength: 255
                }
            },
            submitHandler: function (form, event) {
                event.preventDefault()

                var form = $(form)
                var button = form.find('button[type=submit][clicked=true]')
                var loadSpinner = button.find('.loadSpinner')
                var modal = $('#RegisterSurveyGroupModal')
                var img_holder = form.find('.img-holder')

                loadSpinner.toggleClass('active')

                form.find('.btn-save').attr('disabled', 'disabled')

                $.ajax({
                    method: form.attr('method'),
                    url: form.attr('action'),
                    data: new FormData(form[0]),
                    processData: false,
                    contentType: false,
                    dataType: 'JSON',
                    success: function (data) {

                        if (data.success) {

                            if (data.show == true) {
                                window.location.href = data.route
                            }

                            $(img_holder).empty()
                            surveyGroupsTable.draw()
                            $('#survey-box-container').html(data.html)

                            Toast.fire({
                                icon: 'success',
                                text: data.message
                            })

                        } else {
                            Toast.fire({
                                icon: 'error',
                                text: data.message
                            })
                        }
                    },
                    complete: function (data) {
                        registerSurveyGroupForm.resetForm()
                        form.trigger('reset')
                        loadSpinner.toggleClass('active')
                        form.find('.btn-save').removeAttr('disabled')
                        modal.modal('hide')
                    },
                    error: function (data) {
                        console.log(data)
                        ToastError.fire()
                    }
                })
            }
        })
    }

    /* -------------- GROUP EDIT -----------------*/

    if ($('#editSurveyGroupForm').length) {

        var editSurveyGroupForm = $('#editSurveyGroupForm').validate({
            rules: {
                name: {
                    required: true,
                    maxlength: 255
                },
                description: {
                    required: true,
                    maxlength: 255
                }
            },
            submitHandler: function (form, event) {
                event.preventDefault()
                var form = $(form)
                var loadSpinner = form.find('.loadSpinner')
                var modal = $('#editSurveyGroupModal')

                loadSpinner.toggleClass('active')
                form.find('.btn-save').attr('disabled', 'disabled')

                var formData = new FormData(form[0])

                $.ajax({
                    method: form.attr('method'),
                    url: form.attr('action'),
                    data: formData,
                    processData: false,
                    contentType: false,
                    dataType: 'JSON',
                    success: function (data) {

                        if (data.success) {

                            if (data.location == 'show') {
                                $('#group-name-text-principal').html(data.title)
                                $('#group-box-container').html(data.html)
                            }
                            else {
                                surveyGroupsTable.draw()
                                editSurveyGroupForm.resetForm()
                            }

                            Toast.fire({
                                icon: 'success',
                                text: data.message
                            })
                        }
                        else {
                            Toast.fire({
                                icon: 'error',
                                text: data.message
                            })
                        }

                    },
                    complete: function (data) {
                        modal.modal('hide')
                        form.find('.btn-save').removeAttr('disabled')
                        loadSpinner.toggleClass('active')
                    },
                    error: function (data) {
                        console.log(data)
                        ToastError.fire()
                    }
                })
            }
        })

        $('html').on('click', '.editGroup', function () {
            var modal = $('#editSurveyGroupModal')
            var getDataUrl = $(this).data('send')
            var url = $(this).data('url')
            var form = modal.find('#editSurveyGroupForm')

            editSurveyGroupForm.resetForm()
            form.trigger('reset')

            form.attr('action', url)

            $.ajax({
                type: 'GET',
                url: getDataUrl,
                dataType: 'JSON',
                success: function (data) {

                    let group = data.group

                    modal.find('input[name=name]').val(group.name)
                    modal.find('input[name=description]').val(group.description)
                },
                complete: function (data) {
                    modal.modal('show')
                },
                error: function (data) {
                    console.log(data)
                }
            })
        })
    }

    // ------------ DELETE -------------

    $('html').on('click', '.deleteGroup', function () {
        var button = $(this)
        var url = button.data('url')
        var type = button.data('type')

        SwalDelete.fire().then(function (e) {
            if (e.value === true) {
                $.ajax({
                    type: 'DELETE',
                    url: url,
                    data: {
                        type: type
                    },
                    dataType: 'JSON',
                    success: function (result) {

                        if (result.success) {

                            if (result.location == 'index') {
                                surveyGroupsTable.draw()
                                $('#survey-box-container').html(result.html)
                            }
                            else {
                                window.location.href = result.route
                            }

                            Toast.fire({
                                icon: 'success',
                                text: result.message
                            })
                        }
                        else {
                            Toast.fire({
                                icon: 'error',
                                text: result.message
                            })
                        }
                    },
                    error: function (result) {
                        console.log(result)
                        ToastError.fire()
                    }
                });
            } else {
                e.dismiss;
            }
        }, function (dismiss) {
            return false;
        });
    })



    // ---------- GROUP SHOW -------------

    // -------- STATEMENTS TABLE ----------

    var surveyStatementsTable

    if ($('#statements-table').length) {

        var surveyStatementsTableEle = $('#statements-table');
        var getDataUrl = surveyStatementsTableEle.data('url');
        surveyStatementsTable = surveyStatementsTableEle.DataTable({
            responsive: true,
            language: DataTableEs,
            serverSide: true,
            processing: true,
            ajax: getDataUrl,
            columns: [
                { data: 'id', name: 'id' },
                { data: 'description', name: 'description' },
                { data: 'type', name: 'type' },
                { data: 'created_at', name: 'created_at' },
                { data: 'updated_at', name: 'updated_at' },
                { data: 'action', name: 'action', orderable: false, searchable: false },
            ],
            order: [
                [0, 'desc']
            ]
        });

        // ----------- CREATE STATEMENTS ------------

        $('#registerStatementTypeSelect').select2({
            placeholder: 'Selecciona un tipo de pregunta',
            minimumResultsForSearch: -1,
        })

        var registerStatementForm = $('#registerStatementForm').validate({
            rules: {
                description: {
                    required: true,
                    maxlength: 255
                },
                desc: {
                    maxlength: 255
                },
                type: {
                    required: true,
                },
                'option[]': {
                    required: true
                }
            },
            submitHandler: function (form, event) {
                event.preventDefault()

                var form = $(form)
                var loadSpinner = form.find('.loadSpinner')

                loadSpinner.toggleClass('active')

                form.find('.btn-save').attr('disabled', 'disabled')

                $.ajax({
                    method: form.attr('method'),
                    url: form.attr('action'),
                    data: form.serialize(),
                    dataType: 'JSON',
                    success: function (data) {

                        if (data.success) {

                            $('#options-type-container').html(data.html)
                            surveyStatementsTable.draw()

                            Toast.fire({
                                icon: 'success',
                                text: data.message
                            })

                        } else {
                            Toast.fire({
                                icon: 'error',
                                text: data.message
                            })
                        }
                    },
                    complete: function (data) {
                        registerStatementForm.resetForm()
                        form.trigger('reset')
                        loadSpinner.toggleClass('active')
                        form.find('.btn-save').removeAttr('disabled')
                    },
                    error: function (data) {
                        console.log(data)
                        ToastError.fire()
                    }
                })
            }
        })

        $('html').on('change', '#registerStatementTypeSelect', function () {
            var select = $(this)
            var value = select.val()
            select.attr('disabled', 'disabled')

            $.ajax({
                type: 'GET',
                url: $(this).data('url'),
                data: {
                    value: value
                },
                dataType: 'JSON',
                success: function (data) {
                    $('#options-type-container').html(data.html)
                },
                complete: function (data) {
                    select.removeAttr('disabled')
                },
                error: function (data) {
                    console.log(data)
                    ToastError.fire()
                }
            })
        })


        // ------------ DELETE STATEMENT -------------

        $('html').on('click', '.deleteStatement', function () {
            var button = $(this)
            var url = button.data('url')

            SwalDelete.fire().then(function (e) {
                if (e.value === true) {
                    $.ajax({
                        type: 'DELETE',
                        url: url,
                        dataType: 'JSON',
                        success: function (result) {

                            if (result.success) {

                                surveyStatementsTable.draw()

                                Toast.fire({
                                    icon: 'success',
                                    text: result.message
                                })
                            }
                            else {
                                Toast.fire({
                                    icon: 'error',
                                    text: result.message
                                })
                            }
                        },
                        error: function (result) {
                            console.log(result)
                            ToastError.fire()
                        }
                    });
                } else {
                    e.dismiss;
                }
            }, function (dismiss) {
                return false;
            });
        })


    }

    // --------- OPTION GENERAL -----------

    if ($('#options-type-container').length) {

        function addOptionHtml(type, count) {
            if (type == 'select_multi') {
                return '<tr class="alternative-row" data-index="' + count + '"> \
                            <td> \
                                <div class="input-group"> \
                                    <div class="input-group-prepend"> \
                                        <div class="input-group-text text-bold alternative-number"> \
                                            '+ (parseInt(count) + 1) + ' \
                                        </div> \
                                    </div> \
                                    <input type="text" name="option[]" class="form-control alternative no-label-error" \
                                        placeholder="Ingresa la opción"> \
                                </div> \
                            </td> \
                            <td class="text-center btn-action-container"> \
                                <span class="delete-btn delete-option-btn"> \
                                    <i class="fa-solid fa-trash-can"></i> \
                                </span> \
                            </td> \
                        </tr>'
            }
            else {
                return '';
            }
        }

        function deleteOption(row, questionType) {

            row.remove()

            $('tr.alternative-row').each(function (index) {

                $(this).attr('data-index', index)
                $(this).find('.alternative-number').html(index + 1)
            })
        }

        // --------- ADD OPTIONS ------------

        $('html').on('click', '.add_option_button', function () {

            var type = $('#registerStatementTypeSelect').val()
            var alternativesTable = $('#options-table')

            let count = alternativesTable.find('.alternative-row').length
            alternativesTable.append(addOptionHtml(type, count))

        })

        // ---------- DELETE OPTION -------------

        $('html').on('click', '.delete-option-btn', function () {

            var optionType = $('#registerStatementTypeSelect').val()
            var row = $(this).closest('tr.alternative-row')
            var dataStored = $(this).data('stored')

            if (dataStored == true) {

                var url = $(this).data('url')

                SwalDelete.fire().then(function (e) {
                    if (e.value === true) {
                        $.ajax({
                            type: 'DELETE',
                            url: url,
                            dataType: 'JSON',
                            success: function (result) {

                                if (result.success === true) {

                                    deleteOption(row, optionType)

                                    Toast.fire({
                                        icon: 'success',
                                        text: result.message,
                                    })
                                }
                                else {
                                    Toast.fire({
                                        icon: 'error',
                                        text: result.message,
                                    })
                                }
                            },
                            error: function (result) {
                                ToastError.fire()
                            }
                        });
                    } else {
                        e.dismiss;
                    }
                }, function (dismiss) {
                    return false;
                });

            }
            else {
                deleteOption(row, optionType)
            }
        })


    }

    // -------- STATEMENT SHOW -----------

    if ($('#updateStatementForm').length) {

        // ----------- UPDATE ---------------

        var updateStatementForm = $('#updateStatementForm').validate({
            rules: {
                description: {
                    required: true,
                    maxlength: 255
                },
                desc: {
                    maxlength: 255
                },
                type: {
                    required: true,
                },
                'option[]': {
                    required: true
                }
            },
            submitHandler: function (form, event) {
                event.preventDefault()

                var form = $(form)
                var loadSpinner = form.find('.loadSpinner')

                loadSpinner.toggleClass('active')

                form.find('.btn-save').attr('disabled', 'disabled')

                $.ajax({
                    method: form.attr('method'),
                    url: form.attr('action'),
                    data: form.serialize(),
                    dataType: 'JSON',
                    success: function (data) {

                        if (data.success) {

                            let statement = data.statement

                            $('#title-statement-container').html(statement.description)
                            form.find('input[name=description]').val(statement.description)
                            form.find('input[name=desc]').val(statement.desc)

                            $('#options-type-container').html(data.html)

                            Toast.fire({
                                icon: 'success',
                                text: data.message
                            })

                        } else {
                            Toast.fire({
                                icon: 'error',
                                text: data.message
                            })
                        }
                    },
                    complete: function (data) {
                        updateStatementForm.resetForm()
                        loadSpinner.toggleClass('active')
                        form.find('.btn-save').removeAttr('disabled')
                    },
                    error: function (data) {
                        console.log(data)
                        ToastError.fire()
                    }
                })
            }
        })

    }




    // ---------- PROFILE USER SURVEY REPORT -------------

    if ($('#profile-surveys-table').length) {

        var profileSurveysTable;

        var formSurveyReport = $('#form-survey-report-export')
        var inputFromDate = formSurveyReport.find('input[name=from_date]')
        var inputEndDate = formSurveyReport.find('input[name=end_date]')

        if ($('#date-range-input-surveys').length) {

            $('#date-range-input-surveys').val('Todos los registros');

            $('.daterange-cus').daterangepicker({
                locale: { format: 'YYYY-MM-DD' },
                drops: 'down',
                opens: 'right'
            });

            $('#daterange-btn-surveys').daterangepicker({
                ranges: {
                    'Todo': [moment('1970-01-01'), moment('3000-01-01')],
                    'Hoy': [moment(), moment().add(1, 'days')],
                    'Ayer': [moment().subtract(1, 'days'), moment()],
                    'Últimos 7 días': [moment().subtract(6, 'days'), moment().add(1, 'days')],
                    'Últimos 30 días': [moment().subtract(29, 'days'), moment().add(1, 'days')],
                    'Este mes': [moment().startOf('month'), moment().endOf('month').add(1, 'days')],
                    'Último mes': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month').add(1, 'days')]
                },
                startDate: moment('1970-01-01'),
                endDate: moment('3000-01-01'),
            }, function (start, end) {

                if (start.format('YYYY-MM-DD') == '1970-01-01') {
                    inputFromDate.val('')
                    inputEndDate.val('')
                    $('#date-range-input-surveys').val('Todos los registros');
                } else {
                    inputFromDate.val(start.format('YYYY-MM-DD'))
                    inputEndDate.val(end.format('YYYY-MM-DD'))
                    $('#date-range-input-surveys').val('Del: ' + start.format('YYYY-MM-DD') + ' hasta el: ' + end.format('YYYY-MM-DD'))
                }

                profileSurveysTable.draw()
            });
        }

        /* ----- PROFILE SURVEYS TABLE ------*/

        var profileSurveysTableEle = $('#profile-surveys-table')
        var getDataUrl = profileSurveysTableEle.data('url')
        profileSurveysTable = profileSurveysTableEle.DataTable({
            responsive: true,
            language: DataTableEs,
            serverSide: true,
            processing: true,
            ajax: {
                'url': getDataUrl,
                "data": function (data) {
                    data.from_date = $('#daterange-btn-surveys').data('daterangepicker').startDate.format('YYYY-MM-DD')
                    data.end_date = $('#daterange-btn-surveys').data('daterangepicker').endDate.format('YYYY-MM-DD')
                }
            },
            columns: [
                { data: 'id', name: 'id' },
                { data: 'user.dni', name: 'user.dni' },
                { data: 'user.paternal', name: 'user.paternal' },
                { data: 'user.maternal', name: 'user.maternal' },
                { data: 'user.name', name: 'user.name' },
                { data: 'company.description', name: 'company.description', orderable: false },
                { data: 'survey.name', name: 'survey.name', orderable: false },
                { data: 'end_time', name: 'end_time' },
                { data: 'ec', name: 'ec', orderable: false },
                { data: 'or', name: 'or', orderable: false },
                { data: 'ca', name: 'ca', orderable: false },
                { data: 'ea', name: 'ea', orderable: false },
            ],
            order: [
                [0, 'desc']
            ]
            // dom: 'rtip'
        });
    }

    // ----------- GENERAL SURVEYS REPORT -------------

    if ($('#general-user-surveys-table').length) {

        var userSurveysTable;

        var formSurveyReport = $('#form-survey-report-export')
        var inputFromDate = formSurveyReport.find('input[name=from_date]')
        var inputEndDate = formSurveyReport.find('input[name=end_date]')

        if ($('#date-range-input-surveys').length) {

            $('#date-range-input-surveys').val('Todos los registros');

            $('.daterange-cus').daterangepicker({
                locale: { format: 'YYYY-MM-DD' },
                drops: 'down',
                opens: 'right'
            });

            $('#daterange-btn-surveys').daterangepicker({
                ranges: {
                    'Todo': [moment('1970-01-01'), moment('3000-01-01')],
                    'Hoy': [moment(), moment().add(1, 'days')],
                    'Ayer': [moment().subtract(1, 'days'), moment()],
                    'Últimos 7 días': [moment().subtract(6, 'days'), moment().add(1, 'days')],
                    'Últimos 30 días': [moment().subtract(29, 'days'), moment().add(1, 'days')],
                    'Este mes': [moment().startOf('month'), moment().endOf('month').add(1, 'days')],
                    'Último mes': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month').add(1, 'days')]
                },
                startDate: moment('1970-01-01'),
                endDate: moment('3000-01-01'),
            }, function (start, end) {

                if (start.format('YYYY-MM-DD') == '1970-01-01') {
                    inputFromDate.val('')
                    inputEndDate.val('')
                    $('#date-range-input-surveys').val('Todos los registros');
                } else {
                    inputFromDate.val(start.format('YYYY-MM-DD'))
                    inputEndDate.val(end.format('YYYY-MM-DD'))
                    $('#date-range-input-surveys').val('Del: ' + start.format('YYYY-MM-DD') + ' hasta el: ' + end.format('YYYY-MM-DD'))
                }

                userSurveysTable.draw()
            });
        }

        /* ----- USER SURVEYS TABLE ------*/

        var userSurveysTableEle = $('#general-user-surveys-table')
        var getDataUrl = userSurveysTableEle.data('url')
        userSurveysTable = userSurveysTableEle.DataTable({
            responsive: true,
            language: DataTableEs,
            serverSide: true,
            processing: true,
            ajax: {
                'url': getDataUrl,
                "data": function (data) {
                    data.from_date = $('#daterange-btn-surveys').data('daterangepicker').startDate.format('YYYY-MM-DD')
                    data.end_date = $('#daterange-btn-surveys').data('daterangepicker').endDate.format('YYYY-MM-DD')
                }
            },
            columns: [
                { data: 'id', name: 'id' },
                { data: 'user.dni', name: 'user.dni' },
                { data: 'user.paternal', name: 'user.paternal' },
                { data: 'user.maternal', name: 'user.maternal' },
                { data: 'user.name', name: 'user.name' },
                { data: 'company.description', name: 'company.description', orderable: false },
                { data: 'survey.name', name: 'survey.name', orderable: false },
                { data: 'end_time', name: 'end_time' },
                { data: 'event.user.name', name: 'event.user.name', orderable: false },
                { data: 'event.course.description', name: 'event.course.description', orderable: false },
                { data: 'action', name: 'action', orderable: false, searchable: false },
            ],
            order: [
                [0, 'desc']
            ]
            // dom: 'rtip'
        });

        // ---------- ELIMINAR ENCUESTA DE USUARIO ----------

        $('html').on('click', '.deleteUserSurvey', function () {
            let url = $(this).data('url')

            SwalDelete.fire().then(function (e) {
                if (e.value === true) {
                    $.ajax({
                        type: 'DELETE',
                        url: url,
                        dataType: 'JSON',
                        success: function (result) {
                            if (result.success === true) {

                                userSurveysTable.draw();

                                Toast.fire({
                                    icon: 'success',
                                    text: result.message,
                                })
                            }
                            else {
                                Toast.fire({
                                    icon: 'error',
                                    text: result.message
                                })
                            }
                        },
                        error: function (result) {
                            ToastError.fire()
                        }
                    });
                } else {
                    e.dismiss;
                }
            }, function (dismiss) {
                return false;
            });
        })
    }

    // ------------- CERTIFICATIONS INDEX ------------------

    if ($('#certifications-index-table').length) {

        var certifcationIndexTable;

        if ($('#date-range-input-certifications').length) {

            $('#date-range-input-certifications').val('Todos los registros');

            $('.daterange-cus').daterangepicker({
                locale: { format: 'YYYY-MM-DD' },
                drops: 'down',
                opens: 'right'
            });

            $('#daterange-btn-certifications').daterangepicker({
                ranges: {
                    'Todo': [moment('1970-01-01'), moment('3000-01-01')],
                    'Hoy': [moment(), moment().add(1, 'days')],
                    'Ayer': [moment().subtract(1, 'days'), moment()],
                    'Últimos 7 días': [moment().subtract(6, 'days'), moment().add(1, 'days')],
                    'Últimos 30 días': [moment().subtract(29, 'days'), moment().add(1, 'days')],
                    'Este mes': [moment().startOf('month'), moment().endOf('month').add(1, 'days')],
                    'Último mes': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month').add(1, 'days')]
                },
                startDate: moment('1970-01-01'),
                endDate: moment('3000-01-01'),
            }, function (start, end) {

                if (start.format('YYYY-MM-DD') == '1970-01-01') {
                    $('#date-range-input-certifications').val('Todos los registros');
                } else {
                    $('#date-range-input-certifications').val('Del: ' + start.format('YYYY-MM-DD') + ' hasta el: ' + end.format('YYYY-MM-DD'))
                }

                certifcationIndexTable.draw()
            });
        }

        /* ---------- FILTER SELECT ----------*/

        $('#search_from_status_select').select2({
            minimumResultsForSearch: -1
        })

        $('html').on('change', '.select-filter-certification', function () {
            certifcationIndexTable.draw()
        })

        var certificationIndexTableEle = $('#certifications-index-table');
        var getDataUrl = certificationIndexTableEle.data('url');
        certifcationIndexTable = certificationIndexTableEle.DataTable({
            responsive: true,
            language: DataTableEs,
            serverSide: true,
            processing: true,
            ajax: {
                'url': getDataTable,
                'data': function (data) {
                    data.from_date = $('#daterange-btn-certifications').data('daterangepicker').startDate.format('YYYY-MM-DD')
                    data.end_date = $('#daterange-btn-certifications').data('daterangepicker').endDate.format('YYYY-MM-DD')
                    data.company = $('#search_from_company_select').val()
                    data.course = $('#search_from_course_select').val()
                    data.status = $('#search_from_status_select').val()
                }
            },
            columns: [
                { data: 'certifications.id', name: 'certifications.id' },
                { data: 'user.dni', name: 'user.dni' },
                { data: 'user.name', name: 'user.name' },
                { data: 'company.description', name: 'company.description' },
                { data: 'event.exam.course.description', name: 'event.exam.course.description' },
                { data: 'event.description', name: 'event.description' },
                { data: 'event.date', name: 'event.date' },
                { data: 'score', name: 'score' },
                { data: 'exam', name: 'exam', orderable: false, searchable: false },
                { data: 'certification', name: 'certification', orderable: false, searchable: false },
                { data: 'documents', name: 'documents', orderable: false, searchable: false },
            ],
            order: [
                [0, 'desc']
            ]
        });
    }
































    Dropzone.prototype.defaultOptions.dictDefaultMessage = "<i class='fa-solid fa-upload'></i> &nbsp; Selecciona o arrastra y suelta un video";
    Dropzone.prototype.defaultOptions.dictFallbackMessage = "Your browser does not support drag'n'drop file uploads.";
    Dropzone.prototype.defaultOptions.dictFallbackText = "Please use the fallback form below to upload your files like in the olden days.";
    Dropzone.prototype.defaultOptions.dictFileTooBig = "El archivo es demasiado grande ({{filesize}}MiB). Tamaño máximo: {{maxFilesize}}MiB.";
    Dropzone.prototype.defaultOptions.dictInvalidFileType = "No puedes subir archivos de este tipo.";
    Dropzone.prototype.defaultOptions.dictResponseError = "Server responded with {{statusCode}} code.";
    Dropzone.prototype.defaultOptions.dictCancelUpload = "Cancelar carga";
    Dropzone.prototype.defaultOptions.dictCancelUploadConfirmation = "Are you sure you want to cancel this upload?";
    Dropzone.prototype.defaultOptions.dictRemoveFile = "Quitar archivo ";
    Dropzone.prototype.defaultOptions.dictMaxFilesExceeded = "No puedes subir más archivos.";


    jQuery.extend(jQuery.validator.messages, {
        required: '<i class="fa-solid fa-circle-exclamation"></i> &nbsp; Este campo es obligatorio',
        email: 'Ingrese un email válido',
        number: 'Por favor, ingresa un número válido',
        url: 'Por favor, ingresa una URL válida',
        max: jQuery.validator.format('Por favor, ingrese un valor menor o igual a {0}'),
        min: jQuery.validator.format('Por favor, ingrese un valor mayor o igual a {0}'),
        step: jQuery.validator.format("Ingrese un número múltiplo de {0}"),
        maxlength: jQuery.validator.format("Ingrese menos de {0} caracteres.")
    });
})

