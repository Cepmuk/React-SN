import s from './Messages.module.css'

const Messages = () => {
    return (
        <div className={s.messages}>

            <div className={s.dialogueList}>
                <div className={`${s.dialogue} ${s.active}`}>
                    Sergey
                </div>
                <div className={s.dialogue}>
                    Julia
                </div>
                <div className={s.dialogue}>
                    Jana
                </div>
                <div className={s.dialogue}>
                    Kirill
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