import '../styles/cart.css'
import { useState } from 'react'

function Cart( { cart, updateCart }) {

  const [isOpen, setIsOpen] = useState(true)
  const total = cart.reduce(
    (acc, plantType) => acc + plantType.amount * plantType.price,
    0
  )

  // Pour afficher le panier ouvert ou fermé
  return isOpen ? (
		<div className='lmj-cart'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Fermer
			</button>
			<h2>Panier</h2>
      <ul>
        {cart.map(({ name, price, amount}, index) => (
          <div key={`${name}-${index}`}>
            {name} {price}€ x {amount}
          </div>
        ))}
      </ul>
      <h3>Total : {total}€</h3>
      <button onClick={() => updateCart([])}>Vider le panier</button>
		</div>
	) : (
		<div className='lmj-cart-closed'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Ouvrir le Panier
			</button>
		</div>
	)
}

export default Cart
