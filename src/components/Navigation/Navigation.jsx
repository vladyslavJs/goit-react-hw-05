import { NavLink } from "react-router-dom"
import css from './Navigation.module.css'
import clsx from "clsx";

import { IoHomeOutline } from "react-icons/io5";
import { PiFilmSlate } from "react-icons/pi";
import { SiThemoviedatabase } from "react-icons/si";

const activeLink = ({ isActive}) => {
    return clsx(css.link, isActive && css.isActive);
}

export default function Navigation() {
    return (
        <div className={css.container}>
             <nav className={css.nav}>
            <NavLink to="/" className={activeLink}>
                Home <IoHomeOutline />
            </NavLink>
            <NavLink to="/movies" className={activeLink}>
                Movies <PiFilmSlate />
            </NavLink>
                <span className={css.span}><SiThemoviedatabase className={css.icon } /></span>
        </nav>
        </div>
       
    );
}