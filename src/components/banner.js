import '../styles/banner.css'

// Avec children récupérer comme des props, j'ai accès au noeud enfant de Banner, qui sont dans App.js (img et h1)
function Banner({ children }) {
	return <div className='lmj-banner'>{children}</div>
}

export default Banner
