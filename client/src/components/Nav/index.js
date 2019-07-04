import React from "react";
import "./Nav.css"

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
                        <a className="nav-link" href="/donate" data-hover="Donate">Donate</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/resources" data-hover="Get Help">Get Help</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/about" data-hover="About">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/impact" data-hover="Impact">Impact</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/contact" data-hover="Contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;