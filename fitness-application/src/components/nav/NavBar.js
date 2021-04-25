import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar">
            <Link to="/"><h1>T</h1></Link>
            <Link to="/"><h1>P</h1></Link>
        </nav>
    )
}

export default NavBar; 