import { useContext } from 'react';
import Button, {BUTTON_TYPE_CLASS} from '../button/button.components'
import { CartContext } from '../../contexts/cart.context';
import {
    ProductCardContainer,
    Name,
    Price,
    Footer
} from './product-card.styles';

const ProductCard = ({ products }) => {
    const { addItemToCart } = useContext(CartContext)
    const { name, price, imageUrl } = products;

    const addProductToCart = () => addItemToCart(products);

    return (
        <ProductCardContainer>
            <img src={imageUrl} alt={`${name}`} />
            <Footer>
                <Name>{ name }</Name>
                <Price>{ price }</Price>
            </Footer>
            <Button buttonType={BUTTON_TYPE_CLASS.inverted} displayName="Add to Cart" onClick={addProductToCart} />
        </ProductCardContainer>
    );
} 

export default ProductCard;