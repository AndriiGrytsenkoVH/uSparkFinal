import React from 'react'
import { useEffect, useState } from 'react'

export default function Uspark() {
	return (
		<>
			<div className='text-center text-light'>
				<div className="container position-relative">
					<img src='https://media.tenor.com/2pggDAMrGNgAAAAC/realistic-fire.gif' alt ='zuko'></img>
					<div className="position-absolute top-0 start-50 translate-middle-x">
						<h1>Welcome to uSpark</h1>
						<h3>We are a YouTube matching platform</h3>
					</div>
				</div>
				<p className = 'fs-5'>
					The idea was sparked because of two avid YouTube watchers.  
					At its peak, we want not only to be able to connect users of uSpark with each other based off an algorithm, but integrate the ability of users to communicate with each other through the platform as well. <br/>
					This full-stack application first utilizes the React frontend to authenticate a user via Google. After we are granted access to a user’s subscriptions and information, we populate it into our own Flask backend database.  Through querying, we can generate a match score between all the users of uSpark – displaying the number of subscriptions that a current user has in common with all existing users in our database. <br/>
					uSpark is designed to utilize an existing database in order to connect you to the people you share something very personal with.<br/> We hope you’ll enjoy using it.  
				</p>
			</div>
		</>
	)
}
