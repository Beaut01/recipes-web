import React from 'react'
import { NavLink } from 'react-router-dom'

export const Categor = ({categories, activeCategory, changeCategory}) => {
    return(
        <div className='categor'>
            <ul> 
                <li className={activeCategory === null ? 'categor active' : 'categor'} onClick={() => changeCategory(null)}>Все</li>
                { categories.map((name, index) => {
                    return(
                        <li
                            key={`${index}__${name}`}
                            onClick={() => changeCategory(index)}
                            className={activeCategory === index ? 'categor active' : 'categor'}
                        >
                            {name}
                        </li>
                    )
                })}
                <NavLink to='/add' className="btn-floating btn-large waves-effect waves-light red">
                    <i className="material-icons">
                        add
                    </i>
                </NavLink>
            </ul> 
        </div>
    )
}