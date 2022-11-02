import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { quanLyPhimReducer } from './reducers/quanLyPhim/quanLyPhimReducer';
import { quanLyRapReducer } from './reducers/quanLyRap';
import { combineReducers } from "redux";


const rootReducer = combineReducers({
    quanLyPhimReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk],
    devTools: true,
});
