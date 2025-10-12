"use client";
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap';
import useSWR from 'swr';
import { electorApiUrl, electorMaleUrl, fetchElectors } from '@/services/electors';

const IndexSelectionBoys = () => {
  const sliderContainerRef = useRef(null);
  const sliderImagesRef = useRef(null);
  const { data, isLoading, error } = useSWR(`${electorMaleUrl}`, fetchElectors);

  useEffect(() => {
    // Wait for data to load and DOM to be ready
    if (!data || !sliderContainerRef.current) return;
    
    const sliderImages = sliderContainerRef.current.querySelectorAll('.slider-img');
    if (sliderImages.length === 0) return;

    // Initialize GSAP animations
    gsap.set('.slider-img:not(.active)', { scale: 0.9 });
    gsap.set('.slider-img.active', { scale: 1 });

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

    sliderImages.forEach(img => {
      img.addEventListener('click', () => handleImageClick(sliderImages, img));
    });

    // Make slider responsive
    const handleResize = () => {
      if (window.innerWidth < 768) {
        // Remove active class from all images on mobile
        sliderImages.forEach(img => {
          img.classList.remove('active');
        });
          
        // Set the middle image as active on mobile
        if (sliderImages.length > 0) {
          const middleIndex = Math.floor(sliderImages.length / 2);
          sliderImages[middleIndex].classList.add('active');
          gsap.to(sliderImages[middleIndex], { 
            scale: 1, 
            duration: 0.7, 
            ease: "power2.out" 
          });
        }
      } else {
        // Reset to default active state on larger screens
        sliderImages.forEach(img => {
          if (img.dataset.active === "true") {
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
      sliderImages.forEach(img => {
        img.removeEventListener('click', () => handleImageClick(sliderImages, img));
      });
    };
  }, [data]); // Add data as dependency

  return (
    <section className="mt-32 flex flex-col -space-y-30" id="hello">
      <h1 className="text-5xl text-center underline text-stone-600  font-bold">
         <span> </span>  ယောင်္ကျားလေး selection များ
      </h1>
      <section className="slider-container w-full flex items-center justify-center p-4" ref={sliderContainerRef}>
        <div className="slider-images flex items-center gap-3 sm:gap-5 overflow-x-auto py-10 w-full justify-center">
          {isLoading ? (
            <p className='text-center text-blue-400'>Loading...</p>
          ) : error ? (
            <p className='text-center text-red-400'>Error loading data</p>
          ) : data && data.data && data.data.length > 0 ? (
            data.data.map((item, index) => {
              // Determine if this should be the active item (middle item by default)
              const isActive = index === Math.floor(data.data.length / 2);
              
              return (
                <div 
                  key={item.id}
                  className={`slider-img w-20 h-72 sm:h-96 md:h-[560px] cursor-pointer transition-all ${isActive ? 'active' : ''}`}
                  data-active={isActive}
                >
                  {item.image_1_url ? (
                    <img 
                      src={item.image_1_url} 
                      alt={item.name} 
                      className="w-full h-full object-cover rounded-lg" 
                    />
                  ) : (
                    <img 
                      src="/image-not-found.png" 
                      alt="Not found" 
                      className="w-full h-full object-cover rounded-lg" 
                    />
                  )}
                  <div className="details mt-2 text-center">
                    <p className="text-sm text-gray-600">{item.elector_name || "No role specified"}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <p className='text-center text-red-400'>No Elector Found</p>
          )}
        </div>
      </section>
    </section>
  );
}

export default IndexSelectionBoys;