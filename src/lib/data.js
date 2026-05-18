export const showidea = async ()=>{
    const res = await fetch("http://localhost:5000/idea");
    const data = await res.json();
    return data
} 