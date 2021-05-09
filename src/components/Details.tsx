import react from 'react'
import {useParams} from 'react-router'
import {book} from './book'
import { Button } from 'react-bootstrap';
import Star from './Star'
import 'bootstrap/dist/css/bootstrap.min.css'
interface Iprops{
    list:book[],
    delete:(title:any)=>void
    userCheck: boolean
    // book: book;     
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
                    <h3><strong>Rating:</strong> <Star value={book.rating}></Star></h3>
                    <h3><strong>Price:</strong>{book.price}</h3>
                    <p style={{textAlign:"left",fontSize:"20px"}}>Description:
                    <p style={{lineHeight:"25px",textAlign:"justify"}}>{book.body}</p></p>
                    {/* //localstorage */}
                    {/* <Button variant="danger" onClick={()=>props.delete(book.title)}>Delete</Button> */}
                    {/* //mongooes */}
                    {props.userCheck ? <Button variant="danger" onClick={()=>props.delete(book._id)}>Delete</Button>:null}
                </div>
            )
        }
    })
    return(
        <div>{detailbook}</div>
    )
}
export default Details