import Button from '../button/button.components'
import './cart-dropdown.scss'

const CartDropdown = (props) => {
    const { toggleClassName } = props;
    return (
        <div className={`cart-dropdown-container ${toggleClassName}`}>
            <div className="cart-items" />
            <Button displayName="Go To Chechout" />
        </div>
    )
}

export default CartDropdown;