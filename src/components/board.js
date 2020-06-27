import React from 'react';
import Square from './square';

class Board extends React.Component {
    render() {  //JSX
        return(
        <div>
            <div className="status">Next player: X</div>
            <div>
                <Square/>
                <Square/>
                <Square/>
            </div>
            <div>
                <Square/>
                <Square/>
                <Square/>
            </div>
            <div>
                <Square/>
                <Square/>
                <Square/>
            </div>

        </div>
        )
    }
}
export default Board;

