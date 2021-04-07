import React from 'react'
import { NavLink } from 'react-router-dom'

export const AddButton = () => {
    return(
        <div className='center' style={{padding: '15px'}}>
            <NavLink to='/add' className="btn-floating btn-large waves-effect waves-light deep-purple lighten-4 pulse">
                <i className="material-icons">
                    add
                </i>
            </NavLink>
        </div>
    )
}