import React, { Component } from "react";
import { Form, Button, Row, Col, FormGroup } from "react-bootstrap";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lname: "",
      fname: "",
      email: "",
      password: "",
      birthday: 23,
      birthmonth: "Jun",
      birthyear: 2000,
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
    this.props.updateComponentAppear("signUp");
    event.preventDefault();
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Row>
            <Col>
              <Form.Label>FirstName:</Form.Label>
              <Form.Control
                name="fname"
                type="text"
                value={this.state.fname}
                onChange={this.handleInputChange}
                placeholder="First Name"
              />
            </Col>
            <Col>
              <Form.Label>LastName:</Form.Label>
              <Form.Control
                name="lname"
                type="text"
                value={this.state.lname}
                onChange={this.handleInputChange}
                placeholder="Last Name"
              />
            </Col>
          </Row>
          <Form.Group>
            <Form.Label>Email:</Form.Label>
            <Form.Control
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.handleInputChange}
              placeholder="Email"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Pass:</Form.Label>
            <Form.Control
              name="password"
              type="text"
              value={this.state.password}
              onChange={this.handleInputChange}
              placeholder="New password"
            />
          </Form.Group>
        </Form.Group>
        <Form.Group>
          <Form.Label>Birthday:</Form.Label>
          <Row>
            <Col>
              <Form.Control
                name="birthday"
                as="select"
                value={this.state.birthday}
                onChange={this.handleInputChange}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
                <option>13</option>
                <option>14</option>
                <option>15</option>
                <option>16</option>
                <option>17</option>
                <option>18</option>
                <option>19</option>
                <option>20</option>
                <option>21</option>
                <option>22</option>
                <option>23</option>
              </Form.Control>
            </Col>
            <Col>
              <Form.Control
                name="birthmonth"
                as="select"
                value={this.state.birthmonth}
                onChange={this.handleInputChange}
              >
                <option>Jan</option>
                <option>Feb</option>
                <option>Mar</option>
                <option>Apr</option>
                <option>May</option>
                <option>Jun</option>
                <option>Jul</option>
                <option>Aug</option>
                <option>Sep</option>
                <option>Oct</option>
                <option>Nov</option>
                <option>Dec</option>
              </Form.Control>
            </Col>
          </Row>
        </Form.Group>
        <Button variant="primary" type="submit" value="Submit">
          Submit
        </Button>
      </Form>
    );
  }
}
