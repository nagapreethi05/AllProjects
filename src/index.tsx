import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import AddBook from './components/AddBook'
import reportWebVitals from './reportWebVitals';
import { book } from './components/book';
import BookList from './components/BookList'
import { Redirect, useHistory } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Login from './components/login'
import Register from './components/register'
import ContactUs from './components/contactus'
import Details from './components/Details'
import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
const BookApp=()=>{
const [books,setBook]=useState<book[]>([])
const [window,setWindow]=useState<boolean>(false)
const [deletewin,setDeleteWindow]=useState(false)

useEffect(()=>{
let j:any =localStorage.key(localStorage.length-1);
for(let i=0;i<=j;i++){
  if(localStorage.getItem(i+"")!=null){
    setBook(books=>books.concat(JSON.parse(localStorage.getItem(i+"")+"")))
    console.log(books)
  }
}
},[]) 
//http
// fetch("http://localhost:4000/books")
// .then(response=>{
//   if(response.ok){
//     return response.json()
//   }
//   throw response;
// })
// .catch(err=>{
//   console.log(err);
// })
// },[])
const handleNewBook=(newbook: book) =>{
    console.log(newbook);
    localStorage.setItem((localStorage.length + ""), JSON.stringify(newbook));
    setBook(books=>books.concat(JSON.parse(localStorage.getItem((localStorage.length-1)+"")+"")));
    setWindow(true);
     console.log(books);
  }
  const onDelete=(title: String)=> {
    console.log("delte");
    for (let i = 0; i < localStorage.length; i++) {
      if (title === JSON.parse(localStorage.getItem(i + "") + "").title) {
        
         setBook(books.filter((book: any) => book.title !== JSON.parse(localStorage.getItem(i + "") + "").title))
        
        localStorage.removeItem(i + "");
      }
    }
    setDeleteWindow(true)
  }
  useEffect(()=>{
    setWindow(false);

  },[window])
  
  useEffect(()=>{
    setDeleteWindow(false);
  },[deletewin])

// interface Istate {
//   books: book[];
//   window: boolean;
// }

// class BookApp extends React.Component<{}, Istate>{
//   state: Istate = {
//     books: [],
//     window: false
//   }
//   constructor(props: any) {
//     super(props);
//   }
//   componentWillMount() {
//     console.log("mount")
//     for (let i = 0; i < localStorage.length; i++) {
//       this.state.books.push(JSON.parse(localStorage.getItem(i + "") + ""))
//       console.log(this.state.books)
//     }
//   }
//   changeWindow() {
//     this.setState({
//       window: false
//     })
//   }
//   handleNewBook(newbook: book) {
//     console.log(newbook);
//     localStorage.setItem((localStorage.length + ""), JSON.stringify(newbook));
//     this.setState({
//       books: this.state.books.concat(JSON.parse(localStorage.getItem((localStorage.length - 1) + "") + "")),
//       window: true,
//     })
//   }
//   onDelete(title: String) {
//     console.log("delte");
//     for (let i = 0; i < localStorage.length; i++) {
//       if (title === JSON.parse(localStorage.getItem(i + "") + "").title) {
//         this.setState({
//           books: this.state.books.filter((book: any) => book.title !== JSON.parse(localStorage.getItem(i + "") + "").title)
//         })
//         localStorage.removeItem(i + "");
//       }
//     }
//     this.setState({
//       window: true
//     })
//   }

//   render() {
//     if (this.state.window) {
//       this.setState({
//         window: false
//       })
//     }
//888888888888888888888888888888888888888888888888
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
                <Nav.Link as={Link} to="/addbooks">Add Book</Nav.Link>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                <Nav.Link as={Link} to="/register">Register</Nav.Link>
                <Nav.Link as={Link} to="/contactus">ContactUs</Nav.Link>
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
                <AddBook handleinput={(newbook: any) => {handleNewBook(newbook) }}></AddBook>
                {window ? <Redirect to='/'></Redirect> : null}
              </Route>
              <Route exact path="/login">
                <Login></Login>
              </Route>
              <Route exact path="/register">
                <Register></Register>
              </Route>
              <Route exact path="/contactus">
                <ContactUs></ContactUs>
              </Route>
              <Route exact path="/:title">
                <Details list={books} delete={(title) => {onDelete(title) }}></Details>
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
