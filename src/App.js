import Main from "./components/Main"
import Basket from './components/Basket';
import data from './data';
import { useState } from 'react';
function App() {
const {products} = data;
const [cartItems, setCartItems] = useState([]);
const onAdd = (product) => {
  const exist = cartItems.find(x => x.id === product.id);
  if(exist){
    setCartItems(cartItems.map(x => x.id === product.id ? {...exist, qty: exist.qty+1} : x));

  } else {
    setCartItems([...cartItems, {...product, qty:1}]);
  }
}
const onRemove = (product) => {
  const exist = cartItems.find((x) => x.id === product.id);
  if(exist.qty === 1) {
    setCartItems(cartItems.filter((x) => x.id!==product.id));
  } else {
    setCartItems(
      cartItems.map((x) => 
      x.id === product.id ? {...exist, qty: exist.qty - 1 } : x)
    )
  }
}
  return (
    <div className="App">
    <div className="grid-container">
      <Main onAdd={onAdd} products={products} className="grid-child purple"></Main>
      <Basket onAdd={onAdd} onRemove={onRemove}cartItems= {cartItems} className="grid-child green"></Basket>
    </div>

    </div>
  );
}
export default App;
