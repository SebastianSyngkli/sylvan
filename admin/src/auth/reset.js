import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { resetPassword } from '../features/userSlice';
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get('token');
  const isLoading = useSelector((state) => state.auth.isLoading)
  const [newPassword, setNewPassword] = useState('');

  const handleChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
     const results = await dispatch(resetPassword({ token, newPassword }))
     if(resetPassword.fulfilled.match(results)) {
      navigate('/upload')
     }
  };

  return (
    <div className='register'>
      <form onSubmit={handleSubmit}>
        <div className='main-form'>
        <h2>Reset Password</h2>
          <input
            type="password"
            name="newPassword"
            placeholder="New Password"
            value={newPassword}
            onChange={handleChange}
          />
        </div>
        <button id='resetbtn' style={{textAlign:'center'}} type="submit" disabled={isLoading}>{isLoading ? 'loading...' : 'reset password'}</button>
      </form>
    </div>
  );
};

export default ResetPassword;