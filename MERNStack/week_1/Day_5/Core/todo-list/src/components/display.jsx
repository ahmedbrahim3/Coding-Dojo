import React from 'react'

const Display = ({posts,deletePost}) => {
  return (
    <div>
    <ul>
    {posts.map((e,index)=>{
        return(
            <li key={index}>
            <h3>
            {e.title}
            </h3>
            <p>{e.body}</p>
            <button type="button" class="btn btn-danger" onClick={()=> deletePost(index)}>Danger</button>
            
            </li>
            
        )
        
    })}
    </ul>
    </div>
  )
}

export default Display
