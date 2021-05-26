import React, { Component } from 'react'

class ClassClick extends Component {
    ClickHandler(){
        console.log("ClickClass clicked");
    }
    render() {
        return (
            <div>
                <button onClick={this.ClickHandler}>ClassButton</button>
            </div>
        )
    }
}

export default ClassClick
