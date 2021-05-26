import React, { Component } from 'react'

class LifecycleB extends Component {
   constructor(props) {
       super(props)
   
       this.state = {
            name: 'john'
       }
       console.log("LifeCycle B constructior");
   }
   static getDerivedStateFromProps(props, state){
    console.log('LifeCycle B getDeriverStateFromProps');
    return null;
   }

   componentDidMount(){
       console.log('LifeCycle B component did mount');
   }
   
    render() {
        console.log('LifeCycle B render');
        return (
            <div>
              LifeCycle B  
            </div>
        )
    }
}

export default LifecycleB
