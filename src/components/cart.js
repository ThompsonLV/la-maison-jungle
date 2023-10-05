import '../styles/cart.css'


const monsteraPrice = 8;
const lierrePrice = 15;
const fleursPrice = 10;

function Cart() {
  return <div className="lmj-cart">
    <h2>Cart</h2>
    <ul>
      <li>Monstera Price: {monsteraPrice}</li>
      <li>Lierre Price: {lierrePrice}</li>
      <li>Fleurs Price: {fleursPrice}</li>
    </ul>
    Total Price: {monsteraPrice + lierrePrice + fleursPrice} €
    </div>

}

export default Cart
