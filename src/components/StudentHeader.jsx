"use client";
import { motion } from "motion/react"
import Link from 'next/link'
import React ,{ useRef, useEffect,useState }from 'react'
import LoginButton from './LoginButton'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import useAccountStore from '@/stores/useAccountStore'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BookMarked, Crown, X } from "lucide-react";
import useSWR, { useSWRConfig } from "swr";
import { destorytemp, fetchtemp, tempoApiUrl } from "@/services/tempo";
import { useTempStore } from "@/stores/usetemp";
import { toast } from "sonner";
gsap.registerPlugin(ScrollTrigger);
const StudentHeader = () => {
  const headerRef = useRef(null);
  const[hover,setIsHover]=useState(false);
  const { refreshTrigger } = useTempStore();
  const{account,token,logout,setVoteMale,setVoteFemale}=useAccountStore();
  const{mutate}=useSWRConfig()
const{data,isLoading,error}=useSWR(`${tempoApiUrl}/${account.id}`,fetchtemp,{
  revalidateOnFocus: true,
  refreshWhenHidden: true,
})
const handleDelete=async(id)=>{
  try{
   const res=await destorytemp(id)
   const json=await res.json()
   if(!res.ok){
    throw new Error(json.message||"Undefined Error")
   }
  }catch(error){
     toast.error(error.message)
  }
}
  useEffect(() => {
    account.vote_male==1 ? setVoteMale(1) : setVoteMale(0)
    account.vote_female==1 ? setVoteFemale(1) : setVoteFemale(0)
    if (!headerRef.current) return;
    gsap.to(headerRef.current, {
      height: 60, 
      duration: 0.3,
      ease: "power2.out",
      scrollTrigger: {
        trigger:"body", 
        start: "top top", 
        end: "+=100", 
        scrub: true, 
      },
    });
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  useEffect(() => {
    mutate(`${tempoApiUrl}/${account.id}`);
  }, [refreshTrigger]);
  const handletoggle=()=>{
    setIsHover(!hover)
  }
  const handlelogout=()=>{
     logout()
   }
  const subMenuAnimate={
    enter:{
      opacity:1,
      rotateX:0,
      transition:{
        duration:0.5
      },
      display:"block"
    },
    exist:{
      opacity:0,
      rotateX:-15,
      transition:{
        duration:0.5
      },
       transitionEnd: {
        display: "none",
      },
    }
  }
  return (
<nav className=" w-full  bg-slate-50     z-30 sticky top-0 ">
  <div className="max-w-7xl text-xl  text-stone-500 mx-auto items-center py-5 font-bold flex justify-between px-6">
    <div className="">
      <img src="/images/Culogo-removebg-preview.png"  ref={headerRef} className="h-25"  />
    </div>
    <ul className="flex justify-center   gap-4">
      <li>
        <Link href={`/clients/home`}>Home</Link>
      </li>
      <li>
        <Link href={`/clients/gallery`}>Gallery</Link>
      </li>
      <li>
        <Link href={`/clients/votes`}>votes</Link>
      </li>
      {
          token &&  (
            <>
               <li>
                  <Link href={`/clients/cards`}>Selection</Link>
                </li>
                <li>
                <Link href={`/clients/history`}>History</Link>
              </li>
            </>
          )
        }
      </ul>
    {
      token ? ( 
      <ul className="flex justify-center gap-3">
         <li className="self-center -mt-1">
         <Link href={`/clients/success`}>
        <Crown  className="text-amber-400" />
        </Link>
        </li>
         <motion.li onHoverStart={() => {
          handletoggle()}} onHoverEnd={handletoggle} className="group/link translate-y-2 
         ">
          <div  onClick={(e) => e.stopPropagation()} className="  relative">
             <Link href={`/clients/tempo`}>
             <BookMarked className="size-7 " />
             </Link>
          </div>
           <motion.div 
            initial="exist"
            animate={hover ? "enter":"exist"}
            variants={subMenuAnimate}
           className="absolute w-[400px]   cursor-pointer right-1 translate-x-20 backdrop-blur-sm bg-white rounded-sm origin-[50%,-170px] space-y-4
             top-[3.2rem] p-[15px] ">
             {isLoading ? (
              <div className="text-center py-2">Loading...</div>
            ) : error ? (
              <div className="text-center py-2 text-red-500">Error loading data</div>
            ) : data?.data?.length > 0 ? (
              data.data.map((temp) => (
                <div key={temp.id} className="hover:bg-gray-50 p-2 rounded">
                  <div className="text-sm flex gap-3 justify-between">
                    <p className="self-center">{temp.id}</p>
                    <div className="w-8 h-8 self-top rounded-full bg-amber-100"></div>
                    <p className="text-nowrap self-center text-xs">{temp.elector?.elector_name || 'Unknown'}</p>
                    <p className="self-center text-xs">{temp.elector?.gender}</p>
                 <button  onClick={() => handleDelete(temp.id)}><X className="size-5 text-red-500  cursor-pointer "/></button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center py-2">No data available</p>
            )}
           </motion.div>
         </motion.li>
         <li className='w-13 h-13  rounded-ful'>
         <DropdownMenu>
         {
                account.profile_image===null ? (
                <DropdownMenuTrigger   className="-mt-1"><img src={`/images/user.png`} alt=""  className="object-cover w-[100%] " /></DropdownMenuTrigger>
                ) :(
                  <DropdownMenuTrigger   className="-mt-1"><img src={`/images/user.png`} alt=""  className="object-cover w-[100%] " /></DropdownMenuTrigger>
              )
            }
            <DropdownMenuContent>
              <DropdownMenuLabel className={`flex flex-col space-y-4`}>
                <p className='text-lg'>{account.voter_name}</p>
                <p className='text-xs'>{account.voter_email}</p>
                <button  className=' bg-blue-500 text-white px-3 py-1 rounded-md' onClick={handlelogout}>logout</button>
                </DropdownMenuLabel>
            </DropdownMenuContent>
          </DropdownMenu>
        </li>
      </ul>
      )  :(
        <ul className="flex justify-center gap-3">
        <li className='self-center'>
        <Link   href={'/clients/login'} className='underline cursor-pointer pointer-events-auto '>
        Login</Link>
        </li>
        <li>
        <LoginButton/>
        </li>
      </ul>
      )
    }
     
  </div>
</nav>
  )
}

export default StudentHeader