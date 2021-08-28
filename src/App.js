import React, { useState } from 'react';
import './App.css';

 const App = () => {
    const [result, setResult] = useState("");
    const handleClick = (x)=> {
           setResult(result.concat(x.target.name));
    }
    const clear =()=>{
           setResult("");

    }
    const backspace =()=>{
           setResult(result.slice(0,-1));

}
const calculate =()=>{
       try {
              setResult(eval(result).toString());
       } catch(err) {
              setResult("Error")
              
       }
    
}
    return (
        
           
              <div className="container">

                     <form>
                           <input id="inputnumber" type="text" value={result}/>
                     </form>
                     <div className="keypad">
                            <button className="opbtn" onClick={clear} >CE</button>
                            <button className="opbtn" onClick={clear} >C</button>
                            <button className="opbtn" id="backspace" onClick={backspace} >&#8592;</button>
                            <button className="opbtn" onClick={handleClick} name="/">&divide;</button>

                            <button onClick={handleClick} name="7">7</button>
                            <button onClick={handleClick} name="8">8</button>
                            <button onClick={handleClick} name="9">9</button>
                            <button className="opbtn" onClick={handleClick} name="*">&times;</button>

                            <button onClick={handleClick} name="4">4</button>
                            <button onClick={handleClick} name="5">5</button>
                            <button onClick={handleClick} name="6">6</button>
                            <button className="opbtn" onClick={handleClick} name="-">&minus;</button>
                    
                            <button onClick={handleClick} name="1">1</button>
                            <button onClick={handleClick} name="2">2</button>
                            <button onClick={handleClick} name="3">3</button>
                            <button className="opbtn" onClick={handleClick} name="+">+</button>

                            <button  onClick={handleClick} name="-">+/&minus;</button>
                            <button onClick={handleClick} name="0">0</button>
                            <button onClick={handleClick} name=".">.</button>
                            <button className="opres" onClick={calculate} >=</button>
                    </div>

              
                     
              </div>
           
    )
}
export default App;
