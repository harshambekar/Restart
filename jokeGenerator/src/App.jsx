import { useState } from 'react'
import './App.css'

function App() {

  const jokes = [
    "Why do programmers prefer dark mode? Because light attracts bugs!",
    "Why do Java developers wear glasses? Because they don't C#.",
    "How many programmers does it take to change a light bulb? None. It's a hardware problem.",
    "Why was the JavaScript developer sad? Because he didn't know how to 'null' his feelings.",
    "Why do programmers hate nature? It has too many bugs.",
    "Why don't programmers like to go outside? The sunlight causes too many glares on their screens.",
    "What do you call a programmer from Finland? Nerdic.",
    "Why did the programmer quit his job? Because he didn't get arrays.",
    "How do you comfort a JavaScript bug? You console it.",
    "Why was the function sad? Because it didn’t get called.",
    "Why did the web developer leave the restaurant? Because of the table layout.",
    "Why did the programmer go broke? Because he used up all his cache.",
    "Why do Python programmers prefer snake_case? Because they can't stand CamelCase.",
    "Why do programmers always mix up Christmas and Halloween? Because Oct 31 == Dec 25.",
    "How do you organize a space party? You planet.",
    "Why did the computer show up at work late? It had a hard drive.",
    "Why do front-end developers eat lunch alone? Because they don’t know how to join tables."
  ];



  let [joke,setJoke]=useState("");

  function randiom(){ 

    let helo=Math.floor(Math.random()*jokes.length);
    const stri=jokes[helo];
    setJoke(stri);

  }



  

  return (
    <>


    <h1>Hello we are here for the jokes</h1>
    <p>{joke}</p>

    <button onClick={randiom}> press me</button>
    </>
  )
}

export default App
