export const signUp = (credentials) => 
{
    return (dispatch, getState ) => {

         //{getFirestore, getFirebase}
        // const firestore = getFirestore();
        // const firebase = getFirebase();

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

export const changeUrl = (url_param) => {

    return {type: "URL_CHANGED", payload: url_param}

}