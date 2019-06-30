import React from 'react';
// import {observable} from "mobx";
// import {observer} from "mobx-react";

// @observer
class Counter extends React.Component{

    // @observable
    count = 0;

    handleIncrement = () => {this.count++}
    handleDecrement = () => {this.count--}

    render() {
        return(
            <div className="counter">
                <h1>{this.count}</h1>
                <button onClick={this.handleIncrement}>+1</button>
                <button onClick={this.handleDecrement}>-1</button>
            </div>
        );
    }

}

export default Counter;
