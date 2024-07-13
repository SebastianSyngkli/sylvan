import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Update from './admin/update';
// import Restaurant from './Pages/Restaurant';
import Container from './Pages/Conatainer'
import Room from './room/room';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Lounge from './Pages/Lounge';
import Restaurant from './Pages/Restaurant'
import Contact from './Pages/Contact';
import Wedding from './Pages/Wedding';
import Gallery from './Pages/Gallery';
// import Edit from './admin/edit';
import Brocure from './brochore/brochore';
import Club from './Pages/Club';
import About from './Pages/About';
import Brochure from './brochore/brochore';
// import RegisterForm from './auth/register';
// import Login from './auth/login';
// import ForgotPassword from './auth/forgot';
// import ResetPassword from './auth/reset';
// import EmailVerificationPage from './auth/verified';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          {/* <Route path="/upload" element={<Update />} /> */}
          <Route path="/roomvilla" element={<Room />} />
          <Route path="/" element={<Container/>}/>
          <Route path='/lounge' element={<Lounge/>}/>
          <Route path='/restaurant' element={<Restaurant/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/wedding' element={<Wedding/>}/>
          <Route path='/soundproof' element={<Club/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
          {/* <Route path='/edit' element={<Edit/>} /> */}
          <Route path='/brocure' element={<Brocure/>} />
          <Route path='/about us' element={<About/>}/>
          <Route path='/brochure' element={<Brochure/>}/>
          {/* <Route path='/register' element={<RegisterForm/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/forget' element={<ForgotPassword/>} />
          <Route path='/reset' element={<ResetPassword/>} />
          <Route path='/verified' element={<EmailVerificationPage/>} /> */}
        </Routes>
        <Footer/>
      </div>

    </Router>
  );
};
export default App;
