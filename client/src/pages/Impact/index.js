import React from "react";
import "./style.css";

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
            </section>
        </main>
    )
}
        
export default Impact;