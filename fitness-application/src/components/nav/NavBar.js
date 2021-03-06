import { Link, useParams } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStopwatch20, faUserCircle, faSignOutAlt} from '@fortawesome/free-solid-svg-icons'
import { Component } from "react";
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

/**
 * * NavBar Component Based don URL Param
 * TODO: Create Toggle Param to list links dynamically
 * TODO: Add listenor to Firebase to change url_param
 * @param { auth } = props
 */
class NavBar extends Component{

    constructor(props) {
        super()

        this.state = {
            id: ""
        }
    }
    render() {
        
        const right_tab = this.props.auth == "/profile" ? 
            <a onClick={() => this.props.logOut()}>
                <h1><FontAwesomeIcon className="icon" icon={faSignOutAlt} /></h1>
            </a> : 
            <Link to="/profile">
                <h1><FontAwesomeIcon className="icon" icon={faUserCircle} /></h1>
            </Link>;
        
        return (
            <nav className="navbar">
                <Link to="/">
                    <h1><FontAwesomeIcon className="icon" icon={faStopwatch20} /></h1>
                </Link>
                {right_tab}
            </nav>
        )
    }
}

const mapStateToProps = (state) => {
    return {auth: state.auth.url_param}
}

const mapDispatchToprops = (dispatch) => {
    return {
        logOut: () => dispatch(signOut())
    }
}

// TODO: 4. 
export default connect(mapStateToProps, mapDispatchToprops)(NavBar); 