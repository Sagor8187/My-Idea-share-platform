import { headers } from "next/headers";
import { auth } from "./auth";

export const showidea = async ()=>{
    const res = await fetch("https://idea-genarator-express-server.vercel.app/idea");
    const data = await res.json();
    return data
} 

  const {token} = await auth.api.getToken({
      headers: await headers()
    })
  export  const allcomment =async(id)=>{
    
  const mycomment = await fetch(`https://idea-genarator-express-server.vercel.app/comment/${id}`,{
       headers:{
            authorization :`Bearer ${token}`
          }
    })
    const output =await mycomment.json()
    return output
    }
  