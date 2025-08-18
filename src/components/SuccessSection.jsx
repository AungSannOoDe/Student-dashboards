"use client"
import { X } from 'lucide-react'
import React, { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import useAccountStore from '@/stores/useAccountStore'

const SuccessSection = () => {
    const [close, setIsClose] = useState(false)
    const{ VoteFinal}=useAccountStore()
    const sectionRef = useRef(null)
    const crownsRef = useRef([])
    const imagesRef = useRef([])

    const handleClose = () => {
        gsap.to(sectionRef.current, {
            opacity: 0,
            duration: 0.3,
            onComplete: () => setIsClose(true)
        })
    }
    useEffect(() => {
        if (close ||  VoteFinal==0 ) return
        gsap.set([sectionRef.current, ...crownsRef.current, ...imagesRef.current], {
            opacity: 0,
            y: 20
        })

        const tl = gsap.timeline()

        // Background fade in
        tl.to(sectionRef.current, {
            opacity: 1,
            duration: 0.5
        })
        tl.to(crownsRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "back.out(1.7)"
        })

        // Staggered image animations with slight delay
        tl.to(imagesRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.1,
            ease: "power2.out",
            delay: -0.3 // Overlap with previous animation
        }, "<0.2")
        return () => {
            tl.kill() // Clean up animations
        }
    }, [close])
    // Add elements to ref arrays
    const addToCrownsRef = (el) => {
        if (el && !crownsRef.current.includes(el)) {
            crownsRef.current.push(el)
        }
    }

    const addToImagesRef = (el) => {
        if (el && !imagesRef.current.includes(el)) {
            imagesRef.current.push(el)
        }
    }

    if (close) return null

 if( VoteFinal==0 ){
    return  <></>
 }

    return (
        <section 
            ref={sectionRef}
            className='fixed  h-screen w-full bg-black/20 top-[-20px] -mt-1 z-[1000000] opacity-0'
        >
            <div className="flex justify-end  p-4">
                <X 
                    className='text-white cursor-pointer hover:scale-110 transition-transform' 
                    onClick={handleClose} 
                />
            </div>
            
            <div className="flex justify-center items-center w-full h-screen">
                <div className="grid grid-cols-4 gap-10">
                    {['King', 'Queen', 'Prince', 'Princess'].map((title, index) => (
                        <div key={index} className="w-[200px] h-50 relative">
                            {/* Crown Badge */}
                            <div 
                                ref={addToCrownsRef}
                                className="absolute top-[-20px] left-0 opacity-0  z-10"
                            >
                                <div className="relative inline-block left-[-12px]">
                                    <div className="border-[15px] border-solid border-amber-300 inline-block absolute top-[10px] border-l-transparent"></div>
                                    <div className="bg-yellow-300 h-[30px] text-center line-clamp-4 w-[165px] inline-block relative z-100 ml-[30px] before:border-[5px] before:inline-block before:absolute before:border-solid before:left-0 before:bottom-[-9px] before:border-amber-200 before:content-[' ']">
                                        <p className='text-white text-lg font-extrabold'>{title}</p>
                                    </div>
                                    <div className="border-[15px] border-solid border-amber-300 inline-block absolute top-[10px] border-r-transparent"></div>
                                </div>
                            </div>
                            
                            {/* Image */}
                            <img
                                ref={addToImagesRef}
                                src={`../images/4.png`}
                                alt=""
                                className="opacity-0 translate-y-5"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SuccessSection