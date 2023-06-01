import React from 'react'

export default function MatchCard(props) {
	return (
		<div className="card d-inline-flex bg-transparent border-3 border-light m-1 text-center w-25">
			<h3 className="card-text text-decoration-underline">{ props.username }</h3>
			<h3 className="card-title">{ props.score }</h3>
		</div>
	)
}
