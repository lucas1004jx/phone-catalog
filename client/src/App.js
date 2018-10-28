import React, { Component } from 'react';
import './App.css';
import './components/PhoneDetailComponent';
import PhoneListContainer from './components/PhoneListContainer';
import PhoneDetailComponent from './components/PhoneDetailComponent';
import {Provider} from 'react-redux';
import store from './store';



class App extends Component {
  render() {
    console.log(store.getState());
    
    return (
      <Provider store={store}>
      <div className="App">
        <PhoneListContainer/>
        <PhoneDetailComponent/>
         
          
      </div>
      </Provider>
    );
  }
}

export default App;

