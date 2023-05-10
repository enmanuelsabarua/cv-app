import React, { Component } from 'react';
import './styles/App.css';
import uniqid from 'uniqid';
import GeneralInfo from './components/GeneralInfo';
import PracticalExp from './components/PracticalExp';

class App extends Component {
  constructor() {
    super();

    this.handlePersonalInfoChange = this.handlePersonalInfoChange.bind(this);
    this.handleExperienceChange = this.handleExperienceChange.bind(this);

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

    // console.log(this.state.personalInfo);
  }

  handleExperienceChange = e => {
    this.setState(prevState => {
      return {
        experience: {
          ...prevState.experience,
          [e.target.id]: e.target.value
        }
      }
    })

    // console.log(this.state.experience);
  }

  addNewExperience = () => {
    this.setState(prevState => {
      return {
        experiences: [this.state.experience, ...prevState.experiences ],
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

    console.log(this.state.experiences);
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
          <PracticalExp experiences={this.state.experiences} experience={this.state.experience} handleExperienceChange={this.handleExperienceChange}/>
          <button onClick={this.addNewExperience} type="button">Add</button>
        </form>
        </main>
      </div>
    );
  }
}

export default App;