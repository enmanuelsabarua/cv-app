import React, { Component } from 'react';
import './styles/App.css';
import GeneralInfo from './components/GeneralInfo';

class App extends Component {
  constructor() {
    super();

    this.handlePersonalInfoChange = this.handlePersonalInfoChange.bind(this);

    this.state = {
      personalInfo: {
        fName: '',
        lName: '',
        title: '',
        address: '',
        phoneNumber: '',
        email: '',
        description: '',
      }
    }
  }

  handlePersonalInfoChange = e => {
    this.setState(prevState => {
      return {
        personalInfo: {
          ...prevState.personalInfo,
          [e.target.id]: e.target.value,
        }
      }
    });

    console.log(this.state.personalInfo);
  }

  render() {
    return (
      <div>
        <header className='header'>
          <h1>CV Generator</h1>
        </header>
        <main className='main'>
        <form>
          <GeneralInfo handlePersonalInfoChange={this.handlePersonalInfoChange} />
        </form>
        </main>
      </div>
    );
  }
}

export default App;