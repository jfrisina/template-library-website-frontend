// ALERT ----------------------------------------
import './Alert.css'
const Alert = () => {
    return (
        <>
            <div className="usa-alert usa-alert--warning">
            <div className="usa-alert__body">
                <h4 className="usa-alert__heading">Library Closed</h4>
                <p className="usa-alert__text">
                The library is closed due to the weather. You can still <a className="usa-link" href="#">borrow our online resources from home at any time.</a>
                </p>
            </div>
            </div>
        </>
    )
}

// EXPORT ALERT --------------------------------
export default Alert
