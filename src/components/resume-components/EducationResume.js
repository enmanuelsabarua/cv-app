import React, { Component } from "react";

class EducationResume extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { education } = this.props;

        return (
            <div className="education section">
                <div className="bold">{education.from} - {education.to}</div>
                <div>
                    <p className="bold">{education.university}, {education.city}</p>
                    <p>Degree: {education.degree}</p>
                    <p>Subject: {education.subject}</p>
                </div>
            </div>
        );
    }
}

export default EducationResume;