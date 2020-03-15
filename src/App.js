import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import './index.css';
import Header from './Header';
import CV from './CV';
import Navigation from './Navigation';
import Contact from './Contact';
import Art from './Art';



function App() {
  return (
    <div className="App">
      <Header/>
      <Navigation/>
      <CV/>
      <Contact />
      <Art />
    </div>
  );
}

export default App;
