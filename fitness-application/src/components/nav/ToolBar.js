import { Link } from "react-router-dom";

const ToolBar = () => {
    return (
        <div className="toolbar">
            <Link to="/"><h1>H</h1></Link>
            <Link to="/"><h1>W</h1></Link>
            <Link to="/body"><h1>B</h1></Link>
            <Link to="/"><h1>W</h1></Link>
        </div>
    )
}

export default ToolBar;