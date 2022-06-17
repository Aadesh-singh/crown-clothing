import Button from '../button/button.components'
import './cart-dropdown.scss'

const CartDropdown = () => {
    return (
        <div className="cart-dropdown-container">
            <div className="cart-items" />
            <Button displayName="Go To Chechout" />
        </div>
    )
}

export default CartDropdown;