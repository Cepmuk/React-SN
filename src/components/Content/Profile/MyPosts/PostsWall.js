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

            <Post message='New post' likesCounter='10'/>
            <Post message='My first post' likesCounter='42'/>

        </div>

    )
}

export default MyPosts