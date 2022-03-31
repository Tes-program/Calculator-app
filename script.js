// Start of the code for the standard calculator

// To store our calculator output
class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
      this.previousOperandTextElement = previousOperandTextElement
      this.currentOperandTextElement = currentOperandTextElement
      this.clear()
    }
  //  A function to clear the calculator
    clear() {
      this.currentOperand = ''
      this.previousOperand = ''
      this.operation = undefined
    }
  // A function to delete the last digit of the current operand
    delete() {
      this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }
  // A function to add a digit to the current operand
    appendNumber(number) {
      if (number === '.' && this.currentOperand.includes('.')) return
      this.currentOperand = this.currentOperand.toString() + number.toString()
    }
  // A function to choose the operators
    chooseOperation(operation) {
      if (this.currentOperand === '') return
      if (this.previousOperand !== '') {
        this.compute()
      }
      this.operation = operation
      this.previousOperand = this.currentOperand
      this.currentOperand = ''
    }
  // A function to compute the result
    compute() {
      let computation
      const prev = parseFloat(this.previousOperand)
      const current = parseFloat(this.currentOperand)
      if (isNaN(prev) || isNaN(current)) return
      switch (this.operation) {
        case '+':
          computation = prev + current
          break
        case '-':
          computation = prev - current
          break
        case '*':
          computation = prev * current
          break
        case '/':
          computation = prev / current
          break
        case 'sin' :
          computation = Math.sin(current)
          break
        case 'cos' :
          computation = Math.cos(current)
          break
        case 'tan' :
          computation = Math.tan(current)
          break
        case 'x^2' :
          computation = current * current
          break
          case 'sinh' :
          computation = Math.sinh(current)
          break
          case 'cosh' :
          computation = Math.cosh(current)
          break
          case 'tanh' :
          computation = Math.tanh(current)
          break
          case 'log' :
            computation = Math.log10(current)
            break
          case 'e^x' :
            computation = Math.exp(current)
            break
          case 'x^y' :
            computation = Math.pow(prev, current)
            break
    
        default:
          return
      }
      this.currentOperand = computation
      this.operation = undefined
      this.previousOperand = ''
    }
  
    getDisplayNumber(number) {
      const stringNumber = number.toString()
      const integerDigits = parseFloat(stringNumber.split('.')[0])
      const decimalDigits = stringNumber.split('.')[1]
      let integerDisplay
      if (isNaN(integerDigits)) {
        integerDisplay = ''
      } else {
        integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
      }
      if (decimalDigits != null) {
        return `${integerDisplay}.${decimalDigits}`
      } else {
        return integerDisplay
      }
    }
  
    updateDisplay() {
      this.currentOperandTextElement.innerText =
        this.getDisplayNumber(this.currentOperand)
      if (this.operation != null) {
        this.previousOperandTextElement.innerText =
          `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
      } else {
        this.previousOperandTextElement.innerText = ''
      }
    }
  }
  
  
  const numberButtons = document.querySelectorAll('[data-number]')
  const operationButtons = document.querySelectorAll('[data-operation]')
  const equalsButton = document.querySelector('[data-equals]')
  const deleteButton = document.querySelector('[data-delete]')
  const allClearButton = document.querySelector('[data-all-clear]')
  const previousOperandTextElement = document.querySelector('[data-previous-operand]')
  const currentOperandTextElement = document.querySelector('[data-current-operand]')
  const brackets = document.querySelector('[data-bracket]')
  const log = document.querySelector('[data-log]')
  const power = document.querySelector('[data-power]')
  const pi = document.querySelector('[data-pie]')
  const e = document.querySelector('[data-log-expotent]')
  const percentage = document.querySelector('[data-percentage]')
  const square = document.querySelector('[data-square]')
  const trigcos = document.querySelector('[data-trig-cos]')
  const trigsin = document.querySelector('[data-trig-sin]')
  const trigtan = document.querySelector('[data-trig-tan]')
  const datadegree = document.querySelector('[data-degree]')
  const dataradian = document.querySelector('[data-radian]')
  const datagradient = document.querySelector('[data-gradient]')
  const trigcosh = document.querySelector('[data-trig-cosh]')
  const trigsinh = document.querySelector('[data-trig-sinh]')
  const trigtanh =  document.querySelector('[data-trig-tanh]')
  const sqrt = document.querySelector('[data-square-root]')


  
  const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)
  
  numberButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.appendNumber(button.innerText)
      calculator.compute()
      calculator.updateDisplay()
    })
  })

  
  
  operationButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.chooseOperation(button.innerText)
      calculator.updateDisplay()
    })
  })
  
  equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
  })
  
  allClearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
  })
  
  deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
  })

  brackets.forEach(button => {
    button.addEventListener('\click', () => {
      calculator.appendNumber(button.innerText)
      calculator.updateDisplay()
    })
  })

  log.forEach(button => {
    button.addEventListener('\click', () => {
      calculator.appendNumber(button.innerText)
      calculator.updateDisplay()
    })
  })

  power.forEach(button => {
    button.addEventListener('\click', () => {
      calculator.appendNumber(button.innerText)
      calculator.updateDisplay()
    })
  })

  pi.forEach(button => {
    button.addEventListener('\click', () => {
      calculator.appendNumber(button.innerText)
      calulator.updateDisplay()
    })
  })

  e.forEach(button => { 
    button.addEventListener('\click', () => {
      calculator.appendNumber(button.innerText)
      calculator.updateDisplay()
    })
  })

  percentage.forEach(button => {
    button.addEventListener('\click', () => {
      calculator.appendNumber(button.innerText)
      calculator.updateDisplay()
    })
  })

  square.forEach(button => {
    button.addEventListener('\click', () => {
      calculator.appendNumber(button.innerText)
      calculator.updateDisplay()
    })
  })

  trigcos.forEach(button => {
    button.addEventListener('\click', () => {
      calculator.appendNumber(button.innerText)
      calculator.updateDisplay()
    })
  })

  trigsin.forEach(button => {
    button.addEventListener('\click', () => {
      calculator.appendNumber(button.innerText)
      calculator.updateDisplay()
    })
  })

  trigtan.forEach(button => {
    button.addEventListener('\click', () => {
      calculator.appendNumber(button.innerText)
      calculator.updateDisplay()
    })
  })

  trigcosh.forEach(button => {
    button.addEventListener('\click', () => {
      calculator.appendNumber(button.innerText)
      calculator.updateDisplay()
    })
  })

  trigsinh.forEach(button => {
    button.addEventListener('\click', () => {
      calculator.appendNumber(button.innerText)
      calculator.updateDisplay()
    })
  })

  trigtanh.forEach(button => {
    button.addEventListener('\click', () => {
      calculator.appendNumber(button.innerText)
      calculator.updateDisplay()
    })
  })

  datasqrt.forEach(button => {
    button.addEventListener('\click', () => {
      calculator.appendNumber(button.innerText)
      calculator.updateDisplay()
    })
  })

  // Functionality forlaptop keyboard usage
  document.addEventListener('keydown', function (event) {
    let patternForNumbers = /[0-9]/g;
    let patternForOperators = /[+\-*\/]/g
    if (event.key.match(patternForNumbers)) {
      event.preventDefault();
      calculator.appendNumber(event.key)
      calculator.updateDisplay()
    }
    if (event.key === '.') {
      event.preventDefault();
      calculator.appendNumber(event.key)
      calculator.updateDisplay()
    }
    if (event.key.match(patternForOperators)) {
      event.preventDefault();
      calculator.chooseOperation(event.key)
      calculator.updateDisplay()
    }
    if (event.key === 'Enter' || event.key === '=') {
      event.preventDefault();
      calculator.compute()
      calculator.updateDisplay()
    }
    if (event.key === "Backspace") {
      event.preventDefault();
      calculator.delete()
      calculator.updateDisplay()
    }
    if (event.key == 'Delete') {
      event.preventDefault();
      calculator.clear()
      calculator.updateDisplay()
    }
  
  });
// End of the code for the standard calculator

// Start of the code for the scientific calculator



  