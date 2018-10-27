import React, { Component } from 'react';
import './App.css';
import './components/PhoneDetailComponent';
import PhoneListContainer from './components/PhoneListContainer';
import Phone from './components/Phone';
class App extends Component {
  render() {
    return (
      <div className="App">
        <PhoneListContainer>
        <Phone />
          </PhoneListContainer>
          
      </div>
    );
  }
}

export default App;
