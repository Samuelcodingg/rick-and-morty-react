import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from './title-rick-and-morty.png'
import './index.css'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="container-fluid text-center text-md-start container py-3">
                <Link
                    to="/"
                >
                    <img src={logo} alt="title-rick-and-morty"  className="logo"/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-md-5 text-md-start text-center">
                        <NavLink
                            activeClassName="active"
                            className="nav-item nav-link fs-4"
                            exact
                            to="/characters"
                        >
                            Characters
                        </NavLink>

                        <NavLink
                            activeClassName="active"
                            className="nav-item nav-link fs-4"
                            exact
                            to="/episodes"
                        >
                            Episodes
                        </NavLink>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
