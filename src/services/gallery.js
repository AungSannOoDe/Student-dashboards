
export const galleryApiUrl=`${process.env.NEXT_PUBLIC_API_URL}/gallery`

export const fetchGallery=(...args)=>{
    return fetch(...args,{
        method:"GET",
       headers:{
        Accept:"application/json",
        "Content-Type":"application/json"
       }
    }).then((res)=>res.json())
}
export const storeGallery=(data)=>{
    const  formData=new FormData();
    formData.append('title',data.title)
    formData.append('description',data.description)
    formData.append('images',data.images[0])
    return fetch(galleryApiUrl,{
        method:"POST",
        body:formData,
        headers:{
             Accept:"application/json"
        }
    })
}