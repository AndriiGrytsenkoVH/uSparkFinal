import React, { useState, useEffect } from 'react'
import MatchCard from './MatchCard'

export default function Match(props) {

	const [scoresandusernames, setScoresandusernames] = useState([])

	useEffect(() => {
		fetch(`http://localhost:5000/api/match/${props.userId}/scores`)
		.then(res => res.json())
		.then(data => setScoresandusernames(data))
		console.log(scoresandusernames)
	}, [])

	return (
		<>
			<h2 className = 'text-center my-4 text-light'>Your Matches Below</h2>
			<div className = 'container-fluid text-light justify-content-around d-flex flex-wrap'>
				{scoresandusernames.map((item, index) => <MatchCard key={index} score={item.score} username={item.user.username}/>)}
			</div>
		</>
	)
}
