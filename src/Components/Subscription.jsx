import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Subscription({accessToken}) {

  const [ subscriptions, setSubscriptions ] = useState([]);

  useEffect(() => {
    if (accessToken){
        let headers = new Headers();
        headers.append('Authorization', `Bearer ${accessToken}`);

        let urlParams = {
            mine: true,
            part: [
                "snippet",
                "contentDetails"
            ].join(','),
            maxResults: 50
        };

        let urlApi = Object.keys(urlParams).map( key => `${key}=${urlParams[key]}`).join('&');
    
        fetch(
            `https://www.googleapis.com/youtube/v3/subscriptions?${urlApi}`, 
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
