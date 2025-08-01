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
import { BookMarked } from "lucide-react";
gsap.registerPlugin(ScrollTrigger);
const StudentHeader = () => {
  const headerRef = useRef(null);
  const[hover,setIsHover]=useState(false)
  const{account,token}=useAccountStore()
  useEffect(() => {
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
    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
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
      <img src="../images/Culogo-removebg-preview.png"  ref={headerRef} className="h-25"  />
    </div>
    <ul className="flex justify-center   gap-4">
      <li>
        <Link href={`/`}>Home</Link>
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
         <motion.li onHoverStart={() => {
          handletoggle()}} onHoverEnd={handletoggle} className="group/link translate-y-2 
         ">
          <div className="">
            <BookMarked className="size-7 " />
          </div>
           <motion.div 
            initial="exist"
            animate={hover ? "enter":"exist"}
            variants={subMenuAnimate}
           className="absolute w-[300px]   cursor-pointer right-1 translate-x-20 backdrop-blur-sm bg-white rounded-sm origin-[50%,-170px] space-y-4
             top-[3.2rem] p-[15px] ">
              <div>
                  <div className=" relative cursor-pointer ">
                    <div className="text-sm   group-hover/menu:bg-white  flex  gap-4  ">
                       <p className="self-center">7</p>
                       <div className="w-10 h-10 self-top  rounded-full bg-amber-100"></div>
                      <p className="text-nowrap self-center">Aung Sann Oo</p>
                      <p className="self-center">Male</p>
                     </div>
                  </div>
                 
                
              </div>
           
           </motion.div>
         </motion.li>
        
         <li className='w-13 h-13  rounded-ful'>
         <DropdownMenu>
         {
              account.map((acc,index)=>(
              acc.profile_image===null ? (
                <DropdownMenuTrigger  key={index} className="-mt-1"><img src={`/images/user.png`} alt=""  className="object-cover w-[100%] " /></DropdownMenuTrigger>
                ) :(
                <img src={`/images/user.png`} alt="" className="object-cover w-[100%] " />
              )))
            }
            <DropdownMenuContent>
              <DropdownMenuLabel className={`flex flex-col space-y-4`}>
                <p className='text-lg'>Aung Sann Oo</p>
                <p className='text-xs'>aungsannoo962@gmail.com</p>
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