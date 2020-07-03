import React, { Component } from 'react';
import Square from './square';

// Component라는 변수에 component 모듈이 받아짐, 이렇게도 많이 사용
class Board extends Component {

    // constructor에 props를 받는 이유는 바깥에서 받은 porps 가 construtor로 들어오고 있다. 
    constructor(props) {
        super(props)
        // super, 상위 컴포넌트 클래스에 생성자가 자동으로 불려지니까 불려진 것이고 , this.props에 잘 받아왔겠지..
        // 하지만 지금은 직접 constructor를 만드니까 따로 만들어줘야 함

        this.state = {
            squares: Array(9).fill(0)
        };
    }

    renderSquare(no) {
        return (<Square value={this.state.squares[no]}/>)
    }

    renderRow(rowNum) {
        return (
            <div className='row'>
                {this.renderSquare(rowNum * 3 + 0)}
                {this.renderSquare(rowNum * 3 + 1)}
                {this.renderSquare(rowNum * 3 + 2)}
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

