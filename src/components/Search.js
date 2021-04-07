import React from 'react'
import { AddButton } from './AddButton'

export const Search = ({ setValue }) => {
    return(
        <div className='row'>
            <div className='input-field col s10'>
                <input 
                    id='search' 
                    type='text' 
                    placeholder='Введите название рецепта' 
                    onChange={(event) => setValue(event.target.value)}
                />
            </div>
            <div className='col s2'>
                <AddButton />
            </div>
        </div>
    )
}