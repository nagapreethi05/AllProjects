import React from 'react';
// const Timer=(props)=>{
//     class Timer extends React.Component{
// constructor(props){
//     super(props);
//     this.state={
//         timer:0
//     }
// }

//     // let style={
//     //     heigth:'20px',
//     //     width:'50px',
//     //     color:'white',
//     //     border:'1px solid white'
//     // }
//     componentDidMount(){
//         let id=setInterval(()=>{
//             this.setState({
//                 timer:this.state.timer+1,
//             })
//             if(this.state.timer===10){
//                 clearInterval(id);
//             }
//         },1000);

//     }
//     render(){
//     return(
//         <div>
//             <p  >{this.state.timer}</p>
//         </div>
//     )
//     }
// // }

// }
const Timer = (props) => {
    let style = {
        border: '1px solid black',
        heigth: '20px',
        width: '50px',
        textAlign: 'center',
        // position:'static',
        // top:'500px',
        // right:'200px',
        margin: '20px',
        top: '500px',
        borderRadius: '5px'
    }
    return (
        <div >
            <p style={style} id={props.id}>0</p>
        </div>
    )
}
export default Timer;