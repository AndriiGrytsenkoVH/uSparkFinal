import React from 'react';
import { useEffect, useRef, useState } from "react";
import { client_id } from '../Secret/secret'
import { useNavigate } from 'react-router-dom';

export default function Login(props) {

    const client = useRef(null);
    
   
    const navigate = useNavigate()

    function handleResponseCallback(response){
        console.log(response);
        let token = response.access_token;
        let expiration = response.expires_in

        localStorage.setItem('token', token)
        localStorage.setItem('tokenExp', expiration)
        props.logUserIn(token)
        props.flashMessage('You have successfully logged in', 'success')
        navigate('/subscriptions')
    }

    useEffect(() => {
        /* global google */
        client.current = google.accounts.oauth2.initTokenClient({
            client_id: client_id,
            scope: "https://www.googleapis.com/auth/youtube.readonly",
            callback: handleResponseCallback
        });
        console.log(client)
        console.log('hi')
    }, []);

   
    function getToken(){
        client.current.requestAccessToken()
    };



    return (
        <>
            <h1 className = 'text-center mt-5'>Login Below</h1>
            <div className="App my-5">
                <button className="d-block mx-auto btn btn-primary" onClick={getToken}>Log My Subscriptions</button>
            </div>

        </>
    );
}
