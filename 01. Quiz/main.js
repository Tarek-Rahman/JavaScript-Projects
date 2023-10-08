const questions = [
  {
    question: 'Who is the number 1 billioniar in the world right now?',
    answers: [
      { text: 'Elon Musk', checkAnswer: 'true' },
      { text: 'Bill Gates', checkAnswer: 'false' },
      { text: 'Tarek Rahman', checkAnswer: 'false' },
      { text: 'Sheikh Hasina', checkAnswer: 'false' },
    ]
  },
  {
    question: 'Which one is small country?',
    answers: [
      { text: 'India', checkAnswer: 'false' },
      { text: 'Bangladesh', checkAnswer: 'true' },
      { text: 'China', checkAnswer: 'false' },
      { text: 'Indonesia', checkAnswer: 'false' },
    ]
  },
  {
    question: 'Who is the most funniest president?',
    answers: [
      { text: 'Norendro Modi', checkAnswer: 'false' },
      { text: 'Abraham Linkon', checkAnswer: 'false' },
      { text: 'Donal Trump', checkAnswer: 'true' },
      { text: 'Sheikh Mujib', checkAnswer: 'false' },
    ]
  },
];



const question = document.getElementById( 'question' );
const answers = document.getElementById( 'answers' );
const nextbtn = document.getElementById( 'next' );


let score = 0;
let currentIndex = 0;

function startQuiz (){
  score = 0;
  currentIndex = 0;
  showQuiz();
}

function resetQuiz ()
{
  nextbtn.style.display = 'none';
  while ( answers.firstChild )
  {
    answers.removeChild( answers.firstChild );
  }
}


function showQuiz ()
{
  resetQuiz();
  const currentQuestion = questions[currentIndex];
  question.textContent = `${currentIndex + 1}. ${currentQuestion.question}`;

  currentQuestion.answers.forEach( (answer) =>
  {
    const button = document.createElement( 'button' );
    button.textContent = answer.text;
    button.setAttribute( 'class', 'btn' );
    answers.appendChild( button );

    if ( answer.checkAnswer )
    {
      button.dataset.correct = answer.checkAnswer;
    }
    button.addEventListener( 'click', selectAnswer );
  } )
  
}



function selectAnswer (e)
{
  const isCorrect = e.target.dataset.correct === 'true';

  if ( isCorrect )  {
    e.target.classList.add( 'correct' );
    score++;
  } else  {
    e.target.classList.add( 'incorrect' );
  }

  Array.from( answers.children ).forEach( button =>  {     button.dataset.correct === 'true' && button.classList.add( 'correct' )
     button.disabled = true;
  })
  
  nextbtn.style.display = 'block'
  
}



function handleNextButton (){
  currentIndex++;
  currentIndex < questions.length ? showQuiz() : showScore();
  
}

function showScore (){
  resetQuiz();
  question.textContent = `You're ${score} out of ${questions.length}`;
  nextbtn.textContent = 'Play Again!'
  nextbtn.style.display = 'block'

}



nextbtn.addEventListener( 'click', () =>
  currentIndex < questions.length ? handleNextButton() : startQuiz()
)


startQuiz();
