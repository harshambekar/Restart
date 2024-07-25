import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';


function App() {
  let [count, setCount] = useState(0);
  let [sounty,setcounty]=useState(0);

  const RPS=['Rock','Paper','Scissor'];

  const randy = () => {
    return Math.floor(Math.random() * 3);
    
  };
  

   return (
<>

<p>{count}</p>

<p>{sounty}</p>



<button onClick={(e)=>
 { const item1=randy();
  const item2=randy();

  console.log(item1+10);
  console.log(item2+20);


  if(item1==item2){

    return
  }
  else if(item1===0 & item2===1){
    setCount(++count);
  }
  else if(item1===1 & item2===0){
    setcounty(++sounty);
  }

 }

}>click me</button>


</>
  );
}export default App;
