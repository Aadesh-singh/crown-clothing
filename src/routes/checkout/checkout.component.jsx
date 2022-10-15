import { useContext } from "react";
import { CartContext}  from '../../contexts/cart.context';
import CheckoutCards from "../../components/checkout-cards/checkoutCards.component";
import {
    CheckoutContainer,
    CheckoutHeader,
    HeaderBlock,
    Total,
    Empty
} from "./checkout.styles";

const Checkout = () => {
    const { cartItems, cartTotal }  = useContext(CartContext);
    
    if(cartItems.length <= 0){
        return (
            <CheckoutContainer>
                <CheckoutHeader>
                    <HeaderBlock>
                        <span>Product</span>
                    </HeaderBlock>
                    <HeaderBlock>
                        <span>Desription</span>
                    </HeaderBlock>
                    <HeaderBlock>
                        <span>Quantity</span>
                    </HeaderBlock>
                    <HeaderBlock>
                        <span>Price</span>
                    </HeaderBlock>
                    <HeaderBlock>
                        <span>Remove</span>
                    </HeaderBlock>
                </CheckoutHeader>
                <Empty>Cart is Empty</Empty>
            </CheckoutContainer>
        )
    }
    else {
        return (
            <CheckoutContainer>
                <CheckoutHeader>
                    <HeaderBlock>
                        <span>Product</span>
                    </HeaderBlock>
                    <HeaderBlock>
                        <span>Desription</span>
                    </HeaderBlock>
                    <HeaderBlock>
                        <span>Quantity</span>
                    </HeaderBlock>
                    <HeaderBlock>
                        <span>Price</span>
                    </HeaderBlock>
                    <HeaderBlock>
                        <span>Remove</span>
                    </HeaderBlock>
                </CheckoutHeader>
                {/* <div> */}
                    {
                        cartItems.map((item) => (
                            <CheckoutCards key={item.id} product={item} />
                            // <CheckoutCards key={item.id} imageUrl={item.imageUrl} name={item.name} quantity={item.quantity} price={item.price} />
                        ))
                    }
                {/* </div> */}
                <Total>
                    Total: ${cartTotal}
                </Total>
            </CheckoutContainer>
        );
    }
    
}

export default Checkout;