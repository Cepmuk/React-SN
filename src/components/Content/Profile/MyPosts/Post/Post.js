import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.post}>
            <div >
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnMIMfBH0TDkQ_TBrZOHgQRSKTjlLWZ6CRDw&usqp=CAU' />
                {props.message}
            </div>
            <div>
                <span>Likes: {props.likesCounter} </span>
                <span>Like</span>
            </div>

        </div>
    )
}

export default Post