import { useState } from 'react'
import './App.css'

function App() {
  const [display, setDisplay] = useState('0')

  const addValue = (value) => {
    if (display === '0') {
      setDisplay(value)
    } else {
      setDisplay(display + value)
    }
  }

  const clearDisplay = () => {
    setDisplay('0')
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
            <button onClick={clearDisplay}>AC</button>
            <button>+/-</button>
            <button>%</button>
            <button onClick={() => addValue('/')}>/</button>
          </div>

          <div className="calrow">
            <button onClick={() => addValue('7')}>7</button>
            <button onClick={() => addValue('8')}>8</button>
            <button onClick={() => addValue('9')}>9</button>
            <button onClick={() => addValue('*')}>*</button>
          </div>

          <div className="calrow">
            <button onClick={() => addValue('4')}>4</button>
            <button onClick={() => addValue('5')}>5</button>
            <button onClick={() => addValue('6')}>6</button>
            <button onClick={() => addValue('-')}>-</button>
          </div>

          <div className="calrow">
            <button onClick={() => addValue('1')}>1</button>
            <button onClick={() => addValue('2')}>2</button>
            <button onClick={() => addValue('3')}>3</button>
            <button onClick={() => addValue('+')}>+</button>
          </div>

          <div className="calrow">
            <button
              className="zero"
              onClick={() => addValue('0')}
            >
              0
            </button>

            <button onClick={() => addValue('.')}>.</button>

            <button>=</button>
          </div>

        </div>

      </div>

    </div>
  )
}

export default App