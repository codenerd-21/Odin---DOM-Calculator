// Constants:


// Variables:


// Cached Element References:
const container = document.querySelector('.container');
const title = document.querySelector('.title');
const background = document.querySelector('.background');
const calculatorContainer = document.querySelector('.calculator-container');
const displayOutput = document.querySelector('.display-output');
const keypad = document.querySelector('.keypad');
const operations = document.querySelector('.operations');
const miscBtns = document.querySelector('.misc-btns');
const footer = document.querySelector('.footer');


// Append Elements to Parent:
calculatorContainer.appendChild(displayOutput);
calculatorContainer.appendChild(keypad);
calculatorContainer.appendChild(operations);
calculatorContainer.appendChild(miscBtns);


// Event Listener:
document.addEventListener('DOMContentLoaded', createKeyPad);


// Functions:
function createKeyPad() {
  for (let i = 0; i < 10; i++) {
    const digits = document.createElement('button');
    digits.setAttribute('class', `number num_${i}`);
    digits.setAttribute('value', i);
    digits.innerText = i;
    addEventListener(digits);
    keypad.appendChild(digits);
    createMiscBtns();
  }
}

function createMiscBtns() {
  const equalBtn = document.createElement('button');
  equalBtn.setAttribute('class', 'misc equal');
  equalBtn.setAttribute('value', 'equal');
  equalBtn.innerText = '=';
  addEventListener(equalBtn);
  miscBtns.appendChild(equalBtn);

  const clearBtn = document.createElement('button');
  clearBtn.setAttribute('class', 'misc clear');
  clearBtn.setAttribute('value', 'clear');
  clearBtn.innerText('C');
  addEventListener(clearBtn);
  miscBtns.appendChild(clearBtn);
  createAddBtn();
}

function createAddBtn() {
  const addBtn = document.createElement('button');
  addBtn.setAttribute('class', 'input');
  addBtn.setAttribute('value', 'add');
  addBtn.innerText = '+';
  addEventListener(addBtn);
  operations.appendChild(addBtn);
  createSubBtn();
}

function createSubBtn() {
  const subBtn = document.createElement('button');
  subBtn.setAttribute('class', 'input');
  subBtn.setAttribute('value', 'sub');
  subBtn.innerText = '-';
  addEventListener(subBtn);
  operations.appendChild(subBtn);
  createMulBtn();
}

function createMulBtn() {
  const mulBtn = document.createElement('button');
  mulBtn.setAttribute('class', 'input');
  mulBtn.setAttribute('value', 'mult');
  mulBtn.innerText = '+';
  addEventListener(mulBtn);
  operations.appendChild(mulBtn);
  createDivBtn();
}

function createDivBtn() {
  const divBtn = document.createElement('button');
  divBtn.setAttribute('class', 'input');
  divBtn.setAttribute('value', 'div');
  divBtn.innerText = '+';
  addEventListener(divBtn);
  operations.appendChild(divBtn);
  createPlusMinusBtn();
}

function createPlusMinusBtn() {
  const plusminusBtn = document.createElement('button');
  plusminusBtn.setAttribute('class', 'input neg');
  plusminusBtn.setAttribute('value', 'negative')
  plusminusBtn.innerText = '+/-';
  addEventListener(plusminusBtn);
  keypad.appendChild(negBtn);
}








