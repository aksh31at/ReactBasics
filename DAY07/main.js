import React, {useState, useEffect, use} from "react";
import ReactDOM from "react-dom/client";
import Colorful from "./src/Components/Colorful";

//Background Color Changer
function Main(){
    const[count, setCount] = useState(0);


    return(
        <>
        <div className="count">
            <h1>Count: {count}</h1>
            <button onClick={()=>{
                if(count % 7 === 0){
                    document.body.style.backgroundColor = "red";
                }
                if(count % 7 === 1){
                    document.body.style.backgroundColor = "green";
                }
                if(count % 7 === 2){
                    document.body.style.backgroundColor = "blue";
                }
                if(count % 7 === 3){
                    document.body.style.backgroundColor = "yellow";
                }
                if(count % 7 === 4){
                    document.body.style.backgroundColor = "orange";
                }
                if(count % 7 === 5){
                    document.body.style.backgroundColor = "purple";
                }
                if(count % 7 === 6){
                    document.body.style.backgroundColor = "white";
                }
                setCount(count+1);
                }} style={{backgroundColor:"blue"}}>Click Me</button>
        </div>
        <h1>Background Color Changer</h1>
            <Colorful/>
        </>
    )

}

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main/>);