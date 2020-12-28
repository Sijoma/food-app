const recipe1 = {
    title: "Nudeln mit Reibekäse",
    description: "Sehr lecker bei jeder Gelegenheit",
    einhandvertraeglichkeit: true,
    image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3653&q=80",
    tags: ['Hauptspeise', 'Kinder']
}

const recipe2 = {
    title: "Rumpsteak mit Sahnesauce",
    description: "Sehr lecker bei jeder Gelegenheit",
    einhandvertraeglichkeit: false,
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    tags: ['Hauptspeise', 'Eltern']
}

const recipe4 = {
    title: "Vanillekipferl",
    description: "Sehr lecker bei jeder Gelegenheit",
    einhandvertraeglichkeit: false,
    image: "",
    tags: ['Hauptspeise', 'Eltern']
}


const foodRecipes = [
    recipe1,
    recipe1,   recipe4,
    recipe2,   recipe1,
    recipe2,   recipe1,
    recipe2,   recipe2,
    recipe4
]

export default foodRecipes;
