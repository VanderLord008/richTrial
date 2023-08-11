import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

//creating a redux store
const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
