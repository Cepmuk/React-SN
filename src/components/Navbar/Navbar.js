import { NavLink } from 'react-router-dom'
import s from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div>
                <NavLink to='/profile' activeClassName={s.activeItem}>Profile</NavLink>
            </div>
            <div>
                <NavLink to='/messages'activeClassName={s.activeItem}>Messages</NavLink>
            </div>
            <div>
                <NavLink to='/news'activeClassName={s.activeItem}>News</NavLink>
            </div>
            <div>
                <NavLink to='/music'activeClassName={s.activeItem}>Music</NavLink>
            </div>
            <div>
                <NavLink to='/settings'activeClassName={s.activeItem}>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navbar