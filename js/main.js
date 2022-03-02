const sum = document.querySelector('#sum');
const digits = document.querySelector('#digits');
const one = digits.querySelector('#one');
const two = digits.querySelector('#two');
const three = digits.querySelector('#three');
const four = digits.querySelector('#four');
const five = digits.querySelector('#five');
const six = digits.querySelector('#six');
const seven = digits.querySelector('#seven');
const eight = digits.querySelector('#eight');
const nine = digits.querySelector('#nine');
const zero = digits.querySelector('#zero');
const e = digits.querySelector('#equal');
const s = digits.querySelector('#subtract');
const d = digits.querySelector('#divide');
const m = digits.querySelector('#multiply');
const a = digits.querySelector('#add');
const clear = document.querySelector('#clear');
const back = document.querySelector('#back');
const altSum = document.querySelector('#altSum');
let CTOP = '';
let CT1 = 0;
let CT2 = 0;
let total = "0";
sum.textContent = '';

function add (a, b) {
    return a +b;
}
function multiply (a, b) {
    return a *b;
}
function subtract (a, b) {
    return a -b;
}
function divide (a, b) {
    return a /b;
}

function operate (op, a, b) {
    let set = 0;
    if (op === '+') {
        set = add(a ,b);
    }
    if (op === '-') {
        set = subtract(a,b);
    }
    if (op === '*') {
        set = multiply(a,b);
    }
    if (op === '/') {
        set = divide(a ,b);
    }
    return set;
}

function setup(a) {
    altSum.textContent =' ' + a + ' ' + CT1;
}

one.addEventListener('click', () => {
    sum.textContent += '1';
})
two.addEventListener('click', () => {
    sum.textContent += '2';
})
three.addEventListener('click', () => {
    sum.textContent += '3';
})
four.addEventListener('click', () => {
    sum.textContent += '4';
})
five.addEventListener('click', () => {
    sum.textContent += '5';
})
six.addEventListener('click', () => {
    sum.textContent += '6';
})
seven.addEventListener('click', () => {
    sum.textContent += '7';
})
eight.addEventListener('click', () => {
    sum.textContent += '8';
})
nine.addEventListener('click', () => {
    sum.textContent += '9';
})
zero.addEventListener('click', () => {
    sum.textContent += '0';
})
clear.addEventListener('click', () => {
    sum.textContent = '';
})

e.addEventListener('click', () => {
    CT2 = parseInt(sum.textContent);
    sum.textContent = operate(CTOP, CT1, CT2);
    console.log(operate(CTOP, CT1, CT2));
    CT1 = 0;
    altSum.textContent = '';
})

s.addEventListener('click', () => {
    if (CT1 != 0) {
        CT2 = parseInt(sum.textContent);
        sum.textContent = operate(CTOP, CT1, CT2);
    }
    CT1 = parseInt(sum.textContent);
    setup('-');
    sum.textContent = '';
    CTOP = '-'
})
a.addEventListener('click', () => {
    if (CT1 != 0) {
        CT2 = parseInt(sum.textContent);
        sum.textContent = operate(CTOP, CT1, CT2);
    }
    CT1 = parseInt(sum.textContent);
    setup('+');
    sum.textContent = '';
    CTOP = '+'
})
m.addEventListener('click', () => {
    if (CT1 != 0) {
        CT2 = parseInt(sum.textContent);
        sum.textContent = operate(CTOP, CT1, CT2);
    }
    CT1 = parseInt(sum.textContent);
    setup('*');
    sum.textContent = '';
    CTOP = '*'
})
d.addEventListener('click', () => {
    if (CT1 != 0) {
        CT2 = parseInt(sum.textContent);
        sum.textContent = operate(CTOP, CT1, CT2);
    }
    CT1 = parseInt(sum.textContent);
    setup('/');
    sum.textContent = '';
    CTOP = '/'
})

back.addEventListener('click', () => {
    sum.textContent = sum.textContent.slice(0, -1);
})