import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      break: 5,
      session: 25,
      label: 'Session',
      time: '25:00'
    };
  }
  render(){
    return (
      <div id="app">
        <div id="container">
          <div id="length-container">
            <div id="break-container">
              <div id="break-label">Break Length</div>
              <button id="break-decrement"></button>
              <button id="break-increment"></button>
              <div id="break-length">{this.state.break}</div>
              </div>
            <div id="session-container">
              <div id="session-label">Session Length</div>
              <button id="session-decrement"></button>
              <button id="session-increment"></button>
              <div id="session-length">{this.state.session}</div>
            </div>
          </div>
          <div id="display">
            <div id="timer-label">{this.state.label}</div>
            <div id="time-left">{this.state.time}</div>
          </div>
          <div id="button-container">
            <button id="start_stop"></button>
            <button id="reset"></button>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
