/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
}

function addNumbers() {
    let add1 = document.getElementById("add1");
    let add2 = document.getElementById("add2");

    let sum = document.getElementById("sum");

    let addNumber1 = Number(add1.value);
    let addNumber2 = Number(add2.value);

    sum.value = add(addNumber1, addNumber2);
}

let addNumbersButton = document.getElementById("addNumbers");

addNumbersButton.addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
function subtract(number1, number2) {
    return number1 - number2;
}

function subtractNumbers() {
    let subtract1 = document.getElementById("subtract1");
    let subtract2 = document.getElementById("subtract2");
    
    let difference = document.getElementById("difference");

    let subtractNumber1 = Number(subtract1.value);
    let subtractNumber2 = Number(subtract2.value);

    difference.value = subtract(subtractNumber1, subtractNumber2);
}

let subtractNumbersButton = document.getElementById("subtractNumbers");

subtractNumbersButton.addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
let multiply = (number1, number2) => number1 * number2;

let multiplyNumbers = () => {
    let factor1 = document.getElementById("factor1");
    let factor2 = document.getElementById("factor2");

    let product = document.getElementById("product");

    let factorNumber1 = Number(factor1.value);
    let factorNumber2 = Number(factor2.value);

    product.value = multiply(factorNumber1, factorNumber2);
};

let multiplyNumbersButton = document.getElementById("multiplyNumbers");

multiplyNumbersButton.addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */
let divide = (dividend, divisor) => dividend / divisor;

let divideNumbers = () => {
    let dividend = document.getElementById("dividend");
    let divisor = document.getElementById("divisor");

    let quotient = document.getElementById("quotient");

    let dividendNumber = Number(dividend.value);
    let divisorNumber = Number(divisor.value);

    quotient.value = divide(dividendNumber, divisorNumber);
};

let divideNumbersButton = document.getElementById("divideNumbers");

divideNumbersButton.addEventListener("click", divideNumbers);

/* Decision Structure */
let getTotalDueButton = document.getElementById("getTotal");

getTotalDueButton.addEventListener("click", () => {
    let subtotal = Number(document.getElementById("subtotal").value);

    let checkbox = document.getElementById("member").checked;
    
    let discount = checkbox ? 0.2 : 0;
    
    let total = document.getElementById("total");

    total.innerText = `$${(subtotal - (subtotal * discount)).toFixed(2)}`;
});

/* ARRAY METHODS - Functional Programming */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];

/* Output Source Array */
document.getElementById("array").innerText = numbersArray;

/* Output Odds Only Array */
document.getElementById("odds").innerText = numbersArray.filter(number => number % 2 === 1);

/* Output Evens Only Array */
document.getElementById("evens").innerText = numbersArray.filter(number => number % 2 === 0);

/* Output Sum of Org. Array */
document.getElementById("sumOfArray").innerText = numbersArray.reduce((sum, number) => sum += number);

/* Output Multiplied by 2 Array */
document.getElementById("multiplied").innerText = numbersArray.map(number => number * 2);

/* Output Sum of Multiplied by 2 Array */
document.getElementById("sumOfMultiplied").innerText = numbersArray.map(number => number * 2).reduce((sum, number) => sum += number);