import React from "react";
import { Link } from "react-router-dom";
import "./style.css"

function Footer() {
    return (
        <footer className="page-footer pt-5">
            <div className="container-fluid text-center bg-danger footer-breathing-room">
                <div className="row">
                    <div className="col-md">
                        <h5 className="text-uppercase footer-title">proud members of</h5>
                        <div className="footer-members">
                            <img src="./assets/img/Duns-Registered-Logo.png" className="img-fluid footer-img-breathing-room" alt="Responsive image" />
                            <img src="./assets/img/gold-star.png" className="img-fluid footer-img-breathing-room" alt="Responsive image" />
                            <img src="./assets/img/Grassroots-Logo.png" className="img-fluid footer-img-breathing-room" alt="Responsive image" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col main-link-normal">
                        <div className="footer-copyright py-3 text-uppercase"><b>IT'S GOING TO BE OK INC. • 4232 S Westmoreland Rd, Dallas, TX 75233 • +1 (469) 859-2180 </b><br/>
                        <a className="text-dark" href="/">Home </a> •
                        <a className="text-dark" href="/donate"> Donate </a> •
                        <a className="text-dark" href="/resources"> Get Help </a> •
                        <a className="text-dark" href="/about"> About </a> •
                        <a className="text-dark" href="/impact"> Impact </a> •
                        <a className="text-dark" href="/contact"> Contact </a><br/>
                        <p className="footer-tiny-text">© 2019 It's Going to Be Ok Inc.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;