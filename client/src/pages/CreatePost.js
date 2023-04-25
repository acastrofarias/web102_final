import React, { useState } from 'react';
import './CreatePost.css';
import { supabase } from '../client.js';

const CreatePost = () => {
    const [post, setPost] = useState({ title: "", content: "", image_url: ""});
    console.log('post: ', post);

    const handleChange = (event) => {
        const {name, value} = event.target;
        console.log("Name: ", name, " value: ", value);
        setPost( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    const createPost = async (event) => {
        event.preventDefault();

        const { data, error } = await 
        supabase.from("hub").insert({
            title: post.title,
            content: post.content,
            image_url: post.image_url,
        })
        .select();
        console.log(data);
        console.log(error);
        window.location = "/";
    };

    return (
        <div>
            <form>
                <input type="text" placeholder="Title" id="title" name="title" onChange={handleChange} /><br />
                <br/>

                <input type="text" placeholder="Content" id="content" name="content" onChange={handleChange}/><br />
                <br/>

                <input type="text" placeholder="Image URL" id="image_url" name="image_url" onChange={handleChange}/><br />
                <br/>
                <input type="submit" value="Create Post" onClick={createPost}/>
            </form>
        </div>
    )
}

export default CreatePost;