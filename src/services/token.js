import useAccountStore from "@/stores/useAccountStore";

export const AdminTokenApiUrl=`${process.env.NEXT_PUBLIC_API_URL}/tokens`
 export const AdminTokenlogin=`${process.env.NEXT_PUBLIC_API_URL}/token-login`

 export const  login=(payload)=>{
  return fetch(AdminTokenlogin,{
    method:"POST",
    body:JSON.stringify(payload),
    headers:{
        "Content-Type": "application/json",
          "Accept": "application/json"
    }
  })
 }
export const fetchToken=(...args)=>{
    return fetch(...args,{
        headers:{
            Authorization: `Bearer ${useAccountStore.getState().token}`,
        }
    }).then((res)=>res.json());
}
export const destoryToken=(id)=>{
    return fetch(`${AdminTokenApiUrl}/${id}`,{
        method:"DELETE",
        headers:{
            "Content-Type": "application/json",
            Authorization: `Bearer ${useAccountStore.getState().token}`
        }
    })
}

export const updateToken=(data,id)=>{
    return fetch(`${AdminTokenApiUrl}/${id}`,{
      method:"PUT",
      body:JSON.stringify(data),
      headers:{
        "Content-Type": "application/json",
        Authorization: `Bearer ${useAccountStore.getState().token}`
      }
    })
}
export const storeToken=(data)=>{
 return fetch(`${AdminTokenApiUrl}`,{
    method:"POST",
    body:JSON.stringify(data),
    headers:{
        Accept:"application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${useAccountStore.getState().token}`
    }
 })
}