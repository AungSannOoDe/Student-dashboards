"use client";
import Link from 'next/link'
import React ,{ useRef, useEffect }from 'react'
import LogoutButton from './LogoutButton'
import LoginButton from './LoginButton'
import useAccountStore from '@/stores/useAccountStore'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const StudentHeader = () => {
  const headerRef = useRef(null);
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
  return (
<nav className=" w-full  bg-slate-50   z-1000 sticky top-0 ">
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
        <Link href={`/dashboard`}>Admin</Link>
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
          <li className='w-10 h-10  rounded-full bg-amber-300'>
            {
              account[0].profile_image===null ? ( <img src={`/images/user.png`} alt="" className="object-cover w-[100%] " />) :(
                <img src={`/images/user.png`} alt="" className="object-cover w-[100%] " />
              )
            }
          </li>
        </ul>)  :(
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