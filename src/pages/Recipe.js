import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'

export const Recipe = () => {
    const { id } = useParams()
    const recipeId = Number(id)
    const recipe = useSelector(({recipes}) => recipes.recipes.find(r => r.id === recipeId))

    return(
        <div className="container wrapperRecipe">
            <div className='center ptRecipe'>
                <div className='center'> 
                    <h4>{recipe.name}</h4>
                </div>
                <div className='ptRecipe'>
                    <img src={recipe.image} alt='dss'/>
                    <p>
                        {recipe.description}
                    </p>
                </div>
            </div>
        </div>
    )
}