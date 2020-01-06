import React from 'react';
import './App.css';
import Keypad from './components/Keypad';

class App extends React.Component {
  state = {
    result: []
  };

  handleClick = (button) => {
    if (button.target.value === "=") {
      this.calculate();
    } else if (button.target.value === "C") {
      this.reset();
    } else if (button.target.value === "CE") {
      this.backspace();
    } else {
      this.setState({
        result: this.state.result + button.target.value
      });
    }
  };

  calculate = () => {
    let result = this.state.result;
    if (result) {
      result = eval(result);
      result = JSON.stringify(result);
      this.setState({
        result: [result]
      });
    }
  };

  reset = () => {
    this.setState({
      result: []
    });
  };

  backspace = () => {
    this.setState({
      result: this.state.result.toString().substring(0, this.state.result.length - 1)
    });
  };

  render() {
    return (
      <div className="container">
        <div className="jumbotron jumbotron-fluid">
          <h1>Simple Calculator</h1>
        </div>
        <Keypad
        displayButton={this.handleClick}
        result={this.state.result}
        />
      </div>
    );
  };
};

export default App;
