import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://api.unsplash.com/';

export const fetchImages = createAsyncThunk(
  'heros/fetchHeros',
  async (_, {rejectWithValue}) => {
    try {
      const {data} = await axios.get(
        'photos/?client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9',
      );

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
