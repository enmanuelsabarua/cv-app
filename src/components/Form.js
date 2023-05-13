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

          const { handleSectionChange, personalInfo, experiences, deleteExperience, educations, addNewSection, print, loadExample, reset } = this.props;

        return (
            <form className="form noprint">
                <h2>Personal Information</h2>
                <GeneralInfo handleSectionChange={handleSectionChange} personalInfo={personalInfo}/>

                <h2>Experience</h2>
                <PracticalExp experiences={experiences} handleSectionChange={handleSectionChange} deleteExperience={deleteExperience}/>
                <button onClick={() => addNewSection('experiences', 'experience', experience)} type="button">Add</button>

                <h2>Education</h2>
                <Education educations={educations} handleSectionChange={handleSectionChange} deleteExperience={deleteExperience}/>
                <button onClick={() => addNewSection('educations', 'education', education)} type="button">Add</button>

                <button onClick={() => print('resume')} className="create-resume-btn" type="button">Generate PDF</button>
                <button onClick={() => loadExample()} className="load-example-btn" type="button">Load Example</button>
                <button onClick={() => reset()} className="reset-btn" type="button">Reset</button>
            </form>
        );
    }
}

export default Form;