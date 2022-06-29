import { useContext } from 'react'
import Button from '../button/button.components'
import CartItem from '../cart-item/cart-item.component'
import { CartContext } from '../../contexts/cart.context'
import './cart-dropdown.scss'

const CartDropdown = (props) => {
    const { cartItems } = useContext(CartContext);
    return (
        <div className={`cart-dropdown-container`}>
            <div className="cart-items">
                {
                    cartItems.map((item) => (
                        <CartItem key={item.id} cartItem={item} />
                    ))
                }
            </div>
            <Button displayName="Go To Chechout" />
        </div>
    )
}

export default CartDropdown;