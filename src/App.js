import React, { Component } from "react";;

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: "",
        pass: ""
      };
  
      this.handleNameChange = this.handleNameChange.bind(this);
      this.handlePassChange = this.handlePassChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleNameChange(event) {
      this.setState({name: event.target.name});
    }
  
    handlePassChange(event) {
      this.setState({pass: event.target.pass});
    }

    handleSubmit(event) {
        alert('An account was submitted: Name is ' + this.state.name + ' pass is ' + this.state.pass);
        event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="email"
              value={this.state.name}
              onChange={this.handleNameChange} />
          </label>
          <br />
          <label>
            Pass:
            <input
              type="text"
              value={this.state.pass}
              onChange={this.handlePassChange} />
          </label>
          < br />
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
export default App;