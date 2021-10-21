import { Route } from 'react-router'
import s from './Content.module.css'
import Messages from './Messages/Messages'
import Profile from './Profile/Profile'
import News from './News/News'
import Music from './Music/Music'
import Settings from './Settings/Settings'

const Content = () => {
    return (
        <div className={s.content}>
            <Route path='/messages' component={Messages} />
            <Route path='/profile' component={Profile} />
            <Route path='/news' component={News} />
            <Route path='/music' component={Music} />
            <Route path='/settings' component={Settings} />
        </div>
    )
}

export default Content