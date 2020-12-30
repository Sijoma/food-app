import React from 'react';
import { Ingredient } from '../types/ingredient';
import { Recipe } from '../types/recipe';

interface KochlisteProps {
    kochliste: Recipe[]
    ingredientList?: Ingredient[]
}

function Kochliste(props: KochlisteProps) {
        return (
            <div style={{ margin: '0px 100px'}}>
                <h2>Test Kochliste</h2>
                {props.ingredientList && props.ingredientList.map(ingredient => {
                    return (<li>{ ingredient.name } - { ingredient.category } | { ingredient.quantity } { ingredient.quantity } </li>)
                    })
                }
            </div>
        )
}

export default Kochliste