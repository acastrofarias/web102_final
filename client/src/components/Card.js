import React from 'react'
import { useState } from 'react'
import './Card.css'
import more from './more.png'
import { Link } from 'react-router-dom'
import Posted from './Posted'
import DetailView from '../pages/DetailView';

const Card = (props) =>  {

  const [count, setCount] = useState(0)
  const updateCount = () => {
    setCount((count) => count + 1);
  }

  return (
      <div className="Card">
          <Posted created_at={props.created_at} />
          <Link to={'edit/'+ props.id}><img className="moreButton" alt="edit button" src={more} /></Link>
          <Link to={'details/' + props.id}> <h2 className="title">{props.title}</h2> </Link>
          <p className="content">{props.content}</p>
          <img className="image_url" src={props.image_url} />
          <br></br>
          <p>Upvotes: {props.upvotes}</p>
          <button className="betButton" onClick={updateCount} >👍 Upvote: {count}</button>
      </div>
  );
};

export default Card;