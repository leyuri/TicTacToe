import React, { Component } from 'react';

class Square extends Component {

    onClick() {
        this.setState({
            value: (this.state.value === "X"? "O" : "X")
        });
    }
    // 이 안에다가 state 를 하면 좋긴 하지만 game이 어떻게 돌아가고 있는지 알기 어려움

    render() {  //JSX
        const { value } = this.props;
        return(
            <button 
            className='square' 
            onClick={() => {this.onClick()}}>{value}
            </button>
        )

    }
}
export default Square;