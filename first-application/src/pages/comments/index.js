import React, { useState } from 'react'

const CommentPage = () => {

  const [comments,setComments]=useState([]);
  const [comment,setComment]=useState('');

    const fetchComments=async()=>{
        const responce=await fetch('/api/comments')
        const data=await responce.json();
        setComments(data);
        // console.log(data);
        console.log(comments);
    }

    const HandleSubmit=async()=>{
      const payload={
        method:'POST',
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({comment:comment})
      }
      const responce=await fetch('/api/comments',payload)
      const data=await responce.json();
    }

    const deleteComment=async(commentId)=>{
      const responce=await fetch(`/api/comments/${commentId}`,{
        method:'DELETE'
        
      })
      const data=await responce.json()
      // console.log(data);
      fetchComments();
    }
  return (
    <div>
      <input type="text" value={comment} onChange={(e)=>setComment(e.target.value)}/>
      <button style={{marginLeft:'1rem'}} onClick={HandleSubmit}>Submit comment</button>
      <button style={{marginLeft:'1rem'}} onClick={fetchComments}>Load Comments</button>
      {
        comments?.map((com)=>{
           return <div style={{color:'white'}} key={com.id}>
           {com.id}{"  "}{com.text}
           <button style={{margin:'1rem 0 1rem 1rem'}}  onClick={()=>deleteComment(com.id)}>Delete Comment</button>
            </div>
        })
      }
    </div>
  )
}

export default CommentPage
