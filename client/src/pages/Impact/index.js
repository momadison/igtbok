import React from "react";
import "./style.css";
// import "./carousel.js";

function Impact() {
    return (
        <main>
            <section className="container">
                <h2 className="impact-h2">President's Volunteer Service Award</h2>
                <img className="pres-img" src="./assets/img/PVSA-banner.jpg" />
                <p>The President’s Volunteer Service Award (PVSA) is the premier federal volunteer program, in it's own words, "recognizing, celebrating, and holding up as role models Americans making a positive impact as engaged and deeply committed volunteers." 
                    <b>It’s Going To Be Ok Inc. (IGTBOK)</b> is proud to be both officially PVSA-recognized and a certifying organization for individuals seeking to join. 
                    We encourage all volunteers interested in assisting IGTBOK and other advocacy groups to register, document their hours, and inspire others to a similar life of service!</p>
                <div className="btn-group">
                    <a className="btn-1 btn-1b" href="https://www.presidentialserviceawards.gov/" target="_blank">About PVSA</a>
                    <a className="btn-1 btn-1b" href="https://www.presidentialserviceawards.gov/volunteer" target="_blank">Registration</a>
                </div>
            </section>

            <section className="container">
                <h2 className="impact-h2">HB 2290</h2>

                <div id="demo" class="carousel slide" data-ride="carousel">
                    {/* <!-- Indicators --> */}
                    <ul class="carousel-indicators">
                        <li data-target="#demo" data-slide-to="0" class="active"></li>
                        <li data-target="#demo" data-slide-to="1"></li>
                        <li data-target="#demo" data-slide-to="2"></li>
                    </ul>

                    {/* <!-- The slideshow --> */}
                    <div class="carousel-inner">
                        <div class="carousel-item active"><img src=".\assets\hb2290-img\web-0-800x800.jpg" alt="0"/></div>
                        <div class="carousel-item"><img src=".\assets\hb2290-img\web-1-800x800.jpg" alt="1"/></div>
                        <div class="carousel-item"><img src=".\assets\hb2290-img\web-2-800x800.jpg" alt="2"/></div>
                        <div class="carousel-item"><img src=".\assets\hb2290-img\web-3-800x800.jpg" alt="3"/></div>
                        <div class="carousel-item"><img src=".\assets\hb2290-img\web-4-800x800.jpg" alt="4"/></div>
                        <div class="carousel-item"><img src=".\assets\hb2290-img\web-5-800x800.jpg" alt="5"/></div>
                        <div class="carousel-item"><img src=".\assets\hb2290-img\web-6-800x800.jpg" alt="6"/></div>
                        <div class="carousel-item"><img src=".\assets\hb2290-img\web-7-800x800.jpg" alt="7"/></div>
                        <div class="carousel-item"><img src=".\assets\hb2290-img\web-8-800x800.jpg" alt="8"/></div>
                        <div class="carousel-item"><img src=".\assets\hb2290-img\web-9-800x800.jpg" alt="9"/></div>
                        <div class="carousel-item"><img src=".\assets\hb2290-img\web-10-800x800.jpg" alt="10"/></div>
                    </div>

                    {/* <!-- Left and right controls --> */}
                    <a class="carousel-control-prev" href="#demo" data-slide="prev">
                        <span class="carousel-control-prev-icon"></span>
                    </a>
                    <a class="carousel-control-next" href="#demo" data-slide="next">
                        <span class="carousel-control-next-icon"></span>
                    </a>
                </div>
            </section>

        </main>
    )
}
        
export default Impact;