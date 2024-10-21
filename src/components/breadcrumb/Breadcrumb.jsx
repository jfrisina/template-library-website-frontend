// BREADCRUMB ------------------------------------
import './Breadcrumb.css'
const Breadcrumb = () => {
    return (
        <>
            <nav class="usa-breadcrumb" aria-label="Breadcrumbs">
            <ol class="usa-breadcrumb__list">
                <li class="usa-breadcrumb__list-item">
                    <a href="" class="usa-breadcrumb__link"><span>Home</span></a>
                </li>
                <li class="usa-breadcrumb__list-item">
                    <a href="" class="usa-breadcrumb__link"><span>Page Template Code Here</span></a>
                </li>
                <li class="usa-breadcrumb__list-item">
                    <a href="" class="usa-breadcrumb__link"><span>Page Template Code Here</span></a>
                </li>
                <li class="usa-breadcrumb__list-item usa-current" aria-current="page">
                    <span>Page Template Code Here</span>
                </li>
            </ol>
            </nav>
        </>
    )
}

// EXPORT BREADCRUMB -----------------------------
export default Breadcrumb