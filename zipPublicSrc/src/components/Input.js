import React from 'react';
class Input extends React.Component{
    constructor(props){
        super(props)
        this.state={
            player:""
        }
    }
    handleChange=(e)=>{
        this.setState({player:e.target.value})
    }
    render(){
        return(
            <>
            <label>{this.props.label}</label>
            <input type="text" value={this.state.player} onChange={this.handleChange}></input>
            <button className="inputButton" onClick={()=>this.props.handleName(this.state.player,this.props.label)}>submit</button>                       
            </>
        )
    }
}

export default Input;