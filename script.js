class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement

    }
// Function for the clear button
    clear() {
        this.currentOperand = ""
        this.previousOperand = ""
        this.operation = undefined

    }
// Function for the delete button
    delete() {

    }
// Function for the number inputs
    appendNumber(number) {
        if (number === '_' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + this.number.toString()

    }
// Function for each operator
    chooseOperation(operation) {

    }
// Function for computing inputs 
    compute(){

    }
// Function to display inputs and changes
    updateDisplay() {
        this.currentOperandTextElement.innerText =this.currentOperand

    }

}

// To select all of our data-number attributes with a const numberButtons
const numberButtons = document.querySelectorAll('[data-number]')
// To select all of our data-operations attributes with a const operationsButton
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')


const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})