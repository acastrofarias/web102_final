import React, { useState, useEffect } from 'react';
import { supabase } from '../client.js';
import Card from '../components/Card';


const ReadPosts = (props) => {

    const [posts, setPosts] = useState([]);
    const [searchInput, setSearchInput] = useState("");

    useEffect(() => {
        setPosts(props.data);
    }, [props]);

    useEffect(() => {
        searchPosts(searchInput).catch(console.error);
      }, [searchInput]);

    const searchPosts = async (searchInput) => {
        if (searchInput !== ""){
            const { data, error } = await supabase
                .from("hub")
                .select()
                .textSearch('title', searchInput)
                .order("created_at", { ascending: true });
                setPosts(data);
        }
        else{
            setPosts(props.data);
        }
        
    }

    return (
        <div className="ReadPosts">
            <input className='searchBar'
              type="text"
              placeholder="Search..."
              onChange={(inputString) => setSearchInput(inputString.target.value)}
            />

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