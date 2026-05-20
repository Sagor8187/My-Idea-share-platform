import { headers } from "next/headers";
import { auth } from "./auth";

export const showidea = async ()=>{
    const res = await fetch("http://localhost:5000/idea");
    const data = await res.json();
    return data
} 

  const {token} = await auth.api.getToken({
      headers: await headers()
    })
  export  const allcomment =async(id)=>{
    
  const mycomment = await fetch(`http://localhost:5000/comment/${id}`,{
       headers:{
            authorization :`Bearer ${token}`
          }
    })
    const output =await mycomment.json()
    return output
    }
  