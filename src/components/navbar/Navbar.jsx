// NAVBAR -------------------------------------------------------------
import './Navbar.css'
import { Link } from 'react-router-dom'
import reactLogo from './../../assets/library-logo.svg'
const Navbar = () => {
    return (
        <nav>
            <img src={reactLogo} alt="React Logo" /> 
            <Link to='/read'>Borrow</Link>
            <Link to='/research'>Research</Link>
            <Link to='/services'>Services</Link>
            <Link to='/events'>Events</Link>
            <Link to='/kids'>Kids</Link>
            <Link to='/teens'>Teens</Link>
            <Link to='/explore'>Explore</Link>            
            <Link to='/my-account' className="usa-button usa-button--outline usa-button--inverse usa-button--hover">My Account</Link>            
        </nav>
    )
}

// EXPORT NAVBAR ---------------------------------------------
export default Navbar