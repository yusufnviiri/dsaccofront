/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { configureStore } from '@reduxjs/toolkit';
import ApiSlice from './ApiSlice';

export default configureStore({
  reducer: {
    ApiSlice,
  },
});
