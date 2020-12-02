import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lname: "",
            fname: "",
            email: "",
            password: "",
            birth: 1,
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
        alert('A name was submitted: ' + this.state.fname + " " + this.state.lname + ' Pass: ' + this.state.password + " Email: " + this.state.email);
        event.preventDefault();
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group >
                    <Form.Label>FirstName:</Form.Label>
                    <Form.Control
                        name="fname"
                        type="text"
                        value={this.state.fname}
                        onChange={this.handleInputChange} placeholder="First Name" />
                </Form.Group>

                <Form.Group >
                    <Form.Label>LastName:</Form.Label>
                    <Form.Control
                        name="lname"
                        type="text"
                        value={this.state.lname}
                        onChange={this.handleInputChange} placeholder="Last Name" />
                </Form.Group>

                <Form.Group >
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                        name="email"
                        type="email"
                        value={this.state.email}
                        onChange={this.handleInputChange} placeholder="Email" />
                </Form.Group>

                <Form.Group >
                    <Form.Label>Pass:</Form.Label>
                    <Form.Control
                        name="password"
                        type="text"
                        value={this.state.password}
                        onChange={this.handleInputChange} placeholder="New password" />
                </Form.Group>

                <Form.Group >
                    <Form.Label>Birthday:</Form.Label>
                    <Form.Control
                        name="birth"
                        as="select"
                        value={this.state.birth}
                        onChange={this.handleInputChange}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit" value="Submit">Submit</Button>
            </Form>
        );
    }
}