//import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import React,{useContext} from 'react'
import { book } from './book';
import OneBook from './OneBook';
import Searching from './Search';
import UserContext from './UserContext';
interface booklistprops {
    list: book[]
}

const BookList: React.FC<booklistprops> = (props) => {
    const {booksArray} =useContext(UserContext);
    
    let book = booksArray.map((book: any, index: any) => {
        // console.log("from booklist")
        // console.log(book.id)
        return (
            <div>
                <Link to={`/${book.id}`}>
                    
                    <OneBook book={book}></OneBook>
                </Link>
            </div>
        )

    })
    return (
        <>
            <div>
                <Searching list={props.list}></Searching>
            </div>
            <div>
                {book}
            </div>
        </>
    )
}

export default BookList

