import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../features/userSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth.isLoading);
  const error = useSelector((state) => state.auth.error);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const resultAction = await dispatch(login({ email, password }));
    if (login.fulfilled.match(resultAction)) {
      navigate('/upload');
    }
  };

  return (
    <div className='register'>
      <form onSubmit={handleLogin}>
        <div className="main-form">
           <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email'/>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' />
          <button type="submit" disabled={isLoading || !email || !password}>
          {isLoading ? 'Logging in...' : 'Login'}
          </button>
           <p style={{textAlign: 'center'}} >Forget password?<a href="forget">Click here</a> </p>
          <p  style={{textAlign: 'center'}}>Don't have an account? <a href="register">Register</a></p> 
        </div>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Login;
