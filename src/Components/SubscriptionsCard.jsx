import React from 'react'
import { Link } from 'react-router-dom'
import "../Styles/SubscriptionsCard.css"

export default function SubscriptionsCard({ sub }) {

	return (
		<>
			<div className="card d-inline-flex mx-auto">
				<div className="card-body">
					<h5 className="card-title">{ sub.snippet.title }</h5>
					<p className="card-text">{ sub.snippet.description }</p>
					<Link className='btn btn-info' to = {`https://www.youtube.com/channel/${sub.snippet.resourceId.channelId}`}>View Channel</Link>
				</div>
			</div>
		</>
	)
}
