import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./category.styles.scss";

import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../../components/product-card/product-card.component";

const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    console.log('cate: ', categoriesMap[category]);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [categoriesMap, category]);

    return (
        <div className="category-sub-container">
            {
                products && products.map((product) => <ProductCard key={product.id} products={product} />)
            }
        </div>
    )
}

export default Category;