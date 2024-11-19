import React from 'react';
import ReactDOM from 'react-dom/client';

const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];
  

function App() {
    return <div>
        <h1>Hello React</h1>
        <Pizza />
        <Pizza />
        <Pizza />
        </div>
}

function Pizza() {
    return (
        <div>
            <img src='pizzas/spinaci.jpg' alt='spinaci'></img>
            <h2>Pizza Spinaci</h2><p>Tomato, mozarella, spinach, and ricotta cheese</p>
        </div>
    )
    };


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
import './index.css';

const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];
  

function App() {
    return( <div className='container'>
        <Header />
        <Menu />
        </div>
    );
}

function Header(){
  const style = {};
  return (
    <header className="header">
        <h1 style={style}>Waf Pizza Place</h1>
    </header>
  )
}


function Menu () {
    return( 
    <main className='menu'>
        <h2>Our Menu</h2>
        <Pizza 
        name='Pizza Spinaci' 
        ingredients='Tomato, mozarella, spinach, and ricotta cheese'
        photoName='pizzas/spinaci.jpg' 
        price={10} 
        />    
        <Pizza name="Pizza Funghi" 
        ingredients="Tomato, Mushrooms" 
        price={12}
        photoName='pizzas/funghi.jpg'
         />
    </main>);
   // return React.createElement('footer', null, "we're currently open");
};

function Pizza(props) {
   
  return (
      <div className='pizza'>
          <img src={props.photoName} alt={props.name}></img>
          <div>

          <h3>{props.name}</h3>
          <p>{props.ingredients}</p>
          <span>{props.price}</span>
          </div>
      </div> 
  )
  };

function Footer() {
    const hour = new Date().getHours()
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >=openHour && hour <= closeHour;
    console.log(isOpen);

    //if(hour >-openHour && hour <= closeHour) alert("We're currently open!"); 
    //else alert('sorry we are closed')

    return <footer>{new Date().toLocaleTimeString()} We're currently open</footer>
};



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);