import { useRouter } from 'next/router'
import React from 'react'

import { getSession } from 'next-auth/react'

// export const getStaticPaths = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//   const data = await res.json();

//   const paths=data.slice(0,10).map((ele)=>({
   
//     params:{
//       pageNo:ele.id.toString()
//     }
//   }))

//   return {
//     paths, // pre-render 10 pages at the build time ,rest of the pages are pre-render on request(background)
//     // fallback: true
//     fallback:false
//   }
// }
                        
 
// export const getStaticProps = async ({params}) => {
//   const id = params.pageNo;
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
//   let data = await res.json();
   
//   // if (!data.id) {
//   //   return {
//   //     notFound:true
//   //   }
//   // }
//   return {
//     props: {
//       data
//     }
//   }
// }

// use swr for client side data fetching

export const getServerSideProps=async(context)=>{
  const session=await getSession(context);
  const {params,req,res,query}=context
  const {id}=params
  res.setHeader('set-cookie',['name=SAYAN'])
  console.log(req.headers.cookie);
  console.log(query);
  const responce=await fetch(
    `https://jsonplaceholder.typicode.com/posts${id}`
  )
  const data=await responce.json();
  //  console.log(data);
  return {
    props:{
      data:session?data:''
    }
  }
}

const pageNo = ({ data }) => {
  const router=useRouter();
  if (router.isFallback) {
    return <h1>...loading</h1>
  }
  // const pageNumber=router.query.pageNo
const {body,id,title,userId}=data;
  console.log(data);
  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}

export default pageNo;


// dynamic routing
