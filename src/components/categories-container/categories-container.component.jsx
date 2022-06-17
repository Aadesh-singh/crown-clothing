import CategoriesItem from "../categories-item/categories-item.components"
import './categories-container.styles.scss'

const CategoriesContainer = ({categories}) => {
    return (
        <div className="categories-container">
            {
                categories.map((category) => (
                    <CategoriesItem key={category.id} category={category} />
                ))
            }
        </div>
    )
}

export default CategoriesContainer;