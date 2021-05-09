import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import AddBook from './components/AddBook'
import reportWebVitals from './reportWebVitals';
import { book } from './components/book';
import BookList from './components/BookList'
import { Redirect } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Login from './components/login'
import Register from './components/register'
import ContactUs from './components/contactus'
import Details from './components/Details'
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
const BookApp = () => {
  const [books, setBook] = useState<book[]>([])
  const [window, setWindow] = useState<boolean>(false)
  const [deletewin, setDeleteWindow] = useState(false)
  const [user, setUser] = useState(false)
  const [userfailed, setUserFailed] = useState("")

  useEffect(() => {
    // let j:any =localStorage.key(localStorage.length-1);
    // for(let i=0;i<=j;i++){
    //   if(localStorage.getItem(i+"")!=null){
    //     setBook(books=>books.concat(JSON.parse(localStorage.getItem(i+"")+"")))
    //     console.log(books)
    //   }
    // }
    // },[]) 
    //http
    if(localStorage.getItem("login")){
      setUser(true);
    }
    fetch("http://localhost:9000/books")
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        throw response;
      })
      .then(data => {
        setBook(data);
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      })
  }, [window, deletewin])
  const handleNewBook = async (newbook: book) => {
    let token = "Bearer " + localStorage.getItem("login");
    console.log("addbook")
    // console.log(newbook);
    // localStorage.setItem((localStorage.length + ""), JSON.stringify(newbook));
    // setBook(books=>books.concat(JSON.parse(localStorage.getItem((localStorage.length-1)+"")+"")));
    // setWindow(true);
    //  console.log(books);
    await fetch("http://localhost:9000/books/add", {
      method: "POST",
      body: JSON.stringify(newbook),
      headers: { "Content-Type": "application/json", "Authorization": token }
     
    })
    console.log(newbook)
    setWindow(true);
  }

  //localstorage
  // const onDelete=(title: String)=> {
  //   console.log("delte");
  //   for (let i = 0; i < localStorage.length; i++) {
  //     if (title === JSON.parse(localStorage.getItem(i + "") + "").title) {

  //        setBook(books.filter((book: any) => book.title !== JSON.parse(localStorage.getItem(i + "") + "").title))

  //       localStorage.removeItem(i + "");
  //     }
  //   }
  //   setDeleteWindow(true)
  // }
  const onDelete = async (id: String) => {
    let token = "Bearer " + localStorage.getItem("login");
    console.log(id);
    
    await fetch(`http://localhost:9000/books/${id}`, {
      method: "DELETE",
      headers: {
        "Authorization": token,
      }
    })
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
    if (valid == "Invalid") {
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
    await fetch("http://localhost:9000/users/registration", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: { "Content-Type": "application/json" }

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
              {user ? <Nav.Link as={Link} to="/addbooks">Add Book</Nav.Link> : null}
              {user ? null : <Nav.Link as={Link} to="/login">Login</Nav.Link>}
              {user ? null : <Nav.Link as={Link} to="/register">Register</Nav.Link>}
              <Nav.Link as={Link} to="/contactus">ContactUs</Nav.Link>
              {user ? <Nav.Link as={Link} to="/" onClick={() => logout()}>LogOut</Nav.Link> : null}
            </Nav>

          </Navbar>
          {/* <div className="navbar navbar-expand-lg navbar-light bg-light">
              <Link to='/' style={{ textDecoration: "underline", marginRight: "50px" }} title="view list">List</Link>
              <Link to='/addbooks' style={{ textDecoration: "underline", marginRight: "50px" }} title="add book">Add Book</Link>
              <Link to='/login' style={{ textDecoration: "underline", marginRight: "50px" }} title="login">Login</Link>
              <Link to='/register' style={{ textDecoration: "underline", marginRight: "50px" }} title="register">Register</Link>
              <Link to='/contactus' style={{ textDecoration: "underline", marginRight: "50px" }} title="contact us">ContactUs</Link>
            </div> */}
          <Switch>
            <Route exact path="/">
              <BookList list={books}></BookList>
            </Route>
            <Route exact path="/addbooks">
              <AddBook handleinput={(newbook: any) => { handleNewBook(newbook) }}></AddBook>
              {window ? <Redirect to='/'></Redirect> : null}
            </Route>
            <Route exact path="/login">
              <Login valid={userfailed} handlelogin={(loginUser: any) => authentication(loginUser)}></Login>
              {window ? <Redirect to='/'></Redirect> : null}
            </Route>
            <Route exact path="/register">
              <Register handleregistration={(newUser: any) => { handleNewUser(newUser) }}></Register>
              {window ? <Redirect to='/login'></Redirect> : null}
            </Route>
            <Route exact path="/contactus">
              <ContactUs></ContactUs>
            </Route>
            <Route exact path="/:title">
              <Details userCheck={user}  list={books} delete={(title) => { onDelete(title) }}></Details>
              {deletewin ? <Redirect to='/'></Redirect> : null}
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>

    <BookApp></BookApp>

  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
