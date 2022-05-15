import React from 'react';
import './Blog.css'
const Blog = () => {
    return (
        <div className='article'>
            <First name='Arafat' blogs='React is a very much
            useful for all the Frontend Developer. More: React.js'></First>
            <First name='Arafat' blogs='React is a very much
            useful for all the Frontend Developer. More: React.js'></First>
            <First name='Arafat' blogs='React is a very much
            useful for all the Frontend Developer. More: React.js'></First>
            <First name='Arafat' blogs='React is a very much
            useful for all the Frontend Developer. More: React.js'></First>
            <First name='Arafat' blogs='React is a very much
            useful for all the Frontend Developer. More: React.js'></First>
            <First name='Arafat' blogs='React is a very much
            useful for all the Frontend Developer. More: React.js'></First>
            <First name='Arafat' blogs='React is a very much
            useful for all the Frontend Developer. More: React.js'></First>
            <First name='Arafat' blogs='React is a very much
            useful for all the Frontend Developer. More: React.js'></First>
            <First name='Arafat' blogs='React is a very much
            useful for all the Frontend Developer. More: React.js'></First>
        </div>
    );
};

function First(props) {

    return (
        <div>
            <h4>Author: { props.name}</h4>
            <p>Blogs: { props.blogs}</p>
        </div>
    )
}

export default Blog;