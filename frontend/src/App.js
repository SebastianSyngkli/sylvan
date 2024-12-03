import React, { useState, useEffect } from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Container from './Pages/Conatainer';
import logoloading from './assets/logo.jpg'; // Import the logo
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Room from './room/room';
import Lounge from './Pages/Lounge';
import Restaurant from './Pages/Restaurant';
import Contact from './Pages/Contact';
import Wedding from './Pages/Wedding';
import Gallery from './Pages/Gallery';
import Brochure from './brochore/brochore';
import About from './Pages/About';
import Imageroom from './imageroom/imageroom';
import Imageroomb from './imageroomb/imageroomb';
import Imageroomc from './imageroomc/imageroomc';
import Imageroomd from './imageroomd/imageroomd';
import Singlecabbin from './singlecabbin/singlecabbin';
import Fullcabbin from './fullcabbin/fullcabbin';
import Villa from './1villa/1villa';
import Villaprivate from './villaprivate/villaprivate';
import Villacommon from './villacommon/villacommon';


const Loader = () => {
  return (
    <div style={styles.loadingContainer}>
      {/* Display the spinning logo */}
      <img src={logoloading} alt="Loading Logo" style={styles.logo} />
    </div>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadAssets = async () => {
      // Simulate a loading process (replace with actual logic if needed)
      await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulated 3-second delay
      setIsLoading(false);
    };

    loadAssets();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Router>
          <div>
            <Navbar />
            <Routes>
              <Route path="/" element={<Container />} />
              <Route path="/roomvilla" element={<Room />} />
              <Route path="/lounge" element={<Lounge />} />
              <Route path="/restaurant" element={<Restaurant />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/wedding" element={<Wedding />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/brochure" element={<Brochure />} />
              <Route path="/about" element={<About />} />
              <Route path="/imageroom" element={<Imageroom />} />
              <Route path="/imageroomb" element={<Imageroomb />} />
              <Route path="/imageroomc" element={<Imageroomc />} />
              <Route path="/imageroomd" element={<Imageroomd />} />
              <Route path="/singlecabbin" element={<Singlecabbin />} />
              <Route path="/fullcabbin" element={<Fullcabbin />} />
              <Route path="/villa" element={<Villa />} />
              <Route path="/villaprivate" element={<Villaprivate />} />
              <Route path="/villacommon" element={<Villacommon/>} />
            </Routes>
            <Footer />
          </div>
        </Router>
      )}
    </>
  );
};

// Inline styles for the loader component, including the spinning logo
const styles = {
  loadingContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#000', // Optional: Background color to match your theme
  },
  logo: {
    width: '150px', // Adjust the size of the logo
    animation: 'spin 2s linear infinite', // Apply the spinning animation
  },
};


export default App;
