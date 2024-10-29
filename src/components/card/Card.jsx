// CARD ----------------------------------------
import './Card.css'
const Card = () => {
    return (
        <>
            <ul class="usa-card-group">
                <li class="usa-card tablet-lg:grid-col-6 widescreen:grid-col-4">
                    <div class="usa-card__container">
                    <div class="usa-card__header">
                        <h4 class="usa-card__heading">Story Time</h4>
                    </div>
                    <div class="usa-card__media usa-card__media--exdent">
                        <div class="usa-card__img">
                        <img
                            src="../assets/nappy-8X5PS8tAqsA-unsplash.jpg"
                            alt="A baby holds and looks at a book"
                        />
                        </div>
                    </div>
                    <div class="usa-card__body">
                        <p>
                       
                        </p>
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

// EXPORT CARD --------------------------------
export default Card
