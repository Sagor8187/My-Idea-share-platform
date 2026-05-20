

export const showidea = async ()=>{
    const res = await fetch(`${process.env.MY_PUBLIC_NEXT_URL}/idea`);
    const data = await res.json();
    return data
} 

 
  