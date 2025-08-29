"use client";
import React,{ useEffect, useRef} from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from 'next/link';
import LoginButton from './LoginButton';
const StudentNoHeader = () => {
    const headerRef = useRef(null);
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
        return () => {
          ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
      }, []);
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
        <Link href={`/clients/votes`}>Admin</Link>
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
  )
}

export default StudentNoHeader