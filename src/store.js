import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { adminReducer } from './Feature/Admin/AdminSlice';

const rootReducer = combineReducers({
    admin: adminReducer,
})

export default configureStore({
    reducer: rootReducer,
})