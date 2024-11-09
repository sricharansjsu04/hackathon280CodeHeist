import { configureStore } from '@reduxjs/toolkit';
import countryRangeReducer from './CountryRangeSlice'; // Import your slice

const store = configureStore({
  reducer: {
    countryRange: countryRangeReducer, // Register your slice reducer
  },
});

export default store;