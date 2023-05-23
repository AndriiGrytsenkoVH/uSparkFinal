import React from 'react'
// import '../Styles/MatchCard.css'

export default function MatchCard(props) {
	return (
		<>
			<div className="card d-flex mx-auto">
				<h1 className="card-title bigtext">{ props.score }</h1>
				<p className="card-text">{ props.username }</p>
			</div>
		</>
	)
}
