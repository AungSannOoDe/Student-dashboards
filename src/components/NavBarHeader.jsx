
"use client";
import React, { useRef, useEffect,useState } from "react";
import { BookMarked, Crown } from 'lucide-react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from 'next/link'
import { motion } from "motion/react"
import LoginButton from './LoginButton'
const NavBarHeader = () => {
    const headerRef = useRef(null);
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
     
     }, [ ]);
  return (
<header   className="fixed bg-stone-50/10 backdrop-blur-sm  w-full z-10 ">
    <nav className="">
      <div className="max-w-7xl mx-auto text-xl  text-slate-500  items-center py-5 font-bold flex justify-between px-6">
        <div className="">
          <img src="../images/Culogo-removebg-preview.png" ref={headerRef} className="h-25"  />
        </div>
        <ul className="flex justify-center   gap-4">
          <li>
            <Link href={`/clients/home`}>Home</Link>
          </li>
          <li>
            <Link href={`/clients/guest/gallery`}>Gallery</Link>
          </li>
               <li>
            <Link href={`/dashboard`}>Admin</Link>
            </li>
          </ul>
            <ul className="flex justify-center gap-3">
            <li className='self-center'>
            <Link   href={'/clients/login'} className='underline cursor-pointer pointer-events-auto '>
            Login</Link>
            </li>
            <li>
            <LoginButton/>
            </li>
          </ul>
        
      </div>
    </nav>
   
  </header>
  )
}

export default NavBarHeader