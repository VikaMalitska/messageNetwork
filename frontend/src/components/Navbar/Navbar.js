import React from 'react';
import style from './navbar.module.css';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return(
        <nav className={style.navbar}>
            <div className={style.item}>
                <NavLink to="/profile" activeClassName={style.active}>PROFILE</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/dialogs" activeClassName={style.active}>MASSAGES</NavLink>
            </div>
            <div className={style.item}>
                <a href="/">NEWS</a>
            </div>
            <div className={style.item}>
                <a href="/">MUSIC</a>
            </div>
        </nav>
    )
}


export default Navbar;