import React from "react";
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    let postsData = [
        {id: 1, message: 'Jazz club', likesCount:12},
        {id: 2, message: 'Comping',likesCount:62},
        {id: 3, message: 'Learn tunes',likesCount:18}
    ]

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div className={s.posts}>
                <Post message='Jazz club'/>
                <Post message='Comping'/>
                <Post message='Learn tunes'/>
            </div>
        </div>
    )
}
export default MyPosts;