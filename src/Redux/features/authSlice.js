import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../../Services/API/index.js";

export const requestOTP = createAsyncThunk("auth/get-otp", async (user) => {
  // send username, email in body and ask otp on email
  const response = await API.post("/api/v1/auth/get-otp", user);
  const data = await response.json();
  return data;
});

export const signup = createAsyncThunk("auth/signup", async (user) => {
  // send username, email, password, otp and request to create a new account
  const response = await API.post("/api/v1/auth/signup", user);
  const data = await response.json();
  return data;
});

export const login = createAsyncThunk("auth/login", async (user) => {
  // send email, password and request to login
  const response = await API.post("/api/v1/auth/login", user);
  const data = await response.json();
  return data;
});

export const deactivateAccount = createAsyncThunk("auth/deactivate", async () => {
  // sends a get request to deactivate or delete the account of current logged in user
  const response = await API.get("/api/v1/auth/deactivate");
  const data = await response.json();
  return data;
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoading: false,
    error: null,
    profile: null,
  },
  reducers: {
    logout: (state) => {
      state.profile = null;
      state.isLoading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // handle otp request
    builder.addCase(requestOTP.pending, (state) => {
      state.isLoading = true;
      state.profile = null;
      state.error = null;
    });
    builder.addCase(requestOTP.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(requestOTP.fulfilled, (state) => {
      state.isLoading = false;
      state.error = null;
    });

    // handle sign up request
    builder.addCase(signup.pending, (state) => {
      state.isLoading = true;
      state.profile = null;
      state.error = null;
    });
    builder.addCase(signup.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(signup.fulfilled, (state, action) => {
      state.isLoading = false;
      state.profile = action.payload;
      state.error = null;
    });

    // handle login request
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
      state.profile = null;
      state.error = null;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      state.profile = action.payload;
      state.error = null;
    });

    // handle deactivate request
    builder.addCase(deactivateAccount.pending, (state) => {
      state.isLoading = true;
      state.profile = null;
      state.error = null;
    });
    builder.addCase(deactivateAccount.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(deactivateAccount.fulfilled, (state) => {
      state.isLoading = false;
      state.profile = null;
      state.error = null;
    });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
