import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Hero from './components/Hero';  // Import Hero component
import Gallery from './components/Gallery';  // Import Gallery component
import Contact from './components/Contact';  // Import Contact component
import Post from './components/Post';  // Import Post component

function App() {
  return (
    <div className="App bg-gray-100 text-gray-800">
      <Header />
      {/* Add Hero section here */}
      <Hero />
      <div className="container mx-auto mt-8 px-4">
        <div className="row">
          <MainContent />
          <Sidebar />
        </div>
      </div>
      {/* Add Post section here */}
      <Post />
      {/* Add Gallery section here */}
      <Gallery />
      {/* Add Contact section here */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;