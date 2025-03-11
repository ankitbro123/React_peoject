import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserHead from "./UserHead"
import User from "./User";


function App() {

  return (
    <> 
    <center><h1>USER_DATA</h1></center>
    <table className="table container mt-4 align-middle">
     <UserHead/>
    <User  grid="1" name="Kishan" email="krishan@gmai.com" password="kishan@123" course="html,css,bootstrap,js" city="Surat"  img="https://media.istockphoto.com/id/1209334782/photo/handsome-young-man.jpg?s=1024x1024&w=is&k=20&c=VBUuE4ErLlFNMd85vXM_je2V7AewFPZjHxqNCOXFwKQ="/>
    <User  grid="2" name="Jay" email="jay@gmai.com" password="jayhah@123" course="photoshop,figma,illustrator,adobe xd" city=" 
Bhavnagar" img="https://media.istockphoto.com/id/869773424/photo/i-always-start-my-day-with-a-fresh-cup-of-coffee.jpg?s=1024x1024&w=is&k=20&c=PfbEUaa68ExsPNDg1D2_mEGN-aDbvOXvOLpzZbR7bH8=" />
    <User  grid="3" name="Ajay" email="ajay@gmai.com" password="ajaybahi@123" course="node,expres,php,react" city="Ahmedabad"  img="https://media.istockphoto.com/id/2192843431/photo/smiling-happy-man-drinking-a-cup-of-coffee-at-home-and-enjoying-weekend-morning.jpg?s=1024x1024&w=is&k=20&c=cYrkTY5dhriKUfCHc2PWVlFbHeb1ihTOYRhMV6zDJOQ="/>
    <User  grid="4" name="Nitesh" email="nitesh@gmai.com" password="nishabro@123" course="python,java,saas,mongodb" city="Rajkot"  img="https://media.istockphoto.com/id/641965230/photo/enjoying-some-time-to-myself.jpg?s=1024x1024&w=is&k=20&c=DJ13NlBelJW8r2JtS7U8rBmfxXt25C4Y0k1uS49sJfo=" />
    </table>
    </>
  )
}

export default App
