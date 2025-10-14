import useAccountStore from "@/stores/useAccountStore";
export const yearApiUrl = `${process.env.NEXT_PUBLIC_API_URL}/years`;
export const subjectApiUrl=`${process.env.NEXT_PUBLIC_API_URL}/subjects`;
export const  yearsubjectApiUrl=`${process.env.NEXT_PUBLIC_API_URL}/year-subjects`
export const storeyear=(payload)=>{
    return fetch(`${yearApiUrl}`, {
        method: "POST",
        body:JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: useAccountStore.getState().token,
        },
      });
}

export const  fetchyear=(...args)=>{
  return  fetch(...args,{
    method:"GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: useAccountStore.getState().token,
    },
  }).then(res=>res.json())
}
export const fetchsubject=(...args)=>{
  return   fetch(...args,{
    method:"GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: useAccountStore.getState().token,
    },
  }).then(res=>res.json())
}
export const   storesubject=(formData)=>{
  const submitData=new FormData()
  submitData.append('sub_name', formData.sub_name);
  submitData.append('description', formData.description);
  submitData.append('year_id', formData.year_id);
  submitData.append('images', formData.images[0]); 
  return  fetch(`${subjectApiUrl}`,{
    method:"POST",
    body:submitData,
    headers: {
      Accept: "application/json",
      Authorization: useAccountStore.getState().token,
    },
  })
}
export const updateSubject=(formData,id)=>{
  const submitData=new FormData()
  submitData.append('_method', 'PUT'); 
  submitData.append('id', id); 
  submitData.append('sub_name', formData.sub_name);
  submitData.append('description', formData.description);
  submitData.append('year_id', formData.year_id);
  if (formData.images && formData.images[0]) {
    submitData.append('images', formData.images[0]);
  }
  return  fetch(`${subjectApiUrl}/${id}`,{
    method:"POST",
    body:submitData,
    headers: {
      Accept: "application/json",
      Authorization: useAccountStore.getState().token,
    },
  })
}