import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom/client";

//Background Color Changer
function Main(){

    const[color, setColor] =useState("black");
    document.body.style.backgroundColor = color;
     
    return(
        <>
        <h1>BACKGROUND COLOR CHANGER</h1>
        <div className="but">
            <button style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>RED</button>
            <button style={{backgroundColor:"green"}} onClick={()=>setColor("green")}>GREEN</button>
            <button style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}>BLUE</button>
            <button style={{backgroundColor:"yellow"}} onClick={()=>setColor("yellow")}>YELLOW</button>
            <button style={{backgroundColor:"orange"}} onClick={()=>setColor("orange")}>ORANGE</button>
            <button style={{backgroundColor:"purple"}} onClick={()=>setColor("purple")}>PURPLE</button>
            <button style={{backgroundColor:"white"}} onClick={()=>setColor("white")}>WHITE</button>
        </div>
        </>
    )

}

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main/>);