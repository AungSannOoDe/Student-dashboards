"use client";
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from 'next/link';
import LoginButton from './LoginButton';
import { useTranslations } from "next-intl";
import useAccountStore from "@/stores/useAccountStore";

const NavBarHeader = () => {
  const headerRef = useRef(null);
  const t = useTranslations("Indexnavbar");
  const [isOpen, setIsOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const { account, token, logout, setVoteMale, setVoteFemale,Nothing } = useAccountStore();
  // GSAP scroll animation
  useEffect(() => {
    if (!headerRef.current) return;
    setHeaderHeight(headerRef.current.offsetHeight);
    gsap.to(headerRef.current, {
      height: 60,
      duration: 0.3,
      ease: "power2.out",
      scrollTrigger: {
        trigger:"body",
        start: "top top",
        end: "+=100",
        scrub: true,
        onUpdate: () => {
          setHeaderHeight(headerRef.current.offsetHeight); // update height dynamically
        },
      },
    });
    return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }, []);

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  return (
    <header  className="fixed bg-stone-50/10 backdrop-blur-sm w-full z-20 shadow-sm ">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 text-stone-500 font-bold">
        
        {/* Logo */}
        <div>
          <img src="../images/Culogo-removebg-preview.png" ref={headerRef} className="h-20" alt="Logo" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-6 text-lg">
        {
            token ? (
              <li>
              <Link href="/" className="hover:text-blue-500 transition-colors duration-200">
                ပင်မစာမျက်နှာ
              </Link>
            </li>
            ):(
              <li>
              <Link href="/clients/home" className="hover:text-blue-500 transition-colors duration-200">
                ပင်မစာမျက်နှာ
              </Link>
            </li>
            )
          }
          <li><Link href={`/clients/guest/gallery`} className="hover:text-stone-800 transition"> ဓာတ်ပုံပြခန်း</Link></li>
          <li><Link href={`/login`} className="hover:text-stone-800 transition">Admin</Link></li>
          <li><Link href={`/clients/Information`} className="hover:text-stone-800 transition">အချက်အလက်များ</Link></li>
        </ul>

        {/* Desktop Right */}
        <ul className="hidden lg:flex gap-3 items-center">
          <li><Link href={'/clients/login'} className='underline hover:text-stone-800'>အကောင့်၀င်ရန်</Link></li>
          <li><LoginButton /></li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden flex items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
            style={{ top: headerHeight }}
            className="lg:hidden fixed mt-8 left-0 w-full h-65 bg-white/30 backdrop-blur-lg z-30 border-t border-slate-200"
          >
            <ul ref={mobileMenuRef}  className="flex flex-col items-center text-stone-600 gap-4 py-4 text-lg">
              <li><Link href="/" onClick={() => setIsOpen(false)}>ပင်မစာမျက်နှာ</Link></li>
              <li><Link href="/clients/guest/gallery" onClick={() => setIsOpen(false)}> ဓာတ်ပုံပြခန်း</Link></li>
              <li><Link href="/dashboard" onClick={() => setIsOpen(false)}>Admin</Link></li>
              <li><Link href={`/clients/Information`} className="hover:text-stone-800 transition">အချက်အလက်များ</Link></li>
              <li><Link href="/clients/login" className="underline" onClick={() => setIsOpen(false)}>အကောင့်၀င်ရန်</Link></li>
              <li>
                {
                  Nothing==1 ? " ": <LoginButton />
                }
               </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default NavBarHeader;
