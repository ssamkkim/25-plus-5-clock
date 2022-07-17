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
    this.handleInc = this.handleInc.bind(this);
    this.handleDec = this.handleDec.bind(this);
  }

  handleInc(e) {
    if(e.target.id === "break-increment") {
      this.setState(prevState => ({
        break: prevState.break + 1,
      }));
    } else if(e.target.id === "session-increment") {
      this.setState(prevState => ({
        session: prevState.session + 1,
      }));
    }
  }

  handleDec(e) {
    if(e.target.id === "break-decrement") {
      if(this.state.break > 1) {
        this.setState(prevState => ({
          break: prevState.break - 1,
        }));
      }
    } else if(e.target.id === "session-decrement") {
      if(this.state.session > 1) {
        this.setState(prevState => ({
          session: prevState.session - 1,
        }));
      }
    }
  }

  render(){
    return (
      <div id="app">
        <div id="container">
          <div id="length-container">
            <div id="break-container">
              <div id="break-label">Break Length</div>
              <button id="break-decrement" onClick={this.handleDec}></button>
              <button id="break-increment" onClick={this.handleInc}></button>
              <div id="break-length">{this.state.break}</div>
              </div>
            <div id="session-container">
              <div id="session-label">Session Length</div>
              <button id="session-decrement" onClick={this.handleDec}></button>
              <button id="session-increment" onClick={this.handleInc}></button>
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
