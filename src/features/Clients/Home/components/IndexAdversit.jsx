"use client"
import React,{useEffect,useRef} from 'react'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TextType from '@/components/TextType';
import { TextPlugin } from "gsap/TextPlugin";
const IndexAdversit = () => {
  gsap.registerPlugin(SplitText, ScrollTrigger,TextPlugin);
  const cardhref=useRef(null);
  const childRef=useRef(null);
  useEffect(()=>{
    gsap.set(childRef.current,{
      scale:0.5,
      opacity:0
    })
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: cardhref.current,
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });
    
    tl.to(childRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2
    });
  },[])

  return (
<section className="max-w-7xl mt-10  mx-auto  mb-10 " ref={cardhref}>
    <div className="flex justify-center space-x-20 " ref={childRef}> 
      <div className="w-50 text-wrap self-center">
        <h2 className="text-3xl font-bold leading-14"> <span className="underline"> 27.6.2025 </span> မဲထည့်ကြဖို့မမေ့နဲ့နော်😉</h2>
      </div>
      <div>
        <img src="/images/woman-8182795_1280.jpg" width="500px" className="object-cover"  />
      </div>    
    </div>
  </section>
  )
}

export default IndexAdversit