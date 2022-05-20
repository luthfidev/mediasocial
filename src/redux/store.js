import {configureStore} from '@reduxjs/toolkit';
import PostSlice from './slices/PostSlice';
export const store = configureStore({
  reducer: {
    post: PostSlice,
  },
});
