import logo from './logo.svg';
import Update from './admin/upload';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Edit from './admin/edit';
import Login from './auth/login';
import RegisterForm from './auth/register';
import ResetPassword from './auth/reset';
import EmailVerificationPage from './auth/verify';
import ForgotPassword from './auth/forgot';
import './App.css';

function App() {
  return (
    <div>
   <Router>
      <div>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/upload' element={<Update/>} />
          <Route path='/edit' element={<Edit/>} />
          <Route path='/register' element={<RegisterForm/>} />
          <Route path='/forget' element={<ForgotPassword/>} />
          <Route path='/reset' element={<ResetPassword/>} />
          <Route path='/verified' element={<EmailVerificationPage/>} />
        </Routes>
      </div>

    </Router>
    </div>
  );
}

export default App;
