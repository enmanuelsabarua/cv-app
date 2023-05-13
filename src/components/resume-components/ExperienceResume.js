import React, { Component } from "react";

class ExperienceResume extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { experience } = this.props;

        return (
            <div className="experience section">
                <div className="bold">{experience.from} - {experience.to}</div>
                <div>
                    <p className="bold">{experience.position}</p>
                    <p className="place">{experience.company}, {experience.city}</p>
                </div>
            </div>
        );
    }
}

export default ExperienceResume;