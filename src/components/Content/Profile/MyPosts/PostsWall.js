import s from './PostsWall.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {

    let postElement = props.posts.map(p => <Post message={p.postMessage} likesCounter={p.likesCounter} />)

    return (
        <div className={s.PostsWall}>
            {postElement}
        </div>

    )
}

export default MyPosts