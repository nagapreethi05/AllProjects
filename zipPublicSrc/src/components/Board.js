import React from 'react'
import Cell from './Cells';
// import values from './Game';
//import AppHeader from './AppHeader';
class Board extends React.Component {
    constructor(props) {
        super(props)       
    }     
    render(){      
        return (  
            <>
            <div className='board'>
                {this.props.cells.map((value,index)=>(
                    <Cell id={index} value={value} onCellClick={this.props.handle} onWinner={this.props.win? this.props.win.array:null}/>
                ))}
            </div>
            </>
        )
    }
}

export default Board
