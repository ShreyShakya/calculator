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
    if (secondNumber === 0) {
        return 'error'
    } else {
        return firstNumber / secondNumber
    }
}

function checkDecimal() {
    if (display.value.includes('.')) {
        decimalBtn.disabled = true
    } else {
        decimalBtn.disabled = false
    }
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


function clearCalculator() {
    firstNumber = undefined
    secondNumber = undefined
    operator = undefined
    justCalculated = false
    calculatedWithEquals = false
    display.value = ""
    checkDecimal()
}

const display = document.querySelector("#display")
const buttons = document.querySelector("#buttons")
const decimalBtn = document.querySelector("#decimal")

let firstNumber
let operator
let secondNumber
let justCalculated = false
let calculatedWithEquals = false

buttons.addEventListener("click", function (e) {

    if (e.target.classList.contains("number") && firstNumber !== undefined && secondNumber !== undefined) {
        display.value = ""
        display.value += e.target.textContent
        checkDecimal()
    } else if (e.target.classList.contains("number") && firstNumber !== undefined && secondNumber === undefined && justCalculated === true && calculatedWithEquals === true) {
        display.value = ""
        display.value += e.target.textContent
        checkDecimal()
        justCalculated = false
        firstNumber = undefined
    } else if (e.target.classList.contains("number") && firstNumber !== undefined && secondNumber === undefined && justCalculated === true && calculatedWithEquals === false) {
        display.value = ""
        display.value += e.target.textContent
        checkDecimal()
        justCalculated = false
    } else if (e.target.classList.contains("number") && firstNumber !== undefined && secondNumber === undefined) {
        display.value += e.target.textContent
        checkDecimal()
        calculatedWithEquals = false
    } else if (e.target.classList.contains("number")) {
        display.value += e.target.textContent
        checkDecimal()
    }

    if (e.target.classList.contains("operator") && firstNumber === undefined) {
        firstNumber = Number(display.value)
        display.value = ""
        operator = e.target.textContent
        checkDecimal()
    } else if (e.target.classList.contains("operator") && firstNumber != undefined && secondNumber === undefined && justCalculated === true) {
        firstNumber = Number(display.value)
        display.value = ""
        justCalculated = false
        operator = e.target.textContent
        checkDecimal()
    } else if (e.target.classList.contains("operator") && firstNumber != undefined && secondNumber === undefined) {
        secondNumber = Number(display.value)
        display.value = ""
        checkDecimal()
    }

    if (e.target.classList.contains("operator") && firstNumber !== undefined && secondNumber !== undefined) {

        const result = operate(firstNumber, operator, secondNumber)

        if (result === "error") {
            alert("Error: Cannot divide by 0")
            clearCalculator()
            return
        }

        display.value = result
        firstNumber = Number(display.value)
        secondNumber = undefined
        justCalculated = true
        calculatedWithEquals = false
        operator = e.target.textContent
        checkDecimal()
    }

    if (e.target.classList.contains("equals") && firstNumber !== undefined && calculatedWithEquals === false) {

        secondNumber = Number(display.value)

        const result = operate(firstNumber, operator, secondNumber)

        if (result === "error") {
            alert("Error: Cannot divide by 0")
            clearCalculator()
            return
        }

        display.value = result
        firstNumber = Number(display.value)
        secondNumber = undefined
        justCalculated = true
        calculatedWithEquals = true
        checkDecimal()
    }

    if (e.target.classList.contains("clear")) {
        clearCalculator()
    }


})