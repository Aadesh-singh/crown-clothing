import { useContext, useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import {
    CategoryContainer,
    CategoryTitle
} from "./category.styles";

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
        <Fragment>
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            <CategoryContainer>
                {
                    products && products.map((product) => <ProductCard key={product.id} products={product} />)
                }
            </CategoryContainer>
        </Fragment>
    )
}

export default Category;