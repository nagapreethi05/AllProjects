import React from 'react';

function Cell(props) {
    //let value='_';

    let style = {
        color: props.value ? 'black' : 'transparent'
    }
    let value = props.value || '@';
    if (props.onWinner) {
        for (let index of props.onWinner) {
            if (index === props.id) {
                style = {
                    backgroundColor: "#BB86FC",
                };
            }

        }
    }
    return (
        <button onClick={() => props.onCellClick(props.id)}
            style={style} className='cell'>{value}</button>
    );

};

export default Cell