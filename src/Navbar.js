import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>TO-Do List</h1>
            <div className="links">
                <Link to="/">All</Link>
                <Link to="/">Today</Link>
                <Link to="/create" className="adding">
                    <FontAwesomeIcon icon={faSearch} color="#292929" />
                    <i className="fas fa-search"></i>
                </Link>
            </div>
        </nav>
    );
}
 
export default Navbar;