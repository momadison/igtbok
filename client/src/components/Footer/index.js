import React from "react";
import { Link } from "react-router-dom";
import "./style.css"

function Footer() {
    return (
        <footer className="page-footer pt-4">
            <div className="container-fluid text-center">
                <div className="row ">
                    <div className="col-md-6 text-md-left">
                        <h5 className="text-uppercase footer-title">Human trafficking hot line number</h5>
                        <p className="footer-hotline">1-800-373-7888</p>
                        <p className="footer-runningCopy">If you have a tip of information relating to human trafficking and would like to report it anonymously please call the above number.</p>
                    </div>
                    <div className="col-md-2">
                        <h5 className="text-center text-uppercase footer-title">proud member of the president volunteer service</h5>
                        <div className="footer-img-breathing-room">
                            <img src="./assets/img/Presidents-Volunteer-Service-Award-Banner.jpg" className="img-fluid" alt="Responsive image" />
                        </div>
                    </div>
                    <div className="col-md-2">
                        <h5 className="text-center text-uppercase footer-title">proud members of</h5>
                        <div className="text-center">
                            <img src="./assets/img/Duns-Registered-Logo.png" className="img-fluid footer-breathing-room" alt="Responsive image" />
                            <img src="./assets/img/gold-star.png" className="img-fluid footer-breathing-room" alt="Responsive image" />
                            <img src="./assets/img/Grassroots-Logo.png" className="img-fluid footer-breathing-room" alt="Responsive image" />
                        </div>
                    </div>
                    <div className="col-md-2">
                        <h5 className="text-center text-uppercase footer-title">Links</h5>
                        <a className="text-center text-dark text-uppercase" href="/contact">Contact</a> <br/>
                        <a className="text-center text-dark text-uppercase" href="/contact">Contact</a> <br/>
                        <a className="text-center text-dark text-uppercase" href="/contact">Contact</a> <br/>
                        <a className="text-center text-dark text-uppercase" href="/contact">Contact</a> <br/>
                        <a className="text-center text-dark text-uppercase" href="/contact">Contact</a> <br/>
                        <a className="text-center text-dark text-uppercase" href="/contact">Contact</a> <br/>
                        <a className="text-center text-dark text-uppercase" href="/contact">Contact</a> <br/>
                        <a className="text-center text-dark text-uppercase" href="/contact">Contact</a> <br/>
                        <a className="text-center text-dark text-uppercase" href="/contact">Contact</a> <br/>
                        <a className="text-center text-dark text-uppercase" href="/contact">Contact</a> <br/>
                    </div>
                </div>
                <div className="row bg-danger">
                    <div className="col main-link-normal">
                        <div className="footer-copyright text-center py-3">© 2019 Copyright | It's Going to Be Ok Inc.
                        | Nonprofit Status EIN # 46-5139883 | 4232 S Westmoreland Rd, Dallas, TX 75233. | 1-469-859-2180 |
                         <Link className="footer-link-normal" to="/contact" data-hover="Contact"> Contact</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;