import React from "react"
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";


const Navbar = () => {
    const setClass = ({isActive}) => isActive ? s.activeLink : s.item

    const testZaza = (title, route) => {
        return (
            <div className={s.item}>
                <NavLink to={route} className={setClass}>{title}</NavLink>
            </div>
        )
    }
    return (
        <nav className={s.nav}>
            {testZaza("Profile", 'profile')}
            {testZaza("Messages", 'dialogs')}
            <div className={s.item}>
                <NavLink to="/news" className={setClass}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" className={setClass}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" className={setClass}>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navbar
