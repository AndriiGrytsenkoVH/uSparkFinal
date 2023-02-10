import React from 'react'

export default function MatchCard(props) {
  return (
    <div>
        <>
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{ props.score }</h5>
                <p className="card-text">{ props.username }</p>
            </div>
        </div>
        </>

    </div>
  )
}
