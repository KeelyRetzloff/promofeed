//single post component

import React from 'react'
import profilePlaceholder from './assets/profileplaceholder.svg'


export default function Post({post}) {
    return (
    <article className="post-wrap">
        <div className="post-overlay">
            <img src={profilePlaceholder} className="profile-placeholder" alt={post.title} />
            <div className="profile-content" >
                <h4 className="feed-title">{post.title}</h4>
                <h5 className="feed-subtitle">Posted 5 Hours Ago</h5>
            </div>
        </div>
        <img src={post.img} alt={post.title} className="feed-img"/>
    </article>
    )
}