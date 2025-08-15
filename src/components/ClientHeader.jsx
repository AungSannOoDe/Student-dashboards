"use client";
import React, { useRef, useEffect,useState } from "react";
import { BookMarked, Crown } from 'lucide-react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from 'next/link'
import { motion } from "motion/react"
import LoginButton from './LoginButton'
import useAccountStore from '@/stores/useAccountStore'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
gsap.registerPlugin(ScrollTrigger);
const ClientHeader = () => {
  const[hover,setIsHover]=useState(false)
  const headerRef = useRef(null);
  const{account,token,logout,setVoteMale,setVoteFemale}=useAccountStore()
  console.log(account);
  const handletoggle=()=>{
    setIsHover(!hover)
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
      display:"none"
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
  // Cleanup
  return () => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  };

}, [ account.vote_male,account.vote_female]);
 const handlelogout=()=>{
   logout()
 }
  return (
<header   className="fixed bg-stone-50/10 backdrop-blur-sm  w-full z-10 ">
    <nav className="">
      <div className="max-w-7xl mx-auto text-xl  text-slate-500  items-center py-5 font-bold flex justify-between px-6">
        <div className="">
          <img src="../images/Culogo-removebg-preview.png" ref={headerRef} className="h-25"  />
        </div>
        <ul className="flex justify-center   gap-4">
          <li>
            <Link href={`/`}>Home</Link>
          </li>
          <li>
            <Link href={`/clients/gallery`}>Gallery</Link>
          </li>
          {
            !account  &&   <li>
            <Link href={`/dashboard`}>Admin</Link>
        
            </li>
          }
        
          {
            token &&  (
              <>
              <li>
                <Link href={`/clients/votes`}>
                   Votes
                </Link>
               
              </li>
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
            <Crown />
            </li>
             <motion.li onHoverStart={handletoggle} onHoverEnd={handletoggle} className=" self-center -translate-y-1
             ">
               <BookMarked className="size-7 group/link" />
             </motion.li>
             <motion.div 
              initial="exist"
              animate={hover ? "enter":"exist"}
              variants={subMenuAnimate}
             className="absolute w-1/5 right-10  backdrop-blur-sm bg-white rounded-sm origin-[50%,-170px] space-y-4
               top-[6.2rem] p-[15px] ">
                <div className="text-center text-sm">
                  <p >Cart</p>
                </div>
               <div className="text-xs flex items-center justify-between ">
                 <p>7</p>
                 <div className="w-7 h-7 rounded-full bg-amber-100"></div>
                <p>Aung Sann Oo</p>
                <p>Male</p>
               </div>
               <div className="text-xs flex items-center justify-between ">
                 <p>7</p>
                 <div className="w-7 h-7 rounded-full bg-amber-100"></div>
                <p>Aung Sann Oo</p>
                <p>Male</p>
               </div>
             </motion.div>

             <li className='w-13 h-13  rounded-ful'>
             <DropdownMenu>
             {
                  account.profile_image===null ? (
                    <DropdownMenuTrigger   className="-mt-1"><img src={`/images/user.png`} alt=""  className="object-cover w-[100%] " /></DropdownMenuTrigger>
                    ) :(
                    <img src={`/images/user.png`} alt="" className="object-cover w-[100%] " />
                  )
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
   
  </header>
  )
}

export default ClientHeader