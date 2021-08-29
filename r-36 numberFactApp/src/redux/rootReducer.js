import { numberReducer, NUMBER_KEY } from "./numberRedux/number.reducer";
import {combineReducers} from 'redux'


let rootReducer = combineReducers({
    [NUMBER_KEY]: numberReducer
})

export {rootReducer}