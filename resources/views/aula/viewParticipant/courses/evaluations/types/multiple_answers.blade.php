<form class="steps" method="POST" action="{{ $routeUpdate }}" id="quizStep">

    @method('PATCH')
    @csrf

    <fieldset>

        <div class="info-question">
            <p>Selecciona una o más alternativas</p>
        </div>

        <div class="alert-container">
            <p>
                <i class="fa-solid fa-circle-exclamation fa-bounce fa-lg"></i> &nbsp;
                Selecciona una opción para continuar
            </p>
        </div>

        <div class="box-quiz-head">
            <h2 class="fs-title"> {{$question->statement}}  </h2>

            <input type="hidden" name="question" value="{{$question->id}}">
        </div>

        <div class="box-quiz-body">

            <div class="btn-prev">
                @if (($num_question+1) != '1')
                    <a href="{{ $route }}">
                        <i class="fa-solid fa-angles-left"></i>
                    </a>
                @endif
            </div>

            <div class="box-answers">
                @foreach($question->alternatives->shuffle() as $alternative)

                <div class="hs_firstname field hs-form-field answers-colors">

                    <input id="{{$alternative->id}}" class="alternative" name="alternative[]"
                            type="checkbox" value="{{$alternative->id}}"
                            @if(in_array($alternative->id, explode(",", $evaluation->selected_alternatives)))
                                checked
                            @endif>

                    <label class="text-center" for="{{ $alternative->id }}">
                        {{$alternative->description}}
                    </label>

                </div>

                @endforeach

            </div>

            <div class="btn-save">
                @if (($num_question + 1) != count($evaluations))
                    <button type="submit" name="next" class="next action-button button-submit" value="Guardar">
                        <i class="fa-solid fa-angles-right"></i>
                    </button>
                @endif
                @if (($num_question + 1) == count($evaluations))
                    <button type="submit" id="submit" class="hs-button primary large action-button next button-submit" value="Finalizar">
                        <i class="fa-solid fa-check"></i>
                    </button>
                @endif
            </div>

        </div>

    </fieldset>

</form>
