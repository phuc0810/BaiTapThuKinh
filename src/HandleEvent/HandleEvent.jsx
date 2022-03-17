//Tạo ra 1 react class component sử dụng:  rcc
import React, { Component } from 'react'

export default class HandleEvent extends Component {


    handleClick = () => {
        alert('Xin chào các bạn');
    }

    showMess = (name) => {
        alert('Xin chào ! ' + name);
    }

    render() {
        return (
            <div className='container'>
                <h3>Handle event</h3>
                <button onClick={this.handleClick}>Show message</button>
                <button onClick={() => {
                    alert('Xin chào các bạn');
                }}>Click me!</button>
                <hr />
                <h3>Handle event param</h3>
                <button onClick={this.showMess.bind(this,'Dũng')}>Show mess</button>
                <button onClick={()=>{
                    this.showMess('Dũng đẹp trai!');
                }}>show mess param</button>
            </div>
        )
    }
}

// function main () {

//     return function (name) {
//         console.log(name);
//     }
// }

// let result = main();
// result('a');

// main()('a');