import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTachometerAlt, faWeight, faDumbbell, faHome} from '@fortawesome/free-solid-svg-icons'

const ToolBar = () => {
    return (
        <div className="toolbar">
            <Link to="/"><h1><FontAwesomeIcon  icon={faTachometerAlt} /></h1></Link>
            <Link to="/workout"><h1><FontAwesomeIcon  icon={faDumbbell} /></h1></Link>
            <Link to="/body"><h1><FontAwesomeIcon  icon={faWeight} /></h1></Link>
            <Link to="/wall"><h1><FontAwesomeIcon  icon={faHome} /></h1></Link>
        </div>
    )
}

export default ToolBar;