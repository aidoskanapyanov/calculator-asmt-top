let output = document.querySelector(".display-inner");
let clearBtn = document.querySelector(".ac > button");
let operateBtn = document.querySelector(".equals > button");
let numbers = document.querySelectorAll(".num > button");
let operators = document.querySelectorAll(".operator > button");

let firstOperand = null;
let secondOperand = null;
let operation = null;

// clear display output
let clearOutput = () => {
  output.innerText = 0;
};

// type number to display
let typeNumber = (e) => {
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

let setFirstOperand = () => {
  if (!firstOperand) {
    firstOperand = +output.innerText;
  }
};

let chooseOperation = (e) => {
  setFirstOperand();
  clearOutput();
  operation = e.target.innerText;
};

let operate = () => {
  if (!operation) {
    return;
  }
  if (!firstOperand) {
    return;
  }
  secondOperand = +output.innerText;

  switch (operation) {
    case "+":
      output.innerText = add(firstOperand, secondOperand);
      break;
    case "-":
      output.innerText = subtract(firstOperand, secondOperand);
      break;
    case "x":
      output.innerText = multiply(firstOperand, secondOperand);
      break;
    case "÷":
      output.innerText = divide(firstOperand, secondOperand);
      break;
  }
  firstOperand = null;
  setFirstOperand();
};

// Adding event listeners to buttons
numbers.forEach((el) => el.addEventListener("click", typeNumber));
operators.forEach((el) => el.addEventListener("click", chooseOperation));
clearBtn.addEventListener("click", clearOutput);
operateBtn.addEventListener("click", operate);
