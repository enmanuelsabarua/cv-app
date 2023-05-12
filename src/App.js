import React, { Component } from 'react';
import './styles/App.css';
import uniqid from 'uniqid';
import Form from './components/Form';
import Resume from './components/Resume';

class App extends Component {
  constructor() {
    super();

    this.handleSectionChange = this.handleSectionChange.bind(this);
    this.addNewSection = this.addNewSection.bind(this);
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

  handleSectionChange = (e, section) => {
    this.setState(prevState => {
      return {
        [section]: {
          ...prevState[section],
          [e.target.id]: e.target.value
        }
      }
    });
  }

  addNewSection = (sectionArray, section, sectionObject) => {
    this.setState(prevState => {
      return {
        [sectionArray]: [...prevState[sectionArray], this.state[section]],
        [section]: sectionObject,
      }
    });

    console.log(this.state.experiences);
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
          <Form handleSectionChange={this.handleSectionChange} personalInfo={this.state.personalInfo} experiences={this.state.experiences} educations={this.state.educations} deleteExperience={this.deleteExperience} addNewSection={this.addNewSection}/>
          <Resume />
        </main>
      </div>
    );
  }
}

export default App;