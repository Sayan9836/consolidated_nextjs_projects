import { getSession,signIn } from 'next-auth/react'
import React, { useEffect, useState } from 'react'

const contact = () => {

  const [name,setName]=useState()
  
  const securePage=async()=>{
   const session=await getSession()

    if (!session) {
      signIn()
    }
    setName(session.user.name)
  }
  useEffect(()=>{

    securePage();
   
  },[])
  return (
    <div>
      {name}<br/><br/>
      Hii I am contact
    </div>
  )
}

export default contact
