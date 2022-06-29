import './product-card.styles.scss';
import { useContext } from 'react';
import Button from '../button/button.components'
import { CartContext } from '../../contexts/cart.context';

const ProductCard = ({ products }) => {
    const { addItemToCart } = useContext(CartContext)
    const { name, price, imageUrl } = products;

    const addProductToCart = () => addItemToCart(products);

    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`} />
            <div className="footer">
                <span className="name">{ name }</span>
                <span className="price">{ price }</span>
            </div>
            <Button buttonType="inverted" displayName="Add to Cart" onClick={addProductToCart} />
        </div>
    );
} 

export default ProductCard;