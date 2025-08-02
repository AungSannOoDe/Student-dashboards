import useAccountStore from "@/stores/useAccountStore";

export  const voterApiUrl=`${process.env.NEXT_PUBLIC_API_URL}/voters`
export const fetchVoters=(...args)=>{
    return  fetch(...args,{
        headers:{
            "Content-Type":"application/json",
            Authorization: `Bearer ${useAccountStore.getState().token}`,
        }
    }).then((res)=>res.json());
}
export const loginVoters=(data)=>{
    return fetch(`${process.env.NEXT_PUBLIC_API_URL}/voter-login`,{
        method:"POST",
        body:JSON.stringify(data),
        headers:{
            "Content-Type": "application/json"
        }
    })
}
export const storeVoters=(data)=>{
    console.log(data);
    return fetch(`${process.env.NEXT_PUBLIC_API_URL}/voter-reg`,{
        method:"POST",
        body:JSON.stringify(data),
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json",
        }
    })
}
export const destoryVoters=(id)=>{
    return fetch(`${voterApiUrl}/${id}`,{
        method:"DELETE",
        headers:{
            "Content-Type": "application/json",
            Authorization: `Bearer ${useAccountStore.getState().token}`
        }
    })
}