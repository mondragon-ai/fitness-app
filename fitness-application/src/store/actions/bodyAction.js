/**
 * 
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