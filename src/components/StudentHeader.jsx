"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import LoginButton from "./LoginButton";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useAccountStore from "@/stores/useAccountStore";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BookMarked, Crown, X, Menu } from "lucide-react";
import useSWR, { useSWRConfig } from "swr";
import { destorytemp, fetchtemp, tempoApiUrl } from "@/services/tempo";
import { useTempStore } from "@/stores/usetemp";
import { toast } from "sonner";

gsap.registerPlugin(ScrollTrigger);

const StudentHeader = () => {
  const headerRef = useRef(null);
  const [hover, setIsHover] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const { refreshTrigger } = useTempStore();
  const { account, token, logout, setVoteMale, setVoteFemale } = useAccountStore();
  const { mutate } = useSWRConfig();

  const { data, isLoading, error } = useSWR(
    token ? `${tempoApiUrl}/${account.id}` : null,
    fetchtemp,
    {
      revalidateOnFocus: true,
      refreshWhenHidden: true,
    }
  );

  const handleDelete = async (id) => {
    try {
      const res = await destorytemp(id);
      const json = await res.json();
      if (!res.ok) throw new Error(json.message || "Undefined Error");
      mutate(`${tempoApiUrl}/${account.id}`);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    account.vote_male === 1 ? setVoteMale(1) : setVoteMale(0);
    account.vote_female === 1 ? setVoteFemale(1) : setVoteFemale(0);

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

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [account.vote_male, account.vote_female, setVoteMale, setVoteFemale]);

  useEffect(() => {
    if (token) {
      mutate(`${tempoApiUrl}/${account.id}`);
    }
  }, [refreshTrigger, token, account.id, mutate]);

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
    <header className="fixed md:sticky top-0 bg-white backdrop-blur-sm w-full z-30 shadow-sm">
      <div className=" mx-auto flex  justify-between items-center  sm:px-6 py-3 lg:py-4">
        {/* Logo */}
        <div className="flex items-center gap-2 ">
          <img
            src="/images/Culogo-removebg-preview.png"
            ref={headerRef}
            className="h-10 sm:h-12 object-contain"
            alt="Logo"
          />
        </div>
        <ul className="hidden lg:flex gap-6 text-sm font-medium  ">
          <li>
            <Link href="/clients/home" className="hover:text-blue-500 transition-colors">
              ပင်မစာမျက်နှာ
            </Link>
          </li>
          <li>
            <Link href="/clients/gallery" className="hover:text-blue-500 transition-colors">
              ဓာတ်ပုံ
            </Link>
          </li>
           <li><Link href={`/clients/Information`} className="hover:text-stone-800 transition">အချက်အလက်များ</Link></li>
           {
            !token && (
            <li><Link href={`/login`} className="hover:text-stone-800 transition">Admin</Link></li>)
           }
           
          {token && (
            <>
              <li>
                <Link href="/clients/cards" className="hover:text-blue-500 transition-colors">
                  ဆန္ဒမဲပေးခြင်း
                </Link>
              </li>
              <li>
                <Link href="/clients/history" className="hover:text-blue-500 transition-colors">
                  နှစ်အလိုက် King Queen များ
                </Link>
              </li>
              <li>
                <Link href="/clients/reviews" className="hover:text-blue-500 transition-colors">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/clients/votes" className="hover:text-blue-500 transition-colors">
                  ဆန္ဒမဲ ရလဒ်
                </Link>
              </li>
            </>
          )}
        </ul>
        {/* Desktop Menu */}
        <nav className="hidden  lg:flex  lg:items-center lg:gap-6">
          {/* Right Section (Desktop) */}
          {token ? (
            <ul className="flex gap-5 items-center">
              <li>
                <Link href="/clients/success" className="hover:scale-110 transition-transform">
                  <Crown className="text-amber-400 size-6" />
                </Link>
              </li>
              {/* Hover Menu */}
              <motion.li
                onHoverStart={handleToggle}
                onHoverEnd={handleToggle}
                className="relative"
              >
                <Link href="/clients/tempo" className="hover:scale-110 transition-transform">
                  <BookMarked className="size-6" />
                </Link>

                <motion.div
                  initial="exist"
                  animate={hover ? "enter" : "exist"}
                  variants={subMenuAnimate}
                  className="absolute w-80 cursor-pointer right-0 backdrop-blur-sm bg-white rounded-md shadow-md origin-top space-y-3 top-[3.2rem] p-4 z-50"
                >
                  {isLoading ? (
                    <div className="text-center py-2">Loading...</div>
                  ) : error ? (
                    <div className="text-center py-2 text-red-500">
                      Error loading data
                    </div>
                  ) : data?.data?.length > 0 ? (
                    data.data.map((temp) => (
                      <div
                        key={temp.id}
                        className="hover:bg-gray-50 p-3 rounded flex justify-between items-center text-sm border-b"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                            <span className="text-xs font-semibold">
                              {temp.elector?.elector_name?.charAt(0) || "U"}
                            </span>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-700 text-xs">
                              {temp.elector?.elector_name || "Unknown"}
                            </p>
                            <p className="text-xs text-gray-500 capitalize">
                              {temp.elector?.gender}
                            </p>
                             <Link className="text-white" href={`/`}>profile</Link>
                          </div>
                        </div>
                        <button 
                          onClick={() => handleDelete(temp.id)}
                          className="p-1 hover:bg-red-50 rounded transition-colors"
                        >
                          <X className="size-4 text-red-500" />
                        </button>
                      </div>
                    ))
                  ) : (
                    <p className="text-center py-2 text-gray-500">No temporary selections</p>
                  )}
                </motion.div>
              </motion.li>

              {/* Profile */}
              <li>
                <DropdownMenu>
                  <DropdownMenuTrigger className="hover:scale-105 transition-transform">
                    <img
                      src={"https://studentvoting.store/storage/"+account.profile_image || "/images/user.png"}
                      alt="User"
                      className="object-cover w-10 h-10 rounded-full border"
                    />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuLabel className="flex flex-col space-y-3 p-4">
                      <p className="font-semibold text-lg">{account.voter_name}</p>
                      <p className="text-xs text-gray-500">{account.voter_email}</p>
                       <p> <Link className="" href={`/clients/profile`}>profile</Link></p> 
                      <button
                        className="bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-600 transition-colors w-full"
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
            <ul className="flex gap-4 items-center">
              <li className="self-center">
                <Link
                  href="/clients/login"
                  className="underline cursor-pointer hover:text-blue-500 transition-colors"
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
          className="lg:hidden p-2 rounded-md hover:bg-stone-200/30 transition"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={mobileOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="lg:hidden bg-white fixed z-10 w-full  border-t border-gray-200 shadow-inner overflow-hidden"
      >
        <ul className="flex flex-col gap-4 py-6 px-6 text-gray-700 text-base">
          <li>
            <Link 
              href="/clients/home" 
              className="block py-2 hover:text-blue-500 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              ပင်မစာမျက်နှာ
            </Link>
          </li>
          <li>
            <Link href="/clients/history" className="hover:text-blue-500 transition-colors">
              နှစ်အလိုက် King Queen များ
            </Link>
          </li>
          <li><Link href={`/clients/Information`} className="hover:text-stone-800 transition">အချက်အလက်များ</Link></li>
          <li>
            <Link 
              href="/clients/gallery" 
              className="block py-2 hover:text-blue-500 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              ဓာတ်ပုံပြခန်း
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
                   ဆန္ဒမဲပေးခြင်း
                </Link>
              </li>
              <li>
                <Link 
                  href="/clients/votes" 
                  className="block py-2 hover:text-blue-500 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                   ဆန္ဒမဲ ရလဒ်
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
                <Link 
                  href="/clients/ptofile" 
                  className=" py-2 hover:text-blue-500 transition-colors flex items-center gap-2"
                  onClick={() => setMobileOpen(false)}
                >
                  profile
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

export default StudentHeader;