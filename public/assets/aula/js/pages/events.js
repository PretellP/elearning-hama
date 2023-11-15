import DataTableEs from "../../../common/js/datatable_es.js";

$(function () {

    if ($('#events-table').length) {

        var eventsTableEle = $('#events-table');
        var getDataUrl = eventsTableEle.data('url');
        var eventsTable = eventsTableEle.DataTable({
            responsive: true,
            language: DataTableEs,
            serverSide: true,
            processing: true,
            ajax: getDataUrl,
            columns: [
                { data: 'id', name: 'id' },
                { data: 'description', name: 'description' },
                { data: 'type', name: 'type' },
                { data: 'date', name: 'date' },
                { data: 'active', name: 'active' },
                { data: 'room.description', name: 'room.description' },
                { data: 'exam.course.description', name: 'exam.course.description' },
            ],
            order: [
                [3, 'desc']
            ]
        });
    }

    if ($('#participants-table').length) {

        var participantsTableEle = $('#participants-table');
        var getDataUrl = participantsTableEle.data('url');
        var participantsTable = participantsTableEle.DataTable({
            responsive: true,
            language: DataTableEs,
            serverSide: true,
            processing: true,
            ajax: getDataUrl,
            columns: [
                { data: 'id', name: 'id'},
                { data: 'user.dni', name: 'user.dni' },
                { data: 'user.name', name: 'user.name' },
                { data: 'user.paternal', name: 'user.paternal' },
                { data: 'user.maternal', name: 'user.maternal' },
                { data: 'status', name: 'status' },
                { data: 'assist_user', name: 'assist_user' },
                { data: 'user.profile_user', name: 'user.profile_user' },
            ],
            order: [
                [0, 'desc']
            ]
        });


        // ------------- UPDATE ASSIST ------------

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
                        participantsTable.ajax.reload(null, false)
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
    }
})