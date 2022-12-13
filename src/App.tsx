import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import File from './components/File/File';



function App() {
  return (
    <div className="App">
      <Navbar />
      <File />
      <Footer />
    </div>
  );
}

export default App;
