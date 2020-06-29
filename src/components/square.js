import React, { Component } from 'react';

class Square extends Component {
    //this.props = {value: "1"}

    render() {  //JSX
        const { value } = this.props;
        this.props.value = 1;
        return(
            <button className='square'>{value}</button>
        )

    }
}
export default Square;