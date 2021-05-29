import { combineReducers } from 'redux';
import authReducer from './authReducer';
import workoutReducer from './workoutReducer';
import bodyReducer from './bodyReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    workout: workoutReducer,
    body: bodyReducer,
 })

 export default rootReducer;
