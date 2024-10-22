// NAVBAR -------------------------------------------------------------
import { useEffect } from 'react';
import './Navbar.css'
import libraryLogo from './../../assets/library-logo-dark.svg'
import closeIcon from '../../assets/close.svg';
import searchIcon from '../../assets/search.svg';

const Navbar = () => {
    useEffect(() => {
        const uswds = require('uswds');
        uswds.init(); // initializes USWDS JS after the component mounts
    }, []);

    return (
        <>
            <div className="usa-overlay"></div>
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
                                    className="usa-accordion__button usa-nav__link usa-current"
                                    aria-expanded="false"
                                    aria-controls="basic-mega-nav-section-one">
                                        <span>Borrow</span>
                                </button>

                            <div id="basic-mega-nav-section-one" className="usa-nav__submenu usa-megamenu">
                                <div className="grid-row grid-gap-4">
                                    <div className="usa-col">
                                        <ul className="usa-nav__submenu-list">
                                            <li className="usa-nav__submenu-item">
                                                <a href="javascript:void(0);">Catalog</a>
                                            </li>
                                            <li className="usa-nav__submenu-item">
                                                <a href="javascript:void(0);">Get a Library Card</a>
                                            </li>
                                            <li className="usa-nav__submenu-item">
                                                <a href="javascript:void(0);">Finding your next read</a>
                                            </li>
                                        </ul>
                                    </div>
                                <div className="usa-col">
                                    <ul className="usa-nav__submenu-list">
                                        <li className="usa-nav__submenu-item">
                                            <a href="javascript:void(0);">Books</a>
                                        </li>
                                        <li className="usa-nav__submenu-item">
                                            <a href="javascript:void(0);"
                                            >Audiobooks</a>
                                        </li>
                                        <li className="usa-nav__submenu-item">
                                            <a href="javascript:void(0);">Videos</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="usa-col">
                                    <ul className="usa-nav__submenu-list">
                                        <li className="usa-nav__submenu-item">
                                            <a href="javascript:void(0);">E-books</a>
                                        </li>
                                        <li className="usa-nav__submenu-item">
                                            <a href="javascript:void(0);">E-audiobooks</a>
                                        </li>
                                        <li className="usa-nav__submenu-item">
                                            <a href="javascript:void(0);">Magazines</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="usa-col">
                                    <ul className="usa-nav__submenu-list">
                                        <li className="usa-nav__submenu-item">
                                            <a href="javascript:void(0);">Newspapers</a>
                                        </li>
                                        <li className="usa-nav__submenu-item">
                                            <a href="javascript:void(0);">Museum Passes</a>
                                        </li>
                                        <li className="usa-nav__submenu-item">
                                            <a href="javascript:void(0);">Library of Things</a>
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
                                                    <a href="javascript:void(0);">Get a Library Card</a>
                                                </li>
                                                <li className="usa-nav__submenu-item">
                                                    <a href="javascript:void(0);">Borrowing Policy</a>
                                                </li>
                                                <li className="usa-nav__submenu-item">
                                                    <a href="javascript:void(0);">Interlibrary Loan (ILL)</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="usa-col">
                                            <ul className="usa-nav__submenu-list">
                                                <li className="usa-nav__submenu-item">
                                                    <a href="javascript:void(0);">Events</a>
                                                </li>
                                                <li className="usa-nav__submenu-item">
                                                    <a href="javascript:void(0);">Meeting Rooms</a>
                                                </li>
                                                <li className="usa-nav__submenu-item">
                                                    <a href="javascript:void(0);">Computers and Technology</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="usa-col">
                                            <ul className="usa-nav__submenu-list">
                                                <li className="usa-nav__submenu-item">
                                                    <a href="javascript:void(0);">Kids</a>
                                                </li>
                                                <li className="usa-nav__submenu-item">
                                                    <a href="javascript:void(0);">Teens</a>
                                                </li>
                                                <li className="usa-nav__submenu-item">
                                                    <a href="javascript:void(0);">Accessibility</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="usa-col">
                                            <ul className="usa-nav__submenu-list">
                                                <li className="usa-nav__submenu-item">
                                                    <a href="javascript:void(0);">Book an Appointment</a>
                                                </li>
                                                <li className="usa-nav__submenu-item">
                                                    <a href="javascript:void(0);">Report an Issue</a>
                                                </li>
                                                <li className="usa-nav__submenu-item">
                                                    <a href="javascript:void(0);">Contact Us</a>
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
                                                <a href="javascript:void(0);">Community Resources</a>
                                            </li>
                                            <li className="usa-nav__submenu-item">
                                                <a href="javascript:void(0);">Seed Library</a>
                                            </li>
                                            <li className="usa-nav__submenu-item">
                                                <a href="javascript:void(0);">Language Learning</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="usa-col">
                                        <ul className="usa-nav__submenu-list">
                                            <li className="usa-nav__submenu-item">
                                                <a href="javascript:void(0);">Research Databases</a>
                                            </li>
                                            <li className="usa-nav__submenu-item">
                                                <a href="javascript:void(0);"
                                                >Genealogy</a>
                                            </li>
                                            <li className="usa-nav__submenu-item">
                                                <a href="javascript:void(0);">Local History</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="usa-col">
                                        <ul className="usa-nav__submenu-list">
                                            <li className="usa-nav__submenu-item">
                                                <a href="javascript:void(0);">Outreach</a>
                                            </li>
                                            <li className="usa-nav__submenu-item">
                                                <a href="javascript:void(0);">Volunteer</a>
                                            </li>
                                            <li className="usa-nav__submenu-item">
                                                <a href="javascript:void(0);">Policies</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="usa-col">
                                        <ul className="usa-nav__submenu-list">
                                            <li className="usa-nav__submenu-item">
                                                <a href="javascript:void(0);">About the Library</a>
                                            </li>
                                            <li className="usa-nav__submenu-item">
                                                <a href="javascript:void(0);">Board of Trustees</a>
                                            </li>
                                            <li className="usa-nav__submenu-item">
                                                <a href="javascript:void(0);">Staff Directory</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            </li>
{/* Donate -------------------------------------------------------------------- */}
                            <li className="usa-nav__primary-item">
                                <a href="javascript:void(0);" className="usa-nav-link">Donate</a>
                            </li>
{/* My Account ---------------------------------------------------------------- */}
                            <li className="usa-nav__primary-item">
                                <a href="javascript:void(0);" className="usa-nav-link">My Account</a>
                            </li>
                        </ul>
{/* Search Box ------------------------------------------------------------------- */}
                        <section aria-label="Search component">
                            <form className="usa-search usa-search--small" role="search">
                            <label className="usa-sr-only" htmlfor="search-field">Search</label>
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


