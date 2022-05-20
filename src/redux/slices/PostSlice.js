import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const initialState = {
  open: false,
  isLoading: false,
};

const postSlice = createSlice({
  name: 'post',
  initialState: initialState,
  reducers: {
    reset: state => initialState,
    openModal: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.open = state.open ? false : true;
    },
  },
});

export const {openModal} = postSlice.actions;
export default postSlice.reducer;
