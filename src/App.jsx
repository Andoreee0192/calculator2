import { useState } from 'react'
import './App.css'

function App() {
  const [display, setDisplay] = useState('0')
  const [firstNumber, setFirstNumber] = useState(null)
  const [operator, setOperator] = useState(null)
  const [waitingForNumber, setWaitingForNumber] = useState(false)

  const addNumber = (number) => {
    if (display === 'Edward Andrei Suva' || display === 'Error') {
      setDisplay(number)
      return
    }

    if (waitingForNumber) {
      setDisplay(number)
      setWaitingForNumber(false)
    } else if (display === '0') {
      setDisplay(number)
    } else {
      setDisplay(display + number)
    }
  }

  const chooseOperator = (selectedOperator) => {
    if (display === 'Edward Andrei Suva' || display === 'Error') {
      return
    }

    const currentNumber = Number(display)

    if (firstNumber === null) {
      setFirstNumber(currentNumber)
    }

    setOperator(selectedOperator)
    setWaitingForNumber(true)
  }

  const calculate = () => {
    if (
      firstNumber === null ||
      operator === null ||
      display === 'Edward Andrei Suva'
    ) {
      return
    }

    const secondNumber = Number(display)
    let result

    if (operator === '+') {
      result = firstNumber + secondNumber
    } else if (operator === '-') {
      result = firstNumber - secondNumber
    } else if (operator === '*') {
      result = firstNumber * secondNumber
    } else if (operator === '/') {
      if (secondNumber === 0) {
        setDisplay('Error')
        setFirstNumber(null)
        setOperator(null)
        setWaitingForNumber(false)
        return
      }

      result = firstNumber / secondNumber
    }

    setDisplay(String(result))
    setFirstNumber(null)
    setOperator(null)
    setWaitingForNumber(false)
  }

  const clearDisplay = () => {
    setDisplay('0')
    setFirstNumber(null)
    setOperator(null)
    setWaitingForNumber(false)
  }

  const showFullName = () => {
    setDisplay('Edward Andrei Suva')
    setFirstNumber(null)
    setOperator(null)
    setWaitingForNumber(false)
  }

  return (
    <div className="app">

      <div className="header">
        Calculator of Edward Andrei Suva - DA3A
      </div>

      <div className="calculator">

        <div className={`caldisplay ${display.length > 12 ? 'long-display' : ''}`}>
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

        <button className="surname-button" onClick={showFullName}>
          Suva
        </button>

      </div>

    </div>
  )
}

export default App