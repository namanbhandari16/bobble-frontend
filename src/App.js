import React from 'react';
import SignUp from './SignUp.js';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './Navbar';


function App() {
  return (
    <Router>
      <div >
      <Navbar />
      <Route exact path="/" component={SignUp} />
      <Route exact path="/home" component={Home} />
      </div>
    </Router>
  );
}

export default App;
