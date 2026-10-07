function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber
}

function subtract(firstNumber, secondNumber) {
    return firstNumber - secondNumber
}

function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber
}

function divide(firstNumber, secondNumber) {
    return firstNumber / secondNumber
}

function operate(firstNumber, operator, secondNumber) {
    if (operator === '+') {
        return add(firstNumber, secondNumber)
    } else if (operator === '-') {
        return subtract(firstNumber, secondNumber)
    } else if (operator === '*') {
        return multiply(firstNumber, secondNumber)
    } else if (operator === '/') {
        return divide(firstNumber, secondNumber)
    } else {
        console.log("Invalid")
    }
}

const display = document.querySelector("#display")
const buttons = document.querySelector("#buttons")

let firstNumber
let operator
let secondNumber
let justCalculated = false
let calculatedWithEquals = false

buttons.addEventListener("click", function (e) {

    if (e.target.classList.contains("number") && firstNumber !== undefined && secondNumber !== undefined) {
        display.value = ""
        display.value += e.target.textContent
    } else if (e.target.classList.contains("number") && firstNumber !== undefined && secondNumber === undefined && justCalculated === true && calculatedWithEquals === true) {
        display.value = ""
        display.value += e.target.textContent
        justCalculated = false
        firstNumber = undefined
    } else if (e.target.classList.contains("number") && firstNumber !== undefined && secondNumber === undefined && justCalculated === true && calculatedWithEquals === false) {
        display.value = ""
        display.value += e.target.textContent
        justCalculated = false
    } else if (e.target.classList.contains("number") && firstNumber !== undefined && secondNumber === undefined) {
        display.value = ""
        display.value += e.target.textContent
        calculatedWithEquals = false
    } else if (e.target.classList.contains("number")) {
        display.value += e.target.textContent
    }

    if (e.target.classList.contains("operator") && firstNumber === undefined) {
        firstNumber = Number(display.value)
        display.value = ""
        operator = e.target.textContent
    } else if (e.target.classList.contains("operator") && firstNumber != undefined && secondNumber === undefined && justCalculated === true) {
        firstNumber = Number(display.value)
        display.value = ""
        justCalculated = false
        operator = e.target.textContent
    } else if (e.target.classList.contains("operator") && firstNumber != undefined && secondNumber === undefined) {
        secondNumber = Number(display.value)
        display.value = ""
    }

    if (e.target.classList.contains("operator") && firstNumber !== undefined && secondNumber !== undefined) {
        display.value = operate(firstNumber, operator, secondNumber)
        firstNumber = Number(display.value)
        secondNumber = undefined
        justCalculated = true
        calculatedWithEquals = false
        operator = e.target.textContent
    }

    if (e.target.classList.contains("equals") && firstNumber !== undefined && calculatedWithEquals === false ) {
        secondNumber = Number(display.value)
        display.value = operate(firstNumber, operator, secondNumber)
        firstNumber = Number(display.value)
        secondNumber = undefined
        justCalculated = true
        calculatedWithEquals = true
    }

    if (e.target.classList.contains("clear")) {
        firstNumber = undefined
        secondNumber = undefined
        operator = undefined
        justCalculated = false
        calculatedWithEquals = false
        display.value = ""
    }


})