let output = document.querySelector(".display-inner");
let clearBtn = document.querySelector(".ac > button");
let numbers = document.querySelectorAll(".num > button");
let operators = document.querySelectorAll(".operator > button");
let previouslyClicked = null;

console.log(operators);

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

// Adding event listeners to buttons
numbers.forEach((el) => el.addEventListener("click", typeNumber));

clearBtn.addEventListener("click", clearOutput);
