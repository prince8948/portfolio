import React from 'react'
import "./Aboutme.css"
const Aboutme = () => {
    return (

        <>
            <div className="about-container">
                <div className="about-parent">
                    <h1>About Me</h1>
                    <h6 className='title'>Who I'm</h6>
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img
                                    src="images/profilephoto.jpg"
                                    alt="Trendy Pants and Shoes"
                                    className="img-fluid rounded-start"
                                />
                            </div>
                            <div className="col-md-6">
                                <div className="card-body">
                                    <p className="card-title">I'm <span>Prince Prajapati</span> & I'm <span>Java Developer</span></p>
                                    <p className="card-text">
                                        Computer Applicatiom graduate in Master's Degree passionate about learning new technologies and developing software solutions.
                                        And also know about the web development and web designing, and I have done some projects on it.
                                        I am a quick learner and a team player who is always ready to learn new things and work with new people.
                                        Proficient in a range of modern technologies inccluding Core Java, SQL, Core Java Script, HTML, CSS.
                                        i have certificate in Basic java And SQL from Hacker Rank

                                    </p>
                                    <a
                                        className="btn text-white"
                                        style={{ backgroundColor: "#dd4b39" }}
                                        href="PrincePrajapati.pdf" download="PrincePrajapti.pdf"
                                        role="button"
                                    >
                                        Download CV
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Aboutme