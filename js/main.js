//    Constants:


//    Variables:


//    Cached Element References:
const container = document.querySelector('.container');
const title = document.querySelector('.title');
const background = document.querySelector('.background');
const calculatorContainer = document.querySelector('.calculator-container');
const displayOutput = document.querySelector('.display-output');
const keypad = document.querySelector('.keypad');
const operations = document.querySelector('.operations');
const miscBtns = document.querySelector('.misc-btns');
const footer = document.querySelector('.footer');

//    Created DOM Elements:
const header = document.createElement('h1');
const digits = document.createElement('button');
const addBtn = document.createElement('button');
const subBtn = document.createElement('button');
const mulBtn = document.createElement('button');
const divBtn = document.createElement('button');
const negBtn = document.createElement('button');
const eraseBtn = document.createElement('button');
const equalBtn = document.createElement('button');

//    Append Elements to Parent:
title.appendChild(header);
calculatorContainer.appendChild(displayOutput);
calculatorContainer.appendChild(keypad);
calculatorContainer.appendChild(operations);
calculatorContainer.appendChild(miscBtns);
keypad.appendChild(digits);
keypad.appendChild(negBtn);
operations.appendChild(addBtn);
operations.appendChild(subBtn);
operations.appendChild(mulBtn);
operations.appendChild(divBtn);
miscBtns.appendChild(eraseBtn);
miscBtns.appendChild(equalBtn);

//    Event Listener:
document.addEventListener('DOMContentLoaded', function () {


});


//    Functions:

function loadPage() {
  add_button.innerText = '+';

}





