import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPosts from './MyPosts/PostsWall'

const Profile = () => {
    return (
        <div className={s.profile}>
            <ProfileInfo />
            <MyPosts />
        </div>
    )
}

export default Profile