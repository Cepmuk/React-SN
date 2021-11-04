import s from './ProfileInfo.module.css'
import backgroundImage from './Background.jpg'

const ProfileInfo = () => {
    return (
        <div className={s.profileInfo}>
            <div>
                <img src={backgroundImage} alt='Background image' />
            </div>

            <div className={s.Description}>
                <div>About me</div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>
                        New post
                    </button>
                </div>
                <h3>My posts</h3>
            </div>

        </div>
    )
}

export default ProfileInfo