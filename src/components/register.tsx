import React from 'react';
import { Navbar, Nav, Button, Form, Col, FormControl } from 'react-bootstrap';
function Register() {

  return (<>
    {/* <div className="login"><h3>Register</h3>
        <p>Enter UserName:<input type="text"></input><br/><br/>
        Enter Password:<input type="text"></input><br/><br/>
        Confirm Password:<input type="text"></input></p> */}
    <Form>

      <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Row>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm Password" />
        </Form.Group>
      </Form.Row>
    </Form>
    <Button className="style" variant="success">Register</Button>

    {/* </div> */}

  </>

  )
}
export default Register
