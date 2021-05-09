//import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import React from 'react'
import { book } from './book';
import OneBook from './OneBook';
import Searching from './Search';

interface props {
    list: book[]
}

const BookList: React.FC<props> = (props: any) => {
    let book = props.list.map((book: any, index: any) => {
        return (
            <div>
                <Link to={`/${book.title}`}>
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

// class BookList extends Component<Props> {

//     render() {

//             let book=this.props.list.map((book,index)=>{
//                 return(
//                     <div>
//                         <Link to={`/${book.title}`}>
//                     <OneBook book={book}></OneBook>
//                     </Link>
//                     </div>
//                 )

//             })   
//             return (
//             <div>
//                 {book}
//             </div>
//         )
//     }
// }




 //export default BookList