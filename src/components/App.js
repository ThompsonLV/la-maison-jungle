//  Je dois ici importer tous mes composants, css et images
import { useEffect, useState } from 'react'
import Banner from './Banner'
import logo from '../assets/logo.png'
import Cart from './Cart'
import Footer from './Footer'
import ShoppingList from './ShoppingList'
import '../styles/Layout.css'

// Le composant App est appelé dans l'index.html
function App() {
  const savedCart = localStorage.getItem('cart')

  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])

  useEffect(() => {
  localStorage.setItem(JSON.stringify(cart))
}
, [cart])


	return (
		<div>
			<Banner>
        {/* img et h1 sont des noeuds enfants dans le DOM de Banner */}
				<img src={logo} alt='La maison jungle' className='lmj-logo' />
				<h1 className='lmj-title'>La maison jungle</h1>
			</Banner>
      <div className='lmj-layout-inner'>
        <Cart cart={cart} updateCart={updateCart}/>
        <ShoppingList cart={cart} updateCart={updateCart}/>
      </div>
      <Footer />
		</div>
	)
}

export default App
