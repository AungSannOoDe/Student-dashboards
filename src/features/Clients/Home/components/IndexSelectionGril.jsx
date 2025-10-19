"use client"
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap';
import useSWR from 'swr';
import { electorFemaleUrl, fetchElectors } from '@/services/electors';

const IndexSelectionGirl = () => {
  const sliderContainerRef = useRef(null);
  const { data, isLoading, error } = useSWR(electorFemaleUrl, fetchElectors);

  useEffect(() => {
    // Wait for data to load and DOM to be ready
    if (!data || !sliderContainerRef.current) return;
    
    const trackImages = sliderContainerRef.current.querySelectorAll('.track-img');
    if (trackImages.length === 0) return;

    // Initialize GSAP animations
    gsap.set('.track-img:not(.active)', { scale: 0.9 });
    gsap.set('.track-img.active', { scale: 1 });

    const handleImageClick = (images, clickedImage) => {
      // Remove active class from all images
      images.forEach(i => {
        i.classList.remove('active');
        gsap.to(i, { 
          scale: 0.9, 
          duration: 0.7, 
          ease: "power2.out" 
        });
      });
        
      // Add active class to clicked image
      clickedImage.classList.add('active');
        
      // Animate the active image
      gsap.to(clickedImage, { 
        scale: 1, 
        duration: 0.7, 
        ease: "power2.out" 
      });
        
      // Center the active image in view
      clickedImage.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'nearest', 
        inline: 'center' 
      });
    };

    trackImages.forEach(img => {
      img.addEventListener('click', () => handleImageClick(trackImages, img));
    });

    // Make slider responsive
    const handleResize = () => {
      const trackImages = sliderContainerRef.current.querySelectorAll('.track-img');
      
      if (window.innerWidth < 768) {
        // Mobile adjustments
        trackImages.forEach(img => {
          img.classList.remove('active');
        });
        
        // Activate the middle image by default on mobile
        if (trackImages.length > 0) {
          const middleIndex = Math.floor(trackImages.length / 2);
          trackImages[middleIndex].classList.add('active');
          gsap.to(trackImages[middleIndex], { 
            scale: 1, 
            duration: 0.7, 
            ease: "power2.out" 
          });
        }
      } else {
        // Reset to default active state on larger screens
        trackImages.forEach((img, index) => {
          const isActive = index === Math.floor(trackImages.length / 2);
          if (isActive) {
            img.classList.add('active');
            gsap.to(img, { 
              scale: 1, 
              duration: 0.7, 
              ease: "power2.out" 
            });
          } else {
            img.classList.remove('active');
            gsap.to(img, { 
              scale: 0.9, 
              duration: 0.7, 
              ease: "power2.out" 
            });
          }
        });
      }
    };

    // Initial call and event listener
    handleResize();
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      trackImages.forEach(img => {
        img.removeEventListener('click', () => handleImageClick(trackImages, img));
      });
    };
  }, [data]);

  return (
    <section className="mt-32 flex flex-col -space-y-30" id="hello">
      <p className="text-lg lg:text-3xl  text-center underline text-stone-600 opacity-65 font-bold">
        ပဏာမရွေးချယ်သော ကျောင်းသူများ
      </p>
      <section className="slider-container mt-30 lg:mt-10 w-full flex  items-center justify-center p-4" ref={sliderContainerRef}>
        <div className="track-images flex items-center gap-3 sm:gap-5 overflow-x-auto py-10 w-full justify-center">
          {isLoading ? (
            <p className="text-center text-blue-500">Loading...</p>
          ) : error ? (
            <p className="text-center text-red-500">Error loading data</p>
          ) : data && data.data && data.data.length > 0 ? (
            data.data.map((item, index) => {
              const isActive = index === Math.floor(data.data.length / 2);
              return (
                <div 
                  key={item.id}
                  className={`track-img w-20 h-72 sm:h-96 md:h-[560px] cursor-pointer transition-all ${isActive ? 'active' : ''}`}
                >
                  <img 
                    src={item.image_1_url || "/image-not-found.png"} 
                    alt={item.name} 
                    className="w-full h-full object-cover rounded-lg" 
                  />
                  <div className="details mt-2 text-center">
                    <p className="text-sm text-gray-600">{item.elector_name || "No role specified"}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="text-center text-red-500">No data available</p>
          )}
        </div>
      </section>
    </section>
  )
}

export default IndexSelectionGirl;