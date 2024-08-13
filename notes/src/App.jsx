import React, { useState, useEffect } from 'react';

function App() {
    const [amount, setAmount] = useState(0);
    const [score, setScore] = useState(0);
    const [cur, setCur] = useState(0);

    const arr = ['1+1', '1+2', '1+3', '1+4', '1+5'];
    const ans = [2, 3, 4, 5, 6];

    useEffect(() => {
        document.getElementById("container").innerText = `Question: ${arr[cur]}`;
    }, [cur]);

    return (
        <>
            <h1>{amount}</h1>
            <input id='hip' type="number" />
            <button onClick={() => {
                const hic = parseInt(document.getElementById('hip').value, 10);
                setAmount(amount + hic);
            }}>Add</button>

            <br /><br />

            <input id='miu' type="number" />
            <button onClick={() => {
                const ji = parseInt(document.getElementById('miu').value, 10);
                setAmount(amount - ji);
            }}>Minus</button>

            <h3>Current Score: {score}</h3>
            <h3>Current Question: {cur}</h3>

            <h2 id='container'>Question: </h2>
            <input id='jioo' type="number" />

            <button onClick={() => {
                const ansi = parseInt(document.getElementById("jioo").value, 10);

                if (ansi === ans[cur]) {
                    setScore(score + 1);
                }
                setCur(cur + 1);
                if (cur + 1 < arr.length) {
                    document.getElementById("container").innerText = `Question: ${arr[cur + 1]}`;
                } else {
                    document.getElementById("container").innerText = "No more questions!";
                }
            }}>Next</button>
        </>
    );
}

export default App;
