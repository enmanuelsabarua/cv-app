import React from "react";

export default function ExperienceResume({ experience }) {

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