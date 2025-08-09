import useAccountStore from "@/stores/useAccountStore"

export const historyApiUrl=`${process.env.NEXT_PUBLIC_API_URL}/get-history`

export const  fetchHistory=(...args)=>{
    return fetch(...args,{
        method:"GET",
        headers:{
            Accept:"application/json",
            Authorization:`${useAccountStore.getState().token}`
        }
    }).then((res)=>res.json())
}