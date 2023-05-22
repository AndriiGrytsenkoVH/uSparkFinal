import React from 'react'
import { useEffect, useState } from 'react'
import "../Styles/Uspark.css"

export default function Uspark() {
	return (
		<>
			<div className="Body">
				<div className='Container text-center'>
					<h1 className = 'text-center mt-5 Head'>Welcome to uSpark</h1>
					<h3 className = 'text-center Head1'>We are a YouTube matching platform</h3>
					<img src = 'https://media.tenor.com/2pggDAMrGNgAAAAC/realistic-fire.gif' alt ='zuko' className = 'stuff mt-5'></img>
				</div>
				<div className="paragraph mt-5 text-center" style={{ display: "flex", justifyContent: "center"}}>
					<p className = 'Blurb col-8' style={{ alignSelf: "center" }} >
						The idea was sparked because of two avid YouTube watchers.  
						At its peak, we want not only to be able to connect users of uSpark with each other based off an algorithm, but integrate the ability of users to communicate with each other through the platform as well. <br/>
						This full-stack application first utilizes the React frontend to authenticate a user via Google. After we are granted access to a user’s subscriptions and information, we populate it into our own Flask backend database.  Through querying, we can generate a match score between all the users of uSpark – displaying the number of subscriptions that a current user has in common with all existing users in our database. <br/>
						uSpark is designed to utilize an existing database in order to connect you to the people you share something very personal with.<br/> We hope you’ll enjoy using it.  
					</p>
				</div>
			</div>
		</>
	)
}
