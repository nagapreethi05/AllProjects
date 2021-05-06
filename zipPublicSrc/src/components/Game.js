import React from 'react'
import Board from './Board'
import Input from './Input'
import Timer from './Timer'
let value1 = 0, value2 = 0, id1, id2;
class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            player1: "X",
            player2: "O",
            isGame: false,
            tableData: [],
            next: 'X',
            cells: [null, null, null, null, null, null, null, null, null],

        }
    }
    GetWinner(cellArray) {
        let array = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let entry of array) {
            if (cellArray[entry[0]] &&
                cellArray[entry[1]] === cellArray[entry[0]] &&
                cellArray[entry[1]] === cellArray[entry[2]]) {
                return { status: cellArray[entry[0]], array: entry };
            }
        }
        return null;
    }
    handleCellClick = (id) => {
        let currentValue = this.state.cells[id];
        if (this.GetWinner(this.state.cells) || currentValue) return;
        this.state.tableData.push({
            next: this.state.next,
            serialNum: id + 1,
            position: this.state.cells.filter((cell) => cell !== null).length + 1,
            player1: this.state.player1,
            player2: this.state.player2,
        })
        if (this.state.next === "X") {
            this.stopTimer2();
            this.startTimer1();
        }
        if (this.state.next === "O") {
            this.stopTimer1();
            this.startTimer2();
        }
        let newCells = [...this.state.cells];
        newCells[id] = this.state.next;

        let newNext = this.state.next === 'O' ? 'X' : 'O';

        this.setState({ cells: newCells, next: newNext })
    }

    reset = () => {
        this.stopTimer1();
        this.stopTimer2();
        this.setState({
            tableData: [],
            isGame: false,
            next: "X",
            cells: [null, null, null, null, null, null, null, null, null],

        });
    }
    updatePlayer = (name, label) => {
        if (label === "Player1")
            this.setState({ player1: name })
        else
            this.setState({ player2: name })
        console.log(this.state)
    }
    renderInput = () => {
        return (
            <div className="inputDiv">
                <br />
                <Input value="X" handleName={this.updatePlayer} label="Player1" /><br /><br />
                <Input value="O" handleName={this.updatePlayer} label="Player2" /><br /><br /><br />
                <button className="startButton" onClick={() => this.setState({ isGame: true })}>start</button>
            </div>
        )
    }
    renderContent = () => {
        let status;

        let win;
        if (
            this.state.cells.filter((cell) => cell !== null).length === this.state.cells.length &&
            !this.GetWinner(this.state.cells)//no cell is empty or winner state
        ) {
            status = "Stale Mute";
            this.stopTimer1();
            this.stopTimer2();
        }
        else {

            win = this.GetWinner(this.state.cells);
            if (win) {
                let winner =
                    win.status === "X" ? this.state.player1 : this.state.player2;
                status = "Winner " + winner;
                this.stopTimer1();
                this.stopTimer2();
            } else {
                let move =
                    this.state.next === "X" ? this.state.player1 :
                        this.state.player2;
                status = "Next Player : " + move;
                //this.props.start1();

            }

        }
        return (
            <div>
                <h3 > {status}</h3>

                <Board player1={this.state.playerName1} player2={this.state.playerName2}
                    next={this.state.next} cells={this.state.cells} win={win} handle={this.handleCellClick}
                />
                <div>
                    <MyTable data={this.state.tableData} />
                </div>
                <button className="resetButton" onClick={this.reset}>Reset</button>
                <br /><br /><h5>Time Took by O</h5>
                <Timer id='timer1' />
                <h5>Time Took by X</h5>
                <Timer id='timer2' />

            </div>
        )
    }


    startTimer1 = () => {
        id1 = setInterval(() => {
            value1++
            let timer = document.getElementById('timer1')
            timer.innerHTML = value1
        }, 1000);
    }
    startTimer2 = () => {
        id2 = setInterval(() => {
            value2++
            let timer = document.getElementById('timer2')
            timer.innerHTML = value2
        }, 1000);
    }
    stopTimer1 = () => {
        clearInterval(id1);
    }
    stopTimer2 = () => {
        clearInterval(id2);
    }
    //}

    render() {

        return (
            <>
                <div>
                    {this.state.isGame === false ? this.renderInput() : this.renderContent()}

                </div>

            </>)

    }
}

function MyTable(props) {

    return (
        <div className="tableDiv">
            <table className="myTable">
                <tr>
                    <th>S.No</th>
                    <th>Player</th>
                    <th>Index</th>
                </tr>
                {
                    props.data.map((row) => {
                        return <tr>
                            <td>{row.position}</td>
                            <td>{row.next === "X" ? row.player1 : row.player2}</td>
                            <td>{row.serialNum}</td>
                        </tr>
                    })
                }
            </table>
        </div>
    )
}
let values = { Game }
export default values;