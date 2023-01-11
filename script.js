let output = document.querySelector(".display-inner");
let clearBtn = document.querySelector(".ac > button");

let clearOutput = () => {
  output.innerText = 0;
};

clearBtn.addEventListener("click", clearOutput);
