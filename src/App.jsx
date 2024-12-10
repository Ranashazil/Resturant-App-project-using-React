import React, { useState } from 'react';
import Navbar from './components/Navbar';
import './App.css'
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import Products from './components/Products';
import Review from './components/Review';
import Contact from './components/Contact';
import Blogs from './components/Blogs';
import Footer from './components/Footer';
import Login from './components/Login/Login';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {isLoggedIn ? (
        <>
          <Navbar onLogout={()=> setIsLoggedIn(false)} />
          <Home />
          <About />
          <Menu />
          <Products />
          <Review />
          <Contact />
          <Blogs />
          <Footer />
        </>
      ) : (
        <Login onLogin={setIsLoggedIn} />
      )}
    </>
  );
}

export default App;
