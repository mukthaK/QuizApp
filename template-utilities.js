 //To store question, choices and correct answer
const CATALOG = [
  { 
    question: 'The word ‘chocolate’ originates from the word ‘xocolātl’ which means what?', 
    choices: [
      'Bitter seed', 
      'Bitter plant', 
      'Bitter earth', 
      'Bitter water'
    ], 
    answer: 'Bitter water' 
  },
  { 
    question: 'Which type of chocolate is considered good for your health?',
    choices: [
      'Dark', 
      'Milk',
      'Semisweet',
      'White'
    ], 
    answer: 'Dark'
  },
  { 
    question: 'Which Cadbury’s brand of chocolate had the famous slogan ‘A glass and a half in every half pound’?' ,
    choices: [
      'Milk Tray',
      'Dairy Milk',
      'Eclairs', 
      'Bournville'
    ], 
    answer: 'Dairy Milk' 
  },
  { 
    question: 'Which chocolate bar is famous for its fingers?',
    choices: [
      'Crunchie',
      'Pinky',
      'Double Decker',
      'Kit Kat'
    ], 
    answer: 'Kit Kat'
  },
  { 
    question: 'About how many beans does an average cocoa pod contain?',
    choices: [
      '1',
      '10-20',
      '30-40',
      'Over 50'
    ], 
    answer: '30-40'
  },
  {
    question: 'What type of chocolate was Nestlé the first, in 1930, to manufacture? ',
    choices: [
      'Truffels',
      'White chocolate',
      'Nestle crunch bars',
      'Milk chocolate'
    ],
    answer: 'White chocolate'
  },
  {
    question: 'How many chocolate bars would you need to eat to get the amount of caffeine in a cup of coffee?',
    choices: [
      'Fourteen',
      'Eight',
      'Two',
      'One'
    ],
    answer: 'Fourteen'
  },
  {
    question:'Which of these describe the exact chronological order, in the production stages of a chocolate?',
    choices: [
      'Processing, Blending, Conching, Tempering, Storage',
      'Blending, Processing, Conching, Tempering, Storage', 
      'Conching, Tempering, Processing, Blending, Storage', 
      'Tempering, Conching, Blending, Storage, Processing'
    ],
    answer: 'Processing, Blending, Conching, Tempering, Storage'
  },
  {
    question:'Which of these processes is carried out for glossing and coating a chocolate during the production process?',
    choices:[
      'Tempering',
      'Storage', 
      'Conching',
      'Blending'
    ],
    answer: 'Tempering'
  },
  {
    question: 'The presence of this element, extracted from cocoa plant, makes chocolate good for combating heart diseases. What is this element?',
    choices: [
      'Flavonoids',
      'Sodium', 
      'Vitamin D', 
      'Magnesium'
    ],
    answer: 'Flavonoids'
  }
];

// Template for question.
function getQuestionTemplate() {
 return `<div class="question-page">  
          <h2>${CATALOG[questionNumber].question}</h2>
          <form role="form" class="question-form">
              <fieldset>
           
                <label for="answeChoice0" class="answer-options"><input id="answeChoice0" type="radio" name="option" value="${CATALOG[questionNumber].choices[0]}" required>${CATALOG[questionNumber].choices[0]}</label>

                <label for="answeChoice1" class="answer-options"><input id="answeChoice1" type="radio" name="option" value="${CATALOG[questionNumber].choices[1]}" required>${CATALOG[questionNumber].choices[1]}</label>
        
                <label for="answeChoice2" class="answer-options"><input id="answeChoice2" type="radio" name="option" value="${CATALOG[questionNumber].choices[2]}" required>${CATALOG[questionNumber].choices[2]}</label>
      
                <label for="answeChoice3" class="answer-options"><input id="answeChoice3" type="radio" name="option" value="${CATALOG[questionNumber].choices[3]}" required>${CATALOG[questionNumber].choices[3]}</label>
                
                <button type="submit" class="submit-button buttons">Submit</button>
               
              </fieldset>
          </form>
        </div>`; 
}

//Template to display current question and the score.
let getScoreTemplate= () => {
  return `<ul>
          <li>Question: ${questionNumber + 1}/10</li>
          <li>Score: ${score}</li>
        </ul>`;
};

//Template for correct answer submission.
let getCorrectFeedBackTemplate = () => {
  return `<div class="feedback-page">
            <h2>Correct answer!</h2>
            <button type="button" class="nextButton js-next-button buttons">Next</button>
          </div>`;
};

//Template for wrong answer submission.
let getWrongFeedBackTemplate = () => {
  return `<div class="feedback-page">
            <h2><span>Oh no! Wrong answer.</span><span>Correct answer is: </span><span>${CATALOG[questionNumber].answer}</span></h2>
            <button type="button" class="nextButton js-next-button buttons">Next</button>
          </div>`;
};

//Template for the final quiz result and an option to restart quiz.
let getResultPageTemplate = () => {
  return `<div class="result-page">
            <h2>Your score is <span>${score}</span></h2>
            <button type="button" class="play-again js-play-again buttons">Play Again</button>
          </div>`;
};
