import s from './Dialogue.module.css'
import { NavLink } from 'react-router-dom'

const Dialogue = (props) => {
    return (
        <div>
            <NavLink to={`/messages/${props.id}`} className={`${s.dialogue}`} activeClassName={s.active}> {props.name} </NavLink>
        </div>
    )
}

export default Dialogue