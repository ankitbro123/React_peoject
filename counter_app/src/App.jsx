import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
const[count,setCount]=useState(0);

function reset() {
  setCount(0)
}
function dic() {
 if(count>0){
  setCount(count-1)
 }
 }
  return (
    <>
    <center>
      <h1>{count}</h1>
      <button className='btn btn-info me-4' onClick={()=>setCount(count+1)}>+</button>
      <button className='btn btn-info me-4' onClick={dic}>-</button>
      <button className='btn btn-info' onClick={reset}>Reset</button>
   


    </center>
    </>
  )
}

export default App
