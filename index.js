('use strict');

let questionIndex = 0;
let score = 0;

function generateQuestion() {
  console.log('generateQuestionHTML ran');
  console.log(questionIndex);
  if (questionIndex < DATA.length) {
    console.log('testing');
    return `<div class="question-${questionIndex}">
    <h2>${DATA[questionIndex].question}</h2>
      <form>
        <fieldset>
          <label class="answerOption">
            <input type="radio" value="${DATA[questionIndex]
    .answers[0]}" name="answer" required>
            <span>${DATA[questionIndex].answers[0]}</span>
          </label>
          <label class="answerOption">
            <input type="radio" value="${DATA[questionIndex]
    .answers[1]}" name="answer" required>
            <span>${DATA[questionIndex].answers[1]}</span>
          </label>
          <label class="answerOption">
            <input type="radio" value="${DATA[questionIndex]
    .answers[2]}" name="answer" required>
            <span>${DATA[questionIndex].answers[2]}</span>
          </label>
          <label class="answerOption">
            <input type="radio" value="${DATA[questionIndex]
    .answers[3]}" name="answer" required>
            <span>${DATA[questionIndex].answers[3]}</span>
          </label>
          <button type="submit" class="submitButton">Submit</button>
        </fieldset>
      </form>
    </div>`;
  } else {
    renderResults();
    restartQuiz();
    $('.questionIndex').text(20);
  }
}

function changeQuestionNumber() {
  console.log('changeQuestionNumber ran');
  questionIndex++;
  $('.questionIndex').text(questionIndex + 1);
}

function changeScore() {
  console.log('changeScore ran');
  score++;
}

function renderQuestion() {
  console.log('renderQuestion ran');
  $('.startPage').html(generateQuestion());
  userSelectAnswer();
}

function startQuiz() {
  console.log('startQuiz ran');
  $('.startPage').on('click', '.startButton', function(event) {
    console.log('clicked start button, actually started quiz');
    // $('.startPage').remove();
    $('.startButton').css('display', 'none');
    $('.questionIndex').text(1);
    renderQuestion();
  });
}

function userSelectAnswer() {
  console.log('userSelectAnswer ran');
  $('form').on('submit', function(event) {
    event.preventDefault();
    let selected = $('input:checked');
    console.log(selected);
    let answer = selected.val();
    console.log(answer);
    let correctAnswer = `${DATA[questionIndex].correctAnswer}`;
    console.log(correctAnswer);
    if (answer === correctAnswer) {
      console.log('user selected correct answer');
      selected.parent().addClass('correct');
      ifAnswerIsCorrect();
    } else {
      console.log('user selected wrong answer');
      selected.parent().addClass('wrong');
      ifAnswerIsWrong();
    }
  });
}

function ifAnswerIsCorrect() {
  console.log('ifAnswerIsCorrect ran');
  userAnswerFeedbackCorrect();
  updateScore();
}

function ifAnswerIsWrong() {
  console.log('ifAnswerIsWrong ran');
  userAnswerFeedbackWrong();
}

//user feedback for correct answer
function userAnswerFeedbackCorrect() {
  console.log('userAnswerFeedbackCorrect ran');
  let correctAnswer = `${DATA[questionIndex].correctAnswer}`;
  $('.startPage').html(
    `<div class="correctFeedback"><div class="image-container"><img src="${DATA[questionIndex].image}" alt="${DATA[questionIndex].alt}"  /></div><p><b>Correct!</b></p><button type=button class="nextButton">Next</button></div>`
  );
}

//user feedback for incorrect answer
function userAnswerFeedbackWrong() {
  console.log('userAnswerFeedbackWrong ran');
  let correctAnswer = `${DATA[questionIndex].correctAnswer}`;
  let wrongAnswer = `${DATA[questionIndex].wrongAnswer}`;
  $('.startPage').html(
    `<div class="correctFeedback"><div class="image-container"><img src="${wrongAnswer}" alt="${DATA[questionIndex].wrongAlt}"  /></div><p><b>WRONG!</b><br>the correct answer is <span>"${correctAnswer}"</span></p><button type=button class="nextButton">Next</button></div>`
  );
}

function updateScore() {
  console.log('updateScore ran');
  changeScore();
  $('.score').text(score);
}

function renderNextQuestion() {
  console.log('renderNextQuestion ran');
  $('main').on('click', '.nextButton', function(event) {
    changeQuestionNumber();
    renderQuestion();
    // userSelectAnswer();
  });
}

function renderResults() {
  console.log('renderResults ran');
  if (score === 20) {
    $('.startPage')
      .html(`<div class="results correctFeedback"><h3>Perfect Score!!! You are an expert on Toyota!</h3><iframe src="https://giphy.com/embed/ErIP6WHxI6avC" frameBorder="0" class="giphy-embed" allowFullScreen></img><p>You got ${score} / 20 !!!</p>
    <button class="restartButton">Restart Quiz</button></div>`);
  } else if (score <= 19 && score >= 15) {
    $('.startPage')
      .html(`<div class="results correctFeedback"><h3>You must own a Toyota!</h3><iframe src="https://giphy.com/embed/l0G18bMiyWTP0B476" frameBorder="0" class="giphy-embed" allowFullScreen></img><p>You got ${score} / 20</p>
    <button class="restartButton">Restart Quiz</button></div>`);
  } else if (score < 15 && score >= 13) {
    $('.startPage')
      .html(`<div class="results correctFeedback"><h3>You are knowledgeable Toyota!</h3><iframe src="https://giphy.com/embed/3o6Mb6Ye7O1PwDMZZm" frameBorder="0" class="giphy-embed" allowFullScreen></img><p>You got ${score} / 20</p>
    <button class="restartButton">Restart Quiz</button></div>`);
  } else if (score < 13 && score >= 10) {
    $('.startPage')
      .html(`<div class="results correctFeedback"><h3>You know a few things about Toyota.</h3><iframe src="https://giphy.com/embed/xT5LMAAjAekNfa1ewg" frameBorder="0" class="giphy-embed" allowFullScreen></img><p>You got ${score} / 20</p>
    <button class="restartButton">Restart Quiz</button></div>`);
  } else {
    $('.startPage')
      .html(`<div class="results correctFeedback"><h3>You know nothing about Toyota! Keep Trucking!</h3><div position:relative;"><iframe src="https://giphy.com/embed/vwa3O4PQO1HNu" frameBorder="0" class="giphy-embed" allowFullScreen></img></div><p>You got ${score} / 20</p>
    <button class="restartButton">Restart Quiz</button></div>`);
  }
}

function restartQuiz() {
  console.log('restartQuiz ran');
  $('main').on('click', '.restartButton', function(event) {
    location.reload();
  });
}

function createQuiz() {
  console.log('createQuiz ran');
  startQuiz();
  // renderQuestion();
  // userSelectAnswer();
  renderNextQuestion();
}

$(createQuiz);
