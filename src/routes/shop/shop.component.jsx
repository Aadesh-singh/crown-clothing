import { useContext } from 'react';
import { ProductsContext } from '../../contexts/product.context';
import  ProductCard  from '../../components/product-card/product-card.component';
import  './shop.styles.scss';

const Shop = () => {
    const { products } = useContext(ProductsContext)
    // console.log('pppp', products);
    return (
        <div className='products-container'>
            {
                products.map((product) => (
                    <ProductCard key={product.id} products={product} />
                ))
            }
        </div>
    )
}

export default Shop;