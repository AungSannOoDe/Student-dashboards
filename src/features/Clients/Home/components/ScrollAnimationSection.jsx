"use client"
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Lenis from "lenis";
import initSpolitAnimation from "@/lib/animation";

const ScrollAnimationSection = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger, SplitText);
    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    const raf = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(raf);
   let resizeTimeout;
    gsap.ticker.lagSmoothing(0);
    initSpolitAnimation(ScrollTrigger, gsap, SplitText, lenis);
    const handleResize = () => initSpolitAnimation(ScrollTrigger, gsap, SplitText, lenis);
    window.addEventListener("resize", handleResize);
     
    return () => {
      clearTimeout(resizeTimeout);
      window.removeEventListener("resize", handleResize);
      gsap.ticker.remove(raf);
      setTimeout(() => {
        lenis.destroy();
        ScrollTrigger.getAll().forEach(st => st.kill());
      }, 50);
    };
  }, []);

  return (
    <section className="sploitlight">
      <div className="sploitlight-images">
        <div className="img"><img src="../images/1.png" alt="" /></div>
        <div className="img"><img src="../images/2.png" alt="" /></div>
        <div className="img"><img src="../images/3.png" alt="" /></div>
        <div className="img"><img src="../images/4.png" alt="" /></div>
        <div className="img"><img src="../images/5.png" alt="" /></div>
        <div className="img"><img src="../images/6.png" alt="" /></div>
        <div className="img"><img src="../images/7.png" alt="" /></div>
         <div className="img"><img src="../images/1.png" alt="" /></div>
        <div className="img"><img src="../images/2.png" alt="" /></div>
        <div className="img"><img src="../images/3.png" alt="" /></div>
        <div className="img"><img src="../images/4.png" alt="" /></div>
        <div className="img"><img src="../images/5.png" alt="" /></div>
        <div className="img"><img src="../images/6.png" alt="" /></div>
        <div className="img"><img src="../images/7.png" alt="" /></div>
         <div className="img"><img src="../images/1.png" alt="" /></div>
        <div className="img"><img src="../images/2.png" alt="" /></div>
        <div className="img"><img src="../images/3.png" alt="" /></div>
        <div className="img"><img src="../images/4.png" alt="" /></div>
        <div className="img"><img src="../images/5.png" alt="" /></div>
        <div className="img"><img src="../images/6.png" alt="" /></div>
      </div>

      <div className="sploitlight-cover-img relative  ">
        <img   className="cover-img" src="../images/prague-cover.jpg" alt="" />
        <h1 className=" text-white z-1000 absolute top-[50%] p-4 cover-heading">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.  iusto nam recusandae explicabo, a ipsam natus fugiat sed magnam! Nemo, accusamus.
        </h1>
      </div>

      <div className="sploitlight-intro-header">
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, tempore.</h1>
      </div>
      <div className="sploitlight-outro-header">
         <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, tempore.</h1>
      </div>
    </section>
  );
};

export default ScrollAnimationSection;