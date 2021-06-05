
import img from '../../assets/media/user-img.png'

const initState = {
    level: "Plus Ultra",
    name: "Angel",
    progress: 87,
    usr_profile: img,
    goals_left: 3,
    streak: 7,
    date: 120,
    url_param: '/'
}


const authReducer = (state = initState, action ) => {

    switch (action.type) {
        case 'SINGUP_SUCCESSFUL': {
            console.log("SINGUP_SUCCESSFUL")
            return state;
        }
    
        case 'SINGUP_ERROR': {
            console.log("SINGUP_ERROR: ", action.payload)
            return state;
        }

        case 'URL_CHANGED': {
            console.log("URL_CHANGED: ", action.payload)
            return {
                ...state,
                url_param: action.payload
            };
        }
            
        default:
            return state;
    }
}

export default authReducer;