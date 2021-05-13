import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { AddForm } from '../components/AddForm'
import { addRecipe } from '../redux/actions/recipes'

export const AddRecipe = () => {
    const dispatch = useDispatch()

    const {recipes} = useSelector(state => state.recipes)

    const handleAdd = recipe => {
        dispatch(addRecipe(recipe))
    }

    React.useEffect(() => {
        localStorage.setItem('recipes', JSON.stringify(recipes))
    }, [recipes])

    return(
        <div className='content'>
            <AddForm onAdd={handleAdd} />
        </div>
    )
}