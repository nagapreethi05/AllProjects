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
            {/* <div className="book">

                <img className="bookimg" src={props.book.cover} title={props.book.title} />
                <span>

                    <h3 className="booktext"><b>Title:{props.book.title}</b></h3>
                    <h3 className="booktext"><strong>Author:</strong>{props.book.author}</h3> */}
            {/* <h3 className="booktext"><strong>Rating:</strong>{props.book.rating}</h3> */}
            {/* <Star value={props.book.rating}></Star>
                    <h3 className="booktext"><strong>Price:</strong>{props.book.price}</h3> */}
            {/* <p className="bookp">Description:{props.book.description}</p> */}
            {/* </span>
            </div> */}

            {/* <div className="card">
                <div className="header">
                    <p>The Header</p>
                </div>
                <div className="container">
                    <p>Some random texts</p>
                    <p>Yet another texts</p>
                    <p>Even more texts</p>
                    <p>I should probably make programming puns</p>
                </div> */}
            {/* </div> */}
        </>
    )
}
export default OneBook;