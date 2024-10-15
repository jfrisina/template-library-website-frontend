// NAVBAR -------------------------------------------------------------
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <Link to='/home'>Home</Link>
            <Link to='/read'>Borrow</Link>
            <Link to='/research'>Research</Link>
            <Link to='/services'>Services</Link>
            <Link to='/events'>Events</Link>
            <Link to='/kids'>Kids</Link>
            <Link to='/teens'>Teens</Link>
            <Link to='/explore'>Explore</Link>            
        </nav>
    )
}

// EXPORT NAVBAR ---------------------------------------------
export default Navbar