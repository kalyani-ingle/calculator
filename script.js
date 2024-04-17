let display = document.getElementById('display');
let operand1 = null;
let operand2 = null;
let currentOperation = null;

function addToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    operand1 = null;
    operand2 = null;
    currentOperation = null;
  display.value=""
}

function operation(op) {
    operand1 = parseFloat(display.value);
    currentOperation = op;
    display.value = '';
}

function calculate(){
  operand2=parseFloat(display.value)
  let result;

  switch (currentOperation) {
    case '+':
        result = operand1 + operand2;
        break;
    case '-':
        result = operand1 - operand2;
        break;
    case '*':
        result = operand1 * operand2;
        break;
    case '/':
        result = operand1 / operand2;
        break;
    default:
        return;
  }
  display.value = result;
  operand1 = result;
  operand2 = null;
  currentOperation = null;
}


