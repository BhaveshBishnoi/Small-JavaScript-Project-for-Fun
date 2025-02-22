let subject1 = document.getElementById("subject1");
let subject2 = document.getElementById("subject2");
let subject3 = document.getElementById("subject3");
let subject4 = document.getElementById("subject4");
let subject5 = document.getElementById("subject5");
let calculate = document.getElementById("calculate");
let result = document.querySelector(".result");
let result2 = document.getElementById('result2')
let myMarks = [subject1, subject2, subject3, subject4, subject5];

let calculateGrade = (e) => {
  myMarks.filter((e) => {
    if (e.value < 0) {
      alert("Please Enter a valid number");
    } else if (e.value > 100) {
      alert("Enter your Exact Marks out of 100");
    } else {
      let sum =
        parseInt(subject1.value) +
        parseInt(subject2.value) +
        parseInt(subject3.value) +
        parseInt(subject4.value) +
        parseInt(subject5.value);
      let score = (sum / 500) * 100;
      result.textContent = `You will get ${score.toFixed(2)}% Persentage`;
      let cgpa = score / 9.5;
      result2.textContent = `Your CGPA is ${cgpa.toFixed(2)}`
    }
  });
};
calculate.addEventListener("click", calculateGrade);
