import React from 'react'
import "./Profile.css"
import Typical from "react-typical"
export default function Profile() {
    return (
        <div className="profile-container">
            <div className="profile-parent">
                <div className="profile-details">
                    <div className="colz">
                        <div className="colz-icon">
                            <a href="https://www.linkedin.com/in/prince-prajapati-1b1b3b1b1/">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/prince-prajapati-1b1b3b1b1/" target="_blank">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/prince-prajapati-1b1b3b1b1/" target="_blank">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/prince-prajapati-1b1b3b1b1/" target="_blank">
                                <i className="fab fa-github"></i>
                            </a>
                        </div>
                    </div>

                    <div className="profile-details-name">
                        <span className="primary-text">
                            {""}
                            Hello, I'M <span className="highlighted-text">
                                Prince Prajapati
                            </span>
                        </span>
                    </div>
                    <div className="profile-details-role">
                        <span className="primary-text">
                            {" "}
                            <h1>
                                {" "}
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        "Java Developer ",
                                        2000,
                                        "Web Developer",
                                        2000,
                                        "Data Analyst",
                                        2000,
                                    ]}
                                />
                            </h1>
                            <span className="profile-role-tagline">
                                Digi coder | Tech Enthusiast | Open Source Contributor
                            </span>
                        </span>
                    </div>
                    <div className="profile-options">
                        <button className='btn primary-btn' style={{color:'#fff'}}>
                            Hire Me
                        </button>
                        <a href="PrincePrajapati.pdf" download="Prince PrincePrajapti.pdf">
                            <button className="btn highlighted-btn" >Get Resume </button>
                        </a>
                    </div>
                </div>
                <div className="profile-picture">
                    <div className="profile-picture-background">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
