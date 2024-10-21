// NAVBAR -------------------------------------------------------------
import './Navbar.css'
// import { Link } from 'react-router-dom'
import libraryLogo from './../../assets/library-logo-dark.svg'
const Navbar = () => {
    return (
        <>
            <div class="usa-overlay"></div>
            <header class="usa-header usa-header--basic usa-header--megamenu">
                <div class="usa-nav-container">
                    <div class="usa-navbar">
                        <div class="usa-logo">
                            <img src={libraryLogo} alt="Library Name Logo" />
                        </div>
                        <button type="button" class="usa-menu-btn">Menu</button>
                    </div>
                    <nav aria-label="Primary navigation" class="usa-nav">
                        <button type="button" class="usa-nav__close">
                        <img src="../node_modules/@uswds/uswds/packages/usa-icon/src/img/usa-icons-bg/close--white.svg" role="img" alt="Close" />
                        </button>
                        <ul class="usa-nav__primary usa-accordion">
{/* Borrow -------------------------------------------------------------------- */}
                            <li class="usa-nav__primary-item">
                                <button
                                    type="button"
                                    class="usa-accordion__button usa-nav__link usa-current"
                                    aria-expanded="false"
                                    aria-controls="basic-mega-nav-section-one">
                                        <span>Borrow</span>
                                </button>

                            <div id="basic-mega-nav-section-one" class="usa-nav__submenu usa-megamenu">
                                <div class="grid-row grid-gap-4">
                                    <div class="usa-col">
                                        <ul class="usa-nav__submenu-list">
                                            <li class="usa-nav__submenu-item">
                                                <a href="javascript:void(0);">Catalog</a>
                                            </li>
                                            <li class="usa-nav__submenu-item">
                                                <a href="javascript:void(0);">Get a Library Card</a>
                                            </li>
                                            <li class="usa-nav__submenu-item">
                                                <a href="javascript:void(0);">Finding your next read</a>
                                            </li>
                                        </ul>
                                    </div>
                                <div class="usa-col">
                                    <ul class="usa-nav__submenu-list">
                                        <li class="usa-nav__submenu-item">
                                            <a href="javascript:void(0);">Books</a>
                                        </li>
                                        <li class="usa-nav__submenu-item">
                                            <a href="javascript:void(0);"
                                            >Audiobooks</a>
                                        </li>
                                        <li class="usa-nav__submenu-item">
                                            <a href="javascript:void(0);">Videos</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="usa-col">
                                    <ul class="usa-nav__submenu-list">
                                        <li class="usa-nav__submenu-item">
                                            <a href="javascript:void(0);">E-books</a>
                                        </li>
                                        <li class="usa-nav__submenu-item">
                                            <a href="javascript:void(0);">E-audiobooks</a>
                                        </li>
                                        <li class="usa-nav__submenu-item">
                                            <a href="javascript:void(0);">Magazines</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="usa-col">
                                    <ul class="usa-nav__submenu-list">
                                        <li class="usa-nav__submenu-item">
                                            <a href="javascript:void(0);">Newspapers</a>
                                        </li>
                                        <li class="usa-nav__submenu-item">
                                            <a href="javascript:void(0);">Museum Passes</a>
                                        </li>
                                        <li class="usa-nav__submenu-item">
                                            <a href="javascript:void(0);">Library of Things</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        </li>
{/* Services ----------------------------------------------------------------------- */}
                            <li class="usa-nav__primary-item">
                                <button
                                    type="button"
                                    class="usa-accordion__button usa-nav__link"
                                    aria-expanded="false"
                                    aria-controls="basic-mega-nav-section-two"
                                >
                                    <span>Services</span>
                                </button>
                                <div
                                    id="basic-mega-nav-section-two"
                                    class="usa-nav__submenu usa-megamenu"
                                >
                                    <div class="grid-row grid-gap-4">
                                        <div class="usa-col">
                                            <ul class="usa-nav__submenu-list">
                                                <li class="usa-nav__submenu-item">
                                                    <a href="javascript:void(0);">Get a Library Card</a>
                                                </li>
                                                <li class="usa-nav__submenu-item">
                                                    <a href="javascript:void(0);">Borrowing Policy</a>
                                                </li>
                                                <li class="usa-nav__submenu-item">
                                                    <a href="javascript:void(0);">Interlibrary Loan (ILL)</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="usa-col">
                                            <ul class="usa-nav__submenu-list">
                                                <li class="usa-nav__submenu-item">
                                                    <a href="javascript:void(0);">Events</a>
                                                </li>
                                                <li class="usa-nav__submenu-item">
                                                    <a href="javascript:void(0);">Meeting Rooms</a>
                                                </li>
                                                <li class="usa-nav__submenu-item">
                                                    <a href="javascript:void(0);">Computers and Technology</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="usa-col">
                                            <ul class="usa-nav__submenu-list">
                                                <li class="usa-nav__submenu-item">
                                                    <a href="javascript:void(0);">Kids</a>
                                                </li>
                                                <li class="usa-nav__submenu-item">
                                                    <a href="javascript:void(0);">Teens</a>
                                                </li>
                                                <li class="usa-nav__submenu-item">
                                                    <a href="javascript:void(0);">Accessibility</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="usa-col">
                                            <ul class="usa-nav__submenu-list">
                                                <li class="usa-nav__submenu-item">
                                                    <a href="javascript:void(0);">Book an Appointment</a>
                                                </li>
                                                <li class="usa-nav__submenu-item">
                                                    <a href="javascript:void(0);">Report an Issue</a>
                                                </li>
                                                <li class="usa-nav__submenu-item">
                                                    <a href="javascript:void(0);">Contact Us</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
{/* Explore ------------------------------------------------------------------- */}
                            <li class="usa-nav__primary-item">
                                <button
                                    type="button"
                                    class="usa-accordion__button usa-nav__link"
                                    aria-expanded="false"
                                    aria-controls="basic-mega-nav-section-three"
                                >
                                    <span>Explore</span>
                                </button>
                            <div
                                id="basic-mega-nav-section-three"
                                class="usa-nav__submenu usa-megamenu">
                                <div class="grid-row grid-gap-4">
                                    <div class="usa-col">
                                        <ul class="usa-nav__submenu-list">
                                            <li class="usa-nav__submenu-item">
                                                <a href="javascript:void(0);">Community Resources</a>
                                            </li>
                                            <li class="usa-nav__submenu-item">
                                                <a href="javascript:void(0);">Seed Library</a>
                                            </li>
                                            <li class="usa-nav__submenu-item">
                                                <a href="javascript:void(0);">Language Learning</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="usa-col">
                                        <ul class="usa-nav__submenu-list">
                                            <li class="usa-nav__submenu-item">
                                                <a href="javascript:void(0);">Research Databases</a>
                                            </li>
                                            <li class="usa-nav__submenu-item">
                                                <a href="javascript:void(0);"
                                                >Genealogy</a>
                                            </li>
                                            <li class="usa-nav__submenu-item">
                                                <a href="javascript:void(0);">Local History</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="usa-col">
                                        <ul class="usa-nav__submenu-list">
                                            <li class="usa-nav__submenu-item">
                                                <a href="javascript:void(0);">Outreach</a>
                                            </li>
                                            <li class="usa-nav__submenu-item">
                                                <a href="javascript:void(0);">Volunteer</a>
                                            </li>
                                            <li class="usa-nav__submenu-item">
                                                <a href="javascript:void(0);">Policies</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="usa-col">
                                        <ul class="usa-nav__submenu-list">
                                            <li class="usa-nav__submenu-item">
                                                <a href="javascript:void(0);">About the Library</a>
                                            </li>
                                            <li class="usa-nav__submenu-item">
                                                <a href="javascript:void(0);">Board of Trustees</a>
                                            </li>
                                            <li class="usa-nav__submenu-item">
                                                <a href="javascript:void(0);">Staff Directory</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            </li>
{/* Donate -------------------------------------------------------------------- */}
                            <li class="usa-nav__primary-item">
                                <a href="javascript:void(0);" class="usa-nav-link">Donate</a>
                            </li>
{/* My Account ---------------------------------------------------------------- */}
                            <li class="usa-nav__primary-item">
                                <a href="javascript:void(0);" class="usa-nav-link">My Account</a>
                            </li>
                        </ul>
{/* Search Box ------------------------------------------------------------------- */}
                        <section aria-label="Search component">
                            <form class="usa-search usa-search--small" role="search">
                            <label class="usa-sr-only" for="search-field">Search</label>
                            <input
                                class="usa-input"
                                id="search-field"
                                type="search"
                                name="search"
                            />
                            <button class="usa-button" type="submit">
                                <img
                                src="../node_modules/@uswds/uswds/packages/usa-icon/src/img/usa-icons-bg/search--white.svg"
                                class="usa-search__submit-icon"
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


