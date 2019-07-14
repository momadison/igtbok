import React from "react";
import "./style.css";

function Contact() {
    return (
        <main>
            <section className="container">
                <h2 className="contact-h2">We Want to Hear From You</h2>
                <div className="mapouter">
                    <div className="gmap_canvas" style={{overflow:"hidden", background:"none!important", height:"500px", width:"100%"}}>
                        <iframe width="100%" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=4232%20S%20Westmoreland%20Rd%2C%20Dallas%2C%20TX%2075233&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                    </div>
                </div>

                <div className="contact-deck">
                    <div className="contact-card">
                        <div className="contact-name"><i class="fas fa-building"></i>&nbsp; Office</div>
                        <div className="contact-detail">ATTN: Tonya Stafford<br/>4232 S. Westmoreland Rd.<br/>Dallas, TX 75233</div>
                    </div>
                    <div className="contact-card">
                        <div className="contact-name"><i class="fas fa-comments"></i>&nbsp; Call & Write</div>
                        <div className="contact-detail">
                            <img src="./assets/contact-img/cw_phone-28-32.png" className="con-icon"/> +1 (469) 859-2180<br/>
                            <img src="./assets/contact-img/cw_phone-55-32.png" className="con-icon"/> +1 (888) 377-8056<br/>
                            <a href="info@saveonesaveageneration.org"><img src="./assets/contact-img/cw_email-11-32.png" className="con-icon"/> email us</a>
                        </div>
                    </div>
                    <div className="contact-card">
                        <div className="contact-name"><i class="fas fa-share-alt-square"></i>&nbsp; Follow </div>
                        <div className="contact-detail">
                            <a href="https://www.facebook.com/IGTBOK" target="_blank">
                                <img src="./assets/contact-img/sm_facebook-32.png" className="con-icon"/>&nbsp; facebook
                                </a><br/>
                            <a href="https://twitter.com/igtbokinc" target="_blank">
                                <img src="./assets/contact-img/sm_twitter-32.png" className="con-icon"/>&nbsp; twitter 
                                </a><br/>
                            <a href="https://www.linkedin.com/in/tonya-stafford-46ab8650" target="_blank">
                                <img src="./assets/contact-img/sm_linkedin-32.png" className="con-icon" style={{padding:"0 1px 7px", marginRight:"13px", width:"25px"}}/>&nbsp; linkedin
                                </a><br/>
                        </div>
                    </div>
                </div>

            </section>
        </main>
    )
}

export default Contact;