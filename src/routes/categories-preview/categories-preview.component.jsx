import { useContext, Fragment } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import CategoryPreview from "../../components/catergory-preview/category-preview.component";

// import {
    
// } from "./categories-preview";

import {CategoryPreviewContainer} from '../../components/catergory-preview/category-preview.styles'

const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext);
    // console.log('pppp', products);
    return (
        <CategoryPreviewContainer>           {
                Object.keys(categoriesMap).map((title) => {
                    const products = categoriesMap[title];
                    return (
                        <CategoryPreview key={title} title={title} products={products} /> 
                    );
                })
            }
        </CategoryPreviewContainer>
        
    )
}

export default CategoriesPreview;