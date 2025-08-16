import useAccountStore from "@/stores/useAccountStore"

export const timerapiUrl=`${process.env.NEXT_PUBLIC_API_URL}/timer`
 
export const fetchTime=(...args)=>{
    return fetch(...args,{
        method:"GET",
        headers:{
            "Content-Type": "application/json",
              "Accept": "application/json",
        }
    }).then((res)=>res.json())
}
export  const storeTime=(data)=>{
  return fetch(`${timerapiUrl}/set`,{
    headers:"POST",
    body:JSON.stringify(data),
    headers:{
        Authorization: `Bearer ${useAccountStore.getState().token}`,
        "Content-Type":"application/json",
        "Accept":"application/json"
    }
  })
}
export const updateTime=(data,id)=>{
    return fetch(`${timerapiUrl}/${id}`,{
        method:"PUT",
        body:JSON.stringify(data),
        headers:{
          "Content-Type": "application/json",
          Authorization: `Bearer ${useAccountStore.getState().token}`
        }
      })
}