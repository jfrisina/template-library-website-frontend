import './FlagCard.css'
const FlagCard = () => {
    return (
        <>

<h3 className="site-preview-heading">Flag layout card</h3>
<ul className="usa-card-group">
<li className="usa-card usa-card--flag flex-1">
    <div className="usa-card__container">
    <div className="usa-card__header">
        <h4 className="usa-card__heading">Default flag</h4>
    </div>
    <div className="usa-card__media">
        <div className="usa-card__img">
        <img
            src="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg"
            alt="A placeholder image"
        />
        </div>
    </div>
    <div className="usa-card__body">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
    <div className="usa-card__footer">
        <a href="#" className="usa-button">Visit Florida Keys</a>
    </div>
    </div>
</li>
<li className="usa-card usa-card--flag flex-1 usa-card--media-right">
    <div className="usa-card__container">
    <div className="usa-card__header">
        <h4 className="usa-card__heading">Flag media right inset</h4>
    </div>
    <div className="usa-card__media usa-card__media--inset">
        <div className="usa-card__img">
        <img
            src="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg"
            alt="A placeholder image"
        />
        </div>
    </div>
    <div className="usa-card__body">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
    <div className="usa-card__footer">
        <a href="#" className="usa-button">Visit Florida Keys</a>
    </div>
    </div>
</li>
</ul>
    </>
    )
}

// EXPORT FLAGCARD --------------------------------
export default FlagCard
