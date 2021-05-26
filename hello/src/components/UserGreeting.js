import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    return this.state.isLoggedIn ? (
      <div>Welcome John</div>
    ) : (
      <div>Welcome Tom</div>
    );

    //   let message
    //   if(this.state.isLoggedIn)
    //   {
    //       message = <div>Welcome John</div>
    //   }else{
    //       message = <div>Welcome Tom</div>
    //   }
    //   return <div>{message}</div>

    // if (this.state.isLoggedIn) {
    //   return <div>Welcome John</div>;
    // } else {
    //   return <div>Welcome Tom</div>;
    // }
    // return (
    //     <div>
    //         <div> Welcome John</div>
    //        <div>Welcome tom</div>
    //     </div>
    // )
  }
}

export default UserGreeting;
