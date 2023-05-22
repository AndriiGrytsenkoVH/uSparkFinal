import React from 'react';
import { useEffect, useRef, useState } from "react";
import { client_id } from '../Secret/secret'
import { useNavigate } from 'react-router-dom';
import "../Styles/Login.css"

export default function Login(props) {

    const navigate = useNavigate()

    // google client for user authentication
    const client = useRef(null);
     
    function handleResponseCallback(response){
        // console.log(response);
        let token = response.access_token;
        let expiration = response.expires_in

        localStorage.setItem('token', token)
        localStorage.setItem('tokenExp', expiration)
        props.logUserIn(token)
        props.flashMessage('You have successfully logged in', 'success')
        
        let jsonToken = JSON.stringify({
            accessToken: token
        })

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        fetch("http://127.0.0.1:5000/api/login", 
            { 
                method: "PUT",
                headers: headers,  
                body: jsonToken
            })
        .then(res => res.json())
        .then(data => props.setUserId(data.id))

        navigate('/subscriptions')
    }

    // useEffect is called only once since [] is specified in the end
    // it will be called again when something in [] changes
    // which is never, because [] is empty
    useEffect(() => {
        // this comment is needed to let React know that google object exists
        // it was added via a script in index.html
        /* global google */
        client.current = google.accounts.oauth2.initTokenClient({
            client_id: client_id,
            scope: "https://www.googleapis.com/auth/youtube.readonly",
            callback: handleResponseCallback
        });
    }, []);

    function getToken(){
        client.current.requestAccessToken()
    };

    return (
        <>
            <h1 className = 'text-center mt-5 title'>Make it Happen</h1>
            <div className="App my-5">
                <button className="d-block mx-auto btn btn-primary magic" onClick={getToken}>click me!</button>
            </div>
        </>
    );
}
