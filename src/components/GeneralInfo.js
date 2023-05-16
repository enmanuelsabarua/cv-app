import React from "react";

export default function GeneralInfo({ handleSectionChange, personalInfo }) {
        return (
                <section>
                        <input id="fName" onChange={(e) => handleSectionChange(e, 'PersonalInfo')} type="text" placeholder="First Name" value={personalInfo.fName} />
                        <input id="lName" onChange={(e) => handleSectionChange(e, 'PersonalInfo')} type="text" placeholder="Last Name" value={personalInfo.lName} />
                        <input id="title" onChange={(e) => handleSectionChange(e, 'PersonalInfo')} type="text" placeholder="Title" value={personalInfo.title} />
                        <input id="address" onChange={(e) => handleSectionChange(e, 'PersonalInfo')} type="text" placeholder="Address" value={personalInfo.address} />
                        <input id="phoneNumber" onChange={(e) => handleSectionChange(e, 'PersonalInfo')} type="text" placeholder="Phone Number" value={personalInfo.phoneNumber} />
                        <input id="email" onChange={(e) => handleSectionChange(e, 'PersonalInfo')} type="email" placeholder="Email" value={personalInfo.email} />
                        <textarea id="description" onChange={(e) => handleSectionChange(e, 'PersonalInfo')} name="description" placeholder="Description" value={personalInfo.description}></textarea>
                </section>
        );
}