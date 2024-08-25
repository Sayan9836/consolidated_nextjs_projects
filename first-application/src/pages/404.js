import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const ErrorPage = () => {
    const router=useRouter();

    useEffect(()=>{
        // setTimeout(()=>{
        //     router.push('/Home')
        // },5000)
        // router.push('/Home')
    },[])
  return (
    <>
    <div>
        <h1> 404 Page not found</h1>

       {/* <Link href="/Home" legacyBehavior><a >Back to Home</a></Link>  */}
    <button onClick={()=>router.push("/Home")}>Back to Home</button> 

    </div>
    </>
  )
}

export default ErrorPage
