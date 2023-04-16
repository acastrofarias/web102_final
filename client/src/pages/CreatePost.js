import React, { useState } from 'react';
import './CreatePost.css';
import { supabase } from '../client.js';

const CreatePost = () => {
    const [post, setPost] = useState({ title: "", author: "", description: ""});
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
        supabase.from("Posts").insert({
            title: post.title,
            author: post.author,
            description: post.description,
        })
        .select();
        console.log(data);
        console.log(error);
        window.location = "/";
    };

    return (
        <div>
            <form>
                <label for="title">Title</label> <br />
                <input type="text" id="title" name="title" onChange={handleChange} /><br />
                <br/>

                <label for="author">Author</label><br />
                <input type="text" id="author" name="author" onChange={handleChange}/><br />
                <br/>

                <label for="description">Description</label><br />
                <textarea rows="5" cols="50" id="description" name="description" onChange={handleChange}>
                </textarea>
                <br/>
                <input type="submit" value="Submit" onClick={createPost}/>
            </form>
        </div>
    )
}

export default CreatePost;