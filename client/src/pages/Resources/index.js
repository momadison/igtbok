import React from "react";
import "./style.css";

function Resources() {
    return (
        <main>

            <section className="container">
                <h2 className="about-h2">Human Trafficking Hotline</h2>
                <div className="about-img-contain"><img className="about-img" src="./assets/img/IGTBOK-Brand-Logo.png"/></div>
                <p><b>It’s Going To Be Ok Inc. (IGTBOK)</b> is a 170(b)(1)(A)(vi) non-profit charity started in 2014 by Tonya Stafford, a survivor herself of human trafficking, in Dallas, Texas.
                    The IGTBOK mission is to create a just world where women, children, and all vulnerable adults are safe, respected, and valued. The vision is to eradicate human trafficking, one survivor at a time, regardless of ethnicity or background.
                    With these principles, IGTBOK has grown in recognition throughout the state of Texas and continues reaching lives across the entire United States.</p>
            </section>

            <section className="container">
                <h2 className="about-h2">Board of Directors</h2>
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