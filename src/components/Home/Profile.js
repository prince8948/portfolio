import React from 'react'
import "./Profile.css"
import { Link } from "react-router-dom"
import Typical from "react-typical"
export default function Profile() {
    return (
        <div className="all-container">
            <nav className="navbar navbar-expand-lg">
                {/* Container wrapper */}
                <div className="container-fluid">
                    {/* Toggle button */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarCenteredExample"
                        aria-controls="navbarCenteredExample"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars" />
                    </button>
                    {/* Collapsible wrapper */}
                    <div
                        className="collapse navbar-collapse justify-content-center"
                        id="navbarCenteredExample"
                    >
                        {/* Left links */}
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link Active" aria-current="page" to='/Profile'>
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/Aboutme'}>
                                    About Me
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/Resume'>
                                    Projects
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Contact">
                                    Contacts
                                </Link>
                            </li>

                        </ul>
                        {/* Left links */}
                    </div>
                    {/* Collapsible wrapper */}
                </div>
                {/* Container wrapper */}
            </nav>

            <div className="profile-container">
                <div className="profile-parent">
                    <div className="profile-details">
                        <div className="profile-details-name">
                            <span className="primary-text">
                                {""}
                                Hello, I'm <span className="highlighted-text">
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
                                Empowering the Digital World with Fresh Java Talent. Unleashing Java, SQL, HTML, CSS, and Core Java Script to Innovate and Create.
                                </span>
                            </span>
                        </div>
                        <div className="profile-options">
                            <button className='btn primary-btn' style={{ color: '#fff' }}>
                                Hire Me
                            </button>
                            <a href="PrincePrajapati.pdf" download="Prince PrincePrajapti.pdf">
                                <button className="btn highlighted-btn" >Get Resume </button>
                            </a>
                        </div>
                        <div className="colz">
                            <div className="colz-icon">
                                <a to="https://www.linkedin.com/in/prince-prajapati-1b1b3b1b1/">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                                <a to="https://www.instagram.com/i_am_prince067/" target="_blank">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a to="https://www.facebook.com/profile.php?id=100066912692926" target="_blank">
                                    <i className="fab fa-facebook"></i>
                                </a>
                                <a to="https://github.com/prince8948" target="_blank">
                                    <i className="fab fa-github"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="profile-picture">
                        <div className="profile-picture-background">

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
