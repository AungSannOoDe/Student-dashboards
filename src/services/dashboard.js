import useAccountStore from "@/stores/useAccountStore"

export const dashboardapiUrl=`${process.env.NEXT_PUBLIC_API_URL}/dashboard-stream`
export  const getDashboard=()=>{
 return fetch(`${dashboardapiUrl}`,{
    method:"GET",
    headers:{
        "Accept":"text/event-stream",
        Authorization: `Bearer ${useAccountStore.getState().token}`,
    },
    signal: controller.signal
 })
}

