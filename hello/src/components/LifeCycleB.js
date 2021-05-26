import React, { Component } from "react";

class LifecycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "john",
    };
    console.log("LifeCycle B constructior");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycle B getDeriverStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifeCycle B component did mount");
  }
  shouldComponentUpdate() {
    console.log("LifeCycle B ShouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifeCycle B getSnapshotBefore Update");
    return null;
  }
  componentDidUpdate() {
    console.log("LifeCycle B componentDId Update");
  }

  render() {
    console.log("LifeCycle B render");
    return <div>LifeCycle B</div>;
  }
}

export default LifecycleB;
