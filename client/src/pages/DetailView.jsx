import React, { Component, useEffect, useState } from "react";
import { supabase } from '../client.js'
import { useParams } from "react-router-dom"
import { Link } from 'react-router-dom'
import Posted from '../components/Posted.jsx'
import more from '../components/more.png'
import './DetailView.css'

const DetailView = ({data}) => {
  const {id} = useParams();    
  const [post, setPost] = useState(data.filter(item => item.id == id)[0]);

  const [count, setCount] = useState(0)
  const updateCount = () => {
    setCount((count) => count + 1);
  }

  return(
    <div className='DetailView'>
        <Posted created_at={post.created_at} />
        <Link to={'edit/'+ post.id}><img className="moreButton" alt="edit button" src={more} /></Link>

        <h2 className="title">{post.title}</h2> 

        <p className="content">{post.content}</p>
        <img className="image_url" src={post.image_url} />
        <br></br>

        <button className="betButton" onClick={updateCount} >👍 Upvote: {count}</button>
    </div>
  ); 
};

export default DetailView;