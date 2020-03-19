import React from 'react';
import style from './header.module.css';
const Header = () => {
    return(
        <div className={style.header}>
            <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" className={style.avatar}/>
        </div>
    )
}

export default Header;