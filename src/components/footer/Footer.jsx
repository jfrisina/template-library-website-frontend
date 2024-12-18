// FOOTER ---------------------------------
import './Footer.css'
const Footer = () => {
    return (
        <>
        <footer className="usa-footer">
        <div className="grid-container usa-footer__return-to-top">
            <a href="#">Return to top</a>
        </div>
        <div className="usa-footer__primary-section">
            <nav className="usa-footer__nav" aria-label="Footer navigation">
            <ul className="grid-row grid-gap">
                <li
                className="mobile-lg:grid-col-4 desktop:grid-col-auto usa-footer__primary-content"
                >
                <a className="usa-footer__primary-link" href="#"
                    >Events</a
                >
                </li>
                <li
                className="mobile-lg:grid-col-4 desktop:grid-col-auto usa-footer__primary-content"
                >
                <a className="usa-footer__primary-link" href="#"
                    >News</a
                >
                </li>
                <li
                className="mobile-lg:grid-col-4 desktop:grid-col-auto usa-footer__primary-content"
                >
                <a className="usa-footer__primary-link" href="#"
                    >Directions</a
                >
                </li>
                <li
                className="mobile-lg:grid-col-4 desktop:grid-col-auto usa-footer__primary-content"
                >
                <a className="usa-footer__primary-link" href="#"
                    >Contact Us</a
                >
                </li>
            </ul>
            </nav>
        </div>
        <div className="usa-footer__secondary-section">
            <div className="grid-container">
            <div className="grid-row grid-gap">
                <div
                className="usa-footer__logo grid-row mobile-lg:grid-col-6 mobile-lg:grid-gap-2"
                >
                <div className="mobile-lg:grid-col-auto">
                    <img className="usa-footer__logo-img" src="/assets/img/logo-img.png" alt="" />
                </div>
                <div className="mobile-lg:grid-col-auto">
                    <p className="usa-footer__logo-heading">Library Name</p>
                </div>
                </div>
                <div className="usa-footer__contact-links mobile-lg:grid-col-6">
                <div className="usa-footer__social-links grid-row grid-gap-1">
                    <div className="grid-col-auto">
                    <a className="usa-social-link" href="#"><img
                        className="usa-social-link__icon"
                        src="src/assets/facebook.svg"
                        alt="Facebook"
                    /></a>
                    </div>
                    <div className="grid-col-auto">
                    <a className="usa-social-link" href="#"
                        ><img
                        className="usa-social-link__icon"
                        src="../node_modules/@uswds/uswds/packages/usa-icon/src/img/uswds-icons/instagram.svg"
                        alt="Instagram"
                    /></a>
                    </div>
                    <div className="grid-col-auto">
                    <a className="usa-social-link" href="#"
                        ><img
                        className="usa-social-link__icon"
                        src="../node_modules/@uswds/uswds/packages/usa-icon/src/img/uswds-icons/x.svg"
                        alt="Twitter"
                    /></a>
                    </div>
                    <div className="grid-col-auto">
                    <a className="usa-social-link" href="#"
                        ><img
                        className="usa-social-link__icon"
                        src="../node_modules/@uswds/uswds/packages/usa-icon/src/img/uswds-icons/youtube.svg"
                        alt="YouTube"
                    /></a>
                    </div>
                </div>
                <p className="usa-footer__contact-heading">
                    Contact Us
                </p>
                <address className="usa-footer__address">
                    <div className="usa-footer__contact-info grid-row grid-gap">
                    <div className="grid-col-auto">
                        <a href="tel:1-800-555-5555">123-456-7891</a>
                    </div>
                    <div className="grid-col-auto">
                        <a href="mailto:info@agency.gov">library@email.org</a>
                    </div>
                    </div>
                </address>
                </div>
            </div>
            </div>
        </div>
        </footer>
        </>
    )
}

// EXPORT FOOTER -----------------------------
export default Footer