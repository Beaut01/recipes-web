import React from 'react'
import { NavLink } from 'react-router-dom' 

export const Navbar = () => {
    return(
        <nav>
            <div className="nav-wrapper deep-purple lighten-4 p1r">
                <NavLink to="/" className="brand-logo right" style={{color: '#000'}}>Рецепты</NavLink>
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    <li><NavLink to="/" className='bc'>Главная</NavLink></li>
                    <li><NavLink to="/about" className='bc'>Информация</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}