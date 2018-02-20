'use strict';

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
            <input type="radio" value="${DATA[questionIndex].answers[0]}" name="answer" required>
            <span>${DATA[questionIndex].answers[0]}</span>
          </label>
          <label class="answerOption">
            <input type="radio" value="${DATA[questionIndex].answers[1]}" name="answer" required>
            <span>${DATA[questionIndex].answers[1]}</span>
          </label>
          <label class="answerOption">
            <input type="radio" value="${DATA[questionIndex].answers[2]}" name="answer" required>
            <span>${DATA[questionIndex].answers[2]}</span>
          </label>
          <label class="answerOption">
            <input type="radio" value="${DATA[questionIndex].answers[3]}" name="answer" required>
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
  questionIndex ++;
  $('.questionIndex').text(questionIndex+1);
}

function changeScore() {
  console.log('changeScore ran');
  score ++;
}

function renderQuestion() {
  console.log('renderQuestion ran');
  $('.startPage').html(generateQuestion());
  userSelectAnswer();
}

function startQuiz() {
  console.log('startQuiz ran');
  $('.startPage').on('click', '.startButton', function(event) {
    console.log('actually started quiz');
    // $('.startPage').remove();
    $('.startButton').css('display', 'none');
    $('.questionIndex').text(1);
    renderQuestion();
  });
}



function userSelectAnswer() {
  console.log('userSelectAnswer ran');
  $('form').on('submit', function (event) {
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

function userAnswerFeedbackCorrect() {
  console.log('userAnswerFeedbackCorrect ran');
  let correctAnswer = `${DATA[questionIndex].correctAnswer}`;
  $('.startPage').html('<div class="correctFeedback"><div><div><iframe src="https://giphy.com/embed/l1IYc7ads36IEj2aA" width="640" height="480" frameBorder="0" class="giphy-embed"></iframe></div><p><b>Correct!</b></p><button type=button class="nextButton">Next</button></div>');
}

function userAnswerFeedbackWrong() {
  console.log('userAnswerFeedbackWrong ran');
  let correctAnswer = `${DATA[questionIndex].correctAnswer}`;
  $('.startPage').html(`<div class="correctFeedback"><div class="icon"><img src="http://moejackson.com/wp-content/uploads/2012/07/crash_556x3131.jpg" /></div><p><b>WRONG!</b><br>the correct answer is <span>"${correctAnswer}"</span></p><button type=button class="nextButton">Next</button></div>`);
}

function updateScore() {
  console.log('updateScore ran');
  changeScore();
  $('.score').text(score);
}

function renderNextQuestion() {
  console.log('renderNextQuestion ran');
  $('main').on('click', '.nextButton', function (event) {
    changeQuestionNumber();
    renderQuestion();
    // userSelectAnswer();
  });
}

function renderResults() {
  console.log('renderResults ran');
  if (score === 20) {
    $('.startPage').html(`<div class="results correctFeedback"><h3>Perfect Score!!! You are an expert on Toyota!</h3><iframe src="https://giphy.com/embed/ErIP6WHxI6avC" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p>You got ${score} / 20 !!!</p>
    <button class="restartButton">Restart Quiz</button></div>`);
  } else if (score <= 19 && score >= 15) {
    $('.startPage').html(`<div class="results correctFeedback"><h3>You must own a Toyota!</h3><iframe src="https://giphy.com/embed/l0G18bMiyWTP0B476" width="480" height="356" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p>You got ${score} / 20</p>
    <button class="restartButton">Restart Quiz</button></div>`);
  } else if (score < 15 && score >= 13) {
    $('.startPage').html(`<div class="results correctFeedback"><h3>You are knowledgeable Toyota!</h3><iframe src="https://giphy.com/embed/3o6Mb6Ye7O1PwDMZZm" width="480" height="364" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p>You got ${score} / 20</p>
    <button class="restartButton">Restart Quiz</button></div>`);
  } else if (score < 13 && score >= 10) {
    $('.startPage').html(`<div class="results correctFeedback"><h3>You know a few things about Toyota.</h3><iframe src="https://giphy.com/embed/xT5LMAAjAekNfa1ewg" width="480" height="364" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p>You got ${score} / 20</p>
    <button class="restartButton">Restart Quiz</button></div>`);
  } else {
    $('.startPage').html(`<div class="results correctFeedback"><h3>You know nothing about Toyota!</h3><div position:relative;"><iframe src="https://giphy.com/embed/vwa3O4PQO1HNu" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p>You got ${score} / 20</p>
    <button class="restartButton">Restart Quiz</button></div>`);
  }
}

function restartQuiz() {
  console.log('restartQuiz ran');
  $('main').on('click', '.restartButton', function (event) {
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

// //manages data being imported
// const DATA = {
//   questionIndex: null,
//   userAnswers: []
// };

// //
// function renderQuestion() {
//   const currentQuestion = DATA[DATA.questionIndex];
//   const questionHtml = generateQuestionHTML(currentQuestion);

//   $('#questionsForm').html(questionHtml);
//   $('#questionsForm').show();
// }


// function render() {
//   if (DATA.questionIndex === null && DATA.userAnswers.length === 0) {
//     // only show the intro
//     $('.startPage').show();
//     $('#questionsForm').hide();
//   } else if (DATA.questionIndex <20) {
//     // show question with answer choices, no feedback yet
//     $('.startPage').hide();
//     renderQuestion();
//     handleSubmitAnswer();
//   } else if (DATA.questionIndex > DATA.userAnswers.length) {
//     // show question with feedback on user selection
//     console.log('FEEDBACK');
//   } else {
//     // show the outro
//     $('#questionsForm').hide();
//     console.log('THE END');
//   }
// }

// //checks answer and increments score
// function getScore() {
//   let score = 0;

//   for (let i = 0 ; i < DATA.length; i++) {
//     const question = DATA[i];
//     const userAnswer = DATA.userAnswers[i];
//     if (question.correctAnswer === userAnswer) {
//       score++;
//     }
//   }
//   return score;
// }

// //generate question html
// function generateQuestionHTML(currentQuestion){
//   let possibleAnswers = currentQuestion.answers.map(function(val, index){
//     return `<div>
//               <input type="radio" name="answers" value="${val}" data-index-attr="${index}" />
//               <span class="possible-answers">${val}</span>
//             </div>`;
//   });
//   possibleAnswers = possibleAnswers.join('');
//   let content = `
//     <div class="question-startPage">
//       <h2 class="question-title">
//         ${currentQuestion.question}
//       </h2>
//       <div id="answers-options">
//         <form>
//           <fieldset>
//             ${possibleAnswers}
//             <button id="submitQuestion" type="button">:: NEXT ::</button>
//           </fieldset>
//         </form>
//       </div>
//     </div>
//   `;
//   return content;
// }

// getScore();


// function handleSubmitAnswer() {
//   $('#submitQuestion').on('click', function(){
//     DATA.userAnswers.push($('input[name=answers]:checked').val());
//     DATA.questionIndex++;
//     console.log($('input[name=answers]:checked').val());
//     console.log(DATA.questionIndex, DATA.userAnswers);
//     if(!(DATA.questionIndex > DATA.userAnswers.length)){
//       render();
//     }
//     else {
//       console.log('CALL FEEDBACK & END SCREEN')
//     }
//   });
// }



// function handleStartQuiz() {
//   $('#startButton').on('click', function(){
//     // change the store
//     DATA.questionIndex = 0;
//     render();
//   })
// }


// $(function(){
//   handleStartQuiz();
// });