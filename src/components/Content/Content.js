import { Route } from 'react-router'
import s from './Content.module.css'
import Messages from './Messages/Messages'
import Profile from './Profile/Profile'
import News from './News/News'
import Music from './Music/Music'
import Settings from './Settings/Settings'

const Content = (props) => {
    return (
        <div className={s.content}>
            <Route path='/messages' render={() => <Messages dialogues={props.dialogues} messages={props.messages} />} />
            <Route path='/profile' render={() => <Profile posts={props.posts} />} />
            <Route path='/news' component={News} />
            <Route path='/music' component={Music} />
            <Route path='/settings' component={Settings} />
        </div>
    )
}

export default Content