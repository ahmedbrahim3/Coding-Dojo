import Display from './components/display';
import Add from './components/add';
import { useState } from "react";
import './App.css';

function App() {
  const postsList = [
    {
      title: "Neural Interface",
      body: "Use the open-source TCP circuit, then you can program the open-source array!",
      read: true,
    },
    {
      title: "Cross-Platform Capacitor",
      body: "We need to back up the open-source FTP application!",
      read: false,
    },
    {
      title: "Haptic Panel",
      body: "You can't transmit the pixel without copying the online OCR capacitor!",
      read: false,
    },]
  const [posts, setPost] = useState(postsList);


  const deletePost=(id)=>{
    const updated=posts.filter((one,i)=>{
      return i!==id

    })
    setPost(updated)
  }
  const readPost = (postId) => {
   
    const copyPosts = [...posts];
    
    copyPosts[postId].read = !copyPosts[postId].read;
    setPost(copyPosts);
  };
  return (
    <div className="App">
    <Add posts={posts} set={setPost}/>
    <Display  posts={posts} deletePost={deletePost} read={readPost}/>
    
    </div>
  );
}

export default App;
