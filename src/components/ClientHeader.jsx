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

  const handletoggle = () => setIsHover(!hover);

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

  const handlelogout = () => logout();

  return (
    <header className="fixed bg-stone-50/10 backdrop-blur-sm w-full z-20 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 py-3 lg:py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="../images/Culogo-removebg-preview.png"
            ref={headerRef}
            className="h-10 sm:h-12 object-contain"
            alt="Logo"
          />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex lg:items-center lg:gap-6">
          <ul className="flex gap-6 text-sm font-medium">
            <li><Link href={`/clients/home`}>Home</Link></li>
            <li><Link href={`/clients/gallery`}>Gallery</Link></li>
            <li><Link href={`/clients/Information`} className="hover:text-stone-800 transition">Information</Link></li>
            {!token && <li><Link href={`/dashboard`}>Admin</Link></li>}
            {token && (
              <>
                <li><Link href={`/clients/votes`}>Votes</Link></li>
                <li><Link href={`/clients/cards`}>Selection</Link></li>
                <li><Link href={`/clients/history`}>History</Link></li>
              </>
            )}
          </ul>

          {/* Right Side */}
          {token ? (
            <ul className="flex gap-5 items-center">
              <li>
                <Link href={`/clients/success`}><Crown className="text-amber-400" /></Link>
              </li>

              {/* Hover Dropdown */}
              <motion.li
                onHoverStart={handletoggle}
                onHoverEnd={handletoggle}
                className="relative"
              >
                <Link href={`/clients/tempo`}><BookMarked className="size-7" /></Link>
                <motion.div
                  initial="exist"
                  animate={hover ? "enter" : "exist"}
                  variants={subMenuAnimate}
                  className="absolute right-0 top-[3.2rem] w-80 p-4 bg-white shadow-md rounded-md space-y-4 origin-[50%,-170px] z-50"
                >
                  {isLoading ? (
                    <div className="text-center py-2">Loading...</div>
                  ) : error ? (
                    <div className="text-center py-2 text-red-500">Error loading data</div>
                  ) : data?.data?.length > 0 ? (
                    data.data.map((temp) => (
                      <div key={temp.id} className="hover:bg-gray-50 p-2 rounded flex justify-between items-center">
                        <p className="text-sm">{temp.id}</p>
                        <div className="w-8 h-8 rounded-full bg-amber-100"></div>
                        <p className="text-xs">{temp.elector?.elector_name || "Unknown"}</p>
                        <p className="text-xs">{temp.elector?.gender}</p>
                        <button onClick={() => console.log("Delete", temp.id)}>
                          <X className="size-5 text-red-500 cursor-pointer" />
                        </button>
                      </div>
                    ))
                  ) : (
                    <p className="text-center py-2">No data available</p>
                  )}
                </motion.div>
              </motion.li>

              <li>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <img
                      src={account.profile_image || "/images/user.png"}
                      alt="Profile"
                      className="w-10 h-10 rounded-full object-cover border"
                    />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuLabel className="flex flex-col space-y-2 p-4">
                      <p className="text-lg font-semibold">{account.voter_name}</p>
                      <p className="text-xs text-gray-500">{account.voter_email}</p>
                      <button
                        className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition"
                        onClick={handlelogout}
                      >
                        Logout
                      </button>
                    </DropdownMenuLabel>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
            </ul>
          ) : (
            <ul className="flex gap-4 items-center">
              <li><Link href={"/clients/login"} className="underline">Login</Link></li>
              <li><LoginButton /></li>
            </ul>
          )}
        </nav>

        {/* Mobile Hamburger */}
         <button
          className="lg:hidden p-2 rounded-md hover:bg-stone-200/30 transition"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={mobileOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="lg:hidden bg-white/80 dark:bg-stone-900/70 backdrop-blur-md  shadow-sm fixed z-10 w-full  border-t border-gray-200  overflow-hidden"
      >
        <ul className="flex flex-col gap-4 py-6 px-6 text-gray-700 text-base">
          <li>
            <Link 
              href="/clients/home" 
              className="block py-2 hover:text-blue-500 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Home
            </Link>
          </li>
          <li><Link href={`/clients/Information`} className="hover:text-stone-800 transition">Information</Link></li>
          <li>
            <Link 
              href="/clients/gallery" 
              className="block py-2 hover:text-blue-500 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link 
              href="/clients/votes" 
              className="block py-2 hover:text-blue-500 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Votes
            </Link>
          </li>

          {token && (
            <>
              <li>
                <Link 
                  href="/clients/cards" 
                  className="block py-2 hover:text-blue-500 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  Selection
                </Link>
              </li>
              <li>
                <Link 
                  href="/clients/history" 
                  className="block py-2 hover:text-blue-500 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  History
                </Link>
              </li>
              <li>
                <Link 
                  href="/clients/success" 
                  className=" py-2 hover:text-blue-500 transition-colors flex items-center gap-2"
                  onClick={() => setMobileOpen(false)}
                >
                  <Crown className="text-amber-400 size-5" />
                  Crown
                </Link>
              </li>
              <li>
                <Link 
                  href="/clients/tempo" 
                  className=" py-2 hover:text-blue-500 transition-colors flex items-center gap-2"
                  onClick={() => setMobileOpen(false)}
                >
                  <BookMarked className="size-5" />
                  Temporary
                </Link>
              </li>
              <li className="pt-2">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors w-full"
                  onClick={() => {
                    handleLogout();
                    setMobileOpen(false);
                  }}
                >
                  Logout
                </button>
              </li>
            </>
          )}

          {!token && (
            <>
              <li>
                <Link 
                  href="/clients/login" 
                  className="block py-2 hover:text-blue-500 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  Login
                </Link>
              </li>
              <li>
                <div className="py-2">
                  <LoginButton onClick={() => setMobileOpen(false)} />
                </div>
              </li>
            </>
          )}
        </ul>
      </motion.div>
    </header>
  );
};

export default ClientHeader;
