import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { forgotPassword } from '../features/userSlice';

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth.isLoading);
  const error = useSelector((state) => state.auth.error);

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    const results = await dispatch(forgotPassword({email}))
    if(results.payload && results.payload.message) {
      setMessage(results.payload.message)
    }
  };

  return (
    <div className='register'>
  
      <div className="main-form">
      <h2>Forgot Password</h2>
      <form onSubmit={handleForgotPassword}>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder='Enter your email' />
          <button type="submit" disabled={isLoading || !email}>
          {isLoading ? 'Submitting...' : 'Submit'}
        </button>
     </form>
     {error && <p style={{ color: 'red' }}>{error}</p>}
       {message && <p style={{textAlign: 'center'}} >{message}</p> }
      </div>
    </div>
  );
};

export default ForgotPassword;
