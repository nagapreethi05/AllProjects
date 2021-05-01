import React from 'react';

const AppHeader = (props) => {
    console.log('args', props);
    let headerStyle = {
        textAlign: "center",
        fontSize: "50px",
        height: "80px",
        borderBottom: "1px solid gray",
        marginBottom: "10px",
        paddingTop: 30,
        margin: 0,
        backgroundColor: '#5fb3b3',
        color: 'white'
    };

    return (<>
        <h1 style={headerStyle}>Tic Tac Toe</h1>
    </>)
};
export default AppHeader;