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

  operand = output.innerHTML;
};

let makeOperation = (e) => {
  if (operation) {
    operate(e);
    return;
  }
  operation = operand + e.target.innerText;
  operand = null;
  output.innerText = 0;
};

let operate = (e) => {
  output.innerText = eval(operation + operand);
  console.log(output.innerText);
  operation = output.innerText + e.target.innerText;
};

// Adding event listeners to buttons
numbers.forEach((el) => el.addEventListener("click", typeNumber));
operators.forEach((el) => el.addEventListener("click", makeOperation));
operateBtn.addEventListener("click", operate);
clearBtn.addEventListener("click", clearOutput);
