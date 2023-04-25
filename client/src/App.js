import './App.css';
import React, { useEffect, useState } from 'react';
import { useRoutes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { supabase } from './client.js'
import ReadPosts from './pages/ReadPosts'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'
import DetailView from './pages/DetailView'



const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, [])

  const fetchPosts = async () => {
    const {data} = await supabase
    .from('hub')
    .select()
    .order('created_at', { ascending: true })
    // set state of posts
    setPosts(data);
  }

  // Sets up routes
  let element = useRoutes([
    {
      path: "/",
      element:<ReadPosts data={posts}/>
    },
    {
      path:"/details/:id/edit/:id",
      element: <EditPost data={posts} />
    },
    {
      path:"/new",
      element: <CreatePost />
    },
    {
      path:"/details/:id",
      element: <DetailView data={posts}/>
    }
  ]);

  return ( 

    <div className="App">

      <div className="header">
        <h1>TTRPG Hub</h1>
        <Link to="/"><button className="headerBtn"> Home </button></Link>
        <Link to="/new"><button className="headerBtn"> Post </button></Link>
      </div>
        {element}
    </div>

  );
}

export default App;
