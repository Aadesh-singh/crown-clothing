import { useContext } from "react";
import { CartContext}  from '../../contexts/cart.context';
import CheckoutCards from "../../components/checkout-cards/checkoutCards.component";
import "./checkout.styles.scss";

const Checkout = () => {
    const { cartItems, cartTotal }  = useContext(CartContext);
    
    if(cartItems.length <= 0){
        return (
            <div className="checkout-container">
                <div className="checkout-header">
                    <div className="header-block">
                        <span>Product</span>
                    </div>
                    <div className="header-block">
                        <span>Desription</span>
                    </div>
                    <div className="header-block">
                        <span>Quantity</span>
                    </div>
                    <div className="header-block">
                        <span>Price</span>
                    </div>
                    <div className="header-block">
                        <span>Remove</span>
                    </div>
                </div>
                <div className="empty">Cart is Empty</div>
            </div>
        )
    }
    else {
        return (
            <div className="checkout-container">
                <div className="checkout-header">
                    <div className="header-block">
                        <span>Product</span>
                    </div>
                    <div className="header-block">
                        <span>Desription</span>
                    </div>
                    <div className="header-block">
                        <span>Quantity</span>
                    </div>
                    <div className="header-block">
                        <span>Price</span>
                    </div>
                    <div className="header-block">
                        <span>Remove</span>
                    </div>
                </div>
                {/* <div> */}
                    {
                        cartItems.map((item) => (
                            <CheckoutCards key={item.id} product={item} />
                            // <CheckoutCards key={item.id} imageUrl={item.imageUrl} name={item.name} quantity={item.quantity} price={item.price} />
                        ))
                    }
                {/* </div> */}
                <div className="total">
                    Total: ${cartTotal}
                </div>
            </div>
        );
    }
    
}

export default Checkout;