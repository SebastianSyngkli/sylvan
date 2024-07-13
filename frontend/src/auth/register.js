import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../features/userSlice';
import './auth.css'

const RegisterForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth.isLoading);
  const errorMessage = useSelector((state) => state.auth.error);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await dispatch(register({ email, password, name }));
      if (response.payload && response.payload.message) {
        setSuccessMessage(response.payload.message);
      }
    } catch (error) {
      // Handle error
    }
  };

  return (
    <div className='register'>
  
      <form onSubmit={handleSubmit}>
        <div className="main-form">
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" disabled={isLoading}>{isLoading ? 'joplang...' : 'Register'}</button>
        <div className="message">
      {successMessage && <p style={{textAlign: 'center'}} >{successMessage}</p>}
      {errorMessage && <p style={{color: 'red', textAlign: 'center'}} >{errorMessage}</p>}
          <p  style={{textAlign: 'center'}}>Already Register? <a href="/">Login</a></p> 
      </div>
            
        </div> 
      </form>
  
    </div>
  );
};

export default RegisterForm;
