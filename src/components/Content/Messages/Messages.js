import s from './Messages.module.css'
import Dialogue from './Dialoogue/Dialogue'
import Message from './Message/Message'


const Messages = (props) => {
    let dialogueElement = props.dialogues.map(d => <Dialogue id={d.id} name={d.name} />)
    let mesageElement = props.messages.map(m => <Message message={m.message} />)


    return (
        <div className={s.messages}>

            <div className={s.dialogueList}>
                {dialogueElement}
            </div>

            <div className={s.messageList}>
                {mesageElement}
            </div>
        </div>
    )
}

export default Messages