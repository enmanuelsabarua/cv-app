import React, { useState } from 'react';
import './styles/App.css';
import uniqid from 'uniqid';
import Form from './components/Form';
import Resume from './components/Resume';

export default function App() {
  const [personalInfo, setPersonalInfo] = useState({
    fName: '',
    lName: '',
    title: '',
    address: '',
    phoneNumber: '',
    email: '',
    description: '',
  });

  const [experiences, setExperiences] = useState([
    {
      id: uniqid(),
      position: '',
      company: '',
      city: '',
      from: '',
      to: '',
    }
  ]);

  const [experience, setExperience] = useState({
    id: uniqid(),
    position: '',
    company: '',
    city: '',
    from: '',
    to: '',
  });

  const [educations, setEducations] = useState([
    {
      id: uniqid(),
      university: '',
      city: '',
      degree: '',
      subject: '',
      from: '',
      to: '',
    }
  ]);

  const [education, setEducation] = useState({
    id: uniqid(),
    university: '',
    city: '',
    degree: '',
    subject: '',
    from: '',
    to: '',
  });

  const handleSectionChange = (e, section) => {
    switch (section) {
      case 'PersonalInfo':
        setPersonalInfo(prevState => {
          return {
            ...prevState,
            [e.target.id]: e.target.value
          }
        });

        break;

      case 'Experience':
        setExperience(prevState => {
          return {
            ...prevState,
            [e.target.id]: e.target.value
          }
        });

        break;
      case 'Education':
        setEducation(prevState => {
          return {
            ...prevState,
            [e.target.id]: e.target.value
          }
        });

        break;

      default:
        break;
    }

  }

  const addNewSection = (sectionArray, section, sectionObject) => {
    // this.setState(prevState => {
    //   return {
    //     [sectionArray]: [...prevState[sectionArray], this.state[section]],
    //     [section]: sectionObject,
    //   }

    switch (sectionArray) {
      case 'Experiences':
        setExperiences(prevState => {
          return [...prevState, experience]
        });

        break;
      case 'Educations':
        setEducations(prevState => {
          return [...prevState, education]
        });

        break;

      default:
        break;
    }

    switch (section) {
      case 'Experience':
        setExperience(sectionObject);

        break;
      case 'Education':
        setEducation(sectionObject);

        break;

      default:
        break;
    }

  }

  const deleteExperience = (id, section) => {

    switch (section) {
      case 'Experiences':
        setExperiences(experiences.filter(experience => experience.id !== id));

        break;
      case 'Educations':
        setEducations(educations.filter(education => education.id !== id));

        break;

      default:
        break;
    }

  }

  const print = () => {
    window.print();
  }

  const loadExample = () => {
    setPersonalInfo({
      fName: 'John',
      lName: 'Doe',
      title: 'Senior Web Developer',
      address: 'Example Street 10',
      phoneNumber: '1-234-5678',
      email: 'john.doe@gmail.com',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus imperdiet nisl sed vestibulum. Donec gravida, nulla eget blandit fermentum, mauris nisi rutrum libero, ac pharetra erat est sit amet tellus. Quisque fermentum dolor a interdum fermentum. Maecenas vehicula ac ipsum nec gravida. Integer quis porta turpis. Aenean et metus.',
    });

    setExperiences([
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
    ]);

    setEducations([
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
    ]);
  }

  const reset = () => {
    setPersonalInfo({
      fName: '',
      lName: '',
      title: '',
      address: '',
      phoneNumber: '',
      email: '',
      description: '',
    });

    setExperiences([
      {
        id: uniqid(),
        position: '',
        company: '',
        city: '',
        from: '',
        to: '',
      }
    ]);

    setExperience({
      id: uniqid(),
      position: '',
      company: '',
      city: '',
      from: '',
      to: '',
    });

    setEducations([
      {
        id: uniqid(),
        university: '',
        city: '',
        degree: '',
        subject: '',
        from: '',
        to: '',
      }
    ]);

    setEducation({
      id: uniqid(),
      university: '',
      city: '',
      degree: '',
      subject: '',
      from: '',
      to: '',
    });
  }

  return (
    <div>
      <header className='header noprint'>
        <h1>CV Generator</h1>
      </header>
      <main className='main'>
        <Form print={print} loadExample={loadExample} reset={reset} handleSectionChange={handleSectionChange} personalInfo={personalInfo} experiences={experiences} educations={educations} deleteExperience={deleteExperience} addNewSection={addNewSection} />
        <Resume personalInfo={personalInfo} experiences={experiences} experienceSection={experience} educations={educations} />
      </main>
      <footer className='footer noprint'>
        <p>Copyright &copy; Enmanuel Sanchez Abarua 2023 <i className="fa-brands fa-github"></i></p>
      </footer>
    </div>
  );
}