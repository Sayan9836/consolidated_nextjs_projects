// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getSession } from "next-auth/react"
export default async(req, res)=>{
  const session=await getSession({req})
  if(!session){
  res.status(401).json({error:'Unauthenticated User'})
  }else{
    res.status(200).json({message:'Success'})
  }
}
