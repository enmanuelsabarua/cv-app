import React, { Component } from "react";
import '../styles/Resume.css';
import ExperienceResume from "./resume-components/ExperienceResume";
import EducationResume from "./resume-components/EducationResume";

class Resume extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { personalInfo, experiences, educations } = this.props;

        return (
            <div className="resume">
                <div className="resume-header">
                    <h2>{personalInfo.fName} {personalInfo.lName}</h2>
                    <h3>{personalInfo.title}</h3>
                </div>
                <div className="resume-body">

                    <div className="main-info">
                        <h4>Description</h4>
                        <p className="description">{personalInfo.description}</p>

                        <h4>Experience</h4>
                        <div className="experiences">
                            {experiences.slice(1).map(experience => {
                                return <ExperienceResume key={experience.id} experience={experience} />
                            })}
                        </div>

                        <h4>Education</h4>
                        <div className="educations">
                            {educations.slice(1).map(education => {
                                return <EducationResume key={education.id} education={education} />
                            })}
                        </div>
                    </div>

                    <div className="personal-details">
                        <h4>Personal Details</h4>
                        <div className="detail">
                            <p className="bold">Address</p>
                            <p>{personalInfo.address}</p>
                        </div>
                        <div className="detail">
                            <p className="bold">Phone Number</p>
                            <p>{personalInfo.phoneNumber}</p>
                        </div>
                        <div className="detail">
                            <p className="bold">Email</p>
                            <p>{personalInfo.email}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Resume;