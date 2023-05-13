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
    this.print = this.print.bind(this);
    this.loadExample = this.loadExample.bind(this);
    this.reset = this.reset.bind(this);

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
 print = () => {
    window.print();
  }

   loadExample = () => {
    this.setState({
      personalInfo: {
        fName: 'John',
        lName: 'Doe',
        title: 'Senior Web Developer',
        address: 'Example Street 10',
        phoneNumber: '1-234-5678',
        email: 'john.doe@gmail.com',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus imperdiet nisl sed vestibulum. Donec gravida, nulla eget blandit fermentum, mauris nisi rutrum libero, ac pharetra erat est sit amet tellus. Quisque fermentum dolor a interdum fermentum. Maecenas vehicula ac ipsum nec gravida. Integer quis porta turpis. Aenean et metus.',
      },
      experiences: [
        {
          id: uniqid(),
          position: 'Senior Web Developer',
          company: 'Facebook Inc.',
          city: 'Menlo Park',
          from: '2015',
          to: 'Present',
        },
        {
          id: uniqid(),
          position: 'Junior Web Developer',
          company: 'Tesla Inc.',
          city: 'Palo Alto',
          from: '2012',
          to: '2015',
        },
        {
          id: uniqid(),
          position: 'UI / UX Designer',
          company: 'Google LLC',
          city: 'Google LLC',
          from: '2010',
          to: '2012',
        },
      ],
      educations: [
        {
          id: uniqid(),
          university: 'University of Technology',
          city: 'Oklahoma',
          degree: 'Master',
          subject: 'Science',
          from: '2008',
          to: '2010',
        },
        {
          id: uniqid(),
          university: 'University of Design Art',
          city: 'New York',
          degree: 'Bachelor',
          subject: 'Visual Art',
          from: '2005',
          to: '2008',
        }
      ],
    });
  }

  reset = () => {
    this.setState({
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
    });
  }

  render() {
    return (
      <div>
        <header className='header noprint'>
          <h1>CV Generator</h1>
        </header>
        <main className='main'>
          <Form print={this.print} loadExample={this.loadExample} reset={this.reset} handleSectionChange={this.handleSectionChange} personalInfo={this.state.personalInfo} experiences={this.state.experiences} educations={this.state.educations} deleteExperience={this.deleteExperience} addNewSection={this.addNewSection}/>
          <Resume personalInfo={this.state.personalInfo} experiences={this.state.experiences} experienceSection={this.state.experience} educations={this.state.educations} />
        </main>
        <footer className='footer noprint'>
          <p>Copyright &copy; Enmanuel Sanchez Abarua 2023 <i class="fa-brands fa-github"></i></p>
        </footer>
      </div>
    );
  }
}

export default App;