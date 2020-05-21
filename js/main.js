/*--------------------- Constants ------------------*/


/*--------------------- Variables ------------------*/


/*------------- Cached Element References --------*/


/*------------------- Event Listener ---------------*/


/*--------------------- Functions -----------------*/







/*--------------------- Constants ------------------*/
const START_GAME = 16;


/*--------------------- Variables ------------------*/
let count = 1;
let cellsMax;

/*-------------- Cached Element References --------*/
const container = document.querySelector('.container');
const btn = document.querySelector('#btn');

/*------------------ Event Listener ---------------*/
btn.addEventListener('click', promptUser);

/*--------------------- Functions -----------------*/










document.addEventListener('DOMContentLoaded', function () {
  // Get reference to parent container
  const container = document.querySelector('.parent-container');
  const keypad = document.querySelector('.keypad');
  const operations = document.querySelector('.operations');
  const equal_clear = document.querySelector('.equal-clear');
  const answer = document.querySelector('.answer');
  let calculation = [];
  //   const input_1 = document.createElement('input');
  //   const input_2 = document.createElement('input');

  //   input_1.setAttribute('class', 'input');
  //   input_1.setAttribute('id', 'input_1');
  //   input_1.setAttribute('name', 'input_1');
  //   input_2.setAttribute('class', 'input');
  //   input_2.setAttribute('id', 'input_2');
  //   input_2.setAttribute('name', 'input_2');
  //   container.appendChild(input_1);
  //   container.appendChild(input_2);

  //   const add_button = document.createElement('button');
  //   const sub_button = document.createElement('button');
  //   const mult_button = document.createElement('button');
  //   const div_button = document.createElement('button');
  //   add_button.setAttribute('class', 'input');
  //   sub_button.setAttribute('class', 'input');
  //   mult_button.setAttribute('class', 'input');
  //   div_button.setAttribute('class', 'input');
  //   add_button.setAttribute('value', 'add');
  //   sub_button.setAttribute('value', 'sub');
  //   mult_button.setAttribute('value', 'mult');
  //   div_button.setAttribute('value', 'div');
  //   add_button.innerText = '+';
  //   sub_button.innerText = '-';
  //   mult_button.innerText = '*';
  //   div_button.innerText = '/';
  //   addEventListener(add_button);
  //   addEventListener(sub_button);
  //   addEventListener(mult_button);
  //   addEventListener(div_button);
  //   container.appendChild(add_button);
  //   container.appendChild(sub_button);
  //   container.appendChild(mult_button);
  //   container.appendChild(div_button);

  //   //   Add an equal button
  //   const equal_button = document.createElement('button');
  //   equal_button.setAttribute('class', 'equal');
  //   equal_button.setAttribute('value', 'equal');
  //   equal_button.innerText = '=';
  //   addEventListener(equal_button);
  //   container.appendChild(equal_button);

  //   // Clear button
  //   const clear_button = document.createElement('button');
  //   clear_button.setAttribute('class', 'clear');
  //   clear_button.setAttribute('value', 'clear');
  //   clear_button.innerText = 'Clear';
  //   addEventListener(clear_button);
  //   container.appendChild(clear_button);

  // Create keypad
  for (let i = 0; i < 10; i++) {
    const num_button = document.createElement('button');
    num_button.setAttribute('class', `number num_${i}`);
    num_button.setAttribute('value', i);
    num_button.innerText = i;
    addEventListener(num_button);
    keypad.appendChild(num_button);
  }

  // Operation Buttons
  const add_button = document.createElement('button');
  const sub_button = document.createElement('button');
  const mult_button = document.createElement('button');
  const div_button = document.createElement('button');
  add_button.setAttribute('class', 'input');
  sub_button.setAttribute('class', 'input');
  mult_button.setAttribute('class', 'input');
  div_button.setAttribute('class', 'input');
  add_button.setAttribute('value', 'add');
  sub_button.setAttribute('value', 'sub');
  mult_button.setAttribute('value', 'mult');
  div_button.setAttribute('value', 'div');
  add_button.innerText = '+';
  sub_button.innerText = '-';
  mult_button.innerText = '*';
  div_button.innerText = '/';
  addEventListener(add_button);
  addEventListener(sub_button);
  addEventListener(mult_button);
  addEventListener(div_button);
  operations.appendChild(add_button);
  operations.appendChild(sub_button);
  operations.appendChild(mult_button);
  operations.appendChild(div_button);

  //   Add an equal button
  const equal_button = document.createElement('button');
  equal_button.setAttribute('class', 'equal');
  equal_button.setAttribute('value', 'equal');
  equal_button.innerText = '=';
  addEventListener(equal_button);
  equal_clear.appendChild(equal_button);

  // Clear button
  const clear_button = document.createElement('button');
  clear_button.setAttribute('class', 'clear');
  clear_button.setAttribute('value', 'clear');
  clear_button.innerText = 'Clear';
  addEventListener(clear_button);
  equal_clear.appendChild(clear_button);

  function addEventListener(element) {
    element.addEventListener('click', event => {
      let value = element.value;
      let str = '';

      switch (value) {
        case 'add':
          str = '+';
          break;
        case 'sub':
          str = '-';
          break;
        case 'mult':
          str = '*';
          break;
        case 'div':
          str = '/';
          break;
        case 'equal':
          str = '=';
          break;
        case 'clear':
          // Clear 
          calculation = [];
          break;
        default:
          str = value;
          break;
      }
      calculation.push(str);
      answer.innerHTML = calculation.join('');
      []
    })
  }
})