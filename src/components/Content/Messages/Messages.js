import s from './Messages.module.css'
import Dialogue from './Dialoogue/Dialogue'
import Message from './Message/Message'


const Messages = () => {
    return (
        <div className={s.messages}>
            
            <div className={s.dialogueList}>
                <Dialogue id='1' name='Sergey' />
                <Dialogue id='2' name='Julia' />
                <Dialogue id='3' name='Jana' />
                <Dialogue id='4' name='Kirill' />
            </div>

            <div className={s.messageList}>
                <Message message='Hi' />
                <Message message='Hello' />
                <Message message='Privet' />
                <Message message='My name is' />
                <Message message='Hello world' />

            </div>
        </div>
    )
}

export default Messages