import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import {
    CheckoutItemContainer,
    ImageContainer,
    Name,
    Quantity,
    Arrow,
    Value,
    Price,
    RemoveButton
} from "./checkoutCards.styles";

const CheckoutCards = ({product}) => {
    
    const { addItemToCart, removeItemFromCart, removeAllItems } = useContext(CartContext);
    const { name, imageUrl, price, quantity } = product;
    
    const addItemHandler = () => addItemToCart(product);
    const removeItemHandler = () => removeItemFromCart(product);
    const clearItemHandler = () => removeAllItems(product);

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={imageUrl} />
            </ImageContainer>
            <Name>{name}</Name>
            {/* <div className="plus" onClick={incQuantity}>+</div> */}
            <Quantity>
                <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={addItemHandler}>&#10095;</Arrow>
            </Quantity>
            <Price> ${price}</Price>
            {/* <div className="minus" onClick={remQuantity}>-</div> */}
            <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>

        </CheckoutItemContainer>
    )
}

export default CheckoutCards;