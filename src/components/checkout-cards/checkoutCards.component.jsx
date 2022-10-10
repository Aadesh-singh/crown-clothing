import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./checkoutCards.styles.scss";

const CheckoutCards = ({product}) => {
    
    const { addItemToCart, removeItemFromCart, removeAllItems } = useContext(CartContext);
    const { name, imageUrl, price, quantity } = product;
    
    const addItemHandler = () => addItemToCart(product);
    const removeItemHandler = () => removeItemFromCart(product);
    const clearItemHandler = () => removeAllItems(product);

    return (
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt={imageUrl} />
            </div>
            <div className="name">{name}</div>
            {/* <div className="plus" onClick={incQuantity}>+</div> */}
            <div className="quantity">
                <div className="arrow" onClick={removeItemHandler}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={addItemHandler}>&#10095;</div>
            </div>
            <div className="price"> ${price}</div>
            {/* <div className="minus" onClick={remQuantity}>-</div> */}
            <div className="remove-button" onClick={clearItemHandler}>&#10005;</div>

        </div>
    )
}

export default CheckoutCards;