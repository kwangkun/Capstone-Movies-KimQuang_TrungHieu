import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { quanLyPhimReducer } from './reducers/quanLyPhim/quanLyPhimReducer';
import { quanLyRapReducer } from './reducers/quanLyRap';
import { quanLyDatVeReducer } from './reducers/quanLyDatVe/quanLyDatVeReducer';
import { combineReducers } from "redux";


const rootReducer = combineReducers({
    quanLyPhimReducer,
    quanLyRapReducer,
    quanLyDatVeReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk],
    devTools: true,
});
