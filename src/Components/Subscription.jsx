import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SubscriptionsCard from './SubscriptionsCard';

export default function Subscription({accessToken, setUserId}) {

    const [ subscriptions, setSubscriptions ] = useState([]);
    const [ users, setUsers ] = useState([])

    useEffect(() => {
        // TODO! all this fetching should be done on the backed
        if (accessToken){
            let headers = new Headers();
            headers.append('Authorization', `Bearer ${accessToken}`);

            let urlParamsUser = {
                mine: true,
                part: [
                    "snippet"
                ].join(','),
            };

            let urlApiUser = Object.keys(urlParamsUser).map( key => `${key}=${urlParamsUser[key]}`).join('&');

            fetch(
                `https://www.googleapis.com/youtube/v3/channels?${urlApiUser}`, 
                {headers: headers}
                )
                .then(res => res.json())
                .then(data => setUserId(data.items[0].id))
                .then(data => setUsers(data.items))

            let urlParamsSubs = {
                mine: true,
                part: [
                    "snippet",
                    "contentDetails"
                ].join(','),
                maxResults: 50
            };

            let urlApiSubs = Object.keys(urlParamsSubs).map( key => `${key}=${urlParamsSubs[key]}`).join('&');
        
            fetch(
                `https://www.googleapis.com/youtube/v3/subscriptions?${urlApiSubs}`, 
                {headers: headers}
            )
                .then(res => res.json())
                // .then(data => console.log(data))
                .then(data => setSubscriptions(data.items));
        } 
    }, [accessToken]);

    return (
        <div className="container text-light">
            {/* TODO users are not defined properly? */}
            {users.map( user => <h2 className = 'text-center my-1'>Welcome, {user.snippet.title}</h2> )}
            <h2 className = 'text-center my-4'>Here are your subscriptions</h2>
            <div className="d-flex justify-content-around flex-wrap">
                {subscriptions.map(sub => <SubscriptionsCard key={sub.snippet.id} sub={sub}/>)}
            </div>
        </div>
    )
}
