import React, { Component } from 'react'
import LifecycleB from './LifeCycleB';

class LifecycleA extends Component {
   constructor(props) {
       super(props)
   
       this.state = {
            name: 'john'
       }
       console.log("LifeCycle A constructior");
   }
   static getDerivedStateFromProps(props, state){
    console.log('LifeCycleA getDeriverStateFromProps');
    return null;
   }

   componentDidMount(){
       console.log('LifeCycle A component did mount');
   }
   
    render() {
        console.log('LifeCycle A render');
        return (
            <div>
             <div> LifeCycle A</div>  
             <LifecycleB/>
            </div>
        )
    }
}

export default LifecycleA
