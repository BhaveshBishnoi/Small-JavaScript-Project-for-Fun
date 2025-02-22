const Quiz = [
  {
    question:
      "Best Programing language that use for web and android development?",
    opt1: "Java",
    opt2: "PHP",
    opt3: "Python",
    opt4: "ReactJs",
    Answer: "ReactJs",
  },
  {
    question: "Programing language that use for Machine Learning?",
    opt1: "Java",
    opt2: "PHP",
    opt3: "Python",
    opt4: "ReactJs",
    Answer: "Python",
  },
  {
    question: "Programing language that Mostly use for Software development?",
    opt1: "Java",
    opt2: "PHP",
    opt3: "Python",
    opt4: "ReactJs",
    Answer: "Java",
  },
  {
    question: "Who is the President of US?",
    opt1: "Joe Biden",
    opt2: "Donald Trump",
    opt3: "Barack Obama",
    opt4: "George Bush",
    Answer: "Joe Biden",
  },
  {
    question: "What is the most used programming language in 2023?",
    opt1: "Java",
    opt2: "C",
    opt3: "Python",
    opt4: "JavaScript",
    Answer: "JavaScript",
  },
];
var Ques = document.getElementById("ques");
var opt_a = document.getElementById("opt-a");
var opt_b = document.getElementById("opt-b");
var opt_c = document.getElementById("opt-c");
var opt_d = document.getElementById("opt-d");
var btn = document.getElementById("btn");

var currentQuestion = 0;
var score = 0;

Ques.textContent = Quiz[currentQuestion].question;
opt_a.textContent = Quiz[currentQuestion].opt1;
opt_b.textContent = Quiz[currentQuestion].opt2;
opt_c.textContent = Quiz[currentQuestion].opt3;
opt_d.textContent = Quiz[currentQuestion].opt4;

btn.addEventListener("click", () => {
  let checkedAns = document.querySelector(`input[type="radio"]:checked`);
  
  if (checkedAns === null) {
    alert("Please Select an Answer!!");
  } else {
    if (
      checkedAns.nextElementSibling.textContent === Quiz[currentQuestion].Answer
    ) {
      score++;
    }
    currentQuestion++;
    if (currentQuestion < Quiz.length) {
      Ques.textContent = Quiz[currentQuestion].question;
      opt_a.textContent = Quiz[currentQuestion].opt1;
      opt_b.textContent = Quiz[currentQuestion].opt2;
      opt_c.textContent = Quiz[currentQuestion].opt3;
      opt_d.textContent = Quiz[currentQuestion].opt4;
      checkedAns.checked = false;
    }
    else{
        alert("Your Score is " + score + " out of " + Quiz.length);
    }
  }
});
