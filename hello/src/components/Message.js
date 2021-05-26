import React,{ Component } from 'react';

class Massage extends Component{
    constructor()
    {
        super()
        this.state = {
            message: 'Welcome Visitor'
        }
    }
    changeMassage(){
        this.setState(
            {
                message: 'Thanks for Subscribing'
            }
        );
    };
    render() {
        return (
        <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMassage()} >Subscribe</button>
        </div>
        );
    }
}
export default Massage 