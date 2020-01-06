import React from 'react';
import '../App.css';

class Keypad extends React.Component {
    render() {
        return (
            <div className="buttons">
                <button className="screen">{this.props.result.length < 35 ? this.props.result : this.state.result.slice(0,-1)}</button>
                <br /> 
                <button className="keypad" value="(" onClick={this.props.displayButton}>(</button>
                <button className="keypad" value="CE" onClick={this.props.displayButton}>CE</button>
                <button className="keypad" value=")" onClick={this.props.displayButton}>)</button>
                <button className="keypad" value="C" onClick={this.props.displayButton}>C</button>
                <br />
                <button className="keypad" value="1" onClick={this.props.displayButton}>1</button>
                <button className="keypad" value="2" onClick={this.props.displayButton}>2</button>
                <button className="keypad" value="3" onClick={this.props.displayButton}>3</button>
                <button className="keypad" value="+" onClick={this.props.displayButton}>+</button>
                <br />
                <button className="keypad" value="4" onClick={this.props.displayButton}>4</button>
                <button className="keypad" value="5" onClick={this.props.displayButton}>5</button>
                <button className="keypad" value="6" onClick={this.props.displayButton}>6</button>
                <button className="keypad" value="-" onClick={this.props.displayButton}>-</button>
                <br />
                <button className="keypad" value="7" onClick={this.props.displayButton}>7</button>
                <button className="keypad" value="8" onClick={this.props.displayButton}>8</button>
                <button className="keypad" value="9" onClick={this.props.displayButton}>9</button>
                <button className="keypad" value="*" onClick={this.props.displayButton}>*</button>
                <br />
                <button className="keypad" value="." onClick={this.props.displayButton}>.</button>
                <button className="keypad" value="0" onClick={this.props.displayButton}>0</button>
                <button className="keypad" value="=" onClick={this.props.displayButton}>=</button>
                <button className="keypad" value="/" onClick={this.props.displayButton}>÷</button>
            </div>
        );
    };
};

export default Keypad;