import React from 'react';
import Button from './components/Button'
import './App.css';

export class App extends React.Component {
  
  state ={
    value: null,
    displayValue: '0',
    waitingForOperand: false,
    operator: null
  }

  clearDisplay(){
    this.setState({
      displayValue: '0'
    })
  }

  inputDigit(digit){
    const {displayValue, waitingForOperand } = this.state
    
      if(waitingForOperand){
      this.setState({
        displayValue: String(digit),
        waitingForOperand: false
    })
  } else{
     this.setState({displayValue: displayValue === '0' ? String(digit) : displayValue + digit
    })
  }
}

  inputDot(){
    const { displayValue, waitingForOperand } = this.state 

    if(waitingForOperand){
      this.setState({
        displayValue: '.',
        waitingForOperand: false
      })
    }else if(displayValue.indexOf('.') === -1){
      this.setState({
          displayValue: displayValue + '.',
          waitingForOperand: false
      })
    }
  }

  toggleSign(){
    const {displayValue } = this.state
    
    this.setState({
      displayValue: displayValue.charAt(0) === '-' ? displayValue.substr(1) : '-' + displayValue
    })
  }

  inputPercent(){
    const { displayValue } = this.state 
    const value = parseFloat(displayValue)
    
    this.setState({
      displayValue: String(value / 100)
    })
  }

  performOperation(nextOperator){
    const { displayValue, operator, value } = this.state
    const nextValue = parseFloat(displayValue)

    const operations = {
      '/': (preValue, nextValue) => preValue / nextValue,
      '*': (preValue, nextValue) => preValue * nextValue,
      '+': (preValue, nextValue) => preValue + nextValue,
      '-': (preValue, nextValue) => preValue - nextValue,
      '-': (preValue, nextValue) => preValue - nextValue,
      '=': (preValue, nextValue) => nextValue,
    }
    if(value == null){
      this.setState({
        value: nextValue
      })
    } else if (operator){
      const currentValue = value || 0
      const computedValue = operations[operator](currentValue, nextValue)

    this.setState({
      value: computedValue,
      displayValue: String(computedValue)

    })
  }
    this.setState({
      waitingForOperand: true,
      operator: nextOperator
    })
  }
  render() {
    const {displayValue} = this.state

    return (
      <div className="App">
        <div className="buttonContainer"> 
          <div>
            <div className="resultBox">
              {displayValue}
            </div>
              <div className="funcRow">
                <button className="grayButton" onClick={() => this.clearDisplay()}><Button clear = 'c'/> </button>
                <button className="grayButton" onClick={() => this.toggleSign()}><Button signFlip = '±'/> </button>
                <button className="grayButton" onClick={() => this.inputPercent()}><Button percent = '%'/> </button>
                <button className="orangeButton" onClick={() => this.performOperation('/')}><Button divide = '÷'/></button>
              </div>     
                <div className="row">
                  <button className="lightGrayButton" onClick={() => this.inputDigit(7)}><Button seven = '7'/> </button>
                  <button className="lightGrayButton" onClick={() => this.inputDigit(8)}><Button eight = '8'/></button>
                  <button className="lightGrayButton" onClick={() => this.inputDigit(9)}><Button nine = '9'/> </button>
                  <button className="orangeButton" onClick={() => this.performOperation('*')}><Button multiply = 'x'/></button>
              </div>
              <div className="row">
                <button className="lightGrayButton" onClick={() => this.inputDigit(4)}><Button four = '4'/></button>
                <button className="lightGrayButton" onClick={() => this.inputDigit(5)}><Button five = '5'/></button>
                <button className="lightGrayButton" onClick={() => this.inputDigit(6)}><Button six = '6'/></button>
                <button className="orangeButton" onClick={() => this.performOperation('-')}><Button subtraction = '-'/></button>
              </div>
              <div className="row">
                <button className="lightGrayButton" onClick={() => this.inputDigit(1)}><Button one = '1'/> </button>
                <button className="lightGrayButton" onClick={() => this.inputDigit(2)}><Button two = '2'/> </button>
                <button className="lightGrayButton" onClick={() => this.inputDigit(3)}><Button three = '3'/> </button>
                <button className="orangeButton" onClick={() => this.performOperation('+')}> <Button addition = '+'/></button>
              </div>
              <div className="row">     
                <button className="zeroButton" onClick={() => this.inputDigit(0)}><Button zero = '0'/></button>
                <button className="lightGrayButton" onClick={() => this.inputDot()}> <Button decimal = ''/>.</button>
                <button className="orangeButton" onClick={() => this.performOperation('=')}> <Button equalSign = "="/></button>
              </div>
          </div>
        </div> 
      </div>
    );
  }
}

export default App;
