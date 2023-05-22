import React from 'react'
import { Link } from 'react-router-dom'
import "../Styles/Navbar.css"

export default function Navbar(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand " to ="/">
                        uSpark🔥
                    </Link>
                    <Link className="nav-link text-light" to="/developers">
                        Your Developers 
                    </Link>
                
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarText"
                        aria-controls="navbarText"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {props.loggedIn ? (
                            <>
                            <li className="nav-item">
                                <Link className="nav-link" to="/subscriptions">
                                    Subscriptions
                                </Link>
                            </li>
                            <li className = "nav-item">
                                <Link className = "nav-link" to="/matches">
                                    Scores
                                </Link>
                            </li>
                            <li>
                                <Link className="nav-link" to="/"  onClick={props.logUserOut}>
                                    Logout
                                </Link>
                            </li>
                            </>
                            ) : (
                            <>
                            <li className="nav-item ">
                                <Link className ="nav-link" aria-current="page" to="/login">
                                    Login
                                </Link>
                            </li>
                            </>    
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
