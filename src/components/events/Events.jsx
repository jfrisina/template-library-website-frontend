// EVENTS ----------------------------------------
import './Events.css'
const Events = () => {
    return (
        <>
        <h2>Events</h2>
            <div className="grid-row">
                <ul className="usa-card-group">
                    <li className="usa-card tablet-lg:grid-col-6 widescreen:grid-col-4">
                        <div className="usa-card__container">
                            <div className="usa-card__header">
                                <h4 className="usa-card__heading">Story Time</h4>
                            </div>
                            <div className="usa-card__media usa-card__media--exdent">
                                <div className="usa-card__img">
                                <img
                                    src="src/assets/nappy-8X5PS8tAqsA-unsplash.jpg"
                                    alt="A placeholder image"
                                />  
                                </div>
                            </div>
                            <div className="usa-card__body">
                                <p>
                                Join us for a story, sing-a-long, and play time! 
                                </p>
                                <p><strong>Location</strong>: Main Branch</p>  
                                <p><strong>Date</strong>: Every Tuesday</p> <p><strong>Time</strong>: 10 AM</p>
                            </div>
                            <div className="usa-card__footer">
                                <a href="#" className="usa-button">Get info</a>
                            </div>
                        </div>
                    </li>
                    <li className="usa-card tablet-lg:grid-col-6 widescreen:grid-col-4">
                        <div className="usa-card__container">
                            <div className="usa-card__header">
                                <h4 className="usa-card__heading">Crafternoon</h4>
                            </div>
                            <div className="usa-card__media usa-card__media--exdent">
                                <div className="usa-card__img">
                                    <img src="src/assets/tim-arterbury-VkwRmha1_tI-unsplash.jpg" alt="A placeholder image"/>
                                </div>
                            </div>
                        <div className="usa-card__body">
                            <p>
                            Bring your latest craft project to work on!
                            </p>
                            <p><strong>Location</strong>: Main Branch</p>  
                            <p><strong>Date</strong>: Every Thursday</p> <p><strong>Time</strong>: 3 PM</p>
                        </div>
                            <div className="usa-card__footer">
                                <a href="#" className="usa-button">Get info</a>
                            </div>
                        </div>
                    </li>
                    <li className="usa-card tablet-lg:grid-col-6 widescreen:grid-col-4">
                        <div className="usa-card__container">
                            <div className="usa-card__header">
                                <h4 className="usa-card__heading">Dungeons & Dragons</h4>
                            </div>
                            <div className="usa-card__media usa-card__media--exdent">
                                <div className="usa-card__img">
                                <img
                                    src="src/assets/timothy-dykes-7-vPKU5Kqqs-unsplash.jpg"
                                    alt="20-sided dice for the game Dungeons and Dragons"
                                />
                                </div>
                            </div>
                            <div className="usa-card__body">
                                <p>Embrace your creativity and imagination in this popular role-playing fantasy game.
                                </p>
                                <p><strong>Location</strong>: South Branch</p>  
                                <p><strong>Date</strong>: Every Wednesday</p> <p><strong>Time</strong>: 4 PM</p>
                            </div>
                            <div className="usa-card__footer">
                                <a href="#" className="usa-button">Get Info</a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}
// EXPORT ALERT --------------------------------
export default Events
