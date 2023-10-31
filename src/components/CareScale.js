// Ici, on récupère les valeurs des props careType et scaleValue, const { careType, scaleValue } = props
function CareScale({ scaleValue, careType }) {
	const range = [1, 2, 3]
	const scaleType = (careType === 'light') ? '☀️' : '💧'

	return (
		<div>
      {/* Tant que mon scaleValue est plus grand que mon tableau de valeur, on affiche un span qui est soit soleil soit de l'eau */}
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()}>{scaleType}</span>
				) : null
			)}
		</div>
	)
}

export default CareScale
