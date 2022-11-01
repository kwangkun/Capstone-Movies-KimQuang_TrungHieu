import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { HomeCarouselReducer } from "./HomeCarouselReducer";
const rootReducer = combineReducers({
    HomeCarouselReducer
})
export const store = createStore(rootReducer, applyMiddleware)