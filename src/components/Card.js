import React from 'react' 
import { NavLink } from 'react-router-dom'

export const Card = ({id, name, description, image, onDelete}) => {
    return(
        <div className="col s12 m5">
            <div className="card">
                <NavLink to={`/recipe/${id}`}>
                    <div className="card-image">
                        <img src={image} alt='recipe' />
                        <span className="card-title">{name}</span>
                    </div>
                </NavLink>
                <div className="card-content">
                        <p>{description}</p>
                </div>
                <div className="card-action center">
                    <button className='deleteButton' onClick={() => onDelete(id)}>Удалить</button>
                </div>
            </div>
        </div>
    )
}