import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import { createFirestoreInstance, getFirestore } from 'redux-firestore'
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase'
import fbconfig from './config/fbconfig';
import firebase from './config/fbconfig'

const store = createStore(
    rootReducer, 
    applyMiddleware(thunk.withExtraArgument({getFirestore, getFirebase}))
);

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true,// Firestore for Profile instead of Realtime DB
  // enableClaims: true // Get custom claims along with the profile
}

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance // <- needed if using firestore
}

ReactDOM.render(
  <Provider store={store} >
    <React.StrictMode>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
      </ReactReduxFirebaseProvider>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
