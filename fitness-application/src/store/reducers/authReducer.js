
import img from '../../assets/media/user-img.png'

const initState = {
    level: "Plus Ultra",
    name: "Angel",
    progress: 87,
    usr_profile: img,
    goals_left: 3,
    streak: 7,
    date: 120,
    url_param: '/profile'
}


const authReducer = (state = initState, action ) => {
    return state;
}

export default authReducer;