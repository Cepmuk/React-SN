import s from './Profile.module.css'
import backgroundImage from './Background.jpg'
import MyPosts from './MyPosts/PostsWall'

const Profile = () => {
    return (
        <div className={s.profile}>
            <div>
                <img src={backgroundImage} alt='Background image' />
            </div>

            <MyPosts />
            
        </div>
    )
}

export default Profile