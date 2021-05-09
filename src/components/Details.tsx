import react, { useContext } from 'react'
import { useParams } from 'react-router'
// import { book } from './book'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import UserContext from './UserContext';
interface Iprops {   
    delete: () => void
    userCheck: boolean
}
const Details: react.FC<Iprops> = (props: Iprops) => {
    const { id }: any = useParams();
    
    const { booksArray, dispatch } = useContext(UserContext);
    let detailbook = booksArray.map((book, index) => {
        console.log("hi")
        console.log(id)
         console.log(book.id)
        if (book.id == id) {
            console.log("if")
            return (
                <div style={{ textAlign: "center", fontFamily: "Times New Roman", padding: "20px" }}>
                    <img className="detailsimg" src={book.cover}></img>
                    <h1><strong>Title:{book.title}</strong></h1>
                    <h3><strong>Author:</strong>{book.author}</h3>
                    <h3><strong>Rating:</strong>{book.rating}</h3>
                    <h3><strong>Price:</strong>{book.price}</h3>
                    <p style={{ textAlign: "left", fontSize: "20px" }}>Description:
                    <p style={{ lineHeight: "25px", textAlign: "justify" }}>{book.body}</p></p>
                    <Button variant="danger" onClick={() => { dispatch({ type: "DELETE", id: book.id }); props.delete() }}>Delete</Button> 
                </div>
            )
        }
    })
    return (
        <div>{detailbook}</div>
    )
}
export default Details