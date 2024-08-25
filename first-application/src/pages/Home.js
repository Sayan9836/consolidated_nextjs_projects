import Navbar from '@/components/Navbar'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import styles from '../styles/Home.module.css'
export const getInitialProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  // if (!data) {
  //   return{
  //     redirect:{
  //       destination:'/',
  //       permanent:false,
  //     },
  //   }
  // }

  return {
    // props: {
    //   data
    // }
    data,

  }
}


const Home = ({data}) => {
  console.log(data);
  return (
    <>
      <h1 className={styles.header}>hello</h1>
      <h2>Hello2</h2>
      <Navbar />
      <Image 
      
       src="https://images.unsplash.com/photo-1566275529824-cca6d008f3da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGhvdG98ZW58MHx8MHx8&w=1000&q=80"
       width={500}
       height={500}
       style={{marginLeft:'30%'}}
       alt="marshmello"
       priority
      />
      <style jsx>
        {`
       h2 {
        color:pink;
        text-align:center;
       } 
      `}
      </style>
      {
        data.map((item)=>(
          <h3 key={Math.random()}>{item.id}</h3>
        ))
      }
      <Head>
        <title>Home page</title>
      </Head>
      
    </>
  )
}

export default Home

Home.getInitialProps=getInitialProps;

// file based routing