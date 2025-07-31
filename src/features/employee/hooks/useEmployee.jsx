import { useRouter, useSearchParams } from 'next/navigation'
import React, { useState } from 'react'

const useEmployee = () => {
    const searchParams=useSearchParams();
    const router=useRouter();
    const searchRef=useRef();
    const[fetchUrl,setFetchUrl]=useState("");
    const updateUrlParams=(newParams)=>{
        const updatedSearch=new URLSearchParams(newParams);
        router.push(`${updatedSearch}`);
    }
  return {

  }
}

export default useEmployee