import React from "react";
import "./style.css";

function About() {
    return (
        <main>

            <section className="container">
                <h2 className="about-h2">History</h2>
                <p><b>It’s Going To Be Ok Inc. (IGTBOK)</b> is a 170(b)(1)(A)(vi) non-profit charity started in 2014 by Tonya Stafford, a survivor herself of human trafficking, in Dallas, Texas.
                    The IGTBOK mission is to create a just world where women, children, and all vulnerable adults are safe, respected, and valued. The vision is to eradicate human trafficking, one survivor at a time, regardless of ethnicity or background.
                    With these principles, IGTBOK has grown in recognition throughout the state of Texas and continues reaching lives across the entire United States.</p>
            </section>

            <section className="container">
                <h2 className="about-h2">Our Founder</h2>
                <div className="founder-pic">
                    <img className="board-img" src=".\assets\img\Tonya-Stafford-BW.jpg" alt="Tonya Stafford" srcset=".\assets\img\Tonya-Stafford-BW-200x200.jpg 200w, .\assets\img\Tonya-Stafford-BW-400x400.jpg 400w, .\assets\img\Tonya-Stafford-BW.jpg 500w" sizes="(max-width: 800px) 100vw, 500px" style={{ width: "100%" }} />
                </div>
                <div className="founder-vid">
                    <iframe src="https://www.youtube.com/embed/4PqqKMivKEQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" alt="Tonya Stafford interview" allowfullscreen style={{ width: "100%", height: "100%" }} />
                </div>

                <p>Tonya Stafford’s passion for helping others comes as an active response to a traumatic life — a childhood history of physical abuse, sexual molestation, rape, and ultimately, slavery.
                    After receiving a scholarship from Dr. Frowsa Booker-Drew with World Vision, Tonya found Greater Dallas Movement Day, a human trafficking awareness program sponsored by the City of Dallas,
                    where victims, supporters, and advocates shared their stories.
                    There, she first shared the story of how her life had been changed forever and how she made it out.
                    That moment sparked the dream of starting a non-profit to help others become free in the same way, a dream became a reality with IGTBOK.</p>
                <p>Tonya is a native of Dallas, Texas with a degree in Early Childhood Education and over 10 years of experience working with women, young girls, and children. She is:</p>
                <ul>
                    <li>a Certified Mediator,</li>
                    <li>a Registered Level Trainer with The Texas Early Childhood Professional Development System (TECPDS),</li>
                    <li>a two-term Board Member for Head Start of Greater Dallas (HSGD), Texas Head Start Association (THSA), and HSGD Policy Council, </li>
                    <li>a National Community Liaison for Dallas Men Winning Against Domestic Violence (DMWDV),</li>
                    <li>a volunteer with the Prostitution Diversion Initiative (For The Sake Of One) of the Dallas Police Department, and</li>
                    <li>certified by Texas Against Sexual Assault (TAASA).</li>
                </ul>
                <p>Her commitment is to the education of best safety and humanitarian practices and to speaking advocacy for women and children silenced by death and tragedy.
                    Tonya has testified to the Texas State Senate Hearing Committee for Human Trafficking, contributing to the State of Texas recognizing January as Human Trafficking Month by passing HB 2290 on September 1, 2015.</p>

                <p>Tonya Stafford is a consummate grassroots professional and expert in the domestic violence and human trafficking epidemics that plagues our community.
                    Her experience brings awareness and education to the public by identifying current and potential victims, while creating solutions to combat the roots on local and worldwide levels.
                    As a result, Dallas County has chosen to stand with her and It’s Going To Be Ok, Inc. by presented a proclamation on January 5, 2016 in honor of their dedication to eradicating human trafficking.
                    Tonya shares her story to help others to see there is hope after trafficking, abuse and neglect.</p>
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

                    <div className="card about-card mb-4">
                        <img className="board-img" src="./assets/board-img/Board-Anthony-Miller.jpg" alt="Anthony Miller" />
                        <div className="card-body about-card-body text-center">
                            <div className="board-name">Anthony Miller</div>
                            <div className="board-title">Vice-President</div>
                        </div>
                    </div>
                    <div className="w-100 d-none d-sm-block d-md-none">{/* wrap every 2 on sm */}</div>

                    <div className="card about-card mb-4">
                        <img className="board-img" src="./assets/board-img/Board-Sonobia-Clayton.jpg" alt="Sonobia Clayton" />
                        <div className="card-body about-card-body text-center">
                            <div className="board-name">Sonobia Clayton</div>
                            <div className="board-title">Board Chair</div>
                        </div>
                    </div>
                    <div className="w-100 d-none d-md-block d-lg-none">{/* wrap every 3 on md */}</div>


                    <div className="card about-card mb-4">
                        <img className="board-img" src="./assets/board-img/Board-Stephanie-Martinez.jpg" alt="Stephanie Martinez" />
                        <div className="card-body about-card-body text-center">
                            <div className="board-name">Stephanie Martinez</div>
                            <div className="board-title">Secretary</div>
                        </div>
                    </div>
                    <div className="w-100 d-none d-sm-block d-md-none">{/* wrap every 2 on sm */}</div>
                    <div className="w-100 d-none d-lg-block d-xl-none">{/* wrap every 4 on lg*/}</div>

                    <div className="card about-card mb-4">
                        <img className="board-img" src="./assets/board-img/Board-Willie-Cowart.jpg" alt="Willie Cowart" />
                        <div className="card-body about-card-body text-center">
                            <div className="board-name">Willie Cowart</div>
                            <div className="board-title">Treasurer</div>
                        </div>
                    </div>
                    <div className="w-100 d-none d-xl-block">{/* wrap every 5 on lg*/}</div>

                    <div className="card about-card mb-4">
                        <img className="board-img" src="./assets/board-img/Camera-Shy.jpg" alt="Samantha Kang" />
                        <div className="card-body about-card-body text-center">
                            <div className="board-name">Samantha Kang</div>
                            <div className="board-title">Board Member</div>
                        </div>
                    </div>
                    <div className="w-100 d-none d-sm-block d-md-none">{/* wrap every 2 on sm */}</div>
                    <div className="w-100 d-none d-md-block d-lg-none">{/* wrap every 3 on md */}</div>

                    <div className="card about-card mb-4">
                        <img className="board-img" src="./assets/board-img/Camera-Shy.jpg" alt="Sheila Wright Green" />
                        <div className="card-body about-card-body text-center">
                            <div className="board-name">Sheila Wright Green</div>
                            <div className="board-title">Board Member & Communication / Sponsorship Coordinator</div>
                        </div>
                    </div>

                    <div className="card about-card mb-4">
                        <img className="board-img" src="./assets/board-img/Board-Stephany-Powell.jpg" alt="Stephany Powell" />
                        <div className="card-body about-card-body text-center">
                            <div className="board-name">Stephany Powell</div>
                            <div className="board-title">Board Member</div>
                        </div>
                    </div>
                    <div className="w-100 d-none d-sm-block d-md-none">{/* wrap every 2 on sm */}</div>
                    <div className="w-100 d-none d-lg-block d-xl-none">{/* wrap every 4 on lg*/}</div>


                    <div className="card about-card mb-4">
                        <img className="board-img" src="./assets/board-img/Board-Jonett-Mobley.jpg" alt="Jonett Mobley" />
                        <div className="card-body about-card-body text-center">
                            <div className="board-name">Jonett Mobley</div>
                            <div className="board-title">Board Member</div>
                        </div>
                    </div>
                    <div className="w-100 d-none d-md-block d-lg-none">{/* wrap every 3 on md */}</div>

                    <div className="card about-card mb-4">
                        <img className="board-img" src="./assets/board-img/Camera-Shy.jpg" alt="Deborah Oliver" />
                        <div className="card-body about-card-body text-center">
                            <div className="board-name">Deborah Oliver</div>
                            <div className="board-title">Board Member</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container">
                <h2 className="about-h2">Advisory Board</h2>

                <div className="card-deck">
                    <div className="card about-card mb-4">
                        <img className="board-img" src="./assets/board-img/Advisory-Shantrell-Barnes.jpg" alt="Shantrell Barnes" />
                        <div className="card-body about-card-body text-center">
                            <div className="board-name">Shantrell Barnes</div>
                            <div className="board-title">Board Member</div>
                        </div>
                    </div>

                    <div className="card about-card mb-4">
                        <img className="board-img" src="./assets/board-img/Advisory-Connie-Chavez.jpg" alt="Connie Chavez" />
                        <div className="card-body about-card-body text-center">
                            <div className="board-name">Connie Chavez</div>
                            <div className="board-title">Board Member</div>
                        </div>
                    </div>
                    <div className="w-100 d-none d-sm-block d-md-none">{/* wrap every 2 on sm */}</div>

                    <div className="card about-card mb-4">
                        <img className="board-img" src="./assets/board-img/Camera-Shy.jpg" alt="Mike Coleman" />
                        <div className="card-body about-card-body text-center">
                            <div className="board-name">Mike Coleman</div>
                            <div className="board-title">Board Member</div>
                        </div>
                    </div>
                    <div className="w-100 d-none d-md-block d-lg-none">{/* wrap every 3 on md */}</div>

                    <div className="card about-card mb-4">
                        <img className="board-img" src="./assets/board-img/Advisory-Sylvia-Collins.jpg" alt="Sylvia Collins" />
                        <div className="card-body about-card-body text-center">
                            <div className="board-name">Sylvia Collins</div>
                            <div className="board-title">Board Member</div>
                        </div>
                    </div>
                    <div className="w-100 d-none d-sm-block d-md-none">{/* wrap every 2 on sm */}</div>
                    <div className="w-100 d-none d-lg-block d-xl-none">{/* wrap every 4 on lg*/}</div>

                    <div className="card about-card mb-4">
                        <img className="board-img" src="./assets/board-img/Advisory-Nelly-Cuenca.jpg" alt="Nelly Cuenca" />
                        <div className="card-body about-card-body text-center">
                            <div className="board-name">Nelly Cuenca</div>
                            <div className="board-title">Treasurer</div>
                        </div>
                    </div>
                    <div className="w-100 d-none d-xl-block">{/* wrap every 5 on lg*/}</div>

                    <div className="card about-card mb-4">
                        <img className="board-img" src="./assets/board-img/Advisory-Bradley-Lockhart.jpg" alt="Bradley Lockhart" />
                        <div className="card-body about-card-body text-center">
                            <div className="board-name">Bradley Lockhart</div>
                            <div className="board-title">Board Member</div>
                        </div>
                    </div>
                    <div className="w-100 d-none d-sm-block d-md-none">{/* wrap every 2 on sm */}</div>
                    <div className="w-100 d-none d-md-block d-lg-none">{/* wrap every 3 on md */}</div>

                    <div className="card about-card mb-4">
                        <img className="board-img" src="./assets/board-img/Advisory-Marina-Ruiz.jpg" alt="Marina Ruiz" />
                        <div className="card-body about-card-body text-center">
                            <div className="board-name">Marina Ruiz</div>
                            <div className="board-title">Board Member</div>
                        </div>
                    </div>

                    <div className="card about-card mb-4">
                        <img className="board-img" src="./assets/board-img/Camera-Shy.jpg" alt="Esther Noh" />
                        <div className="card-body about-card-body text-center">
                            <div className="board-name">Esther Noh</div>
                            <div className="board-title">Board Member & Attorney</div>
                        </div>
                    </div>
                    <div className="w-100 d-none d-sm-block d-md-none">{/* wrap every 2 on sm */}</div>
                    <div className="w-100 d-none d-lg-block d-xl-none">{/* wrap every 4 on lg*/}</div>

                    <div className="card about-card mb-4">
                        <img className="board-img" src="./assets/board-img/Advisory-Judge-Paula-Rosales.jpg" alt="Judge Paula Rosales" />
                        <div className="card-body about-card-body text-center">
                            <div className="board-name">Judge Paula Rosales</div>
                            <div className="board-title">Board Member</div>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    )
}

export default About;