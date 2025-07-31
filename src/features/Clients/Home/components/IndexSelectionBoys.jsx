"use client";
import React,{ useEffect, useRef}  from 'react'
import { gsap } from 'gsap';
const IndexSelectionBoys = () => {
  const sliderContainerRef = useRef(null);
   useEffect(() => {
  const sliderImages = document.querySelectorAll('.slider-img');

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
      // Mobile adjustments
      document.querySelectorAll('.slider-img').forEach(img => {
        img.classList.remove('active');
      });
        
      // Activate the middle image by default on mobile
      const sliderImages = document.querySelectorAll('.slider-img');
  
        if (sliderImages.length > 3) sliderImages[3].classList.add('active');
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
  }, []);
  const images = [
    { id: 1, name: "Mike", role: "web3 Developer", height: "h-60 sm:h-80 md:h-[480px]" },
    { id: 2, name: "samite", role: "wordpress Developer", height: "h-72 sm:h-96 md:h-[560px]" },
    { id: 3, name: "hashi", role: "java Developer", height: "h-80 sm:h-[500px] md:h-[665px]" },
    { id: 4, name: "kaity", role: "web Developer", height: "h-80 sm:h-[500px] md:h-[665px]", active: true },
    { id: 5, name: "lauren", role: "php Developer", height: "h-80 sm:h-[500px] md:h-[665px]" },
    { id: 6, name: "ryan", role: "seo Developer", height: "h-72 sm:h-96 md:h-[560px]" },
    { id: 7, name: "dakes", role: "sql Developer", height: "h-60 sm:h-80 md:h-[480px]" },
  ];
  return (
<section className="mt-32 flex flex-col  -space-y-30 " id="hello ">
    <h1 className="text-5xl  text-center underline text-stone-600 opacity-65 font-bold ">Selection for Boys</h1>
     <section className="slider-container w-full flex items-center justify-center p-4" ref={sliderContainerRef}>
      <div className="slider-images flex items-center gap-3 sm:gap-5 overflow-x-auto py-10 w-full justify-center">
        {images.map((image) => (
          <div 
            key={image.id}
            className={`slider-img w-20 ${image.height} ${image.active ? 'active' : ''}`}
          >
            <img 
              src={`/images/${image.id}.png`} 
              alt={image.name} 
              className="w-full h-full object-cover rounded-lg" 
            />
            <h1>{image.name}</h1>
            <div className="details">
              <h2>{image.name}</h2>
              <p>{image.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  </section>
  )
}

export default IndexSelectionBoys