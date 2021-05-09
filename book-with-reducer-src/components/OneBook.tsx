import react from 'react';
import { book } from './book';
import Star from './Star'
import { Navbar, Nav, Button, Form, Col, Card, FormControl } from 'react-bootstrap';

interface Iprops {
    book: book;
}
const OneBook = (props: Iprops) => {
    return (
        <>
            <Card  className="box" >
                <Card.Img className="box-image" src={props.book.cover} title={props.book.title} />
                <Card.Body className="box-body">
                    <Card.Text>
                        <h4><strong>Title:</strong>{props.book.title}</h4>
                        <h4><strong>Author:</strong>{props.book.author}</h4>
                        <Star value={props.book.rating}></Star>
                        {/* <h4 ><strong>Price:</strong>{props.book.price}</h4> */}
                    </Card.Text></Card.Body>

            </Card>
           
        </>
    )
}
export default OneBook;