


import React from 'react'
import { useSWR } from 'swr'

const fetcher = async () => {
    const result = await fetch('http://localhost:4000/dashboad')
    const data = await data.json()
    return result;
}


const dashboard = () => {
    const { data, error } = useSWR('dashboard', fetcher)

    if (error) return 'An error occured'
    if (!data) return '..loading'
        
      return  <div>
            <h2>{data.name}</h2>
        </div>
    


}

export default dashboard
