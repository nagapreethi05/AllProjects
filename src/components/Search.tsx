import React, { useState, useEffect } from 'react'
import { book } from './book';
import OneBook from './OneBook';
import { Form, FormControl, Button } from 'react-bootstrap';
interface Props {
    list: book[]
}

const Searching: React.FC<Props> = (props) => {
    const [search, setSearch] = useState<string>("");
    const [searchArray, setSearchArray] = useState<book[]>([])

    useEffect(() => {
        setSearchArray([]);
        props.list.map((book, index) => {
            if (book.title.indexOf(search) >= 0 && search != '') {
                if (!searchArray.find((book) => book.title === search)) {
                    //console.log(book);
                    setSearchArray(searchArray => searchArray.concat(book));
                }
            }
        })
    }, [search])

    const handleChange = (e: any) => {
        setSearch(e.target.value);
    }
    let searchedBook = searchArray.map((book, index) => {
        return (
            <OneBook book={book}></OneBook>
        )
    })
    return (
        <div><br/>
            <input type="email" className="form-control Search" id="exampleFormControlInput1" placeholder="Search By Title" onChange={handleChange}></input>
            {searchedBook}<br/><br/><br/>
        </div>
    )
}

export default Searching