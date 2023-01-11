let output = document.querySelector(".display-inner");
let clearBtn = document.querySelector(".ac > button");
let numbers = document.querySelectorAll(".num > button");

console.log(numbers);

// clear display output
let clearOutput = () => (output.innerText = 0);

// type number to display
let typeNumber = (e) => {
  if (output.innerHTML == 0) {
    output.innerHTML = e.target.innerHTML;
  } else {
    output.innerHTML += e.target.innerHTML;
  }
};

// Adding event listeners to buttons
numbers.forEach((el) => {
  el.addEventListener("click", typeNumber);
});

clearBtn.addEventListener("click", clearOutput);
