import React from "react";
import "./style.css";

function Impact() {
    return (
        <main>
            <section className="container">
                <h2>President's Volunteer Service Award</h2>
                <img className="pres-img" src="./assets/impact-img/PVSA-banner.jpg" />
                <p>The President’s Volunteer Service Award (PVSA) is the premier federal volunteer program, in it's own words, "recognizing, celebrating, and holding up as role models Americans making a positive impact as engaged and deeply committed volunteers." 
                    <b>It’s Going To Be Ok Inc. (IGTBOK)</b> is proud to be both officially PVSA-recognized and a certifying organization for individuals seeking to join. 
                    We encourage all volunteers interested in assisting IGTBOK and other advocacy groups to register, document their hours, and inspire others to a similar life of service!</p>
                <div className="btn-group">
                    <a className="btn-red btn-fx" href="https://www.presidentialserviceawards.gov/" target="_blank">About PVSA</a>
                    <a className="btn-red btn-fx" href="https://www.presidentialserviceawards.gov/volunteer" target="_blank">Registration</a>
                </div>
            </section>

            <section className="container">
                <h2>Endorsement of Rep. Parker</h2>
                <img className="pres-img" src="./assets/impact-img/Tan-Parker.jpg" />
                <p>On April 13th, 2015, State Representative of Texas Tan Parker expressed a "great pleasure" in bestowing <b>IGTBOK</b> the honor of endorsing both the organization and the mission to end human trafficking.
                    Describing it as "a great leader in the North Texas effort to combat this modern day form of slavery," Rep. Parker extended his "utmost recommendation" and support in the program.
                    Read the full letter to founder Tonya Stafford.</p>
                <div className="btn-group">
                    <a className="btn-red btn-fx btn-3" href="./assets/impact-img/Tan-Parker-Endorsement-Letter.pdf" target="_blank">Rep. Parker Endorsement Letter</a>
                </div>
            </section>

            <section className="container">
                <h2>House Bill 2290</h2>
                <img className="pres-img" src="./assets/hb2290-img/HB-2290-Group-Photo.jpg" alt="Group Photo" />

                <p>On January 5, 2016, House Bill 2290 was officially adopted by the State Legislature of Texas to designate January as Human Trafficking Prevention Month in the state. 
                    The bill was authored by State Representative Tan and is one of many efforts IGTBOK to help inform and bring awareness of Human Trafficking in the State of Texas in order to for people and organizations to help our state leaders end human trafficking forever.</p>
                <div className="btn-group">
                    <a className="btn-red btn-fx btn-2" href=".\assets\hb2290-img\House-Bill-2290-Resolution.jpg" target="_blank">HB 2290 Resolution</a>
                    <a className="btn-red btn-fx btn-2" href="https://txlege.texastribune.org/84/bills/HB2290/" target="_blank">HB 2290 Guide</a>
                    <a className="btn-red btn-fx btn-3" href=".\assets\hb2290-img\HB-2290-Letter-Rep-Parker.pdf" target="_blank">Letter from Rep. Parker on HB 2290</a>
                </div>

                <div className="house-vid">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/b7N3Rt_EH-c" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

                <div id="demo" className="carousel slide" data-ride="carousel" data-interval="7500">
                    {/* Indicators */}
                    <ul className="carousel-indicators">
                        <li data-target="#demo" data-slide-to="0" className="active"/>
                        <li data-target="#demo" data-slide-to="1"/>
                        <li data-target="#demo" data-slide-to="2"/>
                    </ul>

                    {/* Slideshow */}
                    <div className="carousel-inner">
                        <div className="carousel-item active"><img src="https://via.placeholder.com/1100x500" alt="" /></div>
                        <div className="carousel-item"><img src="https://via.placeholder.com/1100x500" alt="" /></div>
                        <div className="carousel-item"><img src="https://via.placeholder.com/1100x500" alt="" /></div>
                    </div>

                    {/* Left and right controls */}
                    <a className="carousel-control-prev" href="#demo" data-slide="prev"><span className="carousel-control-prev-icon"/></a>
                    <a className="carousel-control-next" href="#demo" data-slide="next"><span className="carousel-control-next-icon"/></a>
                </div>
            </section>
        </main>
    )
}
        
export default Impact;