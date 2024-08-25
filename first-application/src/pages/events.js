import { useRouter } from 'next/router'
import React, { useState } from 'react'

export const getServerSideProps=async(context)=>{
    const {query}=context
    const {category}=query
    const queryString=category?'category=sports':''
   const responce=await fetch(`http://localhost:4000/events?${queryString}`)
   const data=await responce.json()

   return {
    props:{
        eventList:data
    }
   }
}

const events = ({eventList}) => {
    const [events,setEvents]=useState(eventList)
    const router=useRouter();
    const fetchSportsEvents=async()=>{
        const responce=await fetch('http://localhost:4000/events?category=sports')
        const data=await responce.json()
        setEvents(data);
        router.push('/events?category=sports',undefined,{shallow:true})     
    }
  return (
    <div>
        <button onClick={fetchSportsEvents}>Sports Events</button>                   
      {events?.map(event => {
        return (
          <div key={event.id}>
            <h2>
              {event.id} {event.title} {event.date} | {event.category}
            </h2>
            <p>{event.description}</p>
            <hr />
          </div>
        )
      })
    }
    </div>
  )
}

export default events
