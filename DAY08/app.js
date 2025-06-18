import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom/client";

function PasswordGenerator(){

    const [password, setPassword] = useState("ABCDEFGH");
    const [length, setLength] = useState(10);
    const [numberChanged, checkNumberChanged] = useState(false);
    const [symbolChanged, checkSymbolChanged] = useState(true);

    function generatePassword() {
        let str= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if(numberChanged) str+="123456789";
        if(symbolChanged) str+="!@#$%^&*()_+[]{}|;:,.<>?";

        let pass="";
        for(let i=0; i<length; i++){
            pass+=str[Math.floor(Math.random()* str.length)];
            
        }

        setPassword(pass);
    };

    useEffect(()=>{
        generatePassword();
    },[length, numberChanged, symbolChanged]);

    return(
        <>
            <h1>Password is: {password}</h1>
            <div className="second">
                <input type="range" min={5} max={30} onChange={(e)=>setLength(e.target.value)}></input>
                <label>Length is: {length}</label>
                <input type="checkbox" defaultChecked={numberChanged} onChange={()=>checkNumberChanged(!numberChanged)}></input>
                <label>Include Numbers</label>
                <input type="checkbox" defaultChecked={symbolChanged} onChange={()=>checkSymbolChanged(!symbolChanged)}></input>
                <label>Include Symbols</label>
            </div>
        </>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<PasswordGenerator/>)