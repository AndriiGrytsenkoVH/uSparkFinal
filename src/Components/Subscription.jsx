import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SubscriptionsCard from './SubscriptionsCard';
import "../Styles/Subscriptions.css"

export default function Subscription(props) {

    const [subscriptions, setSubscriptions ] = useState([]);
    // const [users, setUsers ] = useState([])

    useEffect(() => {
        if (props.accessToken){

			fetch(`http://localhost:5000/api/users/${props.username}/subscriptions`)
			.then(res => res.json())
			.then(data => setSubscriptions(data))





            // let headers = new Headers();
            // headers.append('Authorization', `Bearer ${accessToken}`);

            // let urlParamsUser = {
            //     mine: true,
            //     part: [
            //         "snippet"
            //     ].join(','),
            // };

            // let urlApiUser = Object.keys(urlParamsUser).map( key => `${key}=${urlParamsUser[key]}`).join('&');

            // fetch(
            //     `https://www.googleapis.com/youtube/v3/channels?${urlApiUser}`, 
            //     {headers: headers}
            //     )
            //     .then(res => res.json())
            //     .then(data => setUserId(data.items[0].id))
            //     .then(data => setUsers(data.items))

            // let urlParamsSubs = {
            //     mine: true,
            //     part: [
            //         "snippet",
            //         "contentDetails"
            //     ].join(','),
            //     maxResults: 50
            // };

            // let urlApiSubs = Object.keys(urlParamsSubs).map( key => `${key}=${urlParamsSubs[key]}`).join('&');
        
            // fetch(
            //     `https://www.googleapis.com/youtube/v3/subscriptions?${urlApiSubs}`, 
            //     {headers: headers}
            // )
            //     .then(res => res.json())
            //     // .then(data => console.log(data))
            //     .then(data => setSubscriptions(data.items));
        } 
    }, [props.accessToken]);

	return (
		<>
			<h2 className='text-center title my-3'> Welcome, {props.username}</h2>
			<h4 className = 'text-center title my-4'>Here are your subscriptions</h4>
			{/* {subscriptions.map( sub => <h4>{ sub.snippet.title} { sub.snippet.description } </h4>)} */}
			{subscriptions.map(sub => <SubscriptionsCard key = {sub.snippet.id} sub = {sub}/>)}
		</>
    )
}
