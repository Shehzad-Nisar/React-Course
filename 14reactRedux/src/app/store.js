import { configureStore } from "@reduxjs/toolkit";
import todoReducers from "../features/todo/todo"

export const store = configureStore({
    reducer: todoReducers
    
})