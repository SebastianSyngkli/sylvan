import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunks for API calls
export const register = createAsyncThunk(
  'auth/register',
  async ({ email, password, name }, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:5000/register', { email, password, name });
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
      const response = await axios.post('http://localhost:5000/login', { email, password });
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
      const response = await axios.post('http://localhost:5000/forgot', { email });
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

// Initial state for auth slice
const initialState = {
  token: localStorage.getItem('token'), // Retrieve token from local storage
  isAuthenticated: !!localStorage.getItem('token'), // Check if token exists
  isLoading: false,
  error: null,
  user: {
    name: localStorage.getItem('userName') || '', // Initialize with empty string if not found
    email: localStorage.getItem('userEmail') || '' // Initialize with empty string if not found
  },
  isAdmin: false, // Initialize isAdmin flag
};

// Auth slice with reducers and extra reducers for async thunks
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
      state.isAdmin = false; // Reset isAdmin flag
      localStorage.removeItem('token'); // Remove token from local storage
      state.isLoading = false;
    },
    setIsAdmin: (state, action) => {
      state.isAdmin = action.payload;
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
        localStorage.setItem('userEmail', action.payload.email);
        localStorage.setItem('userName', action.payload.name); // Store the user name in local storage

        // Check if user is admin and update isAdmin flag
        state.isAdmin = action.payload.isAdmin || false;
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
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

// Export actions from authSlice
export const { logout, setIsAdmin } = authSlice.actions;

// Export reducer for authSlice
export default authSlice.reducer;
