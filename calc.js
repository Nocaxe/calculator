function add(a, b) {
    return (+a + +b);
}

function subtract(a, b) {
    return (+a - +b);
}

function multiply(a, b) {
    return (+a * +b);
}

function divide(a, b) {
    if (+b === 0) {
        return alert("Cannot divide by zero!")
    }
    else {
        return ((1.0 * +a) / +b)
    }
}

function operate(operator, a, b) {
    switch (operator) {
        case 'add':
            return add(a, b);
        case 'subtract':
            return subtract(a, b);
        case 'multiply':
            return multiply(a, b);
        case 'divide':
            return divide(a, b);
    }
}

function clear() {
    display.innerHTML = "";
    a = 0;
    b = 0;
    period = 0;
}

function reset() {
    opAdd = 0;
    opSub = 0;
    opMul = 0;
    opDiv = 0;
}

function equals() {
    if (opAdd == 1) {
        b = display.innerHTML;
        display.innerHTML = operate('add', a, b);
        reset();
    }
    else if (opSub == 1) {
        b = display.innerHTML;
        display.innerHTML = operate('subtract', a, b);
        reset();
    }
    else if (opMul == 1) {
        b = display.innerHTML;
        display.innerHTML = operate('multiply', a, b);
        reset();
    }
    else if (opDiv == 1) {
        b = display.innerHTML;
        display.innerHTML = operate('divide', a, b);
        reset();
    }
}

const numpad = document.querySelector('#numpad');
const display = document.querySelector('.display');

let period = 0;
let a = null;
let b = null;
let opAdd = 0;
let opSub = 0;
let opMul = 0;
let opDiv = 0;
const operator = ['+', '-', '*', '/']

numpad.addEventListener('click', (event) => {
    const target = event.target;

    switch (target.id) {
        case '0':
            if (operator.includes(display.innerHTML)) {
                display.innerHTML = "0";
                break;
            }
            else {
                display.insertAdjacentHTML('beforeend', '0');
                break;
            }
        case '1':
            if (operator.includes(display.innerHTML)) {
                display.innerHTML = "1";
                break;
            }
            else {
                display.insertAdjacentHTML('beforeend', '1');
                break;
            }
        case '2':
            if (operator.includes(display.innerHTML)) {
                display.innerHTML = "2";
                break;
            }
            else {
                display.insertAdjacentHTML('beforeend', '2');
                break;
            }
        case '3':
            if (operator.includes(display.innerHTML)) {
                display.innerHTML = "3";
                break;
            }
            else {
                display.insertAdjacentHTML('beforeend', '3');
                break;
            }
        case '4':
            if (operator.includes(display.innerHTML)) {
                display.innerHTML = "4";
                break;
            }
            else {
                display.insertAdjacentHTML('beforeend', '4');
                break;
            }
        case '5':
            if (operator.includes(display.innerHTML)) {
                display.innerHTML = "5";
                break;
            }
            else {
                display.insertAdjacentHTML('beforeend', '5');
                break;
            }
        case '6':
            if (operator.includes(display.innerHTML)) {
                display.innerHTML = "6";
                break;
            }
            else {
                display.insertAdjacentHTML('beforeend', '6');
                break;
            }
        case '7':
            if (operator.includes(display.innerHTML)) {
                display.innerHTML = "7";
                break;
            }
            else {
                display.insertAdjacentHTML('beforeend', '7');
                break;
            }
        case '8':
            if (operator.includes(display.innerHTML)) {
                display.innerHTML = "8";
                break;
            }
            else {
                display.insertAdjacentHTML('beforeend', '8');
                break;
            }
        case '9':
            if (operator.includes(display.innerHTML)) {
                display.innerHTML = "9";
                break;
            }
            else {
                display.insertAdjacentHTML('beforeend', '9');
                break;
            }
        case 'period':
            if (period === 0) {
                display.insertAdjacentHTML('beforeend', '.');
                period++;
                break;
            }
            else {
                return alert('cannot have more than one decimal point!')
            }
        case 'add':
            equals();
            a = display.innerHTML;
            display.innerHTML = '+';
            opAdd = 1;
            break;
        case 'subtract':
            equals();
            a = display.innerHTML;
            display.innerHTML = '-';
            opSub = 1;
            break;
        case 'multiply':
            equals();
            a = display.innerHTML;
            display.innerHTML = '*';
            opMul = 1;
            break;
        case 'divide':
            equals();
            a = display.innerHTML;
            display.innerHTML = '/';
            opDiv = 1;
            break;
        case 'CE':
            clear();
            reset();
            break;
        case 'equals':
            equals()
            break;
    }
})

