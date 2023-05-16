import React from "react";

export default function Education({ educations, handleSectionChange, deleteExperience }) {

    return (
        <>
            {educations.map((education, index) => {
                return (
                    <section key={education.id} className="form-section">
                        <input value={index >= 1 ? education.university : this} onChange={(e) => handleSectionChange(e, 'Education')} id="university" type="text" placeholder="University Name " />
                        <input value={index >= 1 ? education.city : this} onChange={(e) => handleSectionChange(e, 'Education')} id="city" type="text" placeholder="City" />
                        <input value={index >= 1 ? education.degree : this} onChange={(e) => handleSectionChange(e, 'Education')} id="degree" type="text" placeholder="Degree" />
                        <input value={index >= 1 ? education.subject : this} onChange={(e) => handleSectionChange(e, 'Education')} id="subject" type="text" placeholder="Subject" />
                        <input value={index >= 1 ? education.from : this} onChange={(e) => handleSectionChange(e, 'Education')} id="from" type="text" placeholder="From" />
                        <input value={index >= 1 ? education.to : this} onChange={(e) => handleSectionChange(e, 'Education')} id="to" type="text" placeholder="To" />

                        {index !== 0 && <button onClick={() => deleteExperience(education.id, 'Educations')} type="button">Delete</button>}
                    </section>
                );
            })}
        </>
    );
}