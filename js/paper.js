(function(){
  function buildQuiz(){

    const output = [];

    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        const answers = [];

        for(letter in currentQuestion.answers){

          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );
    quizContainer.innerHTML = output.join('');
  }

  function showResults(){

    const answerContainers = quizContainer.querySelectorAll('.answers');

    let numCorrect = 0;

    myQuestions.forEach( (currentQuestion, questionNumber) => {

      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      if(userAnswer === currentQuestion.correctAnswer){
        numCorrect++;

        answerContainers[questionNumber].style.color = 'green';
      }

      else{
        answerContainers[questionNumber].style.color = 'red';
      }
    });

    resultsContainer.innerHTML = `You scored ${numCorrect} out of ${myQuestions.length} in the quiz👏`;
  }

  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [
    {
      question: " 1>> Find the numbers of prime factors of the number 180?",
      answers: {
        a: "20",
        b: "18",
        c: "15",
        d:'25'
      },
      correctAnswer: "b"
    },
    {
      question: " 2>> Which one of these is a JavaScript package manager?",
      answers: {
        a: "Node.js",
        b: "TypeScript",
        c: "npm",
        d: "nodescript"
      },
      correctAnswer: "c"
    },
    {
      question: "3>> What is your name?",
      answers: {
        a: "Yash",
        b: "Atul",
        c: "Shivam",
        d: "Not a releavent question"
      },
      correctAnswer: "d"
    }
  ];

  buildQuiz();
  submitButton.addEventListener('click', showResults);
})();