@php
if (isset($question) && $question->evaluations_count != 0) {
$isInvalid = true;
}
@endphp

<hr>

<input type="hidden" id="typeQuestionValue" value="{{ $questionType_id }}">

<div class="form-row statement-points-group">

    <div class="form-group col-9">
        <label>Enunciado *</label>
        <input type="text" name="statement" class="form-control statement 
            @if(isset($isInvalid)) not-user-allowed @endif" placeholder="Ingresa el enunciado"
            value="@if(isset($question)){{ $question->statement }}@endif" @if(isset($isInvalid)) readonly='true' @endif>
    </div>

    <div class="form-group col-2">
        <label>Puntos *</label>
        <input type="number" name="points" class="form-control points 
        @if(isset($isInvalid)) not-user-allowed @endif" value="@if(isset($question)){{ $question->points }}@endif"
            @if(isset($isInvalid)) readonly='true' @endif>
    </div>

</div>

<hr>

<div class="mb-3">

    <h5 class="subtitle-header-show mb-3">
        Alternativas:
    </h5>

</div>

<table class="table table-hover table-sm">

    <thead>
        <tr>
            <th class="text-bold">Descripción</th>
            <th class="text-bold text-center stretch-width"> Alternativa correcta </th>
            <th class="text-bold text-center stretch-width"></th>
        </tr>
    </thead>
    <tbody id="alternatives-table">

        @if(isset($question))

        @foreach ($question->alternatives as $i => $alternative)

        <tr class="alternative-row" data-index="{{ $i }}">

            <input type="hidden" value="{{ $alternative->id }}" name="stored-alternatives[]">

            <td>
                <div class="input-group">
                    <div class="input-group-prepend">
                        <div class="input-group-text text-bold alternative-number">
                            {{ $i+1 }}
                        </div>
                    </div>
                    <input type="text" name="alternative[]"
                        class="form-control alternative no-label-error @if(isset($isInvalid)) not-user-allowed @endif"
                        placeholder="Ingresa la alternativa" value="{{ $alternative->description }}"
                        @if(isset($isInvalid)) readonly='true' @endif>
                </div>
            </td>
            <td class="text-center flex-center">
                <label class="is_correct_button position-relative @if(isset($isInvalid)) not-user-allowed @endif">
                    <input type="radio" name="is_correct" value="{{ $i }}" class="selectgroup-input"
                        @if(isset($isInvalid)) readonly='true' @endif @if($alternative->is_correct == 1) checked @endif>
                    <span class="selectgroup-button selectgroup-button-icon is_correct_btn">
                        <i class="fa-solid fa-check"></i>
                    </span>
                </label>
            </td>
            <td class="text-center btn-action-container">
                <span data-stored="true" data-url="{{ route('admin.exams.alternatives.destroy', $alternative) }}"
                    class="delete-btn @if($alternative->is_correct == 1 || isset($isInvalid)) disabled @else delete-alternative-btn @endif">
                    <i class="fa-solid fa-trash-can"></i>
                </span>
            </td>
        </tr>

        @endforeach

        @else

        <tr class="alternative-row" data-index="0">
            <td>
                <div class="input-group">
                    <div class="input-group-prepend">
                        <div class="input-group-text text-bold alternative-number">
                            1
                        </div>
                    </div>
                    <input type="text" name="alternative[]" class="form-control alternative no-label-error"
                        placeholder="Ingresa la alternativa">
                </div>
            </td>
            <td class="text-center flex-center">
                <label class="is_correct_button position-relative">
                    <input type="radio" name="is_correct" value="0" class="selectgroup-input" checked="checked">
                    <span class="selectgroup-button selectgroup-button-icon is_correct_btn">
                        <i class="fa-solid fa-check"></i>
                    </span>
                </label>
            </td>
            <td class="text-center btn-action-container">
                <span class="delete-btn disabled">
                    <i class="fa-solid fa-trash-can"></i>
                </span>
            </td>
        </tr>

        @endif


    </tbody>

</table>

<a href="javascript:void(0);"
    class="@if(!isset($isInvalid)) add_alternative_button @endif add_custom_button mt-3 @if(isset($isInvalid)) not-user-allowed @endif">
    <i class="fa-solid fa-plus fa-2xs"></i> &nbsp; Añadir alternativa
</a>

<div class="form-group mt-3 ms-2">
    <label class="custom-switch mt-2">
        <input type="checkbox" name="active" id="question-status-checkbox" @if(!isset($question)) checked @endif
            @if(isset($question) && $question->active == 'S') checked @endif
        class="custom-switch-input">
        <span class="custom-switch-indicator"></span>
        <span id="txt-status-question" class="custom-switch-description">
            @if(isset($question))
            @if($question->active == 'S')
            Activo
            @else
            Inactivo
            @endif
            @else
            Activo
            @endif
        </span>
    </label>
</div>

<hr>

<div class="total-width text-right">
    <button type="submit" class="btn btn-primary btn-save">
        Guardar
        <i class="fa-solid fa-spinner fa-spin loadSpinner ms-1"></i>
    </button>
</div>