import React from 'react'
import './App.css'
import Header from './components/common/heading/Header'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './components/home/Home';
import About from './components/about/About';
import CoachingHome from './components/directCoaching/CoachingHome';
import Layout from './components/frontWrite/Layout';
import GroupCoaching from './components/group/GroupCoaching';
import Contact from './components/contact/Contact';
import Footer from './components/common/footer/Footer';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' exact Component={Home} />
          <Route path='/about' exact Component={About} />
          <Route path='/frontWrite' exact Component={Layout} />
          <Route path='/coaching' exact Component={CoachingHome} />
          <Route path='/group' exact Component={GroupCoaching} />
          <Route path='/contact' exact Component={Contact} />

        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
