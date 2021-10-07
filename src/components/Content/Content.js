import s from './Content.module.css'
import Diallogs from './Diallogs/Diallogs'
import Profile from './Profile/Profile'

const Content = () => {
    return (
        <div className={s.content}>
            <Diallogs />
            {/* <Profile /> */}
        </div>
    )
}

export default Content