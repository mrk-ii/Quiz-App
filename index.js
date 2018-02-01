'use strict';

const QUESTIONS = [
  {
    question: 'What did Toyota produce before maufacturing automobiles?',
    answers: ['Paper', 'Tools', 'Sewing Machines', 'Weapons' ],
    correctAnswer: 'Sewing Machines'
  },
  {
    question: 'What year did Toyota manufacture it’s first passenger vehicle?',
    answers: ['1911', '1935', '1986', '1945' ],
    correctAnswer: '1935'
  },
  {
    question: 'What was the model name of the first passenger vehicle Toyota produced?',
    answers: ['Corolla', 'Ichi', 'Prius', 'Model A1' ],
    correctAnswer: 'Model A1'
  },
  {
    question: 'What was the model name of the first truck Toyota ever produced?',
    answers: ['Model A2', 'Model G1', 'Model T', 'Tacoma' ],
    correctAnswer: 'Model G1'
  },
  {
    question: 'What model Toyota automobile is the best-selling nameplate in the world?',
    answers: ['Prius', 'Echo', 'Corolla', 'Camry' ],
    correctAnswer: 'Corolla'
  },
  {
    question: 'How many Corollas have been produced?',
    answers: ['more than 40 million', 'more than 100 million', 'more than 200 million', 'more than 500 million' ],
    correctAnswer: 'more than 40 million'
  },
  {
    question: 'The Passionate Pursuit of Potential” is the slogan for what division of Toyota?',
    answers: ['Acura', 'Infiniti', 'TRD', 'Lexus' ],
    correctAnswer: 'Lexus'
  },
  {
    question: 'What year was the Lexus division created?',
    answers: ['1940', '1970', '1983', '1990' ],
    correctAnswer: '1983'
  },
  {
    question: 'Toyota is the largest company in Japan.  How does it rank against the world’s other largest automotive manufacturers?',
    answers: ['First largest manufacturer', 'Second largest manufacturer', 'Third largest manufacturer', 'Four largest manufacturer' ],
    correctAnswer: 'Second largest manufacturer'
  },
  {
    question: 'On average, how many vehicles does Toyota produce per year?',
    answers: ['1,000,000', '2,000,000', '3,000,000', 'more than 5,000,000' ],
    correctAnswer: 'more than 5,000,000'
  },
  {
    question: 'What year did Toyota start participating in Formula-1?',
    answers: ['1977', '1982', '1996', '2002' ],
    correctAnswer: '2002'
  },
  {
    question: 'What brands are currently owned by Toyota?',
    answers: ['Citroen, Peugeot, Mazda', 'Honda, Acura, Mugen', 'Nismo, Nissan, Infiniti', 'Lexus, Scion, Daihatsu, Hino Motors, Subaru, Isuzu' ],
    correctAnswer: 'Lexus, Scion, Daihatsu, Hino Motors, Subaru, Isuzu'
  },
  {
    question: 'What year did Toyota produce it’s 100-millionth vehicle?',
    answers: ['1990', '1999', '2004', '2015' ],
    correctAnswer: '1999'
  },
  {
    question: 'In 1951, the Japanese car manufacturer launched a series of four-wheel-drive vehicles which became Toyota’s longest running series. What its the name of this series?',
    answers: ['Tacoma', '4Runner', 'Land Cruiser', 'Highlander' ],
    correctAnswer: 'Land Cruiser'
  },
  {
    question: 'What is the biggest SUV built by Toyota?',
    answers: ['Land Cruiser', 'Mega Cruiser', '4Runner', 'Sequoia' ],
    correctAnswer: 'Mega Cruiser'
  },
  {
    question: 'In 2012, what vehicle was used to tow the Atlantis Space Shuttle to it’s final destination?',
    answers: ['Toyota Tundra', 'Toyota Tacoma', 'Toyota 4Runner', 'Toyota Mega Cruiser' ],
    correctAnswer: 'Toyota Tundra'
  },
  {
    question: 'In 1970, Toyota released their first mass-produced sports car. This model sports car participated in the World Rally Championship and won many times. What is the name of this particular model?',
    answers: ['Toyota Celica', 'Toyota Supra', 'Toyota MR2', 'Toyota Corolla' ],
    correctAnswer: 'Toyota Celica'
  },
  {
    question: 'Toyota ended production of the Celica after producing it’s seventh generation.  What year did Toyota end the production of the Celica?',
    answers: ['2000', '2006', '2010', '2012' ],
    correctAnswer: '2006'
  },
  {
    question: 'What Toyota produced Hybrid-vehicle holds the record for being the best-selling hybrid car in the world?',
    answers: ['Toyota Rav4', 'Toyota Corolla', 'Toyota Echo', 'Toyota Prius' ],
    correctAnswer: 'Toyota Prius'
  },
  {
    question: 'How many Priuses have been sold?',
    answers: ['3 million', 'Over 4 million', '10 million', '100 million' ],
    correctAnswer: 'Over 4 million'
  }

];

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
        ${possibleAnswers}
        <button id="submitQuestion" type="button">:: NEXT ::</button>
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
  })
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

