const initialState = {
    recipes: [],
    loading: true
}

export const recipesReduser = (state = initialState, action) => {
    switch(action.type){
        case 'SET_RECIPES': 
            return {
                ...state, 
                recipes: action.payload,
                loading: false
            }
        case 'ADD_RECIPE':{
            const newRecipes = [
                action.payload, ...state.recipes
            ]
            return{
                ...state,
                recipes: newRecipes
            }
        }
        case 'DELETE_RECIPE':
            return{
                ...state,
                recipes: state.recipes.filter(recipe => recipe.id !== action.payload)
            }
        default:
            return state
    }
}