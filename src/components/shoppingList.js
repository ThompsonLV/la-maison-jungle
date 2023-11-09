
import { plantList } from '../datas/plantList'
// import PlantItem from './PlantItem'
import '../styles/shoppingList.css'
// import CareScale from './CareScale'
import PlantItem from './PlantItem';
import Categories from './Categories';
import { useState } from 'react';

function ShoppingList({ cart, updateCart }) {
  // La fonction reduce() permet de combiner les éléments d'un tableau en une unique valeur
  // Ici plantList est le tableau d'objets que je veux itérer
  // Ma fonction prend comme argument acc et plant. acc commence par un tableau vide et plant est un objet de ma liste plantList
  const [activeCategory, setActiveCategory] = useState('')

  const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	);

  function addToCart(name, price) {
    const currentPlantSaved = cart.find((plant) => plant.name === name)
    if (currentPlantSaved) {
      const cartFilteredCurrentPlant = cart.filter(
        (plant) => plant.name !== name
        )
        updateCart([
          ...cartFilteredCurrentPlant,
          { name, price, amount: currentPlantSaved.amount + 1 }
        ])
    } else {
      updateCart([...cart, { name, price, amount: 1 }])
    }
  }

  function removeToCart(name, price) {
    // je dois voir si l'élement est déjà dans le panier
    const currentPlantSaved = cart.find((plant) => plant.name === name)
    // S'il est dans le panier, je le supprime
    const cartFilteredCurrentPlant = cart.filter(
      (plant) => plant.name !== name
      )
    if (currentPlantSaved && currentPlantSaved.amount > 1)  {
        updateCart([
          ...cartFilteredCurrentPlant,
          { name, price, amount: currentPlantSaved.amount - 1 }
        ])
    } else {
      // Je supprime mon élément de mon cart
        updateCart([
          ...cartFilteredCurrentPlant,
        ])
    }
  }


  return (
		<div className='lmj-shopping-list'>
			<Categories
        categories={categories}
        setActiveCategory={setActiveCategory}
        activeCategory={activeCategory}
      />
			<ul className='lmj-plant-list'>
        {/* Pour chaque plant, j'ai les props cover, name, id, water et light que j'envoie à l'enfant PlantItem */}
				{plantList.map(({cover, name, id, water, light, price, category }) => (
          !activeCategory || activeCategory === category ? (
            <div key = {id}>
              <PlantItem cover = {cover} name = {name} water = {water} light = {light} price = {price} />
              <button onClick={() => addToCart(name, price)}>Ajouter</button>
              <button onClick={() => removeToCart(name, price)}>Retirer</button>
            </div>
          ) : null
				))}
			</ul>
		</div>
	)
}

export default ShoppingList
