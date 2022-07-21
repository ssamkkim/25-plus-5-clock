import React from 'react';
import './App.css';
import { FaArrowUp, FaArrowDown, FaPlay, FaRedoAlt } from "react-icons/fa";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      break: 5,
      session: 25,
      label: 'Session',
      time: 25 * 60,
      isPlaying: false,
      timeInterval: undefined
    };
    this.handleInc = this.handleInc.bind(this);
    this.handleDec = this.handleDec.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleStartStop = this.handleStartStop.bind(this);
    this.timeInterval = undefined;
  }

  handleStartStop() {
    if(!this.state.isPlaying) {
      this.setState({
        isPlaying: true
      });
      this.timeInterval = setInterval(() => {

        if(this.state.time === 0) {
          this.setState({
            label: (this.state.label === 'Session') ? 'Break' : 'Session',
            time: (this.state.label === 'Session') ? (this.state.break * 60) : (this.state.session * 60),
          })
        } else {
          this.setState(prevState => ({
            time: prevState.time - 1
          }));
        }
      }, 1000)
    } else {
      clearInterval(this.timeInterval);
      this.setState({
        isPlaying: false 
      });
    }
  }

  componentWillUnmount() {
    clearInterval(this.timeInterval);
  }

  convertTime = (count) => { 
    const mins = Math.floor(count / 60);
    let secs = count % 60; 
    secs = secs < 10 ? ('0'+secs) : secs;
    return `${mins}:${secs}`;
  }

  handleInc(e) {
    if(!this.state.isPlaying) {
      if(e.target.id === "break-increment") {
        if(this.state.break < 60) {
          if(this.state.label === 'Break') {
            this.setState(prevState => ({
              break: prevState.break + 1,
              time: prevState.time + 60
            }));
          } else {
            this.setState(prevState => ({
              break: prevState.break + 1,
            }));
          }
        }
        
      } else if(e.target.id === "session-increment" && this.state.label === 'Session') {
        if(this.state.session < 60) {
          if(this.state.label === 'Session') {
            this.setState(prevState => ({
              session: prevState.session + 1,
              time: prevState.time + 60
            }));
          } else {
            this.setState(prevState => ({
              session: prevState.session + 1,
            }));
          }
        }
      }
  }
  }

  handleDec(e) {
    if(!this.state.isPlaying) {
      if(e.target.id === "break-decrement") {
        if(this.state.break > 1) {
          if(this.state.label === 'Break') {
            this.setState(prevState => ({
              break: prevState.break - 1,
              time: prevState.time - 60
            }));
          } else {
            this.setState(prevState => ({
              break: prevState.break - 1,
            }));
          }
          
        }
      } else if(e.target.id === "session-decrement") {
        if(this.state.session > 1) {
          if(this.state.label === 'Session') {
            this.setState(prevState => ({
              session: prevState.session - 1,
              time: prevState.time - 60
            }));
          } else {
            this.setState(prevState => ({
              session: prevState.session - 1,
            }));
          }
          
        }
      }
    }
  }

  handleReset() {
    clearInterval(this.timeInterval);
    this.setState({
      break: 5,
      session: 25,
      label: 'Session',
      time: 25 * 60,
      isPlaying: false,
    });
  }

  render(){
    return (
      <div id="app">
        <div id="container">
          <div id="length-container">
            <div id="break-container">
              <div id="break-label">Break Length</div>
              <div id="break-control-container">
                <FaArrowDown id="break-decrement" className="button" onClick={this.handleDec} />
                <div id="break-length">{this.state.break}</div>
                <FaArrowUp id="break-increment" className="button" onClick={this.handleInc} />
              </div>
            </div>
            <div id="session-container">
              <div id="session-label">Session Length</div>
              <div id="session-control-container">
                <FaArrowDown id="session-decrement" className="button" onClick={this.handleDec} />
                <div id="session-length">{this.state.session}</div>
                <FaArrowUp id="session-increment" className="button" onClick={this.handleInc} />
              </div>
            </div>
          </div>
          <div id="display">
            <div id="timer-label">{this.state.label}</div>
            <div id="time-left">{this.convertTime(this.state.time)}</div>
          </div>
          <div id="button-container">
            <FaPlay id="start_stop" className="button" onClick={this.handleStartStop} />
            <FaRedoAlt id="reset" className="button" onClick={this.handleReset} />
          </div>
        </div>

      </div>
    );
  }
}

export default App;
