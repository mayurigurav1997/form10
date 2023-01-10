import { configureStore, combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit";
import { adminReducer } from './Feature/Admin/AdminSlice';

const rootReducer = combineReducers({
    admin: adminReducer,
})

export default configureStore({
    reducer: rootReducer,
    // middleware: (getDefaultMiddleware) => {
    //     getDefaultMiddleware({
    //         serializableCheck: false,
    //         imutableCheck: true
    //     })
    // }

})