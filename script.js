let result = 0;
let number = 0;
let operator;
let anotherNumber = 0;
let displayValue;


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

function btnClick() {
    const numBtn = document.querySelectorAll('.numBtn');
    console.log(numBtn);
    numBtn.forEach((numberButton) => {
        numberButton.addEventListener("click", () => {
            console.log(numberButton.innerText);
            displayValue = numberButton.getAttribute('value');
            console.log(typeof(displayValue));
            
            const displayNum = document.querySelector('.result');
            displayNum.textContent = displayValue;
            console.log(displayValue);
        });
    });
}

btnClick();