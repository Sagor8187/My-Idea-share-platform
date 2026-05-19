"use client"
import { Button } from "@heroui/react";
export default function DeletePost({id}) {
    const deletepost =async ()=>{

const res = await fetch(`http://localhost:5000/comment/${id}`,{
    method:"DELETE"
})
const output =await res.json()
console.log(output)
    }
    
  return (
    <div>
        <Button variant="danger-soft" onClick={deletepost} >Delete</Button>
    </div>
  )
}
