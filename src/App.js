import React from "react"
import './App.css'
// import img1 from './images/madhavi photo.jpg';
import List from'./component/List'
import profile from "./madhavi photo.jpg"


function App() {
  
  const [count,setCount] = React.useState(0);
  const [show,set] = React.useState(true)
  
  const inc =()=>{
  setCount(count+1)
  }
  const dec =()=>{
    setCount(count-1)
    }
  
  return (
    <div className="App">
     <div><img src = {profile} height = "200" width = "auto"/>
      <h1>MADHAVI RABBAGUNDU</h1>
    <h1>Age:{count}</h1></div>
     <button onClick = {inc}>increse</button>
     <button onClick = {dec}>decrease</button>
     <div><button onClick={()=>set(!show)}>show</button>
     <div>{show?<h1 style ={{color:"blue"}}>Masai School Banglore,Karnataka</h1>:null}

     </div>
    
    </div>
    <List/>
     </div>
  
  );
  
  
};

export default App;
