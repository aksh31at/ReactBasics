import React from 'react';
import ReactDOM from 'react-dom/client';

const element = <h1>Hello, world!</h1>;

function Card(props){
    return(
        <div className='card' style={{border: "1px solid black", padding: "2px"}}>
            <img src="https://printify.com/wp-content/uploads/2022/07/Custom-T-Shirts-Womens-T-Shirts-768x768.jpg" height="200px" width="200px"/>
            <div style={{textAlign: "center"}}>
                <h2>{props.cloth}</h2>
                <h1>{props.offer}</h1>
                <h1>Shop Now</h1>
            </div>
        </div>
    )
}
//HEADER
function Header(){
    return(
        <div className='heading'>
            <img className="images" src='https://images.indianexpress.com/2021/01/myntra.png?w=640' alt='myntra logo' height="80px" width="120px"/>
            <div className='options'>
                <button className='buttons'>Men</button>
                <button className='buttons'>Women</button>
                <button className='buttons'>Kids</button>
                <button className='buttons'>Accessories</button>
                <button className='buttons'>Home and Living</button>
                <button className='buttons'>Beauty</button>
                <button className='buttons'>Studio</button>
            </div>
            <input className='Searchbar' placeholder='Search for products, brands and more'></input>
            <div className='profile'>
                <button className='pro'>Profiles</button>
                <button className='pro'>Wishlist</button>
                <button className='pro'>Bag</button>
            </div>
        </div>
    )
}

function Footer(){
    return(
        <img src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/18/CH30Jp88_77193d7b8a4c4a2289a48f5bbda182de.jpg"></img>
    )
}


//BODY


//FOOTER


function App(){
    return(
        <>
        <Header/>
        {/* BODY */}
        <div className='middle' style={{display: "flex", flexWrap: "wrap", gap:"10px", justifyContent: "space-around"}}>
        <Card cloth="T-Shirt" offer="40-80%OFF"/>
        <Card cloth="Cargo" offer="20-30%OFF"/>
        <Card cloth="Hoodies" offer="50-60%OFF"/>
        <Card cloth="Sneakers" offer="60-70%OFF"/>
        <Card cloth="Sweatshirt" offer="30-40%OFF"/>
        <Card cloth="Jackets" offer="30-40%OFF"/>
        <Card cloth="Bags" offer="30-40%OFF"/>
        <Card cloth="Headwear" offer="30-40%OFF"/>
        </div>
        <Footer/>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);