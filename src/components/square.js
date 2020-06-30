import React, { Component } from 'react';

class Square extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: null
        };
    }

    onClick() {
        this.setState({
            value: (this.state.value === "X"? "O" : "X")
        });
    }

    render() {  //JSX
        const { value } = this.state;
        return(
            <button 
            className='square' 
            onClick={() => {this.onClick()}}>{value}
            </button>
        )

    }
}
export default Square;