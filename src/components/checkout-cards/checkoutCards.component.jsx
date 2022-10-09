import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./checkoutCards.styles.scss";

const CheckoutCards = ({product}) => {
    
    const { addItemToCart, removeItemFromCart, removeAllItems } = useContext(CartContext);
    const { name, imageUrl, price, quantity } = product;
    
    const incQuantity = () => addItemToCart(product);
    const remQuantity = () => removeItemFromCart(product);
    const remAllQunatity = () => removeAllItems(product);

    return (
        <div className="cart-flex">
            <img src={imageUrl} alt={imageUrl} />
            <div className="name">{name}</div>
            <div className="plus" onClick={incQuantity}>+</div>
            <div className="qty">{quantity} x ${price}</div>
            <div className="minus" onClick={remQuantity}>-</div>
            <div className="cross" onClick={remAllQunatity}>X</div>

        </div>
    )
}

export default CheckoutCards;