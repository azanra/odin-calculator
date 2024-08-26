let result;
let number;
let operator;
let anotherNumber;
let displayValue = '';
let tempOperator;

const inputBtn = document.querySelectorAll('.numBtn');
const displayNum = document.querySelector('.result');
const operatorBtn = document.querySelectorAll('.operaBtn');
const clearBtn = document.querySelector('.resetBtn');
const decBtn = document.querySelector('.decimalBtn');

function decimalClick() {
    decBtn.addEventListener("click", () => {
        decBtn.disabled = true;
    })
}

function clickResetBtn() {
    clearBtn.addEventListener("click", () => {
        result = 0;
        number = undefined;
        operator = undefined;
        anotherNumber = undefined;
        displayValue = '';
        tempOperator = undefined;
        displayClick();
    })
}

function add() {
    window.result = window.number + window.anotherNumber;
    checkInteger();
}

function substract() {
    window.result = window.number - window.anotherNumber;
    checkInteger();
}

function multiply() {
    window.result = window.number * window.anotherNumber;
   checkInteger();
}

function divide() {
    window.result = window.number / window.anotherNumber;
    checkInteger();
}

function checkInteger() {
    if(Number.isInteger(window.result) === true){
        return window.result;
    }
    else{
        return window.result = window.result.toFixed(2);
    }
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
            if(window.anotherNumber === 0){
                window.result = "Unable to divide by 0, Use the clear button!";
                break;
            }
            else{
                divide();
                break;
            }
    }
}

function numBtnClick() {
    inputBtn.forEach((numberButton) => {
        numberButton.addEventListener("click", () => {
            displayValue += numberButton.getAttribute('value');
            displayClick(displayValue);
            enableBtn();
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
            decBtn.disabled = false;
            tempOperator = operation.getAttribute('value');
            console.log(tempOperator);
            disableBtn();
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
                enableBtn()
            }
        })
    })
}

function disableBtn() {
    for(let i = 0; i < operatorBtn.length; i++){
        operatorBtn[i].disabled = true;
    }
}

function enableBtn() {
    for(let i = 0; i < operatorBtn.length; i++){
        operatorBtn[i].disabled = false;
    }
}

numBtnClick();
decimalClick();
operatorBtnClick();
clickResetBtn();
