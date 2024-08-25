import Navbar from '@/components/Navbar'
import Link from 'next/link';
import React from 'react'
import style from '../../styles/blog.module.css'
import { getSession } from 'next-auth/react';

// export const getStaticProps = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   // const res = await fetch('http://localhost:4000/products');

//   const data = await res.json();

//   return {
//     props: {
//       data
//     },
//     revalidate: 10, // page will regenerate on request after 10sec with updated result 
//   }
// }

export const getServerSideProps = async (context) => {
  let session = await getSession(context);
  console.log(session);
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  if (!session) {
    return {
      redirect:{
        destination:`http://localhost:3000/api/auth/signin?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2Fblog`,
        permanent:false,
      }
    }
  }

  return {
    props: {
      data: session ? data : []
    },
  }
}


const index = ({ data }) => {
  return (
    <div>
      <Navbar />
      {

        
          data?.map((ele) => {
            return <Link key={ele.id} href={`/blog/${ele.id}`}><div className={style.element}>
              <h1>{ele.title}</h1>
            </div></Link>
          })

        // data.map((ele)=>(
        //   <>
        //   <h1>{ele.title}</h1>
        //   <h1>{ele.price}</h1>
        //   </>
        // ))
      }

    </div>
  )
}

export default index


// cannot update the staticly generated page ,we have to rebuild the application
