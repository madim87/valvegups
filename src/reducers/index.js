import { combineReducers } from 'redux';
import calculateGap from './calculateGap';
import setSpecData from './setSpecData';

const rootReducer = combineReducers({
    calculateGap,
    setSpecData
})

export default rootReducer