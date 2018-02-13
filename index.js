'use strict';

const STORE = {
  questionIndex: null,
  userAnswers: []
};

function renderQuestion() {
  const currentQuestion = QUESTIONS[STORE.questionIndex];
  const questionHtml = generateQuestionHTML(currentQuestion);

 $('#Questions').html(questionHtml);
  $('#Questions').show();
}

function render() {
  if (STORE.questionIndex === null && STORE.userAnswers.length === 0) {
    // only show the intro
    $('.container').show();
    $('#Questions').hide();
  } else if (STORE.questionIndex <20) {
    // show question with answer choices, no feedback yet
    $('.container').hide();
    renderQuestion();
    handleSubmitAnswer();
  } else if (STORE.questionIndex > STORE.userAnswers.length) {
    // show question with feedback on user selection
    console.log('FEEDBACK')
  } else {
    // show the outro
    $('#Questions').hide();
    console.log('THE END')
  }
}

function getScore() {
  let score = 0;

  for (let i = 0 ; i < QUESTIONS.length; i++) {
    const question = QUESTIONS[i];
    const userAnswer = STORE.userAnswers[i];
    if (question.correctAnswer === userAnswer) {
      score++;
    }
  }
  return score;
}

function generateQuestionHTML(currentQuestion){
  let possibleAnswers = currentQuestion.answers.map(function(val, index){
    return `<div>
              <input type="radio" name="answers" value="${val}" data-index-attr="${index}" />
              <span class="possible-answers">${val}</span>
            </div>`;
  });
  possibleAnswers = possibleAnswers.join('');
  let content = `
    <div class="question-container">
      <h2 class="question-title">
        ${currentQuestion.question}
      </h2>
      <div id="answers-options">
        <form>
          <fieldset>
            ${possibleAnswers}
            <button id="submitQuestion" type="button">:: NEXT ::</button>
          </fieldset>
        </form>
      </div>
    </div>
  `;
  return content;
}

getScore();

function handleSubmitAnswer() {
  $('#submitQuestion').on('click', function(){
    STORE.userAnswers.push($('input[name=answers]:checked').val());
    STORE.questionIndex++;
    console.log($('input[name=answers]:checked').val());
    console.log(STORE.questionIndex, STORE.userAnswers);
    if(!(STORE.questionIndex > STORE.userAnswers.length)){
      render();
    }
    else {
      console.log('CALL FEEDBACK & END SCREEN')
    }
  });
}



function handleStartQuiz() {
  $('#startButton').on('click', function(){
    // change the store
    STORE.questionIndex = 0;
    render();
  })
}


$(function(){
  handleStartQuiz();
});