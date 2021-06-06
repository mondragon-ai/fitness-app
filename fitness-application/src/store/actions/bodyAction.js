/**
 * * Add New BW to DB
 * TODO: Add to Firestore & Return state
 * @param { bw }  
 * @returns state
 */
export const addBWAction = (bw) => 
{
    return (dispatch, getState, {getFirestore}) => {

        const firestore = getFirestore();
        const user_profile = getState().firebase.profile;
        const user_body_graph_stats = getState().firebase.profile.body.graph
        const uid = getState().firebase.auth.uid

        console.log("\n\nADD BW: ", user_profile)
        console.log("\n\nADD BW: ", user_body_graph_stats)
        console.log("\n\nADD BW: ", uid)

        firestore.collection('users').doc(`${uid}`).set({
            ...user_profile,
            body: {
                ...user_profile.body,
                graph: {
                    ...user_profile.body.graph,
                    bw_data: [{
                        data: [
                            ...user_body_graph_stats.bw_data[0].data,
                            {
                                x: new Date(),
                                y: bw
                            }
                        ]  
                    }]
                }
            }
        }).then(() => {
            dispatch({type: "ADD_NEW_BW", payload: bw})
        }).catch((err) => {
            dispatch({type: "ADD_NEW_BW_ERROR", payload: err})
        })
    }
}

/**
 * * Add Daily Cals to DB
 * TODO: Add to Firestore & Return state
 * @param { cals }  
 * @returns state
 */
export const addCalsAction = (cals) => 
{
    return (dispatch, getState) => {
        
        // Async Code
        
        dispatch({type: "ADD_DAILY_CALS", cals})
    }
}