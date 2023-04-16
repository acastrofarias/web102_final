import React from 'react'
import { useState } from 'react'
import './Card.css'
import more from './more.png'
import { Link } from 'react-router-dom'


const Preview = (props) =>  {

  return (
      <div className="Card">
          <p>Created: x days ago</p>
          <Link to={'post/'+ props.id}><h2 className="title">{props.title}</h2></Link>
          <br></br>
          <button className="betButton" onClick={updateCount} >👍 Upvote: {count}</button>
      </div>
  );
};

export default Card;