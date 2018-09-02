import React, {Component} from 'react';

class View extends React.Component {
    constructor(props) {
        super(props);
        this.state = {inputValue: ''}
    }

    render() {

        return (
            <div className="calc">
                <input type="text" className="result" value={this.state.inputValue} disabled='true'/>
                <div className="row">
                    <button value="1" className="1" onClick={this.show}>1</button>
                    <button value="2" className="2" onClick={this.show}>2</button>
                    <button value="3" className="3" onClick={this.show}>3</button>
                </div>
                <div className="row">
                    <button value="4" className="4" onClick={this.show}>4</button>
                    <button value="5" className="5" onClick={this.show}>5</button>
                    <button value="6" className="6" onClick={this.show}>6</button>
                </div>
                <div className="row">
                    <button value="7" className="7" onClick={this.show}>7</button>
                    <button value="8" className="8" onClick={this.show}>8</button>
                    <button value="9" className="9" onClick={this.show}>9</button>
                </div>
                <div className="row">
                    <button value="+" className="plus" onClick={this.show}>+</button>
                    <button value="-" className="minus" onClick={this.show}>-</button>
                    <button value="*" className="multiply" onClick={this.show}>*</button>
                </div>
                <div className="row">
                    <button value="/" className="divide" onClick={this.show}>/</button>
                    <button value="c" className="clear" onClick={this.delete}>C</button>
                    <button value="=" className="equal" onClick={this.count}>=</button>
                </div>
            </div>
        )
    }

    //click and show on input
    show = (e) => {
        inputValue: this.setState({inputValue: this.state.inputValue +  e.target.value});

    };

    //click = and count
    count = () => {
        const result = eval(this.state.inputValue);
        this.setState({inputValue: result.toString()});
    };

    //click on C and cut one sign
    delete = () => {
        inputValue: this.setState({inputValue: this.state.inputValue.slice(0,-1)});
    };



}

export default View;