import React from 'react'
import { useRouter } from 'next/router'

/// cache all paths 

//**problem--> we cannot access the {localhost:3000/docs} page 
// cannot match the root without parameter
//*** solution-> we have to use optional cache all routes by just changing the file name [[]].js instead of [].js*/

const Doc = () => {
  const router=useRouter()
  const {params=[]}=router.query
  console.log(params); // returns a array of all segments of nested routes
  console.log(params[0]); // accessing first segment of the root

  if (params.length==2) {
     return <h1>Hello I am second segment of root</h1>
  }
  if (params.length==3) {
   return <h1>Hello I am third segment of the root</h1>
  }
  if (params.length>3) {
    return <div>Hello I am cache all routes</div>
  }

  if (params.length==0) {
     return <h1>I am docs Page</h1>
  }

}

export default Doc
