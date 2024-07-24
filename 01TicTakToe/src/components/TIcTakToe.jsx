import React, { useState } from 'react';
import './Forty.css';
import circle from '../assets/circle.jpg';
import cross from '../assets/cross.png';

let data = ["", "", "", "", "", "", "", "", ""];

function TIcTakToe() {
    const [count, setCount] = useState(0);
    const [lock, setLock] = useState(false);

    const check = () => {
        if (data[0] === data[1] && data[1] === data[2] && data[0] !== "") {
            console.log(data[0], "wins");
            setLock(true);
        } else if (data[3] === data[4] && data[4] === data[5] && data[3] !== "") {
            console.log(data[3], "wins");
            setLock(true);
        } else if (data[6] === data[7] && data[7] === data[8] && data[6] !== "") {
            console.log(data[6], "wins");
            setLock(true);
        } else if (data[0] === data[3] && data[3] === data[6] && data[0] !== "") {
            console.log(data[0], "wins");
            setLock(true);
        } else if (data[1] === data[4] && data[4] === data[7] && data[1] !== "") {
            console.log(data[1], "wins");
            setLock(true);
        } else if (data[2] === data[5] && data[5] === data[8] && data[2] !== "") {
            console.log(data[2], "wins");
            setLock(true);
        } else if (data[0] === data[4] && data[4] === data[8] && data[0] !== "") {
            console.log(data[0], "wins");
            setLock(true);
        } else if (data[2] === data[4] && data[4] === data[6] && data[2] !== "") {
            console.log(data[2], "wins");
            setLock(true);
        }
    };

    const toggle = (e, num) => {
        if (lock || data[num] !== "") return;

        if (count % 2 === 0) {
            e.target.innerHTML = `<img src='${cross}' alt='X'>`;
            data[num] = "x";
        } else {
            e.target.innerHTML = `<img src='${circle}' alt='O'>`;
            data[num] = "o";
        }

        setCount(count + 1);
        check();
    };

    return (
        <div className="container">
            <h1 className="title">Tic Tac Toe</h1>
            <div className="board">
                <div className="row">
                    <div className="boxes" onClick={(e) => toggle(e, 0)}></div>
                    <div className="boxes" onClick={(e) => toggle(e, 1)}></div>
                    <div className="boxes" onClick={(e) => toggle(e, 2)}></div>
                </div>
                <div className="row">
                    <div className="boxes" onClick={(e) => toggle(e, 3)}></div>
                    <div className="boxes" onClick={(e) => toggle(e, 4)}></div>
                    <div className="boxes" onClick={(e) => toggle(e, 5)}></div>
                </div>
                <div className="row">
                    <div className="boxes" onClick={(e) => toggle(e, 6)}></div>
                    <div className="boxes" onClick={(e) => toggle(e, 7)}></div>
                    <div className="boxes" onClick={(e) => toggle(e, 8)}></div>
                </div>
            </div>
            <button className='reset' onClick={() => window.location.reload()}>Reset</button>
        </div>
    );
}

export default TIcTakToe;
