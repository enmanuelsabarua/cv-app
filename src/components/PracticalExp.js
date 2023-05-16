import React from "react";

export default function PracticalExp({ experiences, handleSectionChange, deleteExperience }) {
    return (
        <>
            {experiences.map((experience, index) => {
                return (
                    <section key={experience.id} className="form-section">
                        <input value={index >= 1 ? experience.position : this} onChange={(e) => handleSectionChange(e, 'Experience')} id="position" type="text" placeholder="Position" />
                        <input value={index >= 1 ? experience.company : this} onChange={(e) => handleSectionChange(e, 'Experience')} id="company" type="text" placeholder="Company" />
                        <input value={index >= 1 ? experience.city : this} onChange={(e) => handleSectionChange(e, 'Experience')} id="city" type="text" placeholder="City" />
                        <input value={index >= 1 ? experience.from : this} onChange={(e) => handleSectionChange(e, 'Experience')} id="from" type="text" placeholder="From" />
                        <input value={index >= 1 ? experience.to : this} onChange={(e) => handleSectionChange(e, 'Experience')} id="to" type="text" placeholder="To" />

                        {index !== 0 && <button onClick={() => deleteExperience(experience.id, 'Experiences')} type="button">Delete</button>}
                    </section>
                );
            })}
        </>
    );
}