import React from 'react';
import { useEffect, useRef, useState } from "react";
import { client_id } from '../../secret';

export default function Home() {
    const client = useRef(null);
    const [ accessToken, setAccessToken ] = useState('');
    const [ subscriptions, setSubscriptions ] = useState([]);

    function handleResponseCallback(response){
        console.log(response);
        setAccessToken(response.access_token);
    }

    useEffect(() => {
        /* global google */
        client.current = google.accounts.oauth2.initTokenClient({
            client_id: client_id,
            scope: "https://www.googleapis.com/auth/youtube.readonly",
            callback: handleResponseCallback
        });
        console.log(client)
    }, []);

    //happening automatically on rerender
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
                .then(data => console.log(data))
                .then(data => setSubscriptions(data))
        }
    }, [accessToken]);

    function getToken(){
        client.current.requestAccessToken()
    };

    return (
        <>
            <h1 className = 'text-center mt-5'>Here are your subscriptions</h1>
            <div className="App">
                <h1 className="text-center">Hello World</h1>
                <button className="d-block mx-auto btn btn-primary" onClick={getToken}>Log My Subscriptions</button>
            </div>
        </>
    );
}
