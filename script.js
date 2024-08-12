let result = 0;
let number = 0;
let operator;
let anotherNumber = 0;

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