let result = 0;
let number;
let operator;
let anotherNumber;
let displayValue = '';
let tempOperator;

const inputBtn = document.querySelectorAll('.numBtn');
const displayNum = document.querySelector('.result');
const operatorBtn = document.querySelectorAll('.operaBtn');


function add() {
    return window.result = window.number + window.anotherNumber;
}

function substract() {
    return window.result = window.number - window.anotherNumber;
}

function multiply() {
    return window.result = window.number * window.anotherNumber;
}

function divide() {
    return window.result = window.number / window.anotherNumber;
}

function operate() {
    switch(window.operator) {
        case '+':
             add();
            break;
        case '-':
             substract();
            break;
        case '*':
            multiply();
            break;
        case '/':
            divide();
            break;
    }
}

function numBtnClick() {
    inputBtn.forEach((numberButton) => {
        numberButton.addEventListener("click", () => {
            displayValue += numberButton.getAttribute('value');
            displayClick(displayValue);
        });
    });
}

function displayClick(value) { 
    displayNum.textContent = value;
}

function storeToNum() {
    window.number = document.querySelector('.result').textContent;
    clearTextAndDisplay();
    window.number = Number(window.number);
    console.log(window.number)
    return window.number;
}

function clearTextAndDisplay() {
    displayNum.textContent = '';
    displayValue = '';
}

function storeToAnotherNum() {
    window.anotherNumber = document.querySelector('.result').textContent;
    clearTextAndDisplay();
    window.anotherNumber = Number(window.anotherNumber);
    console.log(window.anotherNumber);
    return window.anotherNumber;
}

function operatorBtnClick() {
    operatorBtn.forEach((operation) => {
        operation.addEventListener(("click"), () => {
            tempOperator = operation.getAttribute('value');
            if(window.operator !== undefined && tempOperator !== "="){
                storeToAnotherNum();
                operate();
                displayClick(window.result);
                window.operator = tempOperator;
                storeToNum();
                displayClick(window.number);
                console.log(window.number);
            }
            else if(tempOperator !== '='){
                window.operator = tempOperator;
                storeToNum();
            }
            else{
                storeToAnotherNum();
                operate();
                displayClick(window.result);
                window.operator = undefined;
            }
        })
    })
}

numBtnClick();
operatorBtnClick();
