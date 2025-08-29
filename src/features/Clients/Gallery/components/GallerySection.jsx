"use client";
import { fetchGallery, galleryApiUrl } from '@/services/gallery';
import React,{useState, useEffect,useRef} from 'react'
import useSWR from 'swr'
import GallerySectionSkeleton from './GallerySectionSkeleton';
import gsap from 'gsap';
const GallerySection = () => {
  const  {data,isLoading,error}=useSWR(`${galleryApiUrl}`,fetchGallery)
  const [selectedItem, setSelectedItem] = useState(null);
   const modalRef = useRef(null);
  useEffect(() => {
     if (!selectedItem) return;
    if (selectedItem && modalRef.current) {
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, scale: 0.8, y: 50 },
        { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: "power3.out" }
      );
    }
  }, [selectedItem]);
  if(isLoading){
    return <GallerySectionSkeleton/>
  }
  return (
 <main className="main mt-10 ">

  <div className="gallery">
    {
      data && data?.data.length > 0 ? data?.data.map((item)=>(
        <figure key={item.id}>
        <img src={item.images_url} alt={item.title}  onClick={() => setSelectedItem(item)} />
        <figcaption>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </figcaption>
      </figure>
      )) : <p className='text-center text-red-400'>No Gallery Found</p>
    } 
    {selectedItem && (
      <div  ref={modalRef}
        className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
        onClick={() => setSelectedItem(null)}
      >
        <div className="relative max-w-4xl w-full px-4">
          <button
            className="absolute top-2 right-4 text-white text-3xl"
            onClick={() => setSelectedItem(null)}
          >
            &times;
          </button>
          <img
            src={selectedItem.images_url}
            alt="Zoomed"
            className="rounded-lg max-h-[80vh] w-auto mx-auto object-contain"
          />
           <div className="mt-4 text-center">
            <h3 className="text-xl text-white font-bold">{selectedItem.title}</h3>
            <p className="text-white mt-2">{selectedItem.description}</p>
          </div>
        </div>
      </div>
    )}
  </div>
</main>
  )
}

export default GallerySection