import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <h1>Navabr from header</h1>
            <nav className="">
                <Link style={{marginRight:'20px'}} to="/">Homes</Link>
                <Link style={{marginRight:'20px'}} to="/about">About</Link>
                <Link style={{marginRight:'20px'}} to="/users">Users</Link>
                <Link style={{marginRight:'20px'}} to="/contact">Contact</Link>
               
            </nav>
        </div>
    );
};

export default Header;