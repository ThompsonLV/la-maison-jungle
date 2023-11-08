//  Je dois ici importer tous mes composants, css et images
import Banner from './Banner'
import logo from '../assets/logo.png'
// import Cart from './Cart'
import Footer from './Footer'
import ShoppingList from './ShoppingList'

// * Le composant App est appelé dans l'index.html
function App() {
	return (
		<div>
			<Banner>
        {/* img et h1 sont des noeuds enfants dans le DOM de Banner */}
				<img src={logo} alt='La maison jungle' className='lmj-logo' />
				<h1 className='lmj-title'>La maison jungle</h1>
			</Banner>
			{/* <Cart /> */}
			<ShoppingList />
      <Footer />

		</div>
	)
}

export default App
