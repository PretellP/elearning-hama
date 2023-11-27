function setActiveCheckbox (ele, txtClass) {
    $('html').on('change', ele, function () {
        var txtDesc = $(this).closest('form').find(txtClass)
        if (this.checked) {
            txtDesc.html('Activo');
        } else {
            txtDesc.html('Inactivo')
        }
    })
}

function initImageChange (inputEle, formEle, Toast) {

    inputEle.val('');
    inputEle.on("change", function () {
        var img_path = $(this)[0].value;
        var img_holder = formEle.find('.img-holder');
        var img_extension = img_path.substring(img_path.lastIndexOf('.') + 1).toLowerCase();

        if (img_extension == 'jpeg' || img_extension == 'jpg' || img_extension == 'png') {
            if (typeof (FileReader) != 'undefined') {
                img_holder.empty()
                var reader = new FileReader();
                reader.onload = function (e) {
                    $('<img/>', { 'src': e.target.result, 'class': 'img-fluid' }).
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
}

function setActiveSubmitButton (buttonEle) {
    buttonEle.click(function () {
        $('button[type=submit]', $(this).parents('form')).removeAttr('clicked').removeAttr('name')
        $(this).attr('clicked', 'true').attr('name', 'verifybtn')
    })
}


const dateRangeConfig = {
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
}

export {setActiveCheckbox, initImageChange, setActiveSubmitButton, dateRangeConfig};