let result = 0;
let number = 0;
let operator;
let anotherNumber = 0;
let displayValue = '';
let tempOperator;

const inputBtn = document.querySelectorAll('.numBtn');
const displayNum = document.querySelector('.result');
const operatorBtn = document.querySelectorAll('.operaBtn');


function add(number, anotherNumber) {
    return result = number + anotherNumber;
}

function substract(number, anotherNumber) {
    return result = number - anotherNumber;
}

function multiply(number, anotherNumber) {
    return result = number * anotherNumber;
}

function divide(number, anotherNumber) {
    return result = number / anotherNumber;
}

function operate(operator, number, anotherNumber) {
    switch(operator) {
        case '+':
            add(number, anotherNumber);
            break;
        case '-':
            substract(number, anotherNumber);
            break;
        case '*':
            multiply(number, anotherNumber);
            break;
        case '/':
            divide(number, anotherNumber);
            break;
    }
}

function numBtnClick() {
    console.log(inputBtn);
    inputBtn.forEach((numberButton) => {
        numberButton.addEventListener("click", () => {
            console.log(numberButton.innerText);
            displayValue += numberButton.getAttribute('value');
            displayClick(displayValue);
        });
    });
}

function displayClick(value) { 
    console.log(typeof(displayValue));
    displayNum.textContent = displayValue;
    console.log(displayValue); 
}

function operatorBtnClick() {
    operatorBtn.forEach((operation) => {
        console.log('btn');
        operation.addEventListener(("click"), () => {
            tempOperator = operation.getAttribute('value');
            console.log(tempOperator);
            if(tempOperator !== '='){
                operator = tempOperator;
                storeToNum(number);
            }
        })
    })
}

function storeToNum(firstNumber) {
    firstNumber = displayNum.textContent;
    console.log(firstNumber);
    clearTextAndDisplay();
}

function clearTextAndDisplay() {
    displayNum.textContent = '';
    displayValue = '';
}


numBtnClick();
operatorBtnClick();