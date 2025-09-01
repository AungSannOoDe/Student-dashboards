import useAccountStore from "@/stores/useAccountStore";
export  const electorApiUrl=`${process.env.NEXT_PUBLIC_API_URL}/get-elector`
export const electorUrl=`${process.env.NEXT_PUBLIC_API_URL}/electors`
export  const ablumsApiUrl=`${process.env.NEXT_PUBLIC_API_URL}/ablums`
export const detailsUrl=`${process.env.NEXT_PUBLIC_API_URL}/electors`
export const electorMaleUrl=`${process.env.NEXT_PUBLIC_API_URL}/get-male`
export const electorFemaleUrl=`${process.env.NEXT_PUBLIC_API_URL}/get-female`
export const electorDeailsApiUrl=`${process.env.NEXT_PUBLIC_API_URL}/get-details`
export const electorChampionApiUrl=`${process.env.NEXT_PUBLIC_API_URL}/champions`
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
export const  updateDeplicate=(payload)=>{
    return 
}
export const fetchchampion=(...args)=>{
    return fetch(...args,{
        method:"GET",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
              Authorization: `Bearer ${useAccountStore.getState().token}`,
        }
    }).then(res=>res.json())
}
 export const fetchElectorEdit=(...args)=>{
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
return fetch(`${electorUrl}/${id}`,{
    method:"DELETE",
    headers:{
        "Content-Type":"application/json",
     Authorization: `Bearer ${useAccountStore.getState().token}`
    }
})
}
export const storeElector=(data)=>{
    return fetch(electorUrl,{
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
    return fetch(`${electorUrl}/${id}`,{
        method:"PUT",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${useAccountStore.getState().token}`,
        },
        body: JSON.stringify(data)
    })
}