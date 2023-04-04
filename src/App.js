import styles from './App.module.css';
import Header from './components/Header';
import React, { useState, useEffect } from 'react';
import Main from './components/Main';
// import MainSlider from './components/MainSlider';
import Footer from './components/Footer';
import Portfolio from './components/Main/Portfolio';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {  
  return (
    <>
    <Router>
    <Header/>
    {/* <MainSlider/> */}
    <div className={styles.wrapper}>
    <Routes>
    <Route exact path="/" element={<Main/>}/>
    <Route exact path="/portfolio" element={ <Portfolio/>}/>      
    </Routes>
    </div>
         
      <Footer/>
      </Router>
    </>
  );
}
export default App;
