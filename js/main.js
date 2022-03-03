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
const flt = document.querySelector('#float');
let CTOP = '';
let CT1 = 0.0;
let CT2 = 0.0;
let total = "0";
sum.textContent = '';

function set(a) {
    if (CT1 != 0) {
        CT2 = parseFloat(sum.textContent);
        sum.textContent = operate(CTOP, CT1, CT2);
    }
    CT1 = parseFloat(sum.textContent);
    setup(a);
    sum.textContent = '';
    CTOP = a;
}

function add (a, b) {
    return a +b;
}
function multiply (a, b) {
    return a * b;
}
function subtract (a, b) {
    return a -b
}
function divide (a, b) {
    return a/b;
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
    if (parseInt(set) != parseFloat(set)) {
        set = (Math.round(set * 100))/100
    }
    return set;
}

function setup(a) {
    altSum.textContent =' ' + CT1 + ' ' + a;
}

function summer (a) {
    sum.textContent += a;
}

one.addEventListener('click', () => {
    summer('1');
})
two.addEventListener('click', () => {
    summer('2');
})
three.addEventListener('click', () => {
    summer('3');
})
four.addEventListener('click', () => {
    summer('4');
})
five.addEventListener('click', () => {
    summer('5');
})
six.addEventListener('click', () => {
    summer('6');
})
seven.addEventListener('click', () => {
    summer('7');
})
eight.addEventListener('click', () => {
    summer('8');
})
nine.addEventListener('click', () => {
    summer('9');
})
zero.addEventListener('click', () => {
    summer('0');
})
clear.addEventListener('click', () => {
    sum.textContent = '';
    altSum.textContent = '';
})

e.addEventListener('click', () => {
    CT2 = parseFloat(sum.textContent);
    sum.textContent = operate(CTOP, CT1, CT2);
    console.log(operate(CTOP, CT1, CT2));
    CT1 = 0;
    altSum.textContent = '';
})

s.addEventListener('click', () => {
    set('-')
})
a.addEventListener('click', () => {
    set('+')
})
m.addEventListener('click', () => {
    set('*')
})
d.addEventListener('click', () => {
    set('/')
})

back.addEventListener('click', () => {
    sum.textContent = sum.textContent.slice(0, -1);
})

flt.addEventListener('click', () => {
    if (sum.textContent.includes('.') === false) {
        summer('.');
    }
})

document.addEventListener('keydown', (e) => {
    if (e.key == '1') {
        summer('1');
    }
    if (e.key == '2') {
        summer('2');
    }
    if (e.key == '3') {
        summer('3');
    }
    if (e.key == '4') {
        summer('4');
    }
    if (e.key == '5') {
        summer('5');
    }
    if (e.key == '6') {
        summer('6');
    }
    if (e.key == '7') {
        summer('7');
    }
    if (e.key == '8') {
        summer('8');
    }
    if (e.key == '9') {
        summer('9');
    }
    if (e.key == '0') {
        summer('0');
    }
    if (e.key == '/') {
        set('/')
    }
    if (e.key == '-') {
        set('-')
    }
    if (e.key == '+') {
        set('+')
    }
    if (e.key == '*') {
        set('*')
    }
    if (e.key == 'Enter') {
        CT2 = parseFloat(sum.textContent);
        sum.textContent = operate(CTOP, CT1, CT2);
        console.log(operate(CTOP, CT1, CT2));
        CT1 = 0;
        altSum.textContent = '';
    }
    if (e.key == 'Backspace') {
        sum.textContent = sum.textContent.slice(0, -1);
    }
    if (e.key == '.') {
        if (sum.textContent.includes('.') === false) {
            summer('.');
        }
    }
})