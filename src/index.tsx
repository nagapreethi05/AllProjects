import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import AddBook from './components/AddBook'
import reportWebVitals from './reportWebVitals';
import { book } from './components/book';
import BookList from './components/BookList'
import { Redirect } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
// import Login from './components/login'
import Register from './components/register'
import ContactUs from './components/contactus'
import Details from './components/Details'
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {UserProvider} from './components/UserContext'
import axios from 'axios'
const BookApp = () => {
  const [books, setBook] = useState<book[]>([])
  const [window, setWindow] = useState<boolean>(false)
  const [deletewin, setDeleteWindow] = useState(false)
  const [user, setUser] = useState(false)
  const [userfailed, setUserFailed] = useState("")

  useEffect(() => {
    //http
    if(localStorage.getItem("login")){
      setUser(true);
    }
    axios.get("http://localhost:9000/books")
      .then(response => {
        setBook(response.data);
        // console.log(data);
      })
      //   if (response.ok) {
      //     return response.json()
      //   }
      //   throw response;
      // })
      // .then(data => {
        // setBook(response.data);
        // console.log(data);
      // })
    
      .catch(err => {
        console.log(err);
      })
  }, [window, deletewin])
  const handleNewBook = async () => {
    // let token = "Bearer " + localStorage.getItem("login");
    // console.log("addbook")
    // await fetch("http://localhost:9000/books/add", {
    //   method: "POST",
    //   body: JSON.stringify(newbook),
    //   headers: { "Content-Type": "application/json", "Authorization": token }
     
    // })
    // console.log(newbook)
    setWindow(true);
  }
  const onDelete = async () => {
    setDeleteWindow(true);
  }
  const authentication = async (loginUser: any) => {
    let auth = await fetch(`http://localhost:9000/users/login/`, {
      method: "POST",
      body: JSON.stringify({ username: loginUser.username, password: loginUser.password }),
      headers: { "Content-Type": "application/json" }
    });
    let valid = await auth.json();
    console.log(valid);
    if (valid === "Invalid") {
      setUser(false);
      setUserFailed("error");
    } else {
      localStorage.setItem("login", valid)
      setUser(true);
      setWindow(true);
      setUserFailed("pass");
    }
  }
  const handleNewUser = async (newUser: any) => {
    console.log("reg")
    await axios.post("http://localhost:9000/users/registration", {
     username:newUser.username,
     password:newUser.password,
     phonenumber:newUser.phonenumber,
     address:newUser.address     

    })
    setUser(true);
    setWindow(true);
  }
  const logout = () => {
    setUser(false);
    localStorage.clear();
  }
  useEffect(() => {
    setWindow(false);
  }, [window])

  useEffect(() => {
    setDeleteWindow(false);
  }, [deletewin])

  return (
    <UserProvider>
    <div>
      <div>
        <h1 className="bookHeader">Book System</h1>
        <hr></hr>
      </div>

      <div >
        <Router>
          <Navbar bg="success" variant="dark">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
             <Nav.Link as={Link} to="/addbooks">Add Book</Nav.Link> 
              {/* {user ? null : <Nav.Link as={Link} to="/login">Login</Nav.Link>}
              {user ? null : <Nav.Link as={Link} to="/register">Register</Nav.Link>} */}
              <Nav.Link as={Link} to="/contactus">ContactUs</Nav.Link>
              {user ? <Nav.Link as={Link} to="/" onClick={() => logout()}>LogOut</Nav.Link> : null}
            </Nav>

          </Navbar>
          <Switch>
            <Route exact path="/">
              <BookList list={books}></BookList>
            </Route>
            <Route exact path="/addbooks">
              <AddBook handleinput={() => { handleNewBook() }}></AddBook>
              {window ? <Redirect to='/'></Redirect> : null}
            </Route>
            {/* <Route exact path="/login">
              <Login valid={userfailed} handlelogin={(loginUser: any) => authentication(loginUser)}></Login>
              {window ? <Redirect to='/'></Redirect> : null}
            </Route>
            <Route exact path="/register">
              <Register handleregistration={(newUser: any) => { handleNewUser(newUser) }}></Register>
              {window ? <Redirect to='/login'></Redirect> : null}
            </Route> */}
            <Route exact path="/contactus">
              <ContactUs></ContactUs>
            </Route>
            <Route exact path="/:id">
              <Details userCheck={user} delete={() => { onDelete() }}></Details>
              {deletewin ? <Redirect to='/'></Redirect> : null}
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
    </UserProvider>
  )
}

ReactDOM.render(
  <React.StrictMode>

    <BookApp></BookApp>

  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
