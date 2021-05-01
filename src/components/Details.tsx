import react from 'react'
import {useParams} from 'react-router'
import {book} from './book'
import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
interface Iprops{
    list:book[],
    delete:(title:any)=>void
    
}
const Details:react.FC<Iprops>=(props:Iprops)=>{
    const {title}:any =useParams()
    let detailbook=props.list.map((book,index)=>{
        if(book.title===title){
            return(
                <div style={{textAlign:"center",fontFamily:"Times New Roman", padding:"20px"}}>
                    <img className="detailsimg" src={book.cover}></img>
                    <h1><strong>Title:{book.title}</strong></h1>
                    <h3><strong>Author:</strong>{book.author}</h3>
                    <h3><strong>Rating:</strong>{book.rating}</h3>
                    <h3><strong>Price:</strong>{book.price}</h3>
                    <p style={{textAlign:"left",fontSize:"20px"}}>Description:
                    <p style={{lineHeight:"25px",textAlign:"justify"}}>{book.description}</p></p>
                    <Button variant="danger" onClick={()=>props.delete(book.title)}>Delete</Button>
                </div>
            )
        }
    })
    return(
        <div>{detailbook}</div>
    )
}
export default Details