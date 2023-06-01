import React from 'react'
import { Link } from 'react-router-dom'
export default function SubscriptionsCard({ sub }) {

	return (
		<div className="card bg-transparent border-3 border-light m-1 text-center d-inline-flex w-25">
			{/* TODO add thumbnail */}
			<div className="card-body">
				<h3 className="card-title text-decoration-underline">{ sub.snippet.title }</h3>
				{/* <p className="card-text vh-50">{ sub.snippet.description }</p> */}
				<Link className='btn btn-info' to = {`https://www.youtube.com/channel/${sub.snippet.resourceId.channelId}`}>View Channel</Link>
			</div>
		</div>
	)
}
