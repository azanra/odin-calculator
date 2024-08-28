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
const deleteBtn = document.querySelector('.backspaceBtn');
const negBtn = document.querySelector('.negativeBtn');

function negativeButtonClick() {
    negBtn.addEventListener('click', () => {
        displayValue = displayValue.split("");
        displayValue.unshift("-");
        displayValue = displayValue.join("");
        displayClick(displayValue);
        disableNegativeBtn();
    })
}

function disableNegativeBtn() {
    negBtn.disabled = true;
}

function enableNegativeBtn() {
    negBtn.disabled = false;
}

function deleteButtonClick() {
    deleteBtn.addEventListener("click", () => {
        displayValue = displayValue.split("");
        let deletedDisplayValue = displayValue.pop();    
        if(deletedDisplayValue === '.'){
            decBtn.disabled = false;
        }    
        displayValue = displayValue.join("");
         displayClick(displayValue);
    })
}

function keyboardInput() {
    displayNum.addEventListener("keypress", (event) => {
        if(isNaN(event.key)){
            event.preventDefault()
        }
        else{
            displayValue += event.key;
            event.preventDefault();
            displayClick(displayValue);
        }
    })
}

function disabledecimalClick() {
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
        displayClick(displayValue);
        enableNegativeBtn();
        enableDecimalBtn();
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
                window.result = "Error";
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

function displayClick(valueToDisplay) { 
    displayNum.value = valueToDisplay;
}

function storeToNum() {
    window.number = document.querySelector('.result').value;
    clearTextAndDisplay();
    window.number = Number(window.number);
    return window.number;
}

function clearTextAndDisplay() {
    displayNum.value = '';
    displayValue = '';
}

function storeToAnotherNum() {
    window.anotherNumber = document.querySelector('.result').value;
    clearTextAndDisplay();
    window.anotherNumber = Number(window.anotherNumber);
    return window.anotherNumber;
}

function enableDecimalBtn() {
    decBtn.disabled = false;
}

function operatorBtnClick() {
    operatorBtn.forEach((operation) => {
        operation.addEventListener(("click"), () => {
            enableDecimalBtn();
            enableNegativeBtn();
            tempOperator = operation.getAttribute('value');
            disableBtn();
            if(window.operator !== undefined && tempOperator !== "="){
                storeToAnotherNum();
                operate();
                displayClick(window.result);
                window.operator = tempOperator;
                storeToNum();
                displayClick(window.number);
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
disabledecimalClick();
operatorBtnClick();
clickResetBtn();
deleteButtonClick();
keyboardInput();
negativeButtonClick();