//variables to track question number and score.
let questionNumber = 0;
let score = 0;

//displays the current question and score.
let displayScore = () => $('.score-message').html(getScoreTemplate());

//Displays result and clears score .
let endQuiz = () => {
  $('.score-message').html("");
  $('main').html(getResultPageTemplate());
};

//Displays question.
let displayQuestion = () => {
  //$('main').empty();
  if(questionNumber < CATALOG.length) {
    $('main').html(getQuestionTemplate());
  } else {
    endQuiz();
  }
};

//Handle for quiz start button.
let handleStartButton = () => {
  $('body').on('click','.js-start-button', function(event) {
    event.preventDefault();
    displayScore();
    displayQuestion();
  });
};

//Functions when the user selected answer is correct.
let answerIsCorrect = () => {
  score++;
  displayScore();
  $('.question-page').html(getCorrectFeedBackTemplate());
};

//Functions when the user selected answer is wrong.
let answerIsWrong = () => $('.question-page').html(getWrongFeedBackTemplate());


//Validates the user selected answer with the correct answer.
let validateAnswer = (selectedAnswer, correctAnswer) => {
  $('.question-page').empty();
  if (selectedAnswer === correctAnswer) {
      answerIsCorrect();
    } else {
      answerIsWrong();
    }
};

//handles when a submit button is clicked after selecing the answer.
let handleAnswerSubmit = () => {
  $('body').on('submit','form', event => {
    event.preventDefault();
    const selectedAnswer = $('input[type=radio]:checked').val();
    const correctAnswer = `${CATALOG[questionNumber].answer}`;
    
    validateAnswer(selectedAnswer, correctAnswer);
    
  });
};

//Handle for next button - to move to next question.
let handleNextButton = () => {
  $('body').on('click','.js-next-button', e => {
    questionNumber++;
    displayScore();
    displayQuestion();
  });
};

//To play the game again.
let playNewGame = () => {
  $('body').on('click','.js-play-again', e => {
    location.reload();
  });
};

//Begin
const handleQuizPage = () => {
  handleStartButton();
  handleAnswerSubmit();
  handleNextButton();
  playNewGame();
};

