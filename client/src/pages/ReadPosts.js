import React, { useState, useEffect } from 'react';
import Card from '../components/Card';


const ReadPosts = (props) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setPosts(props.data);
    }, [props]);
    
    return (
        <div className="ReadPosts">
            {
                posts && posts.length > 0 ?
                posts.map((post,index) => 
                   <Card id={post.id} created_at={post.created_at} title={post.title} content={post.content} image_url={post.image_url} upvotes={post.upvotes}/>
                ) : <h2>{'No Posts Yet 😞'}</h2>
            }
        </div>  
    )
}

export default ReadPosts;