"use client";
import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
export const useGsapAnimation = () => {
    const tl = useRef(gsap.timeline());
  
    const animateIn = (elements, options = {}) => {
      tl.current.fromTo(elements,
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.1, 
          ease: "power2.out",
          ...options 
        }
      );
    };
  
    const animateContent = (element, isOpening) => {
      if (isOpening) {
        gsap.fromTo(element,
          { height: 0, opacity: 0 },
          { 
            height: "auto", 
            opacity: 1, 
            duration: 0.5,
            ease: "power2.out" 
          }
        );
      } else {
        gsap.to(element, {
          height: 0,
          opacity: 0,
          duration: 0.4,
          ease: "power2.inOut"
        });
      }
    };
  
    const animatePlus = (element, isOpening) => {
      gsap.to(element, {
        rotation: isOpening ? 45 : 0,
        duration: 0.3,
        ease: "power2.inOut"
      });
    };
  
    return { animateIn, animateContent, animatePlus };
  };