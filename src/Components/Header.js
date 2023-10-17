import React from 'react'
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="# justify-content-center">FEEDBACK</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-sm-inline-flex justify-content-between" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 flex-grow-1 justify-content-end">


                            <li className="nav-item">
                                <Link to="/" className="nav-link">Home</ Link>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">OurTeam</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link">About</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header