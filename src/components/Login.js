import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""            
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
        alert('A name was submitted: ' + this.state.username + ' Pass: ' + this.state.password);
        event.preventDefault();
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group >
                    <Form.Label>Name:</Form.Label>
                    <Form.Control
                        name="username"
                        type="email"
                        value={this.state.username}
                        onChange={this.handleInputChange} placeholder="Enter email" />
                </Form.Group>
                <Form.Group >
                    <Form.Label>Pass:</Form.Label>
                    <Form.Control
                        name="password"
                        type="text"
                        value={this.state.password}
                        onChange={this.handleInputChange} placeholder="Enter password" />
                </Form.Group>
                <Button variant="primary" type="submit" value="Submit">Submit</Button>
            </Form>
        );
    }
}