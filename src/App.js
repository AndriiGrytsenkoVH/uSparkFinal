import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom'
import AlertMessage from './Components/AlertMessage';
import Navbar from './Components/Navbar';
import Uspark from './Components/Uspark';
import Login from './Components/Login';
import YourDevelopers from './Components/YourDevelopers';
import Subscription from "./Components/Subscription";
import Match from "./Components/Match"

function App(props) {
	const [message, setMessage] = useState(null);
	const [category, setCategory] = useState(null);
	const [loggedIn, setLoggedIn] = useState(localStorage.getItem('token') && (localStorage.getItem('tokenExp') !== ''));
	const [accessToken, setAccessToken] = useState(localStorage.getItem('token'));
	const [userId, setUserId] = useState()

	function flashMessage(message, category){
		setMessage(message);
		setCategory(category)
	}

	function logUserIn(token){
		setLoggedIn(true);
		setAccessToken(token)
	}

	function logUserOut(){
		setLoggedIn(false);
		localStorage.removeItem('token');
		localStorage.removeItem('tokenExp');
		flashMessage("You have logged out", "primary")
	}

	return (
		<>
		<Navbar loggedIn={loggedIn} logUserOut = {logUserOut} />
		<div className = 'container'>
			{message ? <AlertMessage message={message} category={category} flashMessage={flashMessage} /> : null}
			<Routes>
				<Route path = '/' element = {<Uspark />}/>
				<Route path = '/login' element = {<Login flashMessage = {flashMessage} logUserIn={logUserIn} setUserId = {setUserId} />}/>
				<Route path = '/developers' element = {<YourDevelopers />} />
				<Route path = '/subscriptions' element = {<Subscription accessToken = {accessToken} setUserId = {setUserId} />} />
				<Route path = '/matches' element = {<Match userId={userId}/>}/>
			</Routes>
		</div>
		</>
	);
}

export default App;
