"use client";
import { X } from 'lucide-react';
import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import useAccountStore from '@/stores/useAccountStore';
import useSWR from 'swr';
import { fetchSuccess, successApiUrl } from '@/services/history';
import Spinner from './Spinner';
import { getTitle } from '@/lib/Timer';

const SuccessSection = () => {
  const [close, setIsClose] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const { SlideShow, setSlideShow } = useAccountStore();
  const sectionRef = useRef(null);
  const crownsRef = useRef([]);
  const imagesRef = useRef([]);

  const { data, isLoading, error } = useSWR(`${successApiUrl}`, fetchSuccess);

  const handleClose = () => {
    gsap.to(sectionRef.current, {
      opacity: 0,
      duration: 0.3,
      onComplete: () => setIsClose(true),
    });
    setSlideShow(0);
  };

  const addToCrownsRef = (el) => {
    if (el && !crownsRef.current.includes(el)) crownsRef.current.push(el);
  };

  const addToImagesRef = (el) => {
    if (el && !imagesRef.current.includes(el)) imagesRef.current.push(el);
  };

  useEffect(() => {
    if (close || SlideShow === 0 || isLoading) return;

    setIsAnimating(true);
    gsap.set([sectionRef.current, ...crownsRef.current, ...imagesRef.current], {
      opacity: 0,
      y: 20,
    });

    const tl = gsap.timeline();
    tl.to(sectionRef.current, {
      opacity: 1,
      duration: 0.5,
    })
      .to(crownsRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'back.out(1.7)',
      })
      .to(
        imagesRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.1,
          ease: 'power2.out',
          delay: -0.3,
        },
        '<0.2'
      )
      .call(() => setIsAnimating(false));

    return () => tl.kill();
  }, [close, SlideShow, isLoading]);

  if (close || SlideShow === 0) return null;

  return (
    <section
      ref={sectionRef}
      className="fixed inset-0 h-screen w-full bg-black/70 z-[1000000] flex flex-col"
    >
      {/* Close Button */}
      <div className="flex justify-end p-4">
        <X
          className="text-white cursor-pointer hover:scale-110 transition-transform"
          onClick={handleClose}
        />
      </div>

      {/* Content Wrapper */}
      <div className="flex justify-center items-center flex-grow px-4">
        {isLoading || isAnimating ? (
          <Spinner />
        ) : data?.data?.length > 0 ? (
          <div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-h-[80vh] overflow-y-auto p-4"
          >
            {data.data.map((title, index) => (
              <div key={index} className="relative w-full flex flex-col items-center">
                {/* Crown Title */}
                <div ref={addToCrownsRef} className="mb-2 w-full text-center relative">
                  <span className="bg-yellow-400 px-3 py-1 text-xs sm:text-sm rounded shadow text-white font-bold inline-block">
                    {getTitle(title.gender, title.won_status)}
                  </span>
                </div>

                {/* Image */}
                {title.image_1_url ? (
                  <img
                    ref={addToImagesRef}
                    src={title.image_1_url}
                    className="rounded-lg shadow-lg w-full object-cover h-40 sm:h-48"
                    alt=""
                  />
                ) : (
                  <img
                    src="/image-not-found.png"
                    className="rounded-lg shadow-lg w-full object-cover h-40 sm:h-48"
                    alt=""
                  />
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-white text-center text-lg">No success records found</p>
        )}
      </div>
    </section>
  );
};

export default SuccessSection;
