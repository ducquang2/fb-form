import React, { Component } from "react";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signUp: false,
      login: true,
    };
  }

  updateComponentAppear = (componentName) => {
    console.log(componentName);
    if (componentName == "signUp") {
      his.setState({ signUp: false, login: true });
    }

    if (componentName == "login") {
      this.setState({ signUp: true, login: false });
    }
  };

  render() {
    const { signUp, login } = this.state;
    return (
      <div>
        {signUp ? (
          <SignUp updateComponentAppear={this.updateComponentAppear} />
        ) : (
          ""
        )}
        {login ? (
          <Login updateComponentAppear={this.updateComponentAppear} />
        ) : (
          ""
        )}
      </div>
    );
  }
}
export default App;
