import React,{useState} from 'react';

import { Button,Col, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
interface Iprops {
  handlelogin: (loginUser: any) => void
  
}
const Login = (Iprops: any) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  
  function inputlusername(e: any) {
    setUserName(e.target.value)
  }
  function inputlpassword(e: any) {
    setPassword(e.target.value)
  }


    return (<>
        {/* <div className="login"><h3>Login</h3>

            <p>Enter UserName:<input type="text"></input><br /><br />
        Enter Password:<input type="text"></input><br /><br /></p> */}
<Form>
  <Form.Group as={Col} controlId="formGridEmail">     
    <Form.Label>User Name </Form.Label>
    <Form.Control type="email" placeholder="Enter email" onChange={inputlusername}/>
  </Form.Group>
  <Form.Group as={Col} controlId="formGridPassword" >
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" onChange={inputlpassword}/>
  </Form.Group>
</Form>
        <Button variant="success" type="button" onClick={()=>Iprops.handlelogin({username:username,password:password})}>Login</Button>
        {Iprops.valid==="error"?<div style={{color:"red"}}>invalid username or password</div>:null}

        {/* </div> */}
    </>

    )
}
export default Login
