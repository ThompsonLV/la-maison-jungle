import Carescale from './CareScale'
import '../styles/plantItem.css'

function PlantItem({ id, name, cover, light, water }) {
  return (
    <li key={id} className='lmj-plant-item'>
      <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
      {name}
      <div>
        <Carescale careType={'light'} scaleValue={light} />
        <Carescale careType={'water'} scaleValue={water} />
      </div>

    </li>
  )
}

export default PlantItem
