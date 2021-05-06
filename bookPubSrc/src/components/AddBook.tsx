import react, { useState } from 'react';
import { book } from './book'
interface Iprops {
    handleinput: (newbook: book) => void
}
const AddBook = (Iprops: any) => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [rating, setRating] = useState(0);
    const [price, setPrice] = useState(0);
    const [cover, setCover] = useState("");
    const [body, setDescription] = useState("");
    function inputtitle(e: any) {
        setTitle(e.target.value)
    }
    function inputauthor(e: any) {
        setAuthor(e.target.value)
    }
    function inputrating(e: any) {
        setRating(e.target.value)
    }
    function inputprice(e: any) {
        setPrice(e.target.value)
    }
    function inputcover(e: any) {
        setCover(e.target.value)
    }
    function inputdescription(e: any) {
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
                    <button className="bbutton" type="button" onClick={() => Iprops.handleinput({ cover: cover, title: title, author: author, rating: rating, price: price, body: body })}>submit</button>
                </form>
            </span>
        </div>
    )
}
// class AddBook extends react.Component<Iprops, book>{
//     state: book = {
//         cover: "",
//         title: "",
//         author: "",
//         rating: 0,
//         price: 0,
//         description: ""

//     }
//     render() {
//         const inputcover = (e: any) => {
//             this.setState({
//                 cover: e.target.value,
//             })
//         }
//         const inputtitle = (e: any) => {
//             this.setState({
//                 title: e.target.value,
//             })
//         }
//         const inputauthor = (e: any) => {
//             this.setState({
//                 author: e.target.value,
//             })
//         }
//         const inputrating = (e: any) => {
//             this.setState({
//                 rating: e.target.value,
//             })
//         }
//         const inputprice = (e: any) => {
//             this.setState({
//                 price: e.target.value,
//             })
//         }
//         const inputdescription = (e: any) => {
//             this.setState({
//                 description: e.target.value,
//             })
//         }
//         return (
//             <div>
//                 <span>
//                     <form><br></br>
//                         <label className="llabel" >Enter Title</label><input type="text" className="iinput" required onChange={inputtitle}></input><br/><br />
//                         <label className="llabel" >Enter Author</label><input type="text" className="iinput" required onChange={inputauthor}></input><br/><br />
//                         <label className="llabel" >Enter Rating</label><input type="text" className="iinput" required onChange={inputrating}></input><br/><br />
//                         <label className="llabel" >Enter Price</label><input type="text" className="iinput" required onChange={inputprice}></input><br/><br />
//                         <label className="llabel" >Enter Cover</label><input type="text" className="iinput" required onChange={inputcover}></input><br/><br />
//                         <label className="llabel" >Enter Description</label><textarea className="iinput" required onChange={inputdescription}></textarea><br/><br />
//                         <button className="bbutton" type="button" onClick={() => this.props.handleinput(this.state)}>submit</button>
//                     </form>
//                 </span>
//             </div>
//         )
//     }
// }
export default AddBook;
