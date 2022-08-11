import rootReducers from "./reducer";
import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
  reducer : {
    rootReducers }
})