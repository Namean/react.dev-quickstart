import { useState } from "react";

import logo from './logo.svg';
import './App.css';

import MyButton from "./components/MyButton.component";
import { user } from "./data/users.data"
import { products } from "./data/products.data"
import { ItemList } from './components/ListItems.component';
import ShoppingList from './components/ShoppingList.component';
import InteractiveButton from './components/InteractiveButton';
import CounterButton from './components/CounterButton.component';


function App() {
  const [count, setCount] = useState(0);

  const counterButtonState = {
    count: count,
    setCount: setCount
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyButton />
        <p>{user.name}</p>
        <ItemList props={products} />
        <ShoppingList props={products} />
        <InteractiveButton />
        <CounterButton props={counterButtonState} />
        <CounterButton props={counterButtonState} />


      </header>
    </div>
  );
}

export default App;
