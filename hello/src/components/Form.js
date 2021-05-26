import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      comments: '',
      topic: 'React',
    };
  }

  handleUserName = (event) => {
        this.setState({
            username: event.target.value
        })
  };
  handleTextArea = (event) =>{
      this.setState({
          comments: event.target.value
      })
  }
  selectChangeHandler = (event) =>{
      this.setState({
          topic: event.target.value
      })
  }
  handleSubmit = event =>{
      alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
      event.preventDefault()
  }
  render() {
      const{username , comments , topic} = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={this.handleUserName}
          />
        </div>
        <div>
            <label>Comments</label>
                <textarea value = {comments}
                onChange={this.handleTextArea}></textarea>    
        </div>
        <div>
            <label>Topic</label>
            <select value={topic} onChange={this.selectChangeHandler}>
            <option value="React">React</option>
            <option value="Angular">Angular</option>
            <option value="Vue">Vue</option>
            </select>
        </div>
       <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
