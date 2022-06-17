import './product-card.styles.scss';


import Button from '../button/button.components'

const ProductCard = ({ products }) => {
    const { name, price, imageUrl } = products;
    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`} />
            <div className="footer">
                <span className="name">{ name }</span>
                <span className="price">{ price }</span>
            </div>
            <Button buttonType="inverted" displayName="Add to Cart" />
        </div>
    );
} 

export default ProductCard;