import { configureStore } from "@reduxjs/toolkit";
import reducer from "../features/reducers/reducerSlice";

export const store = configureStore({
    reducer: reducer

})