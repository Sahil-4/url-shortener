import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../../Services/API/index.js";

export const getUrls = createAsyncThunk("get-urls", async () => {
  // fetch urls of user currently logged in
  const response = await API.get("/api/v1/url/get");
  return response;
});

export const addUrl = createAsyncThunk("add-url", async (url) => {
  // sends a request with an url in body to create a new short url
  const response = await API.post("/api/v1/url/new", { original_url: url });
  return response;
});

export const deleteUrl = createAsyncThunk("delete-url", async (url) => {
  // delete the url given in request body
  const response = await API.post("/api/v1/url/delete", { short_url: url });
  return response;
});

const urlSlice = createSlice({
  name: "url",
  initialState: {
    isLoading: false,
    error: null,
    urls: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    // handle get all urls request
    builder.addCase(getUrls.pending, (state) => {
      state.isLoading = true;
      state.error = null;
      state.urls = [];
    });
    builder.addCase(getUrls.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(getUrls.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.urls = action.payload.data.data;
    });

    // handle add new url request
    builder.addCase(addUrl.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(addUrl.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(addUrl.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.urls.unshift(action.payload.data.data);
    });

    // handle delete url request
    builder.addCase(deleteUrl.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(deleteUrl.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(deleteUrl.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      const deletedUrl = action.payload.data.data;
      state.urls = state.urls.filter((url) => url._id != deletedUrl._id);
    });
  },
});

export default urlSlice.reducer;
