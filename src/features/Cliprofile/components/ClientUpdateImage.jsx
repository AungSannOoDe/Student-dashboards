
import { Camera } from 'lucide-react'
import React from 'react'
import useClientProfileChange from '../hooks/useClientProfileChange'


const ClientUpdateImage = () => {
const{handleChangeImage}=useClientProfileChange()
  return (
<>
  <label
    htmlFor="update-profile-image"
    className=" absolute  right-0 bottom-0 size-8 flex justify-center items-center rounded-full bg-blue-600 text-white hover:bg-blue-400"
  >
    <Camera size={16} />
  </label>
  <input
    type="file"
    id="update-profile-image"
    className=" hidden"
    onChange={handleChangeImage}
  />
</>
  )
}

export default ClientUpdateImage