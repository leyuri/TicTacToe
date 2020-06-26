import React from 'react';
import Square from './square';

class Board extends React.Component {
    render() {  //JSX
        return(
        <div>
            <Square/>
            <Square/>
            <Square/>
            <Square/>
            <Square/>
            <Square/>
            <Square/>
            <Square/>
            <Square/>
        </div>
        )
    }
}
export default Board;

