import React from "react";
import "./style.css";
import Blog from "../../components/MainBlogLoad/index";
import MainTwitter from "../../components/Twitter/index";
import MainInstagram from "../../components/Instagram/index";

function Main() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 text-center main-cat1">
                    <h1 className="main-header animated fadeInUp" id="mainHeader">Need Help?</h1>
                    <h5 className="animated fadeInUp" id="subheadHeader">We are here to help you if you are a vicitm of human trafficking.</h5>
                    <a href="/contact">

                        <button className="btn btn-lg btn-danger">Get Help Now</button>
                    </a>
                </div>

                <div className="col-md-6 text-center main-cat2">
                    <h1 className="main-header animated fadeInUp" id="mainHeader">Donate</h1>
                    <h5 className="animated fadeInUp" id="subheadHeader">Your contribution in time or resources allows us to help more victims.</h5>

                    <a href="/donate">
                        <button className="btn btn-lg btn-danger">Donate Now</button>
                    </a>
                </div>
            </div>
            <div className="row">
                <div className="card-deck">
                    <div className="animated fadeIn card text-white link-white bg-dark mb-3 main-card">
                        <div className="card-header main-card-header">Together we're giving futures back</div>
                        <div className="card-body">
                            <h5 className="card-title main-card-title">YOU ARE IMPORTANT</h5>
                            <p className="card-text">With your donations, we combine all our resources and talents
                            to accomplish two things: One, to help those we’ve rescued have a second chance at life.
                            Two, to continue searching for those who are still trapped and rescue them.</p>
                        </div>
                    </div>
                    <div className="animated fadeIn card text-white link-white bg-dark mb-3 main-card tonyaMain tonya-tint">
                    </div>
                    <div className="animated fadeIn card text-white link-white bg-dark mb-3 main-card">
                        <div className="card-header main-card-header">All financial gifts support our mission</div>
                        <div className="card-body">
                            <h5 className="card-title main-card-title">HOW TO DONATE</h5>
                            <p className="card-text">All financial gifts support our mission: rescuing and support
                            services to stabilize victims of abuse, human trafficing, and sex trafficing.</p>
                            <ul>
                                <li>Secure online donation</li>
                                <li>Electronic check</li>
                                <li>Mailed Check</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col main-flood text-center">
                    <h1 className="main-header animated fadeInUp" id="mainHeader">HB 2290 - Human Trafficking Awareness Month</h1>
                    {/* <h5 className="animated fadeInUp" id="subheadHeader">We are here to help you if you are a vicitm of human trafficing.</h5> */}
                    <a href="/impact">
                        <button className="btn btn-lg btn-danger">Learn More</button>
                    </a>
                </div>
            </div>
            <div className="row bg-dark little-breathing-room">
                <div className="col">
                    <div className="row">
                        <div className="col-md-4 text-center">
                            <i className="fas fa-users fa-5x main-icons"></i>
                            <h3 className="main-icon-title">36 Million</h3>
                            <p className="main-icon-subhead">Estimated people who are slaves across the world</p>
                        </div>
                        <div className="col-md-4 text-center">
                            <i className="fas fa-female fa-5x main-icons"></i>
                            <h3 className="main-icon-title">55%</h3>
                            <p className="main-icon-subhead">Are women and girls</p>
                        </div>
                        <div className="col-md-4 text-center">
                            <i className="fas fa-male fa-5x main-icons"></i>
                            <h3 className="main-icon-title">45%</h3>
                            <p className="main-icon-subhead">Are men and boys</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 text-center">
                            <i className="fas fa-child fa-5x main-icons"></i>
                            <h3 className="main-icon-title">26%</h3>
                            <p className="main-icon-subhead">Are children</p>
                        </div>
                        <div className="col-md-4 text-center">
                            <i className="fas fa-money-bill-alt fa-5x main-icons"></i>
                            <h3 className="main-icon-title">$90</h3>
                            <p className="main-icon-subhead">Average cost of slave</p>
                        </div>
                        <div className="col-md-4 text-center">

                            <i class="fas fa-dollar-sign fa-5x main-icons"></i>
                            <h3 className="main-icon-title">$150 billion dollars</h3>
                            <p className="main-icon-subhead">How much money slavery generates</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="card-deck">
                    <Blog />
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 text-center">
                    <div className="main-allBlog">
                        <a href="/AllBlogs">
                            <button className="btn btn-lg btn-danger">View all past blogs</button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="row">
                
                    <div className="col-md-6">
                        
                            <MainTwitter />
                        
                    </div>
                    <div className="col-md-6">
                        
                            <MainInstagram />
                        
                    </div>
                
            </div>
        </div>
    )
}

export default Main;
