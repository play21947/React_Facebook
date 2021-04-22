import './App.css';
import React, {useState} from 'react'

import Navbar from './Navbar'
import Input from './Input'
import Post from './Post'

let id = 1

function App() {

  const [posts, setPosts] = useState([]);

  let addPost=(title)=>{
    const newPost = {id:id, title:title}
    setPosts([newPost, ...posts]);
    id = id + 1
  }

  let deletePost=()=>{
    const updatedPost = posts.filter((post)=> post.id !== id);
    setPosts(updatedPost)
  }

  return (
    <div className="App">
      <Navbar/>
      <Input addPost={addPost}/>
      {posts.map((post)=> <Post key={post.id} id={post.id} title={post.title} deletePost={deletePost}/>)}
    </div>
  );
}

export default App;
