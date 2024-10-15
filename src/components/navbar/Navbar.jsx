// NAVBAR -------------------------------------------------------------
import './Navbar.css'
import { Link } from 'react-router-dom'
import reactLogo from './../../assets/react.svg'
const Navbar = () => {
    return (
        <nav>
            <img src={reactLogo} alt="React Logo" />
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