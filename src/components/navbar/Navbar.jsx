// NAVBAR -------------------------------------------------------------
import { useState } from 'react'
import './Navbar.css'
import libraryLogo from './../../assets/library-logo-dark.svg'
import closeIcon from '../../assets/close.svg'
import searchIcon from '../../assets/search.svg'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [openSection, setOpenSection] = useState(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        // Add search handling logic here
    };

    return (
        <>
            <div className={`usa-overlay ${isOpen ? 'is-open' : ''}`}></div>
            <header className="usa-header usa-header--basic usa-header--megamenu">
                <div className="usa-nav-container">
                    <div className="usa-navbar">
                        <div className="usa-logo">
                            <img src={libraryLogo} alt="Library Name Logo" />
                        </div>
                        <button type="button" className="usa-menu-btn">Menu</button>
                    </div>
                    <nav aria-label="Primary navigation" className="usa-nav">
                        <button type="button" className="usa-nav__close">
                        <img src={closeIcon} role="img" alt="Close" />
                        </button>
                        <ul className="usa-nav__primary usa-accordion">
{/* Borrow -------------------------------------------------------------------- */}
                            <li className="usa-nav__primary-item">
                                <button
                                    type="button"
                                    className="usa-accordion__button usa-nav__link"
                                    aria-expanded="false"
                                    aria-controls="basic-mega-nav-section-one">
                                        <span>Borrow</span>
                                </button>

                            <div id="basic-mega-nav-section-one" className="usa-nav__submenu usa-megamenu">
                                <div className="grid-row grid-gap-4">
                                    <div className="usa-col">
                                        <ul className="usa-nav__submenu-list">
                                            <li className="usa-nav__submenu-item">
                                                <a href="#">Catalog</a>
                                            </li>
                                            <li className="usa-nav__submenu-item">
                                                <a href="#">Get a Library Card</a>
                                            </li>
                                            <li className="usa-nav__submenu-item">
                                                <a href="#">Finding your next read</a>
                                            </li>
                                        </ul>
                                    </div>
                                <div className="usa-col">
                                    <ul className="usa-nav__submenu-list">
                                        <li className="usa-nav__submenu-item">
                                            <a href="#">Books</a>
                                        </li>
                                        <li className="usa-nav__submenu-item">
                                            <a href="#"
                                            >Audiobooks</a>
                                        </li>
                                        <li className="usa-nav__submenu-item">
                                            <a href="#">Videos</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="usa-col">
                                    <ul className="usa-nav__submenu-list">
                                        <li className="usa-nav__submenu-item">
                                            <a href="#">E-books</a>
                                        </li>
                                        <li className="usa-nav__submenu-item">
                                            <a href="#">E-audiobooks</a>
                                        </li>
                                        <li className="usa-nav__submenu-item">
                                            <a href="#">Magazines</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="usa-col">
                                    <ul className="usa-nav__submenu-list">
                                        <li className="usa-nav__submenu-item">
                                            <a href="#">Newspapers</a>
                                        </li>
                                        <li className="usa-nav__submenu-item">
                                            <a href="#">Museum Passes</a>
                                        </li>
                                        <li className="usa-nav__submenu-item">
                                            <a href="#">Library of Things</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        </li>
{/* Services ----------------------------------------------------------------------- */}
                            <li className="usa-nav__primary-item">
                                <button
                                    type="button"
                                    className="usa-accordion__button usa-nav__link"
                                    aria-expanded="false"
                                    aria-controls="basic-mega-nav-section-two"
                                >
                                    <span>Services</span>
                                </button>
                                <div
                                    id="basic-mega-nav-section-two"
                                    className="usa-nav__submenu usa-megamenu"
                                >
                                    <div className="grid-row grid-gap-4">
                                        <div className="usa-col">
                                            <ul className="usa-nav__submenu-list">
                                                <li className="usa-nav__submenu-item">
                                                    <a href="#">Get a Library Card</a>
                                                </li>
                                                <li className="usa-nav__submenu-item">
                                                    <a href="#">Borrowing Policy</a>
                                                </li>
                                                <li className="usa-nav__submenu-item">
                                                    <a href="#">Interlibrary Loan (ILL)</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="usa-col">
                                            <ul className="usa-nav__submenu-list">
                                                <li className="usa-nav__submenu-item">
                                                    <a href="#">Events</a>
                                                </li>
                                                <li className="usa-nav__submenu-item">
                                                    <a href="#">Meeting Rooms</a>
                                                </li>
                                                <li className="usa-nav__submenu-item">
                                                    <a href="#">Computers and Technology</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="usa-col">
                                            <ul className="usa-nav__submenu-list">
                                                <li className="usa-nav__submenu-item">
                                                    <a href="#">Kids</a>
                                                </li>
                                                <li className="usa-nav__submenu-item">
                                                    <a href="#">Teens</a>
                                                </li>
                                                <li className="usa-nav__submenu-item">
                                                    <a href="#">Accessibility</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="usa-col">
                                            <ul className="usa-nav__submenu-list">
                                                <li className="usa-nav__submenu-item">
                                                    <a href="#">Book an Appointment</a>
                                                </li>
                                                <li className="usa-nav__submenu-item">
                                                    <a href="#">Report an Issue</a>
                                                </li>
                                                <li className="usa-nav__submenu-item">
                                                    <a href="#">Contact Us</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
{/* Explore ------------------------------------------------------------------- */}
                            <li className="usa-nav__primary-item">
                                <button
                                    type="button"
                                    className="usa-accordion__button usa-nav__link"
                                    aria-expanded="false"
                                    aria-controls="basic-mega-nav-section-three"
                                >
                                    <span>Explore</span>
                                </button>
                            <div
                                id="basic-mega-nav-section-three"
                                className="usa-nav__submenu usa-megamenu">
                                <div className="grid-row grid-gap-4">
                                    <div className="usa-col">
                                        <ul className="usa-nav__submenu-list">
                                            <li className="usa-nav__submenu-item">
                                                <a href="#">Community Resources</a>
                                            </li>
                                            <li className="usa-nav__submenu-item">
                                                <a href="#">Seed Library</a>
                                            </li>
                                            <li className="usa-nav__submenu-item">
                                                <a href="#">Language Learning</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="usa-col">
                                        <ul className="usa-nav__submenu-list">
                                            <li className="usa-nav__submenu-item">
                                                <a href="#">Research Databases</a>
                                            </li>
                                            <li className="usa-nav__submenu-item">
                                                <a href="#"
                                                >Genealogy</a>
                                            </li>
                                            <li className="usa-nav__submenu-item">
                                                <a href="#">Local History</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="usa-col">
                                        <ul className="usa-nav__submenu-list">
                                            <li className="usa-nav__submenu-item">
                                                <a href="#">Outreach</a>
                                            </li>
                                            <li className="usa-nav__submenu-item">
                                                <a href="#">Volunteer</a>
                                            </li>
                                            <li className="usa-nav__submenu-item">
                                                <a href="#">Policies</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="usa-col">
                                        <ul className="usa-nav__submenu-list">
                                            <li className="usa-nav__submenu-item">
                                                <a href="#">About the Library</a>
                                            </li>
                                            <li className="usa-nav__submenu-item">
                                                <a href="#">Board of Trustees</a>
                                            </li>
                                            <li className="usa-nav__submenu-item">
                                                <a href="#">Staff Directory</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            </li>
{/* Donate -------------------------------------------------------------------- */}
                            <li className="usa-nav__primary-item">
                                <a href="#" className="usa-nav-link">Donate</a>
                            </li>
{/* My Account ---------------------------------------------------------------- */}
                            <li className="usa-nav__primary-item">
                                <a href="#" className="usa-nav-link">My Account</a>
                            </li>
                        </ul>
{/* Search Box ------------------------------------------------------------------- */}
                        <section aria-label="Search component">
                            <form className="usa-search usa-search--small" role="search">
                            <label className="usa-sr-only" htmlFor="search-field">Search</label>
                            <input
                                className="usa-input"
                                id="search-field"
                                type="search"
                                name="search"
                            />
                            <button className="usa-button" type="submit">
                                <img
                                src={searchIcon}
                                className="usa-search__submit-icon"
                                alt="Search"
                                />
                            </button>
                            </form>
                        </section>
                    </nav>
                </div>
            </header>
        </>
    )
}
// EXPORT NAVBAR ---------------------------------------------
export default Navbar


