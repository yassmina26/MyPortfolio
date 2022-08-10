import React from 'react';
import './App.css';
import  Header  from './components/Home/Header';
import  Navbar  from './components/Home/NavBar';
import  About  from './components/Home/About';
import  Projects  from './components/Home/Projects';
import  Certifications  from './components/Home/Certifications';
import  Contact from './components/Home/Contact';
import  Footer from './components/Home/Footer';

import {Route} from 'react-router-dom';
//import {Element} from 'react-scroll';



  export default function App() {
    return (
      <main>
        <Navbar /> 
      <Route exact path="/" component={Header}/>
      <Route exact path="/" component={About}/>
      <Route exact path="/" component={Projects}/>
      <Route exact path="/" component={Certifications}/>
      <Route exact path="/" component={Contact}/>

      </main>
    );
  }


