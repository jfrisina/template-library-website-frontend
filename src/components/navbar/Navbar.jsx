// NAVBAR -------------------------------------------------------------
import './Navbar.css'
import { Link } from 'react-router-dom'
import libraryLogo from './../../assets/library-logo-dark.svg'
const Navbar = () => {
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
                    <img src="/assets/img/usa-icons/close.svg" role="img" alt="Close" />
                </button>
                <ul className="usa-nav__primary usa-accordion">

            {/* Borrow ------------------------------------------------------------------------------------------- */}
                    <li className="usa-nav__primary-item">
                    <button
                        type="button"
                        className="usa-accordion__button usa-nav__link usa-current"
                        aria-expanded="false"
                        aria-controls="basic-mega-nav-section-one"
                    >
                        <span>Borrow</span>
                    </button>
                    <div
                        id="basic-mega-nav-section-one"
                        className="usa-nav__submenu usa-megamenu"
                    >
                        <div className="grid-row grid-gap-4">
                        <div className="usa-col">
                            <ul className="usa-nav__submenu-list">
                            <li className="usa-nav__submenu-item">
                                <a href="javascript:void(0);">Catalog</a>
                            </li>
                            <li className="usa-nav__submenu-item">
                                <a href="javascript:void(0);">Digital Books and Audiobooks</a>
                            </li>
                            <li className="usa-nav__submenu-item">
                                <a href="javascript:void(0);">New York Times Online</a>
                            </li>
                            </ul>
                        </div>
                        <div className="usa-col">
                            <ul className="usa-nav__submenu-list">
                            <li className="usa-nav__submenu-item">
                                <a href="javascript:void(0);">Magazines</a>
                            </li>
                            <li className="usa-nav__submenu-item">
                                <a href="javascript:void(0);"
                                >Newspapers</a
                                >
                            </li>
                            <li className="usa-nav__submenu-item">
                                <a href="javascript:void(0);">Kanopy</a>
                            </li>
                            </ul>
                        </div>
                        <div className="usa-col">
                            <ul className="usa-nav__submenu-list">
                            <li className="usa-nav__submenu-item">
                                <a href="javascript:void(0);">Museum Passes</a>
                            </li>
                            <li className="usa-nav__submenu-item">
                                <a href="javascript:void(0);">Library of Things</a>
                            </li>
                            <li className="usa-nav__submenu-item">
                                <a href="javascript:void(0);">Something Else</a>
                            </li>
                            </ul>
                        </div>
                        <div className="usa-col">
                            <ul className="usa-nav__submenu-list">
                            <li className="usa-nav__submenu-item">
                                <a href="javascript:void(0);">&lt;Navigation link&gt;</a>
                            </li>
                            <li className="usa-nav__submenu-item">
                                <a href="javascript:void(0);">&lt;Navigation link&gt;</a>
                            </li>
                            <li className="usa-nav__submenu-item">
                                <a href="javascript:void(0);">&lt;Navigation link&gt;</a>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </li>

            {/* Research ------------------------------------------------------------------------------------------- */}
                    <li className="usa-nav__primary-item">
                    <button
                        type="button"
                        className="usa-accordion__button usa-nav__link"
                        aria-expanded="false"
                        aria-controls="basic-mega-nav-section-two"
                    >
                        <span>Research</span>
                    </button>
                    <div
                        id="basic-mega-nav-section-two"
                        className="usa-nav__submenu usa-megamenu"
                    >
                        <div className="grid-row grid-gap-4">
                        <div className="usa-col">
                            <ul className="usa-nav__submenu-list">
                            <li className="usa-nav__submenu-item">
                                <a href="javascript:void(0);">&lt;Navigation link&gt;</a>
                            </li>
                            <li className="usa-nav__submenu-item">
                                <a href="javascript:void(0);">&lt;Navigation link&gt;</a>
                            </li>
                            <li className="usa-nav__submenu-item">
                                <a href="javascript:void(0);">&lt;Navigation link&gt;</a>
                            </li>
                            </ul>
                        </div>
                        <div className="usa-col">
                            <ul className="usa-nav__submenu-list">
                            <li className="usa-nav__submenu-item">
                                <a href="javascript:void(0);">&lt;Navigation link&gt;</a>
                            </li>
                            <li className="usa-nav__submenu-item">
                                <a href="javascript:void(0);"
                                >&lt;A very long navigation link that goes onto two
                                lines&gt;</a
                                >
                            </li>
                            <li className="usa-nav__submenu-item">
                                <a href="javascript:void(0);">&lt;Navigation link&gt;</a>
                            </li>
                            </ul>
                        </div>
                        <div className="usa-col">
                            <ul className="usa-nav__submenu-list">
                            <li className="usa-nav__submenu-item">
                                <a href="javascript:void(0);">&lt;Navigation link&gt;</a>
                            </li>
                            <li className="usa-nav__submenu-item">
                                <a href="javascript:void(0);">&lt;Navigation link&gt;</a>
                            </li>
                            <li className="usa-nav__submenu-item">
                                <a href="javascript:void(0);">&lt;Navigation link&gt;</a>
                            </li>
                            </ul>
                        </div>
                        <div className="usa-col">
                            <ul className="usa-nav__submenu-list">
                            <li className="usa-nav__submenu-item">
                                <a href="javascript:void(0);">&lt;Navigation link&gt;</a>
                            </li>
                            <li className="usa-nav__submenu-item">
                                <a href="javascript:void(0);">&lt;Navigation link&gt;</a>
                            </li>
                            <li className="usa-nav__submenu-item">
                                <a href="javascript:void(0);">&lt;Navigation link&gt;</a>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </li>
            {/* Services ------------------------------------------------------------------------------------------- */}
                    <li className="usa-nav__primary-item">
                    <button
                        type="button"
                        className="usa-accordion__button usa-nav__link usa-current"
                        aria-expanded="false"
                        aria-controls="basic-mega-nav-section-one"
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
                                <a href="javascript:void(0);">&lt;Navigation link&gt;</a>
                            </li>
                            <li className="usa-nav__submenu-item">
                                <a href="javascript:void(0);">&lt;Navigation link&gt;</a>
                            </li>
                            <li className="usa-nav__submenu-item">
                                <a href="javascript:void(0);">&lt;Navigation link&gt;</a>
                            </li>
                            </ul>
                        </div>
                        <div className="usa-col">
                            <ul className="usa-nav__submenu-list">
                            <li className="usa-nav__submenu-item">
                                <a href="javascript:void(0);">&lt;Navigation link&gt;</a>
                            </li>
                            <li className="usa-nav__submenu-item">
                                <a href="javascript:void(0);"
                                >&lt;A very long navigation link that goes onto two
                                lines&gt;</a
                                >
                            </li>
                            <li className="usa-nav__submenu-item">
                                <a href="javascript:void(0);">&lt;Navigation link&gt;</a>
                            </li>
                            </ul>
                        </div>
                        <div className="usa-col">
                            <ul className="usa-nav__submenu-list">
                            <li className="usa-nav__submenu-item">
                                <a href="javascript:void(0);">&lt;Navigation link&gt;</a>
                            </li>
                            <li className="usa-nav__submenu-item">
                                <a href="javascript:void(0);">&lt;Navigation link&gt;</a>
                            </li>
                            <li className="usa-nav__submenu-item">
                                <a href="javascript:void(0);">&lt;Navigation link&gt;</a>
                            </li>
                            </ul>
                        </div>
                        <div className="usa-col">
                            <ul className="usa-nav__submenu-list">
                            <li className="usa-nav__submenu-item">
                                <a href="javascript:void(0);">&lt;Navigation link&gt;</a>
                            </li>
                            <li className="usa-nav__submenu-item">
                                <a href="javascript:void(0);">&lt;Navigation link&gt;</a>
                            </li>
                            <li className="usa-nav__submenu-item">
                                <a href="javascript:void(0);">&lt;Navigation link&gt;</a>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </li>

            {/* Explore ------------------------------------------------------------------------------------------- */}
                    <li className="usa-nav__primary-item">
                    <button
                        type="button"
                        className="usa-accordion__button usa-nav__link usa-current"
                        aria-expanded="false"
                        aria-controls="basic-mega-nav-section-one"
                    >
                        <span>Explore</span>
                    </button>
                    <div
                        id="basic-mega-nav-section-three"
                        className="usa-nav__submenu usa-megamenu"
                    >
                        <div className="grid-row grid-gap-4">
                        <div className="usa-col">
                            <ul className="usa-nav__submenu-list">
                            <li className="usa-nav__submenu-item">
                                <a href="javascript:void(0);">&lt;Navigation link&gt;</a>
                            </li>
                            <li className="usa-nav__submenu-item">
                                <a href="javascript:void(0);">&lt;Navigation link&gt;</a>
                            </li>
                            <li className="usa-nav__submenu-item">
                                <a href="javascript:void(0);">&lt;Navigation link&gt;</a>
                            </li>
                            </ul>
                        </div>
                        <div className="usa-col">
                            <ul className="usa-nav__submenu-list">
                            <li className="usa-nav__submenu-item">
                                <a href="javascript:void(0);">&lt;Navigation link&gt;</a>
                            </li>
                            <li className="usa-nav__submenu-item">
                                <a href="javascript:void(0);"
                                >&lt;A very long navigation link that goes onto two
                                lines&gt;</a
                                >
                            </li>
                            <li className="usa-nav__submenu-item">
                                <a href="javascript:void(0);">&lt;Navigation link&gt;</a>
                            </li>
                            </ul>
                        </div>
                        <div className="usa-col">
                            <ul className="usa-nav__submenu-list">
                            <li className="usa-nav__submenu-item">
                                <a href="javascript:void(0);">&lt;Navigation link&gt;</a>
                            </li>
                            <li className="usa-nav__submenu-item">
                                <a href="javascript:void(0);">&lt;Navigation link&gt;</a>
                            </li>
                            <li className="usa-nav__submenu-item">
                                <a href="javascript:void(0);">&lt;Navigation link&gt;</a>
                            </li>
                            </ul>
                        </div>
                        <div className="usa-col">
                            <ul className="usa-nav__submenu-list">
                            <li className="usa-nav__submenu-item">
                                <a href="javascript:void(0);">&lt;Navigation link&gt;</a>
                            </li>
                            <li className="usa-nav__submenu-item">
                                <a href="javascript:void(0);">&lt;Navigation link&gt;</a>
                            </li>
                            <li className="usa-nav__submenu-item">
                                <a href="javascript:void(0);">&lt;Navigation link&gt;</a>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </li>

            {/* My Account --------------------------------------------------------------------------------------------- */}
                    <li className="usa-nav__primary-item">
                    <a href="javascript:void(0);" className="usa-nav-link"
                        >My Account</a
                    >
                    </li>
                </ul>

            {/* Search Box --------------------------------------------------------------------------------------------- */}

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
                        src="/assets/img/usa-icons-bg/search--white.svg"
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