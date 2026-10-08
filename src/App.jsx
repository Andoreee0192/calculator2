import { useState } from 'react'
import './App.css'

function calculateExpression(expression) {
  const tokens = expression.match(/(?:\d+(?:\.\d*)?|\.\d+|[+\-*/])/g)

  if (!tokens) {
    return null
  }

  const numbers = []
  const operators = []

  let currentNumber = ''

  for (const token of tokens) {
    if (['+', '-', '*', '/'].includes(token)) {
      if (currentNumber === '') {
        return null
      }

      numbers.push(Number(currentNumber))
      operators.push(token)
      currentNumber = ''
    } else {
      currentNumber += token
    }
  }

  if (currentNumber === '') {
    return null
  }

  numbers.push(Number(currentNumber))

  // Multiplication and division first
  for (let i = 0; i < operators.length; i++) {
    if (operators[i] === '*' || operators[i] === '/') {
      const first = numbers[i]
      const second = numbers[i + 1]

      if (operators[i] === '/' && second === 0) {
        return null
      }

      if (operators[i] === '*') {
        numbers[i] = first * second
      } else {
        numbers[i] = first / second
      }

      numbers.splice(i + 1, 1)
      operators.splice(i, 1)

      i--
    }
  }

  // Addition and subtraction
  let result = numbers[0]

  for (let i = 0; i < operators.length; i++) {
    if (operators[i] === '+') {
      result += numbers[i + 1]
    } else if (operators[i] === '-') {
      result -= numbers[i + 1]
    }
  }

  return result
}

function App() {
  const [display, setDisplay] = useState('0')
  const [justCalculated, setJustCalculated] = useState(false)

  const addNumber = (number) => {
    if (display === 'Error' || justCalculated) {
      setDisplay(number)
      setJustCalculated(false)
      return
    }

    if (display === '0') {
      setDisplay(number)
    } else {
      setDisplay(display + number)
    }
  }

  const addDecimal = () => {
    if (display === 'Error' || justCalculated) {
      setDisplay('0.')
      setJustCalculated(false)
      return
    }

    const currentNumber = display.split(/[+\-*/]/).pop()

    if (currentNumber.includes('.')) {
      return
    }

    if (/[+\-*/]$/.test(display)) {
      setDisplay(display + '0.')
    } else {
      setDisplay(display + '.')
    }
  }

  const chooseOperator = (selectedOperator) => {
    if (display === 'Error') {
      return
    }

    if (justCalculated) {
      setDisplay(display + selectedOperator)
      setJustCalculated(false)
      return
    }

    if (/[+\-*/]$/.test(display)) {
      setDisplay(display.slice(0, -1) + selectedOperator)
    } else {
      setDisplay(display + selectedOperator)
    }
  }

  const calculate = () => {
    if (display === 'Error' || /[+\-*/]$/.test(display)) {
      return
    }

    const result = calculateExpression(display)

    if (result === null || !Number.isFinite(result)) {
      setDisplay('Error')
      return
    }

    setDisplay(String(result))
    setJustCalculated(true)
  }

  const clearDisplay = () => {
    setDisplay('0')
    setJustCalculated(false)
  }

  return (
    <div className="app">

      <div className="header">
        Calculator of Edward Andrei Suva - DA3A
      </div>

      <div className="calculator">

        <div className="caldisplay">
          {display}
        </div>

        <div className="calbuttons">

          <div className="calrow">
            <button onClick={() => addNumber('7')}>7</button>
            <button onClick={() => addNumber('8')}>8</button>
            <button onClick={() => addNumber('9')}>9</button>
            <button onClick={() => chooseOperator('/')}>÷</button>
          </div>

          <div className="calrow">
            <button onClick={() => addNumber('4')}>4</button>
            <button onClick={() => addNumber('5')}>5</button>
            <button onClick={() => addNumber('6')}>6</button>
            <button onClick={() => chooseOperator('*')}>*</button>
          </div>

          <div className="calrow">
            <button onClick={() => addNumber('1')}>1</button>
            <button onClick={() => addNumber('2')}>2</button>
            <button onClick={() => addNumber('3')}>3</button>
            <button onClick={() => chooseOperator('-')}>-</button>
          </div>

          <div className="calrow">
            <button onClick={clearDisplay}>C</button>
            <button onClick={() => addNumber('0')}>0</button>
            <button onClick={calculate}>=</button>
            <button onClick={() => chooseOperator('+')}>+</button>
          </div>

        </div>

      </div>

    </div>
  )
}

export default App