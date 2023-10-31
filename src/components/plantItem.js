import Carescale from './CareScale'
import '../styles/plantItem.css'

function PlantItem({ name, cover, id, light, water }) {
  return (
    <li key={id} className='lmj-plant-item'>
      <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
      {name}
      <div>
        {/* scaleValue et careType sont des props que l'on va récuperer dans notre composant CareScale (cf. /CareScale.js) */}
        {/* scaleValue prends une valeur entre 1 et 3 (cf. data dans /plantList.js) */}
        {/* CareScale est l'enfant de ShoppingList */}
        <Carescale careType={'light'} scaleValue={light} />
        <Carescale careType={'water'} scaleValue={water} />
      </div>

    </li>
  )
}

export default PlantItem
