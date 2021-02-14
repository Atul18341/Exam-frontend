const questionDb = [
  {
    question: "1) Find the number of prime factors of 180",
    a: "20",
    b: "18",
    c: "15",
    d: "25",
    ans: "ans2",
  },
  {
    question: "2) What is 2 + 2",
    a: "2",
    b: "5",
    c: "4",
    d: "25",
    ans: "ans3",
  },
  {
    question: "3) What is full form of JS",
    a: "JavaScript",
    b: "JavaString",
    c: "Jstrong",
    d: "JString",
    ans: "ans1",
  },
  {
    question: "4) What is your Name",
    a: "Shivam",
    b: "Yash",
    c: "Atul",
    d: "Not a releavent question",
    ans: "ans4",
  },
];
const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");
const answers = document.querySelectorAll(".answers");
const scoresec = document.querySelector('#score');

let questionCount = 0;
let score = 0;

const loadQuestions = () => {
  const questionList = questionDb[questionCount];
  question.innerHTML = questionList.question;
  option1.innerHTML = questionList.a;
  option2.innerHTML = questionList.b;
  option3.innerHTML = questionList.c;
  option4.innerHTML = questionList.d;
};
loadQuestions();
const getAnswer = () => {
  let answer;
  answers.forEach((ans) => {
    if (ans.checked) {
      answer = ans.id;
    }
  });
  return answer;
};
const dissellectAll = () =>{
    answers.forEach((ans)=>{
        ans.checked = false;
    })
}
submit.addEventListener("click", () => {
  const answerClicked = getAnswer();
  // console.log(answerClicked);
  if (answerClicked === questionDb[questionCount].ans) {
    score++;
  }
  questionCount++;
  dissellectAll();
  if (questionCount < questionDb.length) {
    loadQuestions();
  }else{
      scoresec.innerHTML= `<h3> You scored ${score}/${questionDb.length} in the test</h3>
      <button class='btn' onclick='location.reload()'> Resatart </button>
      `;
      scoresec.classList.remove('scorePart');
  }
});
