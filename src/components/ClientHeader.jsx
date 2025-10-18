"use client";
import React, { useRef, useEffect, useState } from "react";
import { BookMarked, Crown, X, Menu } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { motion } from "motion/react";
import LoginButton from "./LoginButton";
import useAccountStore from "@/stores/useAccountStore";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { fetchtemp, tempoApiUrl } from "@/services/tempo";
import useSWR, { useSWRConfig } from "swr";

gsap.registerPlugin(ScrollTrigger);

const ClientHeader = () => {
  const [hover, setIsHover] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef(null);
  const { account, token, logout, setVoteMale, setVoteFemale } = useAccountStore();
  const { mutate } = useSWRConfig();

  const { data, isLoading, error } = useSWR(
    token ? `${tempoApiUrl}/${account.id}` : null,
    fetchtemp,
    { revalidateOnFocus: true, refreshWhenHidden: true }
  );

  useEffect(() => {
    account.vote_male === 1 ? setVoteMale(1) : setVoteMale(0);
    account.vote_female === 1 ? setVoteFemale(1) : setVoteFemale(0);

    if (!headerRef.current) return;

    gsap.to(headerRef.current, {
      height: 60,
      duration: 0.3,
      ease: "power2.out",
      scrollTrigger: { trigger: "body", start: "top top", end: "+=100", scrub: true },
    });

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, [account.vote_male, account.vote_female]);

  const handleToggle = () => setIsHover(!hover);
  const handleLogout = () => logout();

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: { duration: 0.4 },
      display: "block",
    },
    exist: {
      opacity: 0,
      rotateX: -15,
      transition: { duration: 0.4 },
      transitionEnd: { display: "none" },
    },
  };

  return (
    <header className="fixed top-0 bg-stone-50/10 backdrop-blur-sm w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 py-3 lg:py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/images/Culogo-removebg-preview.png"
            ref={headerRef}
            className="h-8 sm:h-10 lg:h-12 object-contain"
            alt="Logo"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex lg:items-center lg:gap-8">
          {/* Navigation Links */}
          <ul className="flex gap-6 text-sm font-medium">
            <li>
              <Link href="/clients/home" className="hover:text-blue-500 transition-colors duration-200">
                ပင်မစာမျက်နှာ
              </Link>
            </li>
            <li>
              <Link href="/clients/gallery" className="hover:text-blue-500 transition-colors duration-200">
                ဓာတ်ပုံ
              </Link>
            </li>
            <li>
              <Link href="/clients/Information" className="hover:text-blue-500 transition-colors duration-200">
                အချက်အလက်များ
              </Link>
            </li>
          
            {token && (
              <>
                <li>
                  <Link href="/clients/cards" className="hover:text-blue-500 transition-colors duration-200">
                    ဆန္ဒမဲပေးခြင်း
                  </Link>
                </li>
                <li>
                  <Link href="/clients/history" className="hover:text-blue-500 transition-colors duration-200">
                    နှစ်အလိုက် King Queen များ
                  </Link>
                </li>
                <li>
                  <Link href="/clients/reviews" className="hover:text-blue-500 transition-colors duration-200">
                    Reviews
                  </Link>
                </li>
                <li>
                  <Link href="/clients/votes" className="hover:text-blue-500 transition-colors duration-200">
                    ဆန္ဒမဲ ရလဒ်
                  </Link>
                </li>
              </>
            )}
          </ul>

          {/* Right Section (Desktop) */}
          {token ? (
            <ul className="flex gap-4 items-center">
              <li>
                <Link href="/clients/success" className="hover:scale-110 transition-transform duration-200">
                  <Crown className="text-amber-400 size-5 lg:size-6" />
                </Link>
              </li>

              {/* Hover Menu */}
              <motion.li
                onHoverStart={handleToggle}
                onHoverEnd={handleToggle}
                className="relative"
              >
                <Link href="/clients/tempo" className="hover:scale-110 transition-transform duration-200">
                  <BookMarked className="size-5 lg:size-6" />
                </Link>

                <motion.div
                  initial="exist"
                  animate={hover ? "enter" : "exist"}
                  variants={subMenuAnimate}
                  className="absolute w-72 lg:w-80 cursor-pointer right-0 backdrop-blur-sm bg-white rounded-md shadow-lg origin-top space-y-3 top-[2.8rem] lg:top-[3.2rem] p-3 lg:p-4 z-50 border"
                >
                  {isLoading ? (
                    <div className="text-center py-2 text-sm">Loading...</div>
                  ) : error ? (
                    <div className="text-center py-2 text-red-500 text-sm">
                      Error loading data
                    </div>
                  ) : data?.data?.length > 0 ? (
                    data.data.map((temp) => (
                      <div
                        key={temp.id}
                        className="hover:bg-gray-50 p-2 lg:p-3 rounded flex justify-between items-center text-xs lg:text-sm border-b"
                      >
                        <div className="flex items-center gap-2 lg:gap-3">
                          <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-amber-100 flex items-center justify-center">
                            <span className="text-xs font-semibold">
                              {temp.elector?.elector_name?.charAt(0) || "U"}
                            </span>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-700 text-xs lg:text-sm">
                              {temp.elector?.elector_name || "Unknown"}
                            </p>
                            <p className="text-xs text-gray-500 capitalize">
                              {temp.elector?.gender}
                            </p>
                             <Link className="" href={`/clients/profile`}>profile</Link>
                          </div>
                        </div>
                        <button 
                          className="p-1 hover:bg-red-50 rounded transition-colors"
                        >
                          <X className="size-3 lg:size-4 text-red-500" />
                        </button>
                      </div>
                    ))
                  ) : (
                    <p className="text-center py-2 text-gray-500 text-sm">No temporary selections</p>
                  )}
                </motion.div>
              </motion.li>

              {/* Profile */}
              <li>
                <DropdownMenu>
                  <DropdownMenuTrigger className="hover:scale-105 transition-transform duration-200">
                    <img
                      src={account.profile_image || "/images/user.png"}
                      alt="User"
                      className="object-cover w-8 h-8 lg:w-10 lg:h-10 rounded-full border"
                    />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-44 lg:w-48">
                    <DropdownMenuLabel className="flex flex-col space-y-2 lg:space-y-3 p-3 lg:p-4">
                      <p className="font-semibold text-sm lg:text-lg truncate">{account.voter_name}</p>
                      <p className="text-xs text-gray-500 truncate">{account.voter_email}</p>
                      <Link className="" href={`/clients/profile`}>profile</Link>
                      <button
                        className="bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-600 transition-colors w-full text-sm"
                        onClick={handleLogout}
                      >
                        Logout
                      </button>
                    </DropdownMenuLabel>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
            </ul>
          ) : (
            <ul className="flex gap-3 lg:gap-4 items-center">
              <li className="self-center">
                <Link
                  href="/clients/login"
                  className="underline cursor-pointer hover:text-blue-500 transition-colors duration-200 text-sm lg:text-base"
                >
                  အကောင့်၀င်ရန်
                </Link>
              </li>
              <li>
                <LoginButton />
              </li>
            </ul>
          )}
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden p-2 rounded-md hover:bg-stone-200/30 transition-colors duration-200"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={mobileOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="lg:hidden bg-white/95 backdrop-blur-sm fixed z-40 w-full border-t border-gray-200 shadow-inner overflow-hidden"
      >
        <div className="flex flex-col gap-1 py-4 px-4">
          {/* Main Links */}
          <Link 
            href="/clients/home" 
            className="block py-3 px-4 hover:bg-blue-50 rounded-lg transition-colors duration-200 text-gray-700"
            onClick={() => setMobileOpen(false)}
          >
            ပင်မစာမျက်နှာ
          </Link>
          
          <Link 
            href="/clients/Information" 
            className="block py-3 px-4 hover:bg-blue-50 rounded-lg transition-colors duration-200 text-gray-700"
            onClick={() => setMobileOpen(false)}
          >
            အချက်အလက်များ
          </Link>
          
          <Link 
            href="/clients/gallery" 
            className="block py-3 px-4 hover:bg-blue-50 rounded-lg transition-colors duration-200 text-gray-700"
            onClick={() => setMobileOpen(false)}
          >
            ဓာတ်ပုံပြခန်း
          </Link>

          {token && (
            <>
              <div className="border-t border-gray-100 my-2"></div>
              
              <Link 
                href="/clients/cards" 
                className="block py-3 px-4 hover:bg-blue-50 rounded-lg transition-colors duration-200 text-gray-700"
                onClick={() => setMobileOpen(false)}
              >
                ဆန္ဒမဲပေးခြင်း
              </Link>
              
              <Link 
                href="/clients/votes" 
                className="block py-3 px-4 hover:bg-blue-50 rounded-lg transition-colors duration-200 text-gray-700"
                onClick={() => setMobileOpen(false)}
              >
                ဆန္ဒမဲရလဒ်
              </Link>
              
              <Link 
                href="/clients/history" 
                className="block py-3 px-4 hover:bg-blue-50 rounded-lg transition-colors duration-200 text-gray-700"
                onClick={() => setMobileOpen(false)}
              >
                နှစ်အလိုက် King Queen များ
              </Link>
              
              <Link 
                href="/clients/reviews" 
                className="block py-3 px-4 hover:bg-blue-50 rounded-lg transition-colors duration-200 text-gray-700"
                onClick={() => setMobileOpen(false)}
              >
                Reviews
              </Link>
              
              <Link 
                href="/clients/success" 
                className="flex items-center gap-3 py-3 px-4 hover:bg-blue-50 rounded-lg transition-colors duration-200 text-gray-700"
                onClick={() => setMobileOpen(false)}
              >
                <Crown className="text-amber-400 size-5" />
                <span>Crown</span>
              </Link>
              
              <Link 
                href="/clients/tempo" 
                className="flex items-center gap-3 py-3 px-4 hover:bg-blue-50 rounded-lg transition-colors duration-200 text-gray-700"
                onClick={() => setMobileOpen(false)}
              >
                <BookMarked className="size-5" />
                <span>Temporary Selections</span>
              </Link>

              <div className="border-t border-gray-100 my-2"></div>
              
              {/* User Info Mobile */}
              <div className="px-4 py-3">
                <div className="flex items-center gap-3 mb-3">
                   <Link className="hover:text-blue-600 transition-colors w-full font-medium" href={`/clients/profile`}>profile</Link>
                </div>
                <button
                  className="bg-blue-500 text-white px-4 py-3 rounded-lg hover:bg-blue-600 transition-colors w-full font-medium"
                  onClick={() => {
                    handleLogout();
                    setMobileOpen(false);
                  }}
                >
                  Logout
                </button>
              </div>
            </>
          )}

          {!token && (
            <>
              <div className="border-t border-gray-100 my-2"></div>
              
              <Link 
                href="/clients/login" 
                className="block py-3 px-4 hover:bg-blue-50 rounded-lg transition-colors duration-200 text-gray-700"
                onClick={() => setMobileOpen(false)}
              >
                အကောင့်၀င်ရန်
              </Link>
              
              <div className="px-4 py-2">
                <LoginButton onClick={() => setMobileOpen(false)} />
              </div>
            </>
          )}
        </div>
      </motion.div>
    </header>
  );
};

export default ClientHeader;