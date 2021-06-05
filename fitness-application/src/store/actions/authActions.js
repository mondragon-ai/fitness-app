export const signUp = (credentials) => 
{
    return (dispatch, getState, {getFirestore, getFirebase}) => {

        const firebase = getFirebase();

        console.log(firebase)
        dispatch({type: "SINGUP_SUCCESSFUL"})


    //     firebase.auth().signUpWithEmailAndPassword({

    //     }).then((res) => {
    //         firestore.collection("users").doc(res.auth.uid).set({
    //             ...credentials,
    //             // Create additional Info
    //             // isTrainer? 
    //         })
    //     }).then(() => {
    //         dispatch({type: "SINGUP_SUCCESSFUL"})
    //     }).
    //     catch((err) => {
    //         dispatch({type: "SINGUP_ERROR", err})
    //     })
    // }
    }

} 

export const signIn = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
        
        const firebase = getFirebase();
        firebase.auth()
        .signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({type: "SIGNIN_SUCCESSFUL"})
        }).catch((err) => {
            dispatch({type: "SIGNIN_ERROR", payload: err})
        })

    }
}

export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {

        const firebase = getFirebase();
        firebase.auth()
        .signOut()
        .then(() => {
            dispatch({type: "SIGNOUT_SUCCESSFULL"})
        }).catch((err) => {
            dispatch({type: "SIGNOUT_SUCCESSFULL", payload: err})
        })
    }
}

export const changeUrl = (url_param) => {

    return (dispatch, getState) => {

        dispatch({type: "URL_CHANGED", payload: url_param})

    }

}