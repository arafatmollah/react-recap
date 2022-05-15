import React, { useEffect, useState } from 'react';
import './Post.css'

const Post = () => {
    const [post, setPost] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPost(data));

        
    },[])
    return (
        <div className='post'>
            {
                post.map(posts=><Allpost title={posts.title} body={posts.body}></Allpost>)
            }
            
        </div>
    );
};

function Allpost(props) {
    console.log(props)
    return (
        <div className='body'>
            <h3>Title: {props.title}</h3>
            <p>Body: { props.body}</p>
        </div>
    )
}

export default Post;<p>Here come some post</p>