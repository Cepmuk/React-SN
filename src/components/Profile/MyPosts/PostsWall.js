import s from './PostsWall.module.css'
import Post from './Post/Post'

const MyPosts = () => {
    return (
        <div>
            <div>
                <textarea></textarea>
                <button>
                New post
                </button>
            </div>

            <Post />
            <Post />
            <Post />
            <Post />

        </div>

    )
}

export default MyPosts