import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./cartSlice";

//creating app Store
const appStore = configureStore({
    reducer: {
        cart: cartReducer
    }
});

export default appStore;