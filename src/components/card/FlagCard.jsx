import './FlagCard.css'
const FlagCard = () => {
    return (
        <>

<h3 class="site-preview-heading">Flag layout card</h3>
<ul class="usa-card-group">
<li class="usa-card usa-card--flag flex-1">
    <div class="usa-card__container">
    <div class="usa-card__header">
        <h4 class="usa-card__heading">Default flag</h4>
    </div>
    <div class="usa-card__media">
        <div class="usa-card__img">
        <img
            src="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg"
            alt="A placeholder image"
        />
        </div>
    </div>
    <div class="usa-card__body">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
    <div class="usa-card__footer">
        <a href="#" class="usa-button">Visit Florida Keys</a>
    </div>
    </div>
</li>
<li class="usa-card usa-card--flag flex-1 usa-card--media-right">
    <div class="usa-card__container">
    <div class="usa-card__header">
        <h4 class="usa-card__heading">Flag media right inset</h4>
    </div>
    <div class="usa-card__media usa-card__media--inset">
        <div class="usa-card__img">
        <img
            src="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg"
            alt="A placeholder image"
        />
        </div>
    </div>
    <div class="usa-card__body">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
    <div class="usa-card__footer">
        <a href="#" class="usa-button">Visit Florida Keys</a>
    </div>
    </div>
</li>
</ul>
    </>
    )
}

// EXPORT FLAGCARD --------------------------------
export default FlagCard
