import s from './PostsWall.module.css'
import Post from './Post/Post'

const MyPosts = () => {
    return (
        <div className={s.PostsWall}>
            <Post message='New post' likesCounter='10'/>
            <Post message='My first post' likesCounter='42'/>
        </div>

    )
}

export default MyPosts