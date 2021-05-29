import React, { Component } from 'react'

 class ParentComp extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name: "john"
         }
     }
     componentDidMount(){
         setInterval(() => {
             this.setState({
                 name: "john"
             })
         },2000)
     }
     
    render() {
        console.log("Parent Comp render");
        return (
            <div>
                Parent Component
                {/* <RegComp name={this.state.name}/>
                <PureComp name = {this.state.name}/> */}
                {/* <MemoComp name = {this.state.name} /> */}
            </div>
        )
    }
}

export default ParentComp
