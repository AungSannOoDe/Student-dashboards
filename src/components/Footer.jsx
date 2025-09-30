"use client"
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
<footer className="w-full bg-blue-400  h-100 mt-10 ">
    <section className="px-12 py-10  text-white">
      <div className="flex justify-around space-x-10">
        <ul className="flex flex-col space-y-3">
          <li> <Link href="">Home</Link> </li>
          <li>Gallery</li>
          <li>votes</li></ul>
        <div className="flex flex-col space-y-5">
          <div className="flex flex-col space-y-2">
            <p className="text-2xl"> Contact us</p>
            <div className="flex space-x-9">
              <p className="text-sm">09-677513378</p>
              <p className="text-sm">aungsannoo962@gmail.com</p>
            </div>
          </div>
         
          <div className="mt-3 flex space-x-5">
            <i className="fa-brands fa-facebook text-xl" />
            <i className="fa-brands fa-x-twitter text-xl" />
            <i className="fa-brands fa-tiktok text-xl" />
            <i className="fa-brands fa-google text-xl" />
            <i className="fa-brands fa-paypal text-xl" />
          </div>
          <div className="text-left">
            <h1>2025 © Group2™ All right Reversed</h1>
          </div>
        </div>
      </div>
    </section>
  </footer>
  )
}

export default Footer