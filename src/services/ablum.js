import useAccountStore from "@/stores/useAccountStore"

export const ablumApiUrl=`${process.env.NEXT_PUBLIC_API_URL}/ablums`
export  const storeAblum=(data,id)=>{
    const formData = new FormData()
    formData.append('elector_id',id)
    formData.append('image_1', data.photo1[0])
    formData.append('image_2', data.photo2[0])
    formData.append('image_3', data.photo3[0])
    formData.append('image_4', data.photo4[0])
  return  fetch(ablumApiUrl,{
    method:"POST",
    body:formData,
    headers:{
        "Accept": "application/json",
        Authorization: `Bearer ${useAccountStore.getState().token}`,
    }
  })
}
export const  fetchablum=(id)=>{
  return fetch(`${ablumApiUrl}/${id}`,{
     method:"GET",
    headers:{
      "Accept":"application/json",
      Authorization: `Bearer ${useAccountStore.getState().token}`,
      "Content-Type":"application/json"
    }
  }).then(res=>res.json())
}
export const updateAlbum = (data, electorId) => {
    const formData = new FormData();
    formData.append('elector_id', electorId);
    if (data.photo1?.[0]) formData.append('image_1', data.photo1[0]);
    if (data.photo2?.[0]) formData.append('image_2', data.photo2[0]);
    if (data.photo3?.[0]) formData.append('image_3', data.photo3[0]);
    if (data.photo4?.[0]) formData.append('image_4', data.photo4[0]);
    return fetch(`${ablumApiUrl}/update`, {
      method: "POST", 
      body: formData,
      headers: {
        "Accept": "application/json",
        "Authorization": `Bearer ${useAccountStore.getState().token}`
      }
    });
  };
  export function  destory(id){
    return fetch(`${ablumApiUrl}/${id}`,{
      method:"DELETE",
      headers: {
        "Accept": "application/json",
        "Authorization": `Bearer ${useAccountStore.getState().token}`
      }
    })
  }