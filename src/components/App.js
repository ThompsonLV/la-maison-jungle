import Banner from './banner'
import logo from '../assets/logo.png'
// import Cart from './cart'
import ShoppingList from './shoppingList'

function App() {
	return (
		<div>
			<Banner>
				<img src={logo} alt='La maison jungle' className='lmj-logo' />
				<h1 className='lmj-title'>La maison jungle</h1>
			</Banner>
			{/* <Cart /> */}
			<ShoppingList />
		</div>
	)
}

export default App
