import { useContext } from 'react'
import Button from '../button/button.components'
import CartItem from '../cart-item/cart-item.component'
import { CartContext } from '../../contexts/cart.context'
import { useNavigate } from 'react-router-dom'
// import { Link, useNavigate } from 'react-router-dom'
import {
    CartDropDownContainer,
    CartItems,
    EmptyMsg
} from './cart-dropdown'

const CartDropdown = (props) => {
    const { cartItems, isCartOpen, setIsCartOpen } = useContext(CartContext);
    const navigate = useNavigate();
    const setCartHandler = () => {
        setIsCartOpen(!isCartOpen);
    }
    const gotoCheckoutHandler = () => {
        setCartHandler();
        navigate('/checkout');
    }

    return (
        <CartDropDownContainer>
            <CartItems>
                {
                    cartItems.length ? (
                        cartItems.map((item) => (
                            <CartItem key={item.id} cartItem={item} />
                        ))
                    ) :
                    (<EmptyMsg>Your cart is empty</EmptyMsg>)
                }
            </CartItems>
                <Button displayName="Go To Chechout" onClick={gotoCheckoutHandler} />
            

            {/* <Link to="/checkout"><Button displayName="Go To Chechout"  /></Link> */}
            
        </CartDropDownContainer>
    )
}

export default CartDropdown;