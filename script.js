let currentInput = '';
let operator = '';
let firstOperand = '';

function appendNumber(num) {
    currentInput += num;
    updateDisplay();

}
function appendOperator(op) {
    if (currentInput != '') {
        if (operator != '') {
            calculate();
        }
        operator = op;
        firstOperand = currentInput;
        currentInput = '';
        updateDisplay();ewr
    }

}

function calculate() {
    if (currentInput != '' && operator != '' && firstOperand != '') {
        const num1 = parseFloat(firstOperand);
        const num2 = parseFloat(currentInput);
        let result;

        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '%':
                result = num1 % num2;
                break;
            case '/':
                result = num1 / num2;
                break;
            default:
                return;


        }
       currentInput = result.toString()
       operator='';
       firstOperand='';
       updateDisplay();
    }
}
function clearDisplay() {
    currentInput='';
    operator='';
    firstOperand='';
    updateDisplay();

}
function updateDisplay() {
    document.getElementById("display").value = currentInput;
}