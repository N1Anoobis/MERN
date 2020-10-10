import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar';
import { Provider } from 'react-redux';
import store from './store';
import Carusel from './components/Carusel';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <NavBar />
          <Carusel/>
        </div>
      </Provider>
    );
  }
}

export default App;