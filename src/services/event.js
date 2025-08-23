import useAccountStore from "@/stores/useAccountStore";

export const  eventApiUrl=`${process.env.NEXT_PUBLIC_API_URL}/events`;
export const  fechEvent=(...args)=>{
    return fetch(...args,{
        headers:{
             "Content-Type":"application/json"
        }
    }).then((res)=>res.json());
}

export  const updateEvent=(payload,id)=>{
  return fetch(`${eventApiUrl}/${id}`,{
    method:"PUT",
    body:JSON.stringify(payload),
    headers:{
         "Content-Type":"application/json",
         Authorization:`${useAccountStore.getState().token}`,
         "Accept":"application/json"
    }
  })
}
export const destoryEvent=(id)=>{
  return fetch(`${eventApiUrl}/${id}`,{
    method:"DELETE",
    headers:{
      "Content-Type":"application/json",
      Authorization:`${useAccountStore.getState().token}`,
      "Accept":"application/json"
 }
  })
}
export const storeEvent=(payload)=>{
  return fetch(eventApiUrl,{
    method:"POST",
    body:JSON.stringify(payload),
    headers:{
         "Content-Type":"application/json",
         Authorization:`${useAccountStore.getState().token}`,
         "Accept":"application/json"
    }
  })
}