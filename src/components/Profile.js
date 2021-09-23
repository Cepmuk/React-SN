const Profile = () => {
    return (
        <div className='profile'>
            <div className='mainImage'>
                <img src='https://images.unsplash.com/photo-1548625361-58a9b86aa83b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80' />
            </div>

            <div>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnMIMfBH0TDkQ_TBrZOHgQRSKTjlLWZ6CRDw&usqp=CAU' />
                Some personal information
            </div>

            <div className='posts'>

                <div>
                    New post
                </div>
                <div>
                    Post 1
                </div>
                <div>
                    Post 2
                </div>

            </div>

        </div>
    )
}

export default Profile