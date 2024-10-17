// ALERT
import './Alert.css'
const Alert = () => {
    return (
        <>
            <div class="usa-alert usa-alert--warning">
            <div class="usa-alert__body">
                <h4 class="usa-alert__heading">Library Closed</h4>
                <p class="usa-alert__text">
                The library is closed due to the weather. You can still <a class="usa-link" href="javascript:void(0);">borrow our online resources from home at any time.</a>
                </p>
            </div>
            </div>
        </>
    )
}

// EXPORT ALERT --------------------------------
export default Alert
