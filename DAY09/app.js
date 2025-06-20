import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/component/Header";
import Body from "./src/component/Body";


function GithubProfile(){
    return(
        <>
             <Header></Header>
             <Body></Body>  
        </>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<GithubProfile/>)