export const  eventApiUrl=`${process.env.NEXT_PUBLIC_API_URL}/events`;
export const  fechEvent=(...args)=>{
    return fetch(...args,{
        headers:{
             "Content-Type":"application/json"
        }
    }).then((res)=>res.json());
}