import s from './Messages.module.css'
import { NavLink } from 'react-router-dom'
const Messages = () => {
    return (
        <div className={s.messages}>

            <div className={s.dialogueList}>
                <div>
                    <NavLink to='/messages/1' className={`${s.dialogue}`} activeClassName={s.active}> Sergey </NavLink>
                </div>
                <div>
                    <NavLink to='/messages/2' className={`${s.dialogue}`} activeClassName={s.active}>Julia</NavLink>
                </div>
                <div>
                    <NavLink to='/messages/3' className={`${s.dialogue}`} activeClassName={s.active}>Jana</NavLink>
                </div>
                <div>
                    <NavLink to='/messages/4' className={`${s.dialogue}`} activeClassName={s.active}> Kirill</NavLink>
                </div>
            </div>

            <div className={s.messageList}>
                <div className={s.message}>
                    Hi
                </div>
                <div className={s.message}>
                    Hello
                </div>
                <div className={s.message}>
                    Privet
                </div>
            </div>
        </div>
    )
}

export default Messages