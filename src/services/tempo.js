import useAccountStore from "@/stores/useAccountStore"

export const  tempoApiUrl=`${process.env.NEXT_PUBLIC_API_URL}/temp`

export  const storetemp=(paylooad)=>{
    return fetch(`${tempoApiUrl}`,{
        method:"POST",
        body:JSON.stringify(paylooad),
        headers:{
              Accept:"application/json",
             "Content-Type": "application/json",
            Authorization: `Bearer ${useAccountStore.getState().token}`
        }
    })
}
export const fetchtemp=(...args)=>{
 return  fetch(...args,{
    headers:{
        "Content-Type":"application/json",
        Authorization: `Bearer ${useAccountStore.getState().token}`,
    }
 }).then((res)=>res.json())
}