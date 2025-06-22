import React, {useState, useEffect, useMemo} from "react";
import ReactDOM from "react-dom/client";


function App(){

    const[count, setCount]=useState(0);
    const[number, setNumber]=useState(null);
    const [result, setResult] = useState(null);

    function fibonacci(n) {
        if(n<=1)return n;
        return fibonacci(n-1) + fibonacci(n-2);
    }   

   useEffect(() => {
        setResult(fibonacci(number));
    }, [number]);

    return(
        <>
             <h1>Counter is: {count}</h1>
             <button onClick={()=>setCount(count+1)}>Increment</button>
             <button onClick={()=>setCount(count-1)}>Decrement</button>
             <div>
                <h1>Fibonacci value for input number is: {fibonacci(number)}</h1>
                <input placeholder="Enter your number for fibonacci" type="number" min={0} onChange={(e)=>setNumber(e.target.value)}/>
             </div>
        </>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>)