import React from 'react';
import { Ingredient } from '../types/ingredient';
import { Recipe } from '../types/recipe';

interface KochlisteProps {
    kochliste: Recipe[]
    ingredientList?: Ingredient[]
}

const test: Ingredient = {
    id: "test",
    name: "test",
    category: "test",
    quantity: 1,
    unit: "kg"
}

class Kochliste extends React.Component<KochlisteProps> {
    render() {
        return (
            <div style={{ margin: '0px 100px'}}>
                <h2>Test Kochliste</h2>
                {
                this.props.ingredientList && this.props.ingredientList.map(ingredient => {
                    return (
                        <li>{ ingredient.name } - { ingredient.category } | { ingredient.quantity } { ingredient.quantity } </li>
                        )
                    })
                }
            </div>
        )
    }
}

export default Kochliste