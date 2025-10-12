import useAccountStore from "@/stores/useAccountStore"

export const  reviewApiUrl=`${process.env.NEXT_PUBLIC_API_URL}/review`

export const storeReview=(payload)=>{
    return fetch(`${reviewApiUrl}`,{
        method:"POST",
        body:JSON.stringify(payload),
        headers:{
            Accept:"application/json",
            "Content-Type": "application/json",
           Authorization: `Bearer ${useAccountStore.getState().token}`
        }
    })
}
export const  fetchReview=(...args)=>{
    return fetch(...args,{
        method:"GET",
        headers:{
            Accept:"application/json",
            "Content-Type": "application/json",
           Authorization: `Bearer ${useAccountStore.getState().token}`
        }
    }).then(res=>res.json())
}