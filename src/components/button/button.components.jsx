import './button.styles.scss'
const BUTTON_TYPE_CLASS = {
    google: 'google-sign-in',
    inverted: 'inverted'
}

const Button = ({displayName, buttonType, ...info}) => {
    return (
        <button className={`button-container ${BUTTON_TYPE_CLASS[buttonType]}`} {...info}>{displayName}</button>
    )
}

export default Button;