import React from "react";

export default function EducationResume({ education }) {
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
