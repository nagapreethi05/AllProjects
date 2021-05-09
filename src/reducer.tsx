import React from 'react'
import { book } from './components/book';
type Action =
    | { type: "ADDBOOK", book: book }
    | { type: "DELETE", id: book }
    | { type: "LIST", book: book }
const reducer = (state: book[], action: Action): any => {
    switch (action.type) {
        case "LIST":
            return state
        case "ADDBOOK":
            return [...state.concat(action.book)]
        case "DELETE":
            return [...state.filter((book) => book.id !== action.id)]
        default:
            return state
    }
}
export default reducer