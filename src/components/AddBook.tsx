import react, { useState, useContext } from 'react';
import { book } from './book'
import Reducer from '../reducer'
import UserContext from './UserContext'
// import { dispatch, action } from "../reducer"
interface Iprops {
    handleinput: () => void
}
// const {booksArray,dispatch}=useContext(UserContext)
const AddBook: react.FC<Iprops> = (props: Iprops) => {
    const { dispatch } = useContext(UserContext)
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [rating, setRating] = useState(0);
    const [price, setPrice] = useState(0);
    const [cover, setCover] = useState("");
    const [body, setDescription] = useState("");
    const inputtitle = (e: any) => {
        setTitle(e.target.value)
    }
    const inputauthor = (e: any) => {
        setAuthor(e.target.value)
    }
    const inputrating = (e: any) => {
        setRating(e.target.value)
    }
    const inputprice = (e: any) => {
        setPrice(e.target.value)
    }
    const inputcover = (e: any) => {
        setCover(e.target.value)
    }
    const inputdescription = (e: any) => {
        setDescription(e.target.value)
    }

    return (
        <div>
            <span>
                <form><br></br>
                    <label className="llabel" >Enter Title</label><input type="text" className="iinput" required onChange={inputtitle}></input><br /><br />
                    <label className="llabel" >Enter Author</label><input type="text" className="iinput" required onChange={inputauthor}></input><br /><br />
                    <label className="llabel" >Enter Rating</label><input type="text" className="iinput" required onChange={inputrating}></input><br /><br />
                    <label className="llabel" >Enter Price</label><input type="text" className="iinput" required onChange={inputprice}></input><br /><br />
                    <label className="llabel" >Enter Cover</label><input type="text" className="iinput" required onChange={inputcover}></input><br /><br />
                    <label className="llabel" >Enter Description</label><textarea className="iinput" required onChange={inputdescription}></textarea><br /><br />
                    <button className="bbutton" type="button" onClick={() => { dispatch({ type: "ADDBOOK", book: { cover: cover, id: title + "123", title: title, author: author, rating: rating, price: price, body: body } }); props.handleinput() }}>submit</button>
                </form>
            </span>
        </div>
    )
} 
export default AddBook;
