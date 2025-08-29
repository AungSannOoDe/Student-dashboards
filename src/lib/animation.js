
export  default   function initSpolitAnimation(ScrollTrigger, gsap, SplitText, lenis) {
  
  const images = document.querySelectorAll(".img");
  const coverimg = document.querySelector(".sploitlight-cover-img");
  const introHeader = document.querySelector(" .sploitlight-intro-header h1");
  const outroHeader = document.querySelector(" .sploitlight-outro-header h1");
const coverHeading = document.querySelector(".cover-heading");
   let introHeaderSplit=null, outroHeaderSplit=null,coverHeadingSplit = null;;
   introHeaderSplit=SplitText.create(introHeader,{type:"words"});
   gsap.set(introHeaderSplit.words,{opacity:1});
    outroHeaderSplit=SplitText.create(outroHeader,{type:"words"});
    gsap.set(outroHeaderSplit.words,{opacity:0});
    gsap.set(outroHeader,{opacity:1});
if (coverHeading) {
    coverHeadingSplit = SplitText.create(coverHeading, { type: "chars" });
    gsap.set(coverHeadingSplit.chars, { opacity: 0, y: 50 });
  }
  const ScatterDirections = [
    { x: 1.3, y: 0.7 }, { x: -1.5, y: 1.0 }, { x: 1.1, y: -1.3 },
    { x: -1.7, y: 0.8 }, { x: 0.8, y: 1.5 }, { x: -1.0, y: -1.4 },
    { x: 1.6, y: 0.3 }, { x: -0.7, y: 1.7 }, { x: 1.2, y: -1.6 },
    { x: -1.4, y: 0.9 }, { x: 1.8, y: -0.5 }, { x: -1.1, y: -1.8 },
    { x: 0.9, y: 1.8 }, { x: -1.9, y: 0.4 }, { x: 1.0, y: -1.9 },
    { x: -0.8, y: 1.9 }, { x: 1.7, y: -1.0 }, { x: -1.3, y: -1.2 },
    { x: 0.7, y: 2.0 }, { x: 1.25, y: -0.2 }
  ];

  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const isMobile = screenWidth < 1000;
  const scatterMobile = isMobile ? 2.5 : 0.5;

  const startPositions = Array.from(images).map(() => ({
    x: 0, y: 0, z: -10000, scale: 0,
  }));

const endPositions = Array.from(images).map((_, i) => {
  const dir = ScatterDirections[i % ScatterDirections.length]; 
  return {
    x: dir.x * screenWidth * scatterMobile,
    y: dir.y * screenHeight * scatterMobile,
    z: 2000,
    scale: 1,
  };
});

  images.forEach((img, i) => {
    gsap.set(img, startPositions[i]);
  });

  if (coverimg) {
    gsap.set(coverimg, { z: -1000, scale: 0, x: 0, y: 0 });
  }

  ScrollTrigger.create({
    trigger: ".sploitlight",
    start: "top top",
    end: `+=${window.innerHeight * 15}px`,
    pin: true,
    pinSpacing: true,
    scrub: 1,
    onUpdate: (self) => {
      const progress = self.progress;
      images.forEach((img, i) => {
        const staggerDelay = i * 0.03;
        const scaleMultipler = isMobile ? 4 : 2;
        let imageProgress = Math.max(0, (progress - staggerDelay) * 4);
        let start = startPositions[i];
        let end = endPositions[i];
        const zValue = gsap.utils.interpolate(start.z, end.z, imageProgress);
        const scaleValue = gsap.utils.interpolate(start.scale, end.scale, imageProgress * scaleMultipler);
        const xValue = gsap.utils.interpolate(start.x, end.x, imageProgress);
        const yValue = gsap.utils.interpolate(start.y, end.y, imageProgress);
        gsap.set(img, {
          z: zValue,
          x: xValue,
          y: yValue,
          scale: scaleValue,
        });
      });
      if (coverimg) {
        const coverProgress = Math.max(0, (progress - 0.7) * 4);
        const coverZValue = -1000 + 1000 * coverProgress;
        const coverScaleValue = Math.min(1, coverProgress * 2);
        gsap.set(coverimg, {
          z: coverZValue,
          scale: coverScaleValue,
          x: 0,
          y: 0,
        });
      }
      if(introHeaderSplit && introHeaderSplit.words.length>0){
        if(progress>=0.6 && progress<=0.75){
 const  introFadeProgress=(progress-0.6)/0.15;
 const totalWords=introHeaderSplit.words.length;
    introHeaderSplit.words.forEach((word,index)=>{  
        const wordFaderogress=index/totalWords;
        const fadeRange=0.1;
        if(introFadeProgress>=wordFaderogress+fadeRange){
            gsap.set(word,{opacity:0})
        }
        else if(introFadeProgress<=wordFaderogress){
            gsap.set(word,{opacity:1})

        }
        else{
            const wordOpacity=1-(introFadeProgress-wordFaderogress)/fadeRange;
            gsap.set(word,{opacity:wordOpacity})
        }

    })
        }
        else if(progress<0.6){
           gsap.set(introHeaderSplit.words,{opacity:1})
        }
        else if(progress>0.75){
            gsap.set(introHeaderSplit.words,{opacity:0})
        }
      } 
        },
  });
  
}
