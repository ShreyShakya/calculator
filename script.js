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

buttons.addEventListener("click", function (e) {

    if (e.target.classList.contains("number") && firstNumber !== undefined && secondNumber !== undefined) {
        display.value = ""
        display.value += e.target.textContent
    } else if (e.target.classList.contains("number") && firstNumber !== undefined && secondNumber === undefined) {
        display.value = ""
        display.value += e.target.textContent
    } else if (e.target.classList.contains("number")) {
        display.value += e.target.textContent
    }

    if (e.target.classList.contains("operator") && firstNumber === undefined) {
        firstNumber = Number(display.value)
        display.value = ""
        operator = e.target.textContent
    } else if (e.target.classList.contains("operator") && secondNumber === undefined) {
        display.value = ""
        operator = e.target.textContent
    } else if (e.target.classList.contains("operator") && firstNumber !== undefined) {
        secondNumber = Number(display.value)
        display.value = operate(firstNumber, operator, secondNumber)
        firstNumber = Number(display.value)
        operator = e.target.textContent
    }

    if (e.target.classList.contains("equals")) {
        secondNumber = Number(display.value)
        display.value = operate(firstNumber, operator, secondNumber)
        firstNumber = Number(display.value)
        secondNumber = undefined
    }

    if (e.target.classList.contains("clear")) {
        firstNumber = undefined
        secondNumber = undefined
        operator = undefined
        display.value = ""
    }


})