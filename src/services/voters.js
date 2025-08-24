import useAccountStore from "@/stores/useAccountStore";

export const  voterApiUrl=`${process.env.NEXT_PUBLIC_API_URL}/voter-profile`;
export const checkProfile = async (updateToken) => {
    return fetch(`${voterApiUrl}/profile`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${updateToken}`,
      },
    });
  };
  
  export const updateMale=(data)=>{
    return fetch(`${voterApiUrl}/change-male`,{
      method:"PATCH",
      body:JSON.stringify(data),
      headers:{
         "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${useAccountStore.getState().token}`,
      }
    })
  }