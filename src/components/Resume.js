import React, { Component } from "react";
import '../styles/Resume.css'

class Resume extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="resume">
                <div className="resume-header">
                    <h2>Enmanuel Sanchez Abarua</h2>
                    <h3>Wev Developer</h3>
                </div>
                <div className="resume-body">

                    <div className="main-info">
                        <h4>Description</h4>
                        <p className="description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur placeat inventore labore deserunt, possimus iusto debitis quaerat eius et laboriosam consequuntur repellendus dolore illo, minima beatae commodi ipsam, molestias enim.
                        </p>

                        <h4>Experience</h4>
                        <div className="experiences">
                            <div className="experience section">
                                <div className="bold">From - to</div>
                                <div>
                                    <p className="bold">Position</p>
                                    <p className="place">Company, City</p>
                                </div>
                            </div>
                        </div>

                        <h4>Education</h4>
                        <div className="educations">
                            <div className="education section">
                                <div className="bold">From - to</div>
                                <div>
                                    <p className="bold">University Name, city name</p>
                                    <p>Degree:</p>
                                    <p>Subject:</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="personal-details">
                        <h4>Personal Details</h4>
                        <div className="detail">
                            <p className="bold">Address</p>
                            <p>Example St 10</p>
                        </div>
                        <div className="detail">
                            <p className="bold">Phone Number</p>
                            <p>123456789</p>
                        </div>
                        <div className="detail">
                            <p className="bold">Email</p>
                            <p>john.doe@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Resume;