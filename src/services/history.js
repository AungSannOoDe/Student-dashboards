import useAccountStore from "@/stores/useAccountStore"

export const historyApiUrl=`${process.env.NEXT_PUBLIC_API_URL}/get-history`
 export const successApiUrl=`${process.env.NEXT_PUBLIC_API_URL}/get-success`
export const  fetchHistory=(...args)=>{
    return fetch(...args,{
        method:"GET",
        headers:{
            Accept:"application/json",
            Authorization:`${useAccountStore.getState().token}`
        }
    }).then((res)=>res.json())
}
export const fetchSuccess=(...args)=>{
    return fetch(...args,{
        method:"GET",
        headers:{
            Accept:"application/json",
            Authorization:`${useAccountStore.getState().token}`
        }
    }).then((res)=>res.json())
}