import React,{useState} from "react"
import { BinaryHeap } from './heap.js';
import {HuffmanCoder} from "./Hoffmen.js"
 let coder=new HuffmanCoder();
function App() {
    const [text,setText]=useState("");
    const [result,setResult]=useState("");
  

    return (
        <div>
         <input type="textarea" onChange={(e)=>{setText(e.target.value)}}/>
         <button onClick={()=>{
     let enCodeResult=coder.encode(text);
     let deCodeResult=coder.decode(enCodeResult[0]);
             console.log(enCodeResult);
             console.log(deCodeResult);
         }}>Encoder</button>
        </div>
    )
}

export default App