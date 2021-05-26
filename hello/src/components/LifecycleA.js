import React, { Component } from "react";
import LifecycleB from "./LifeCycleB";

class LifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "john",
    };
    console.log("LifeCycle A constructior");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleA getDeriverStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifeCycle A component did mount");
  }

  shouldComponentUpdate() {
    console.log("LifeCycle A ShouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifeCycle A getSnapshotBefore Update");
    return null;
  }
  componentDidUpdate() {
    console.log("LifeCycleA componentDId Update");
  }

  changeState = () => {
    this.setState({
      name: "COdeEvotuin",
    });
  };

  render() {
    console.log("LifeCycle A render");
    return (
      <div>
        <div> LifeCycle A</div>
        <button onClick={this.changeState}>Chnage State</button>
        <LifecycleB />
      </div>
    );
  }
}

export default LifecycleA;
