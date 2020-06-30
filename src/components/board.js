import React, { Component } from 'react';
import Square from './square';

// Component라는 변수에 component 모듈이 받아짐, 이렇게도 많이 사용
class Board extends Component {
    renderRow(rowNum) {
        return (
            <div className='row'>
                <Square value={rowNum * 3 + 0}/>
                <Square value={rowNum * 3 + 1}/>
                <Square value={rowNum * 3 + 2}/>
            </div>
        )
    }
    render() {  //JSX
        const status = "Next player: X";
        return(
        <div>
            <div className="status">{status}</div>
            {this.renderRow(0)}
            {this.renderRow(1)}
            {this.renderRow(2)}
        </div>
        )
    }
}
export default Board;

