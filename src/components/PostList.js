import React from "react";
import Post from "./Post";
import pizzaPic from '../assets/pizza.jpeg'

const PostList = ()=>{
    const posts = [
        {id:1,headline:'Pizza',description:'A recipe for pizza'},
        {id:2,headline:'Pasta',description:'My pasta recipe'}
    ]
    return(
        <div className="div-post-list">
            {posts.map((post)=>(
                <div className="post">
                    <img src={pizzaPic} className="post-image"/>
                    <h1 className="headline">{post.headline}</h1>    
                    <p className="description" >{post.description}</p>
                </div>
            ))}
        </div>
    )
}

export default PostList;