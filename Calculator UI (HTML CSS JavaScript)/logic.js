let btns = document.querySelectorAll("button");
let string = "";
var output = document.querySelector("input");
btns.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.textContent === "=") {
      string = eval(string);
      output.value = string;
    } else if (e.target.textContent === "AC") {
      string = "";
      output.value = string;
    } else if (e.target.textContent === "DEL") {
       string = string.substring(0, string.length - 1);
        output.value = string;
    } else {
      string += e.target.textContent;
      output.value = string;
    }
  });
});
