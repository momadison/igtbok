import React from "react";
import { Link } from "react-router-dom";
import "./style.css"

function Nav() {
    return (

        <nav className="navbar navbar-expand-lg bg-dark">
            <a className="navbar-brand" href="/">
                <img src="assets/img/IGTBOK-Brand-Logo.png" height="70" alt="It's Going To Be OK" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-md-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/donate/" data-hover="Donate">Donate</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/resources" data-hover="Get Help">Get Help</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about" data-hover="About">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/impact" data-hover="Impact">Impact</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact" data-hover="Contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;