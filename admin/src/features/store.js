import { configureStore } from "@reduxjs/toolkit"; 
import itemReducer from './itemSlice';
import userSlice from "./userSlice";
// import orderSlice from "./orderSlice";

export default configureStore({
    reducer: {
        items: itemReducer,
        auth: userSlice,
        // orders: orderSlice,
    }
});
