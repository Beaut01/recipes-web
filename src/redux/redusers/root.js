import { combineReducers } from 'redux'
import { recipesReduser } from './recipes'

export const rootReduser = combineReducers({
    recipes: recipesReduser,
})