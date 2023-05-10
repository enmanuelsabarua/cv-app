import React, { Component } from 'react';
import './styles/App.css';
import uniqid from 'uniqid';
import GeneralInfo from './components/GeneralInfo';
import PracticalExp from './components/PracticalExp';
import Education from './components/Education';

class App extends Component {
  constructor() {
    super();

    this.handlePersonalInfoChange = this.handlePersonalInfoChange.bind(this);
    this.handleExperienceChange = this.handleExperienceChange.bind(this);
    this.handleEducationChange = this.handleEducationChange.bind(this);
    this.deleteExperience = this.deleteExperience.bind(this);

    this.state = {
      personalInfo: {
        fName: '',
        lName: '',
        title: '',
        address: '',
        phoneNumber: '',
        email: '',
        description: '',
      },
      experiences: [
        {
          id: uniqid(),
          position: '',
          company: '',
          city: '',
          from: '',
          to: '',
        }
      ],
      experience: {
        id: uniqid(),
        position: '',
        company: '',
        city: '',
        from: '',
        to: '',
      },
      educations: [
        {
          id: uniqid(),
          university: '',
          city: '',
          degree: '',
          subject: '',
          from: '',
          to: '',
        }
      ],
      education: {
        id: uniqid(),
        university: '',
        city: '',
        degree: '',
        subject: '',
        from: '',
        to: '',
      },
    }
  }

  handlePersonalInfoChange = e => {
    this.setState(prevState => {
      return {
        personalInfo: {
          ...prevState.personalInfo,
          [e.target.id]: e.target.value
        }
      }
    });
  }

  handleExperienceChange = e => {
    this.setState(prevState => {
      return {
        experience: {
          ...prevState.experience,
          [e.target.id]: e.target.value
        }
      }
    });
  }

  handleEducationChange = e => {
    this.setState(prevState => {
      return {
        education: {
          ...prevState.education,
          [e.target.id]: e.target.value
        }
      }
    });
  }

  addNewExperience = () => {
    this.setState(prevState => {
      return {
        experiences: [...prevState.experiences, this.state.experience],
        experience: {
          id: uniqid(),
          position: '',
          company: '',
          city: '',
          from: '',
          to: '',
        },
      }
    })

  }

  addEducation = () => {
    this.setState(prevState => {
      return {
        educations: [...prevState.educations, this.state.education],
        education: {
          id: uniqid(),
          university: '',
          city: '',
          degree: '',
          subject: '',
          from: '',
          to: '',
        },
      }
    })

  }

  deleteExperience = (id, section) => {
    this.setState({
        [section]: this.state[section].filter(experience => experience.id !== id),
      }
    );
  }

  render() {
    return (
      <div>
        <header className='header'>
          <h1>CV Generator</h1>
        </header>
        <main className='main'>
        <form>
          <h2>Personal Information</h2>
          <GeneralInfo handlePersonalInfoChange={this.handlePersonalInfoChange} personalInfo={this.state.personalInfo}/>

          <h2>Experience</h2>
          <PracticalExp experiences={this.state.experiences} experience={this.state.experience} handleExperienceChange={this.handleExperienceChange} deleteExperience={this.deleteExperience}/>
          <button onClick={this.addNewExperience} type="button">Add</button>

          <h2>Education</h2>
          <Education educations={this.state.educations} handleEducationChange={this.handleEducationChange} deleteExperience={this.deleteExperience}/>
          <button onClick={this.addEducation} type="button">Add</button>

        </form>
        </main>
      </div>
    );
  }
}

export default App;