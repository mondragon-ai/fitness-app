import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var fbConfig = {
    apiKey: "AIzaSyDS3tBb8Uw7zTxXu4FgsEY2VDnd22xl7qo",
    authDomain: "fitness-app-instafit.firebaseapp.com",
    projectId: "fitness-app-instafit",
    storageBucket: "fitness-app-instafit.appspot.com",
    messagingSenderId: "365504351651",
    appId: "1:365504351651:web:7d2eb111e586990a4d5e16",
    measurementId: "G-K4EB1GP7SD"
};

// Initialize Firebase
firebase.initializeApp(fbConfig);
firebase.firestore().settings({timeStampsInSnapshots: true})


export default firebase;