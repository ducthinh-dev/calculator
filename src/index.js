import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function key(props) {
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
      operator: ['+','-','*','/'],
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
      null
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
