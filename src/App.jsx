import { useState } from 'react'
import './App.css'

function App() {
  const [display, setDisplay] = useState('0')
  const [firstNumber, setFirstNumber] = useState(null)
  const [operator, setOperator] = useState(null)
  const [newNumber, setNewNumber] = useState(false)

  const addNumber = (number) => {
    if (newNumber || display === '0' || display === 'Error') {
      setDisplay(number)
      setNewNumber(false)
    } else {
      setDisplay(display + number)
    }
  }

  const clearDisplay = () => {
    setDisplay('0')
    setFirstNumber(null)
    setOperator(null)
    setNewNumber(false)
  }

  const addDecimal = () => {
    if (display === 'Error') {
      setDisplay('0.')
      setNewNumber(false)
    } else if (newNumber) {
      setDisplay('0.')
      setNewNumber(false)
    } else if (!display.includes('.')) {
      setDisplay(display + '.')
    }
  }

  const chooseOperator = (op) => {
    if (display === 'Error') return

    setFirstNumber(Number(display))
    setOperator(op)
    setNewNumber(true)
  }

  const calculate = () => {
    if (firstNumber === null || operator === null) return

    const secondNumber = Number(display)
    let result

    if (operator === '+') {
      result = firstNumber + secondNumber
    }

    if (operator === '-') {
      result = firstNumber - secondNumber
    }

    if (operator === '*') {
      result = firstNumber * secondNumber
    }

    if (operator === '/') {
      if (secondNumber === 0) {
        result = 'Error'
      } else {
        result = firstNumber / secondNumber
      }
    }

    setDisplay(String(result))
    setFirstNumber(null)
    setOperator(null)
    setNewNumber(true)
  }

  const changeSign = () => {
    if (display !== 'Error') {
      setDisplay(String(Number(display) * -1))
    }
  }

  const percentage = () => {
    if (display !== 'Error') {
      setDisplay(String(Number(display) / 100))
    }
  }

  return (
    <div className="app">

      <div className="topbar">
        <div className="brand">
          TETRIS CALCULATOR
        </div>

        <div className="student">
          Edward Andrei Suva - DA3A
        </div>
      </div>

      <div className="game-area">

        <div className="side-panel left-panel">
          <div className="panel-title">
            NEXT
          </div>

          <div className="mini-board">
            <div className="tetris-piece t-piece">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="panel-title">
            SCORE
          </div>

          <div className="score">
            012450
          </div>

          <div className="panel-title">
            LEVEL
          </div>

          <div className="score">
            07
          </div>
        </div>

        <div className="calculator-shell">

          <div className="screen-frame">
            <div className="screen-label">
              SCORE DISPLAY
            </div>

            <div className="caldisplay">
              {display}
            </div>
          </div>

          <div className="calbuttons">

            <div className="calrow">
              <button
                className="btn red"
                onClick={clearDisplay}
              >
                AC
              </button>

              <button
                className="btn purple"
                onClick={changeSign}
              >
                +/-
              </button>

              <button
                className="btn green"
                onClick={percentage}
              >
                %
              </button>

              <button
                className="btn orange"
                onClick={() => chooseOperator('/')}
              >
                ÷
              </button>
            </div>

            <div className="calrow">
              <button
                className="btn cyan"
                onClick={() => addNumber('7')}
              >
                7
              </button>

              <button
                className="btn cyan"
                onClick={() => addNumber('8')}
              >
                8
              </button>

              <button
                className="btn cyan"
                onClick={() => addNumber('9')}
              >
                9
              </button>

              <button
                className="btn yellow"
                onClick={() => chooseOperator('*')}
              >
                ×
              </button>
            </div>

            <div className="calrow">
              <button
                className="btn cyan"
                onClick={() => addNumber('4')}
              >
                4
              </button>

              <button
                className="btn cyan"
                onClick={() => addNumber('5')}
              >
                5
              </button>

              <button
                className="btn cyan"
                onClick={() => addNumber('6')}
              >
                6
              </button>

              <button
                className="btn orange"
                onClick={() => chooseOperator('-')}
              >
                -
              </button>
            </div>

            <div className="calrow">
              <button
                className="btn cyan"
                onClick={() => addNumber('1')}
              >
                1
              </button>

              <button
                className="btn cyan"
                onClick={() => addNumber('2')}
              >
                2
              </button>

              <button
                className="btn cyan"
                onClick={() => addNumber('3')}
              >
                3
              </button>

              <button
                className="btn green"
                onClick={() => chooseOperator('+')}
              >
                +
              </button>
            </div>

            <div className="calrow">
              <button
                className="btn cyan zero"
                onClick={() => addNumber('0')}
              >
                0
              </button>

              <button
                className="btn purple"
                onClick={addDecimal}
              >
                .
              </button>

              <button
                className="btn red"
                onClick={calculate}
              >
                =
              </button>
            </div>

          </div>
        </div>

        <div className="side-panel right-panel">
          <div className="panel-title">
            HOLD
          </div>

          <div className="mini-board">
            <div className="tetris-piece l-piece">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="panel-title">
            LINES
          </div>

          <div className="score">
            032
          </div>

          <div className="controls">
            <div>◀ MOVE</div>
            <div>▶ MOVE</div>
            <div>▼ DROP</div>
            <div>↻ ROTATE</div>
          </div>
        </div>

      </div>

      <div className="footer">
        BLOCK SYSTEM ONLINE
      </div>

    </div>
  )
}

export default App