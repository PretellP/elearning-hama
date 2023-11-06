<div class="modal fade" id="editSurveyGroupModal" tabindex="-1" aria-labelledby="editSurveyGroupModal" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content">

            <div class="modal-header">
                <h5 class="modal-title" id="editSurveyGroupModalLabel">
                    <div class="section-title mt-0">
                        <i class="fa-solid fa-pen-to-square"></i> &nbsp;
                        Editar grupo de preguntas
                    </div>
                </h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>

            <form action="" id="editSurveyGroupForm" method="POST"'>
                @csrf

                <div class="modal-body">

                    <input type="hidden" name="place" value="{{$show ?? '' }}">
                    
                    <div class="form-row">
                        <div class="form-group col-md-12">
                            <label>Nombre *</label>
                            <input type="text" name="name" class="form-control name"
                                placeholder="Ingresa nombre del grupo de preguntas">
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-group col-md-12">
                            <label>Descripción *</label>
                            <input type="text" name="description" class="form-control description"
                                placeholder="Ingresa descripción del grupo de preguntas">
                        </div>
                    </div>

                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary btn-close" data-dismiss="modal">Cerrar</button>
                    <button type="submit" class="btn btn-primary btn-save">
                        Guardar
                        <i class="fa-solid fa-spinner fa-spin loadSpinner ms-1"></i>
                    </button>
                </div>

            </form>
        </div>
    </div>
</div>
