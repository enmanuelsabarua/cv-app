import React, { Component } from "react";
import uniqid from 'uniqid';
import '../styles/Form.css';
import GeneralInfo from './GeneralInfo';
import PracticalExp from './PracticalExp';
import Education from './Education';


class Form extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const experience = {
            id: uniqid(),
            position: '',
            company: '',
            city: '',
            from: '',
            to: '',
          };
      
          const education = {
            id: uniqid(),
            university: '',
            city: '',
            degree: '',
            subject: '',
            from: '',
            to: '',
          };

          const { handleSectionChange, personalInfo, experiences, deleteExperience, educations, addNewSection } = this.props;

        return (
            <form className="form">
                <h2>Personal Information</h2>
                <GeneralInfo handleSectionChange={handleSectionChange} personalInfo={personalInfo}/>

                <h2>Experience</h2>
                <PracticalExp experiences={experiences} handleSectionChange={handleSectionChange} deleteExperience={deleteExperience}/>
                <button onClick={() => addNewSection('experiences', 'experience', experience)} type="button">Add</button>

                <h2>Education</h2>
                <Education educations={educations} handleSectionChange={handleSectionChange} deleteExperience={deleteExperience}/>
                <button onClick={() => addNewSection('educations', 'education', education)} type="button">Add</button>
            </form>
        );
    }
}

export default Form;