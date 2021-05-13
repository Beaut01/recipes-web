import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'

export const Recipe = () => {
    const { id } = useParams()
    const recipeId = Number(id)
    const recipe = useSelector(({recipes}) => recipes.recipes.find(r => r.id === recipeId))

    return(
        <div className="container">
            <div className='wrapperRecipe center'>
                <div> 
                    <h4>{recipe.name}</h4>
                </div>
            </div>
            <div className='wrapperRecipe ptRecipe'>
                <div className='center ptRecipe'>
                    <div className='ptRecipe'>
                        <img src={recipe.image} alt='dss' className='cardImage'/>
                    </div>
                </div>
            </div>
            <div className='wrapperRecipe ptRecipe'>
                <div>
                    <p style={{paddingLeft: '15px'}}>
                        {recipe.description}
                    </p>
                </div>
            </div>
        </div>
    )
}