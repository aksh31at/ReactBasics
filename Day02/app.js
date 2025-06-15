import React from "react";
import ReactDOM from "react-dom/client";
const element= React.createElement("h1", {}, "Hello World");
const element2= React.createElement("h2", {}, "My name is Akshat");


const div1=React.createElement("div", {}, {element, element2});
const Reactroot = ReactDOM.createRoot(document.getElementById("root"));


Reactroot.render(div1);