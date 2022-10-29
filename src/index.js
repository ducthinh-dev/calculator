import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Key(props) {
  return (
    <button className='key' onClick={props.onClick}>
      {props.value}
    </button>
  )
}

class Keyboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: [0,1,2,3,4,5,6,7,8,9],
      operator: ['+','-','*','/','.','='],
    };
  }

  renderNumberKey(number) {
    return (
      <Key value={this.state.number[number]}/>
    )
  }  

  renderOperatorKey(operator) {
    return (
      <Key value={this.state.operator[operator]}/>
    )
  }

  render() {
    return (
      <>
        <div className='keyboard-row'>
          {this.renderNumberKey(7)}{this.renderNumberKey(8)}{this.renderNumberKey(9)}{this.renderOperatorKey('+')}
        </div>
        <div className='keyboard-row'>
          {this.renderNumberKey(4)}{this.renderNumberKey(5)}{this.renderNumberKey(6)}{this.renderOperatorKey('-')}
        </div>
        <div className='keyboard-row'>
          {this.renderNumberKey(1)}{this.renderNumberKey(2)}{this.renderNumberKey(3)}{this.renderOperatorKey('*')}
        </div>
        <div className='keyboard-row'>
          {this.renderNumberKey(0)}{this.renderOperatorKey('.')}{this.renderOperatorKey('=')}{this.renderOperatorKey('/')}
        </div>
      </>
    )
  }
}

// =======================================================================
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
const lastResults = [];
const pressedKeys = [];
