import React from 'react';

import { Navbar, Nav, Button,Col, Form, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
function Login() {

    return (<>
        {/* <div className="login"><h3>Login</h3>

            <p>Enter UserName:<input type="text"></input><br /><br />
        Enter Password:<input type="text"></input><br /><br /></p> */}
<Form>
  <Form.Group as={Col} controlId="formGridEmail">     
    <Form.Label>Email </Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>
  <Form.Group as={Col} controlId="formGridPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
</Form>
        <Button variant="success">Login</Button>
        

        {/* </div> */}
    </>

    )
}
export default Login
