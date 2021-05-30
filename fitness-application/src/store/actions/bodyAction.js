/**
 * * Add New BW to DB
 * TODO: Add to Firestore & Return state
 * @param { bw }  
 * @returns state
 */
export const addBWAction = (bw) => 
{
    return (dispatch, getState) => {

        // Async Code
        
        dispatch({type: "ADD_NEW_BW", bw})
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