let output = document.querySelector(".display-inner");
let clearBtn = document.querySelector(".ac > button");
let operateBtn = document.querySelector(".equals > button");
let numbers = document.querySelectorAll(".num > button");
let operators = document.querySelectorAll(".operator > button");
let previouslyClicked = null;

let operand = null;
let operation = null;

// clear display output
let clearOutput = (e) => {
  previouslyClicked = e.target;
  output.innerText = 0;
};

// type number to display
let typeNumber = (e) => {
  previouslyClicked = e.target;

  if (output.innerHTML.length == 8) {
    return;
  }

  if (output.innerHTML == 0) {
    output.innerHTML = e.target.innerHTML;
  } else {
    output.innerHTML += e.target.innerHTML;
  }
};

let add = (num1, num2) => {
  return num1 + num2;
};
let subtract = (num1, num2) => {
  return num1 - num2;
};
let multiply = (num1, num2) => {
  return num1 * num2;
};
let divide = (num1, num2) => {
  return num1 / num2;
};

// Adding event listeners to buttons
numbers.forEach((el) => el.addEventListener("click", typeNumber));
clearBtn.addEventListener("click", clearOutput);
