import { Link } from "react-router-dom";

const NavButton = ({ children, route }) => (
    <button className="button nav-button">
        <Link to={route}>{children}</Link>
    </button>
);

export default NavButton;
