import React from "react";
import "./style.css";

function Resources() {
    return (
        <main>
            <section className="container">
                <h2 className="res-h2">National Human Trafficking Hotline</h2>
                <div className="col-md text-center res-phone">
                    <h1 className="main-header animated fadeInUp" id="mainHeader">1 (800) 373-7888</h1>
                    <div className="res-phone-layer"></div>
                </div>
            </section>
            
            <section className="container">
                <h2 className="res-h2">Help is Nearby</h2>
                <p>Human trafficking is a modern-day form of slavery involving the illegal sale/trade of people; it impacts people of all backgrounds for a variety of purposes:
                    men are often trafficked into hard labor; women and children are typically trafficked into the commercial sex industry (i.e. prostitution and sexual exploitation).
                    It is a particularly cruel type of slavery because it removes the victim from all that is familiar, rendering them isolated and afraid to seek help because of language,
                    legality, and/or violence.</p>

                <p>You may be, or know, a victim of human trafficking if you (or someone you know) have been recruited for "work" by someone who is:</p>
                <ul>
                    <li>Using violence or threats against a person or family members,</li>
                    <li>Making false promises of love or companionship,</li>
                    <li>Making false promises of a good job and home,</li>
                    <li>Restricting contact with friends or family,</li>
                    <li>Preventing attending religious services,</li>
                    <li>Controlling identification documents (licenses, immigration papers, etc.),</li>
                    <li>Threatening deportation or law enforcement action,</li>
                    <li>Garnishing salary to pay off alleged "debts", and/or</li>
                    <li>Limiting freedom of movement.</li>
                </ul>

                <p>You can receive help or give hope to victims by staying vigilant and speaking out. Call the <b>Human Trafficking Hotline</b> to report activity anonymously
                    and help us eradicate human trafficking. You can also <a href="/Contact">contact</a> us to volunteer to join the fight against slavery and for the freedom of
                    all human beings everywhere.

                    Thank you for caring.
                </p>
            </section>

            
        </main>
    )
}

export default Resources;