import React, {useState, useEffect, use} from "react";
import ReactDOM from "react-dom/client";

function Colorful(){
    const[color, setColor] =useState("black");

    useEffect(()=>{
        document.body.style.backgroundColor = color;
    }, [color]);
     
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

export default Colorful;