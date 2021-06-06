
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
        case 'SINGUP_SUCCESSFULL': {
            console.log("SINGUP_SUCCESSFULL")
            return state;
        }
    
        case 'SINGUP_ERROR': {
            console.log("SINGUP_ERROR: ", action.payload)
            return state;
        }

        case 'SIGNIN_SUCCESSFUL': {
            console.log("SIGNIN_SUCCESSFUL")
            return state;
        }
    
        case 'SIGNIN_ERROR': {
            console.log("SIGNIN_ERROR: ", action.payload.message)
            return state;
        }

        case 'SIGNOUT_SUCCESSFULL': {
            console.log("SIGNOUT_SUCCESSFULL")
            return state;
        }
    
        case 'SIGNOUT_ERROR': {
            console.log("SIGNOUT_ERROR: ", action.payload.message)
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