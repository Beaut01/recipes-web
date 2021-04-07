import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Card } from '../components/Card'
import { deleteRecipe, setRecipes } from '../redux/actions/recipes'
import { Search } from '../components/Search'

export const Main = () => {
    const dispatch = useDispatch()
    const {loading, recipes} = useSelector(state => state.recipes)
    const [value, setValue] = React.useState('')

    React.useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('recipes') || '[]')
        dispatch(setRecipes(saved))
    } ,[dispatch])

    React.useEffect(() => {
        localStorage.setItem('recipes', JSON.stringify(recipes))
    }, [recipes])

    const handleDeleteRecipe = (id) => {
        dispatch(deleteRecipe(id))
    }

    const filteredRecipes = recipes.filter(recipe => recipe.name.toLowerCase().includes(value.toLowerCase()))

    if(loading){
        return <h1 className='center'>Загрузка...</h1>
    }else {
        if (recipes.length === 0) {
            return(
                <div className='container'>
                    <Search value={value} setValue={setValue} />
                    <h2 className='center'>Рецепты ещё не добавлены</h2>
                </div>
            )
        }
        return(
            <div className='container'>
                <Search value={value} setValue={setValue}/>
                { filteredRecipes.map(item => (
                    <Card 
                        key={item.id}
                        {...item}
                        onDelete={handleDeleteRecipe}
                    />
                ))}
            </div>
        )
    }
}