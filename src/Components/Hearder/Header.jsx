import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <h1>Navabr</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/users">Users</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </div>
    );
};

export default Header;