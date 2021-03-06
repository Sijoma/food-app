import { Ingredient } from '../types/ingredient'
import { Recipe } from '../types/recipe'

const recipe1: Recipe = {
    id: "test1",
    name: "Nudeln mit Reibekäse",
    description: "Sehr lecker bei jeder Gelegenheit",
    image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3653&q=80",
    tags: [{id: 1, title: 'test1title', description: 'test1desc'}, {id: 2, title: 'test2title', description: 'test2desc'}]
}

const recipe2 = {
    id: "test2",
    name: "Rumpsteak mit Sahnesauce",
    description: "Sehr lecker bei jeder Gelegenheit",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    tags: []
}

const recipe4 = {
    id: "test3",
    name: "Vanillekipferl",
    description: "Sehr lecker bei jeder Gelegenheit",
    image: "",
    tags: []
}


const foodRecipes = [
    recipe1,
    recipe1,   recipe4,
    recipe2,   recipe1,
    recipe2,   recipe1,
    recipe2,   recipe2,
    recipe4
]


const testIngredient: Ingredient = {
    id: "test",
    name: "test",
    category: "test",
    quantity: 1,
    unit: "kg"
}

const testIngredients = [
    testIngredient,
    testIngredient,
    testIngredient
]

export {
    foodRecipes,
    testIngredients
}
