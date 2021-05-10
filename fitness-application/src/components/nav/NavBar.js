import { Link } from "react-router-dom";

const NavBar = () => {

    const right_tab = "PROFILE" != "PROFILE" ? <Link to="/logout"><h1>L</h1></Link> : <Link to="/profile"><h1>P</h1></Link>;
    return (
        <nav className="navbar">
            <Link to="/"><h1>T</h1></Link>
            {right_tab}
        </nav>
    )
}

export default NavBar; 