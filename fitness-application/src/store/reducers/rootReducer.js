import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import authReducer from './authReducer';
import workoutReducer from './workoutReducer';
import bodyReducer from './bodyReducer';


const rootReducer = combineReducers({
    firestore: firestoreReducer,
    auth: authReducer,
    workout: workoutReducer,
    body: bodyReducer,
    firebase: firebaseReducer,
 })

 export default rootReducer;
