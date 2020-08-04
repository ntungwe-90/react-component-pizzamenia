import React from 'react';
import Navbar from './Navbar';
import Carousel from './carousel';
import About from './About';
import Thumbnail from './Thumbnail';
import Footer from './Footer';
import './Assets/css/bootstrap.min.css';
import './Assets/css/styles1.css';


function App() {
  return (
    <div className="App">
     <Navbar/>
     <Carousel/>
     <About/>
     <Thumbnail/>
     <Footer/> 
    </div>
  );
}

export default App;
