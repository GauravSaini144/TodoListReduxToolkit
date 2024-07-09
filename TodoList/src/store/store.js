import {configureStore} from "@reduxjs/toolkit";
import todoReducers from "../features/todoSlice.js";
export const store =configureStore({
    reducer:todoReducers
})