@extends('aula.common.layouts.masterpage')

@section('content')

<div class="content global-container quiz">

    <div class="quiz-container quiz col-12">

        <div class="card quiz z-index-2">

            @php

            $evaluation = $evaluations[$num_question];
            $evaluation_time = $evaluation->evaluation_time;
            $diff_time = ($evaluation_time + ($exam->exam_time * 60)) - time();
            $type_id = $question->question_type_id;

            @endphp

            @if(!is_null($exam))

            <div class="info">

                <h3> {{$certification->event->specCourse->title}} </h3>

                <div class="timer-container">
                    <i class="fa-regular fa-clock fa-spin fa-lg"></i> &nbsp;
                    <span class="timer"> </span>
                </div>

            </div>

            <input type="hidden" name="examId" value="{{$exam->id}}">

            <ul id="progressbar" class="width-progress" style="--progressWidth: {{count($evaluations)}}">

                @foreach($evaluations as $key => $eval)

                @if($selected_answers >= $key)

                <a href="{{route('aula.course.quiz.show', [$certification, "num_question"=>$key+1])}}">
                    <li class="{{$key <= $num_question ? 'active' : ''}} progress-btn"
                        style="--progressWidth: {{ count($evaluations) }}">

                    </li>
                </a>

                @else

                <li class="{{$key <= $num_question ? 'active' : ''}} progress-btn"
                    style="--progressWidth: {{ count($evaluations) }}">

                </li>

                @endif

                @endforeach

            </ul>

            @if ($type_id == 1 || $type_id == 3)
            @include('aula.viewParticipant.courses.evaluations.types.unique_answer',
            [
                "route" => route('aula.specCourses.evaluations.quiz.show', [$certification, ($num_question)]),
                "routeUpdate" => route('aula.specCourses.evaluations.quiz.update', [$certification, $exam, ($num_question+1), $key+1, $evaluation->id])
            ])
            @elseif ($type_id == 2)
            @include('aula.viewParticipant.courses.evaluations.types.multiple_answers',
            [
                "route" => route('aula.specCourses.evaluations.quiz.show', [$certification, ($num_question)]),
                "routeUpdate" => route('aula.specCourses.evaluations.quiz.update', [$certification, $exam, ($num_question+1), $key+1, $evaluation->id])
            ])
            @elseif ($type_id == 4)
            @include('aula.viewParticipant.courses.evaluations.types.fill_in_the_blank',
            [
                "route" => route('aula.specCourses.evaluations.quiz.show', [$certification, ($num_question)]),
                "routeUpdate" => route('aula.specCourses.evaluations.quiz.update', [$certification, $exam, ($num_question+1), $key+1, $evaluation->id])
            ])
            @elseif ($type_id == 5)
            @include('aula.viewParticipant.courses.evaluations.types.matching',
            [
                "route" => route('aula.specCourses.evaluations.quiz.show', [$certification, ($num_question)]),
                "routeUpdate" => route('aula.specCourses.evaluations.quiz.update', [$certification, $exam, ($num_question+1), $key+1, $evaluation->id])
            ])
            @endif

            <script>
                const timer = document.querySelector('.timer');
                    let diff = @json($diff_time);

                    function showTime()
                    {
                        let minutes = Math.floor((diff / 60));
                        let seconds = Math.floor((diff % 60));

                        timer.innerHTML=
                        minutes + " minutos " + seconds + " segundos";
                    }

                    function showRemaining(){
                        diff = diff - 1;
                        if(diff < 0)
                        {
                            clearInterval(clock);
                            timer.innerHTML = "SE ACABÓ EL TIEMPO";
                            return;
                        }

                        showTime();
                    }

                    showTime();

                    let clock;
                    clock = setInterval(showRemaining, 1000);

            </script>
            @endif

        </div>

    </div>

</div>

@endsection
