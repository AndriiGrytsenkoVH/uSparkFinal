import React from 'react'
import '../Styles/MatchCard.css'

export default function MatchCard(props) {
  return (
      <>
    {/* <div className ='format'> */}
        <div className="card d-inline-flex">
             <h1 className="card-title bigtext">{ props.score }</h1>
            <p className="card-text">{ props.username }</p>
        </div>
    {/* </div> */}
        </>

  )
}
