import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import mockApi from '../api/mockApi';

const initialState = {
  user: null,
  loading: false,
  error: null,
  financialData: null,
  transactionStatus: null
};

export const loginUser = createAsyncThunk(
  'app/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await mockApi.login(credentials);
      localStorage.setItem('authToken', response.user.token);
      return response.user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const registerUser = createAsyncThunk(
  'app/register',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await mockApi.register(userData);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchFinancialData = createAsyncThunk(
  'app/fetchFinancialData',
  async (_, { rejectWithValue }) => {
    try {
      const response = await mockApi.getFinancialData();
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const submitTransaction = createAsyncThunk(
  'app/submitTransaction',
  async (transactionData, { rejectWithValue }) => {
    try {
      const response = await mockApi.submitTransaction(transactionData);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('authToken');
      state.user = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchFinancialData.fulfilled, (state, action) => {
        state.financialData = action.payload;
      })
      .addCase(submitTransaction.fulfilled, (state, action) => {
        state.transactionStatus = action.payload;
      });
  }
});

export const { logout } = appSlice.actions;
export default appSlice.reducer;