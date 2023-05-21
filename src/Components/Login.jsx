import React from 'react';
import { useEffect, useRef } from "react";
import { client_id } from '../Secret/secret'
import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import "../Styles/Login.css"

export default function Login(props) {

    const googleButton = useRef(null);
    
    function handleCredentialResponse(response) {
        // response is JWT ID token
        let token = jwt_decode(response.credential);
        console.log(token)
        
        
    }
        // let expiration = response.expires_in

        // localStorage.setItem('token', token)
        // localStorage.setItem('tokenExp', expiration)
        // props.logUserIn(token)
        // props.flashMessage('You have successfully logged in', 'success')
        
        // let jsonToken = JSON.stringify({
        //     accessToken: response.access_token
        // })

        // let headers = new Headers();
        // headers.append('Content-Type', 'application/json');

        // fetch("http://127.0.0.1:5000/api/login", 
        //     { 
        //         method: "PUT",
        //         headers: headers,  
        //         body: jsonToken
        //     })
        //     .then(res => res.json())
        //     .then(data => props.setUserId(data.id))
        // navigate('/subscriptions')
    // }

	// will run only once since it has [] at the end
    // It means that it will run again when something in [] changes
    // which is never since [] is empty
    useEffect(() => {            
        // Comment below explains to compiler that "google" object exists
        // It has been initialized in a script in index.html
        /* global google */
        google.accounts.id.initialize({
            client_id: client_id,
            callback: handleCredentialResponse
        });
        google.accounts.id.renderButton(
            googleButton.current,
            { theme: "outline", size: "large" }  // customization attributes
        );
        google.accounts.id.prompt(); // also display the One Tap dialog 
    }, []);

    console.log("rendering the page")

    return (
        <div className="container">
            <div className="row">
                <h1 className = 'text-center mt-5 title'>Sign in with Google</h1>
            </div>
            <div className="row">
                <div ref={googleButton}></div>
            </div>
            <div className="row">
                <h4 className = 'text-center mt-5 font-weight-bold'>
                    By signing in with your google account, you give uSpark permission to collect and store the list of 
                    your YouTube subscriptions.
                </h4>
            </div>
        </div>
    );
}
