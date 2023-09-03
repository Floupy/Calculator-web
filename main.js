"use strict";

let number1 = Number();
let operation = '';
let number2 = Number();
let result = Number();

let isFirstNumberMode = true;

const numberButtons = document.querySelectorAll('.number-button');
const operationButtons = document.querySelectorAll('.operation-button');
const deleteButton = document.querySelector('.delete-key');
const clearButton = document.querySelector('.clear-button');
const equalsButton = document.querySelector('.equals-button');

const display = document.querySelector('.display');

numberButtons.forEach(numberButton => {
   numberButton.addEventListener('click', () => {
       display.textContent += numberButton.textContent;
       if (isFirstNumberMode === true) {
           number1 += numberButton.textContent.toString();
       } else if(isFirstNumberMode === false) {
           number2 += numberButton.textContent.toString();
       }
    });
});
operationButtons.forEach(operationButton => {
    operationButton.addEventListener('click', chooseOperation);
})

deleteButton.addEventListener('click', deleteNumber);
clearButton.addEventListener('click', clear);
equalsButton.addEventListener('click', operate);
function add() {
    return  result = Number(number1) + Number(number2);
}
function subtract() {
    return  result = Number(number1) - Number(number2);
}
function multiply() {
    return  result = number1 * number2;
}
function divide() {
    return  result = Number(number1) / Number(number2);
}

function operate() {
    display.textContent = ' ';
    if(operation === '/') {
        divide();
    } else if(operation === '*') {
        multiply();
    } else if(operation === '+'){
        add();
    } else if(operation === '-') {
        subtract();
    }
    number1 = Number(result);
    number2 = Number(' ');
    isFirstNumberMode = false;
    console.log(Number(number1));
    console.log(Number(number2));
    console.log(result);
    display.textContent = result.toString();
}


function chooseOperation() {
    if(this.classList.contains('divide-button')) {
        operation = '/';
        display.textContent += '÷';
        console.log(operation);

    } else if(this.classList.contains('multiply-button')) {
        operation = '*' ;
        console.log(operation);

    } else if(this.classList.contains('subtract-button')) {
        operation = '-';
        console.log(operation);

    } else if(this.classList.contains('add-button')) {
        operation = '+';
        console.log(operation);
    }

    isFirstNumberMode = false;
    display.textContent = ' ';

}
function deleteNumber() {
    // display.slice(0, -1);
}

function clear() {
    display.textContent = ' ';
    number1 = Number(' ');
    operation = ' ';
    number2 = Number(' ');
}
