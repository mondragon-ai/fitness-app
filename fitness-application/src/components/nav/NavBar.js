import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStopwatch20, faUserCircle, faSignOutAlt} from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {

    const right_tab = "PROFILE" != "PROFILE" ? <Link to="/signin"><h1><FontAwesomeIcon className="icon" icon={faSignOutAlt} /></h1></Link> : <Link to="/profile"><h1><FontAwesomeIcon className="icon" icon={faUserCircle} /></h1></Link>;
    return (
        <nav className="navbar">
            <Link to="/"><h1><FontAwesomeIcon className="icon" icon={faStopwatch20} /></h1></Link>
            {right_tab}
            <Link to="/signin"><h1><FontAwesomeIcon className="icon" icon={faSignOutAlt} /></h1></Link> 
        </nav>
    )
}

export default NavBar; 