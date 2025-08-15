export const timerapiUrl=`${process.env.NEXT_PUBLIC_API_URL}/timer`

export const getTime=(...args)=>{
    return fetch(...args,{
        headers:{
            Authorization: `Bearer ${useAccountStore.getState().token}`,
        }

    }).then((res)=>res.json())
}