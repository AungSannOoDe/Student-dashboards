import useAccountStore from "@/stores/useAccountStore";
import { voterApiUrl } from "./voters";
export const profileApiUrl = `${process.env.NEXT_PUBLIC_API_URL}/user-profile`;
export const clientprofileApiUrl = `${process.env.NEXT_PUBLIC_API_URL}/voter-profile`;
export const checkProfile = async (updateToken) => {
  return fetch(`${profileApiUrl}/profile`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${updateToken}`,
    },
  });
};
export const checkClientProfile = async (updateToken) => {
  return fetch(`${clientprofileApiUrl}/profile`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${updateToken}`,
    },
  });
}
export const ClientChangeName=(data)=>{
   return fetch(clientprofileApiUrl + `/change-name`, {
    method: "PATCH",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${useAccountStore.getState().token}`,
    },
  });
}
export const ClientChangePassword=(data)=>{
   return fetch(clientprofileApiUrl + `/change-password`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${useAccountStore.getState().token}`,
    },
  });
}
export const ClientChangeImage = (file) => {
  const formData = new FormData();
  formData.append("image", file); 
  return fetch(
    clientprofileApiUrl + "/change-profile-image",
    {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${useAccountStore.getState().token}`, 
      },
    }
  );
}
export const changeName = (data) => {
  return fetch(profileApiUrl + `/change-name`, {
    method: "PATCH",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${useAccountStore.getState().token}`,
    },
  });
};

export const changePassword = (data) => {
  return fetch(profileApiUrl + `/change-password`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${useAccountStore.getState().token}`,
    },
  });
};


export const changeImage = (file) => {
  const formData = new FormData();
  formData.append("image", file); 
  return fetch(
    profileApiUrl + "/change-profile-image",
    {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${useAccountStore.getState().token}`, 
      },
    }
  );
};