import { Ingredient } from 'types/ingredient';
import { Recipe } from 'types/recipe';

interface CookingListProps {
    cookingList: Recipe[]
    ingredientList?: Ingredient[]
}

function CookingList(props: CookingListProps) {
    return (
        <div style={{ margin: '0px 100px' }}>
            <h2>Test CookingList</h2>
            {props.ingredientList && props.ingredientList.map(ingredient => {
                return (<li>{ingredient.name} - { ingredient.category} | { ingredient.quantity} { ingredient.quantity} </li>)
            })
            }
        </div>
    )
}

export default CookingList
