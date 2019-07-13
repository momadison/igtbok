import React from "react";
import "./style.css";

function Resources() {
    return (
        <main>

            <section className="container">
                <h2 className="res-h2">Human Trafficking Hotline</h2>
                {/* <div className="res-img-contain"><img className="res-img" src="./assets/img/res-phone-hug.jpg" /></div>
                <p className="res-tele">1 (800) 373-7888</p> */}
                <div className="col-md text-center res-phone">
                    <h1 className="main-header animated fadeInUp" id="mainHeader">1 (800) 373-7888</h1>
                    <div className="res-phone-layer"></div>
                </div>
            </section>

            <section className="container">
                <h2 className="res-h2">Board of Directors</h2>
                <p>Meet the IGTBOK Board of Directors, members of the Dallas/Fort Worth community who manage our nonprofit organization and fight to end human trafficking.</p>

                <div className="card-deck">
                    <div className="card about-card mb-4">
                        <img className="board-img" src="./assets/board-img/Board-Tonya-Stafford.jpg" alt="Tonya Stafford" />
                        <div className="card-body about-card-body text-center">
                            <div className="board-name">Tonya Stafford</div>
                            <div className="board-title">Founder & CEO / Board President</div>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    )
}

export default Resources;