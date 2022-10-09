import { useContext } from "react";
import { CartContext}  from '../../contexts/cart.context';
import CheckoutCards from "../../components/checkout-cards/checkoutCards.component";
import "./checkout.styles.scss";

const Checkout = () => {
    const { cartItems }  = useContext(CartContext);
    console.log(cartItems);
    const calcTotal = () => {
        let cost = 0;
        cartItems.forEach(item => {
            cost += item.quantity * item.price;
        })
        return cost;
    }
    if(cartItems.length <= 0){
        return (
            <div className="empty">Cart is Empty</div>
        )
    }
    else {
        return (
            <div>
                <div>
                    {
                        cartItems.map((item) => (
                            <CheckoutCards key={item.id} product={item} />
                            // <CheckoutCards key={item.id} imageUrl={item.imageUrl} name={item.name} quantity={item.quantity} price={item.price} />
                        ))
                    }
                </div>
                <div className="total">
                    Total $
                    {
                        calcTotal()
                    }
                </div>
            </div>
        );
    }
    
}

export default Checkout;