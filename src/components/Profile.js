import s from './Profile.module.css'

const Profile = () => {
    return (
        <div className={s.profile}>
            <div className={s.mainImage}>
                <img src='https://images.unsplash.com/photo-1548625361-58a9b86aa83b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80' />
            </div>

            <div>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnMIMfBH0TDkQ_TBrZOHgQRSKTjlLWZ6CRDw&usqp=CAU' />
            </div>

            <div>

                <div>
                    New post
                </div>
                <div>
                    Post 1
                </div>

            </div>

        </div>
    )
}

export default Profile