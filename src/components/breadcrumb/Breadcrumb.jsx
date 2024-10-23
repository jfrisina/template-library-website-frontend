// BREADCRUMB ------------------------------------
import './Breadcrumb.css'
const Breadcrumb = () => {
    return (
        <>
            <nav className="usa-breadcrumb" aria-label="Breadcrumbs">
            <ol className="usa-breadcrumb__list">
                <li className="usa-breadcrumb__list-item">
                    <a href="#" className="usa-breadcrumb__link"><span>Home</span></a>
                </li>
                {/* <li className="usa-breadcrumb__list-item">
                    <a href="" className="usa-breadcrumb__link"><span>Page Template Code Here</span></a>
                </li>
                <li className="usa-breadcrumb__list-item">
                    <a href="" className="usa-breadcrumb__link"><span>Page Template Code Here</span></a>
                </li>
                <li className="usa-breadcrumb__list-item usa-current" aria-current="page">
                    <span>Page Template Code Here</span>
                </li> */}
            </ol>
            </nav>
        </>
    )
}

// EXPORT BREADCRUMB -----------------------------
export default Breadcrumb