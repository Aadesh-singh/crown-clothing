import { useContext } from 'react'
import Button from '../button/button.components'
import CartItem from '../cart-item/cart-item.component'
import { CartContext } from '../../contexts/cart.context'
import { useNavigate } from 'react-router-dom'
// import { Link, useNavigate } from 'react-router-dom'
import './cart-dropdown.scss'

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
        <div className={`cart-dropdown-container`}>
            <div className="cart-items">
                {
                    cartItems.map((item) => (
                        <CartItem key={item.id} cartItem={item} />
                    ))
                }
            </div>
            <Button displayName="Go To Chechout" onClick={gotoCheckoutHandler} />
            {/* <Link to="/checkout"><Button displayName="Go To Chechout"  /></Link> */}
            
        </div>
    )
}

export default CartDropdown;