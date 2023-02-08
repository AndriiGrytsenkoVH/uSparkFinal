import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Subscription({accessToken}) {

    const [ subscriptions, setSubscriptions ] = useState([]);

    useEffect(() => {
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
                .then(data => console.log(data));

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
        <>
            <div>subscriptions</div>
            {subscriptions.map( sub => <h4>{ sub.snippet.title}</h4>)}
        </>
    )
}
