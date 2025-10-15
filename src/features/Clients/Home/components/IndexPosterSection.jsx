"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const IndexPosterSection = () => {
  const wrapperRef = useRef(null);
  const horizontalRef = useRef(null);
  
  // Refs for animations
  const headingRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const textGroupsRef = useRef([]);
  const charactersRef = useRef([]);
  const iconsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!wrapperRef.current || !horizontalRef.current) return;

    const totalScrollWidth = horizontalRef.current.scrollWidth - window.innerWidth;

    // Main horizontal scroll timeline
    const mainTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "top top",
        end: `+=${totalScrollWidth}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
      }
    });

    // Horizontal movement
    mainTimeline.to(horizontalRef.current, {
      x: -totalScrollWidth,
      ease: "none"
    });

    // Fade out landing section when scrolling starts
    const landingSection = headingRef.current?.parentElement?.parentElement;
    if (landingSection) {
      gsap.to(landingSection, {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        ease: "power2.in",
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: "top+=100 top",
          scrub: true,
        }
      });
    }

    // Fade out heading specifically
    if (headingRef.current) {
      gsap.to(headingRef.current, {
        opacity: 0,
        y: -100,
        scale: 0.9,
        duration: 1,
        ease: "power2.in",
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: "top+=200 top",
          scrub: true,
        }
      });
    }

    // Fade out subtitle
    if (subtitleRef.current) {
      gsap.to(subtitleRef.current, {
        opacity: 0,
        y: -50,
        duration: 0.8,
        ease: "power2.in",
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: "top+=150 top",
          scrub: true,
        }
      });
    }

    // Fade out description
    if (descriptionRef.current) {
      gsap.to(descriptionRef.current, {
        opacity: 0,
        y: -30,
        duration: 0.6,
        ease: "power2.in",
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: "top+=100 top",
          scrub: true,
        }
      });
    }

    // Text group animations - SIMPLIFIED for Myanmar text
    textGroupsRef.current.forEach((group, index) => {
      if (!group) return;
      
      const texts = group.querySelectorAll('.text-block');
      const icons = group.querySelectorAll('.icon-block');
      
      // Simplified text animations for Myanmar - no character splitting
      gsap.fromTo(texts,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: group,
            containerAnimation: mainTimeline,
            start: "left center",
            end: "right center",
            scrub: true
          }
        }
      );

      // Icon animations
      gsap.fromTo(icons,
        {
          scale: 0,
          rotation: -180,
          opacity: 0
        },
        {
          scale: 1,
          rotation: 0,
          opacity: 1,
          duration: 1.5,
          ease: "elastic.out(1, 0.5)",
          scrollTrigger: {
            trigger: group,
            containerAnimation: mainTimeline,
            start: "left center",
            end: "right center",
            scrub: true
          }
        }
      );
    });

    // Simplified animations for text blocks containing Myanmar
    charactersRef.current.forEach((textBlock, index) => {
      if (!textBlock) return;
      
      // Animate entire text blocks instead of individual characters
      gsap.fromTo(textBlock,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: textBlock,
            containerAnimation: mainTimeline,
            start: "left center",
            end: "right center",
            scrub: true
          }
        }
      );
    });

    // SVG path animations
    iconsRef.current.forEach((svg, index) => {
      if (!svg) return;
      
      const paths = svg.querySelectorAll('path');
      paths.forEach((path, pathIndex) => {
        const length = path.getTotalLength();
        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length
        });
        
        gsap.to(path, {
          strokeDashoffset: 0,
          duration: 2,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: svg,
            containerAnimation: mainTimeline,
            start: "left center",
            end: "right center",
            scrub: true
          }
        });
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // REMOVED character splitting function for Myanmar text
  // Using simple text blocks instead

  // Helper function to create gradient text
  const GradientText = ({ text, gradient, className = "" }) => (
    <span className={`text-block ${className}`} style={{
      background: gradient,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      display: 'inline-block'
    }}>
      {text}
    </span>
  );

  return (
    <section 
      ref={wrapperRef}
      className="relative h-screen overflow-hidden bg-white"
      style={{ 
        fontFamily: "'Padauk', 'Noto Sans Myanmar', sans-serif",
        fontFeatureSettings: '"locl"' // Important for Myanmar text rendering
      }}
    >
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Padauk:wght@400;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Myanmar:wght@400;700&display=swap');
        
        /* Myanmar text specific styles */
        .myanmar-text {
          font-family: 'Padauk', 'Noto Sans Myanmar', sans-serif;
          font-weight: 700;
          line-height: 1.3;
          font-feature-settings: "locl";
          font-kerning: normal;
          text-rendering: optimizeLegibility;
        }
        
        /* Ensure proper text rendering */
        .text-block {
          font-family: inherit;
          line-height: inherit;
        }
      `}</style>

      {/* Fixed Landing Section */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
      </div>

      {/* Horizontal Scrolling Content */}
      <div className="absolute inset-0 z-20">
        <div 
          ref={horizontalRef}
          className="flex h-screen items-center"
          style={{ width: '600vw' }}
        >
          {/* Section 1 */}
          <div 
            ref={el => textGroupsRef.current[0] = el}
            className="w-screen flex items-center justify-center px-8"
          >
            <div className="text-center max-w-6xl myanmar-text">
              <GradientText 
                text="2024-" 
                gradient="linear-gradient(135deg, #059669, #10B981)"
                className="text-7xl md:text-9xl font-bold block mb-4"
              />
              <GradientText 
                text="2025" 
                gradient="linear-gradient(135deg, #7C3AED, #8B5CF6)"
                className="text-7xl md:text-9xl font-bold block mb-4"
              />
              <GradientText 
                text="ပညာသင်နှစ်" 
                gradient="linear-gradient(135deg, #EA580C, #F97316)"
                className="text-7xl md:text-9xl font-bold block"
              />
            </div>
          </div>

          {/* Section 2 */}
          <div 
            ref={el => textGroupsRef.current[1] = el}
            className="w-screen flex items-center justify-center px-8"
          >
            <div className="text-center max-w-6xl myanmar-text">
              <p className="text-4xl md:text-6xl text-gray-900 mb-8">
                <span className="text-block">သင်တန်းကို </span>
                <span 
                  ref={el => charactersRef.current[0] = el}
                  className="text-block bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent font-bold"
                >
                
                </span>
                <span className="text-block"> တက်ရောက်လာကြသော </span>
              </p>
              
              <div className="icon-block mt-8">
                <svg width="80" height="90" viewBox="0 0 100 113" className="mx-auto">
                  <path
                    fill="#4B5563"
                    d="M30 40c-5-5-10-10-15-5s5 10 10 15c5 5 10 10 15 5s5-10 10-15c5-5 10-10 15-5s5 10 10 15l-10 10-10 10-10-10z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div 
            ref={el => textGroupsRef.current[2] = el}
            className="w-screen flex items-center justify-center px-8"
          >
            <div className="text-center max-w-6xl myanmar-text">
              <div className="icon-block mb-8">
                <svg width="80" height="80" viewBox="0 0 100 100" className="mx-auto">
                  <path
                    fill="#EA580C"
                    d="M50 10l10 30 30 10-30 10-10 30-10-30-30-10 30-10z"
                    transform="rotate(45 50 50)"
                  />
                </svg>
              </div>

              <GradientText 
                text="ပထမနှစ်" 
                gradient="linear-gradient(135deg, #059669, #10B981)"
                className="text-7xl md:text-9xl font-bold block mb-4"
              />
              
              <div className="flex flex-wrap justify-center items-center gap-4">
                <GradientText 
                  text="ညီငယ်" 
                  gradient="linear-gradient(135deg, #7C3AED, #8B5CF6)"
                  className="text-5xl md:text-7xl font-bold"
                />
                <span className="text-5xl md:text-7xl text-gray-900">နှင့်</span>
                <GradientText 
                  text="ညီမငယ် များကို" 
                  gradient="linear-gradient(135deg, #7C3AED, #8B5CF6)"
                  className="text-5xl md:text-7xl font-bold"
                />
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div 
            ref={el => textGroupsRef.current[3] = el}
            className="w-screen flex items-center justify-center px-8"
          >
            <div className="text-center max-w-6xl myanmar-text">
              <p className="text-4xl md:text-6xl text-gray-900 mb-8 leading-25">
                <span className="text-block"> ကွန်ပျုတာတက္ကသိုလ်(ဘားအံ)ရှိ </span>
                <span 
                  ref={el => charactersRef.current[1] = el}
                  className="text-block bg-gradient-to-r   from-purple-600 to-pink-600 bg-clip-text text-transparent font-bold"
                >
                  ပါမောက္ခချုပ်၊ ဒုတိယပါမောက္ခချုပ်နှင့် ဆရာ/ဆရာမ များနှင့်
                </span>
                <span className="text-block"> </span>
                <span 
                  ref={el => charactersRef.current[2] = el}
                  className="text-block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent font-bold"
                >
                   senior
                </span>
              </p>
            </div>
          </div>

          {/* Section 5 */}
          <div 
            ref={el => textGroupsRef.current[4] = el}
            className="w-screen flex items-center justify-center px-8"
          >
            <div className="text-center max-w-6xl myanmar-text">
              <GradientText 
                text="ကိုကို" 
                gradient="linear-gradient(135deg, #7C3AED, #8B5CF6)"
                className="text-7xl md:text-9xl font-bold block mb-4"
              />
              <GradientText 
                text="မမ များမှ" 
                gradient="linear-gradient(135deg, #059669, #10B981)"
                className="text-5xl md:text-7xl font-bold block mb-4"
              />
              <GradientText 
                text="လှိုက်လှဲနွေးထွေးစွာ" 
                gradient="linear-gradient(135deg, #EA580C, #F97316)"
                className="text-5xl md:text-7xl font-bold block"
              />
            </div>
          </div>

          {/* Section 6 */}
          <div 
            ref={el => textGroupsRef.current[5] = el}
            className="w-screen flex items-center justify-center px-8"
          >
            <div className="text-center max-w-6xl myanmar-text">
              <p className="text-4xl md:text-6xl text-gray-900 mb-8">
                <span className="text-block">ကြိုဆိုပါသည်</span>
              </p>
              
              <div className="icon-block mt-8">
                <svg width="60" height="60" viewBox="0 0 60 60" className="mx-auto">
                  <path
                    fill="url(#diamond-gradient)"
                    d="M30 5l25 25-25 25L5 30z"
                  />
                  <defs>
                    <linearGradient id="diamond-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#EA580C" />
                      <stop offset="100%" stopColor="#7C3AED" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-100 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-pink-100 rounded-full blur-3xl"></div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex flex-col items-center text-gray-500">
          <span className="text-sm mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndexPosterSection;