import { combineReducers } from "redux";
import homesReducers from './homesReducers'


export default combineReducers({
    homes: homesReducers,
})