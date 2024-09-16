import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const register = createAsyncThunk(
  'auth/register',
  async ({ email, password, name }, { rejectWithValue }) => {
    try {
      const response = await axios.post('https://backend.sylvanhorizonresort.in/register', { email, password, name });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message || 'An error occurred');
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post('https://backend.sylvanhorizonresort.in/login', { email, password });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message || 'An error occurred');
    }
  }
);


export const forgotPassword = createAsyncThunk(
  'auth/forgotPassword',
  async ({ email }, { rejectWithValue }) => {
    try {
      const response = await axios.post('https://backend.sylvanhorizonresort.in/forgot', { email });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message || 'An error occurred');
    }
  }
);

export const resetPassword = createAsyncThunk(
  'auth/resetPassword',
  async ({ token, newPassword }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`https://backend.sylvanhorizonresort.in/reset/${token}`, { newPassword });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message || 'An error occurred');
    }
  }
);

const initialState = {
  token: localStorage.getItem('token'), // Retrieve token from local storage
  isAuthenticated: !!localStorage.getItem('token'), // Check if token exists
  isLoading: false,
  error: null,
  user: {
    name:  localStorage.getItem('userName'),
    email: localStorage.getItem('userEmail')
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.isLoading = true;
      state.error = null;
      state.isAuthenticated = false;
      state.token = null;
      state.user.name = '';
      localStorage.removeItem('token'); // Remove token from local storage
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.token = action.payload.token;
        localStorage.setItem('token', action.payload.token);
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.token = action.payload.token;
        state.user.name = action.payload.name; // Update the user name here
        localStorage.setItem('token', action.payload.token);
        localStorage.setItem('userEmail', action.payload.name)
        localStorage.setItem('userName', action.payload.name); // Store the user name in local storage
      })
      
      
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(forgotPassword.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(forgotPassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.token = action.payload.token;
        localStorage.setItem('token', action.payload.token);
       
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(resetPassword.pending, (state) => {
        state.isLoading = true;

        state.error = null;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.token;
        localStorage.setItem('token', action.payload.token);
        // Handle success, if needed
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;