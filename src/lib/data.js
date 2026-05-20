

export const showidea = async ()=>{
    const res = await fetch("https://idea-genarator-express-server.vercel.app/idea");
    const data = await res.json();
    return data
} 

 
  