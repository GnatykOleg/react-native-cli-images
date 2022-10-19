/* eslint-disable prettier/prettier */
import {createSlice} from '@reduxjs/toolkit';
import {fetchImages} from './unsplash-operatios';

const initialState = {
  images: null,
  isLoading: null,
  error: null,
};

const unsplashSlice = createSlice({
  name: 'images',
  initialState,

  extraReducers: {
    [fetchImages.pending](state, _) {
      state.isLoading = true;
    },
    [fetchImages.fulfilled](state, {payload}) {
      state.images = payload;
      state.isLoading = false;
    },
    [fetchImages.rejected](state, {payload}) {
      state.isLoading = false;
      state.error = payload.message;
    },
  },
});

export default unsplashSlice.reducer;
