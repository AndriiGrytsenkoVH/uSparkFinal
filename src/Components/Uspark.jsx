import React from 'react'
import { useEffect, useState } from 'react'
import jwt_decode from 'jwt-decode'
import { client_id } from '../Secret/secret'

export default function Uspark() {

    const [ user, setUser ] = useState({})

    function handleCallBackResponse(response) {
      console.log("Encoded JWT ID Token: " + response.credential)
      var userObject = jwt_decode(response.credential)
      console.log(userObject)
      console.log(userObject.sub)
      setUser(userObject)
      document.getElementById("signInDiv").hidden = true;
  
    }
    function handleSignOut(event)
  
     {
      setUser({});
      document.getElementById("signInDiv").hidden = false;
     }
  
    useEffect(() => {
      /* global google */
      google.accounts.id.initialize({
        client_id: client_id,
        callback: handleCallBackResponse
      })
      google.accounts.id.renderButton(
        document.getElementById('signInDiv'),
        { theme: "outline", size: 'large'}
      )
  
      google.accounts.id.prompt()
    }, [])



  return (
    <>
    <div className='Container text-center'>
        <h1 className = 'text-center mt-5'>Welcome to uSpark</h1>
        <h3 className = 'text-center'>We are a YouTube Matching platform</h3>
        <img src = 'https://media.tenor.com/2pggDAMrGNgAAAAC/realistic-fire.gif' alt ='zuko' className = 'my-3'></img>
        <div className = 'container'>
        <div id = "signInDiv"></div>
       
        { 
        Object.keys(user).length !== 0 &&
        <button onClick = { (e) => handleSignOut(e)} className = 'btn btn-primary mb-3'>Sign Out</button> 
        }
        { user &&
          <div>
            <img src = {user.picture}></img>
            <h3> {user.name}</h3>
          </div>
        }
        
        </div>
        
    </div>
    </>
  )
}
