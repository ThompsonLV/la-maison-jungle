
import { plantList } from '../datas/plantList'
// import PlantItem from './PlantItem'
import '../styles/shoppingList.css'
// import CareScale from './CareScale'
import PlantItem from './PlantItem';

function ShoppingList() {
  // La fonction reduce() permet de combiner les éléments d'un tableau en une unique valeur
  // Ici plantList est le tableau d'objets que je veux itérer
  // Ma fonction prend comme argument acc et plant. acc commence par un tableau vide et plant est un objet de ma liste plantList
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	);

  return (
		<div>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul className='lmj-plant-list'>
        {/* Pour chaque plant, j'ai les props cover, name, id, water et light que j'envoie à l'enfant PlantItem */}
				{plantList.map(({cover, name, id, water, light}) => (
					<PlantItem
            cover = {cover}
            name = {name}
            id = {id}
            water = {water}
            light = {light}
          />
				))}
			</ul>
		</div>
	)
}

export default ShoppingList
