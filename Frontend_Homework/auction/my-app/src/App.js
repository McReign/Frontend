import React, { Component } from 'react';
import './App.css';
import './uikit.css';
import PrimaryBtn from './components/primary-btn';
import DefaultBtn from './components/default-btn';
import SuccessBtn from './components/success-btn';
import DangerBtn from './components/danger-btn';
import SearchBar from './components/search-bar';
import Card from './components/card';
import Header from './components/header';
import InputSumForm from './components/inputSumForm';
import RegistrationForm from './components/registrationForm';
import CardInfo from './components/card-info';
import LoginForm from './components/loginForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Header/>
        </header>
      </div>
    );
  }
}

export default App;
