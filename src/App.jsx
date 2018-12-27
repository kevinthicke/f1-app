import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import QualifyingResults from './pages/QualifyingResults';
import Header from './components/Header';
import DriversInformation from './pages/DriversInformation';
import Home from './pages/Home';
import * as styles from './styles.css';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className={styles.App}>
          <Header/>
          <Route exact path="/" component={Home}/>
          <Route path="/home" component={Home}/>
          <Route path ="/qualifyingresults" component={QualifyingResults}/>
          <Route path ="/driversinformation" component={DriversInformation}/>
        </div>
      </Router>  
    );
  }
}
