import useAccountStore from "@/stores/useAccountStore"

export const  voteapiUrl=`${process.env.NEXT_PUBLIC_API_URL}/votes`

export const  fetchvote=(...args)=>{
 return  fetch(...args,{
  method:"GET",
    headers:{
        "Content-Type": "application/json",
          "Accept": "application/json",
         Authorization: `Bearer ${useAccountStore.getState().token}`
    }
 }).then((res)=>res.json())
}
export const storevote=(payload)=>{
    return fetch(`${voteapiUrl}`,{
        method:"POST",
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json",
           Authorization: `Bearer ${useAccountStore.getState().token}`
        },
        body:JSON.stringify(payload)
    })
}

