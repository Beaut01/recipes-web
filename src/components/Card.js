import React from 'react' 
import { NavLink } from 'react-router-dom'

export const Card = ({id, name, description, image, onDelete}) => {
    return(
        <div className='row'>
            <div className='col s12'>
                <div className='card'>
                    <NavLink to={`/recipe/${id}`}>
                        <div className='card-image'>
                            <img src={image} alt="aink" className='cardImage'/>
                            <span className='card-title'>{name}</span>
                        </div>
                    </NavLink>
                    <div className='card-content'>
                        <p>{description}</p>
                    </div>
                    <div style={{justifyContent: 'center', display: 'flex'}}>
                        <button 
                            style={{width: '50%', color: 'white', backgroundColor: 'red', height: '40px', borderRadius: '30px', marginBottom: '5px' }} onClick={() => onDelete(id)}>
                        Удалить</button>
                    </div>
                </div>
            </div>
        </div>
    )
}