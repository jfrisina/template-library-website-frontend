// EVENTS ----------------------------------------
import './Events.css'
const Events = () => {
    return (
        <>
        <h2>Events</h2>
        <div className="desktop:grid-container">
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
                                    src="src/assets/images/nappy-8X5PS8tAqsA-unsplash.jpg"
                                    alt="A placeholder image"
                                />  
                                </div>
                            </div>
                            <div className="usa-card__body">
                                <p>
                                Join us for a story, sing-a-long, and play time! 
                                </p>
                                <p className='margin-0'><strong>Location</strong>: Main Branch</p>  
                                <p className='margin-0'><strong>Date</strong>: Every Tuesday</p> 
                                <p className='margin-0'><strong>Time</strong>: 10 AM</p>
                                <p className='margin-0'><strong>For</strong>: Babies, Toddlers</p> 
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
                                    <img src="src/assets/images/kelly-sikkema-8A7qKkvm_ew-unsplash.jpg" alt="A placeholder image"/>
                                </div>
                            </div>
                        <div className="usa-card__body">
                            <p>
                            Bring your own craft project to create in a cozy group setting.
                            </p>
                            <p className='margin-0'><strong>Location</strong>: Main Branch</p>  
                            <p className='margin-0'><strong>Date</strong>: Every Thursday</p> 
                            <p className='margin-0'><strong>Time</strong>: 3 PM</p>
                            <p className='margin-0'><strong>For</strong>: All Ages</p> 
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
                                    src="src/assets/images/timothy-dykes-7-vPKU5Kqqs-unsplash.jpg"
                                    alt="20-sided dice for the game Dungeons and Dragons"
                                />
                                </div>
                            </div>
                            <div className="usa-card__body">
                                <p>Embrace your creativity and imagination in this popular game.
                                </p>
                                <p className='margin-0'><strong>Location</strong>: South Branch</p>  
                                <p className='margin-0'><strong>Date</strong>: Every Wednesday</p> 
                                <p className='margin-0'><strong>Time</strong>: 4 PM</p>
                                <p className='margin-0'><strong>For</strong>: Teens</p> 
                            </div>
                            <div className="usa-card__footer">
                                <a href="#" className="usa-button">Get Info</a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        <div className="flex">
            <button class="usa-button usa-button--secondary flex-align-center usa-button--big" type="button">See all events</button>
        </div>
        </div>
        </>
    )
}
// EXPORT ALERT --------------------------------
export default Events
