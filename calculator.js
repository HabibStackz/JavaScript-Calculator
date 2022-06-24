alert(
  "This is a calculator you can use in your browser. Please enter your mathematical problem. You can only solve for 2 numbers on this calculator."
);

function add(a, b) {
  alert("Result: " + a + " + " + b + " = " + (a + b));
}
function subtract(a, b) {
  alert("Result: " + a + " - " + b + " = " + (a - b));
}
function divide(a, b) {
  alert("Result: " + a + " / " + b + " = " + a / b);
}
function multiply(a, b) {
  alert("Result: " + a + " * " + b + " = " + a * b);
}

function calculate(a, b, operation) {
  if (operation == "+") {
    add(a, b);
  } else if (operation == "-") {
    subtract(a, b);
  } else if (operation == "/") {
    divide(a, b);
  } else if (operation == "*") {
    multiply(a, b);
  } else {
    alert("Please enter a valid operation.");
  }
}

let a = parseFloat(prompt("Please enter the first number: "));
let b = parseFloat(prompt("Please enter the second number: "));
let operation = prompt(
  "Enter the calculation you would like to perform: \n add: +\n subtract: -\n divide: /\n multiply: * "
);

calculate(a, b, operation);
