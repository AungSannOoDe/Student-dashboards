import useAccountStore from "@/stores/useAccountStore";
export  const electorApiUrl=`${process.env.NEXT_PUBLIC_API_URL}/electors`

export const  fetchElectors=(...args)=>{
    return fetch(...args,{
        method:"GET",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
              Authorization: `Bearer ${useAccountStore.getState().token}`,
        }
    }).then(res=>res.json())
}

export const destoryElectors=(id)=>{
return fetch(`${electorApiUrl}/${id}`,{
    method:"DELETE",
    headers:{
        "Content-Type":"application/json",
     Authorization: `Bearer ${useAccountStore.getState().token}`
    }
})
}
export const storeElector=(data)=>{
    return fetch(electorApiUrl,{
        method:"POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${useAccountStore.getState().token}`,
        },
        body: JSON.stringify(data)
    })
}
export const updateElector=(id,data)=>{
    return fetch(`${electorApiUrl}/${id}`,{
        method:"PUT",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${useAccountStore.getState().token}`,
        },
        body: JSON.stringify(data)
    })
}