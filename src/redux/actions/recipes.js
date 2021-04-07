export const setRecipes = (items) => ({
    type: 'SET_RECIPES',
    payload: items
})

export const addRecipe = (recipe) => ({
    type: 'ADD_RECIPE',
    payload: recipe
})

export const deleteRecipe = (id) => ({
    type: 'DELETE_RECIPE',
    payload: id
})