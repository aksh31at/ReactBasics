import React from 'react';
import ReactDOM from 'react-dom/client';

const element = <h1>Hello, world!</h1>;

// props={
//     name: "Akshat",
//     age: 22,

// }
function Greet(props){
    console.log(props);
    return <h2>ram ram {props.name}</h2>
};
const element2=<Greet name="Akshat"/>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element2);