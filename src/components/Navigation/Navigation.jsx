import { NavLink } from "react-router-dom"
import css from './Navigation.module.css'
import clsx from "clsx";

import { IoHomeOutline } from "react-icons/io5";
import { PiFilmSlate } from "react-icons/pi";
import { SiMonzo } from "react-icons/si";
 
const activeLink = ({ isActive}) => {
    return clsx(css.link, isActive && css.isActive);
}

export default function Navigation() {
    return (
        <>
            <nav className={css.nav}>
            <NavLink to="/" className={activeLink}>
                Home <IoHomeOutline />
            </NavLink>
            <NavLink to="/movies" className={activeLink}>
                Movies <PiFilmSlate />
                </NavLink>
            </nav>
            <span className={css.span}><SiMonzo className={css.icon} size={30} /></span>
        </>
    );
}