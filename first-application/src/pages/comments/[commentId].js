import React from 'react'
import { comments } from '../../../data/comments'


export const getStaticPaths=()=>{
  return {
    paths:[
        {params:{CommentId:'1'}},
        {params:{CommentId:'2'}},
        {params:{CommentId:'3'}},
    ],
    fallback:false,
  }
}

export const getStaticProps=({params})=>{
 const {CommentId}=params

 const comment=comments.find((comment)=>comment.id===CommentId);

 return {
    props: {
        comment,
    }
 }

}

const Comment = ({comment}) => {
  return (
    <div>
      <h1>{comment}</h1>
    </div>
  )
}

export default Comment
