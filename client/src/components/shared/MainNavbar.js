import { Link } from 'react-router-dom';

const MainNavbar = () => (
    <nav>
        <ul>
            <Link to='/'>
                <li>Home</li>
            </Link>
            <Link to='/workers'>
                <li>Workers</li>
            </Link>
            {/* <Link to='/workers'>
                <li>Workers</li>
            </Link> */}
        </ul>
    </nav>
)

export default MainNavbar;