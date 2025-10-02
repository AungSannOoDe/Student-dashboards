"use client";
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Menu, X } from "lucide-react";
import Link from 'next/link';
import { motion, AnimatePresence } from "framer-motion"; // added framer-motion
import LoginButton from './LoginButton';

const StudentNoHeader = () => {
  const headerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!headerRef.current) return;
    gsap.to(headerRef.current, {
      height: 60,
      duration: 0.3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "+=100",
        scrub: true,
      },
    });
    return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }, []);

  // Animation variants
  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  return (
    <nav className="w-full bg-slate-50 z-30 sticky top-0 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 text-stone-500 font-bold">

        {/* Logo */}
        <div>
          <img
            src="/images/Culogo-removebg-preview.png"
            ref={headerRef}
            className="h-12"
            alt="Logo"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-6 text-lg">
          <li><Link href={`/`} className="hover:text-stone-800 transition">Home</Link></li>
          <li><Link href={`/clients/gallery`} className="hover:text-stone-800 transition">Gallery</Link></li>
          <li><Link href={`/clients/votes`} className="hover:text-stone-800 transition">Admin</Link></li>
        </ul>

        {/* Desktop Right */}
        <ul className="hidden lg:flex gap-3 items-center">
          <li><Link href={'/clients/login'} className='underline hover:text-stone-800'>Login</Link></li>
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

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
            className="lg:hidden bg-slate-50 fixed w-full border-t border-slate-200 z-10 " 
          >
            <ul className="flex flex-col items-center gap-4 py-4 text-lg">
              <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
              <li><Link href="/clients/gallery" onClick={() => setIsOpen(false)}>Gallery</Link></li>
              <li><Link href="/clients/votes" onClick={() => setIsOpen(false)}>Admin</Link></li>
              <li><Link href="/clients/login" className="underline" onClick={() => setIsOpen(false)}>Login</Link></li>
              <li><LoginButton /></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default StudentNoHeader;
