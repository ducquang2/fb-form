import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mail: "",
      password: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    console.log(event);
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    console.log(this.props);
    this.props.updateComponentAppear("login");
    event.preventDefault();
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Label>Email:</Form.Label>
          <Form.Control
            name="mail"
            type="email"
            value={this.state.mail}
            onChange={this.handleInputChange}
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Pass:</Form.Label>
          <Form.Control
            name="password"
            type="text"
            value={this.state.password}
            onChange={this.handleInputChange}
            placeholder="Enter password"
          />
        </Form.Group>
        <Button variant="primary" type="submit" value="Submit">
          Submit
        </Button>
      </Form>
    );
  }
}
