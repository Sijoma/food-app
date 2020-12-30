type IngredientInfo = {
    id: string
    name: string
    category: string
}

type IngredientAmount = {
    quantity: Number
    unit: string
}

type Ingredient = IngredientInfo & IngredientAmount

export type {
    IngredientInfo,
    IngredientAmount,
    Ingredient
}