import React from 'react'

const Footer = () => {
  return (
<footer className="w-full bg-blue-400  h-100 mt-10 ">
    <section className="px-12 py-10  text-white">
      <div className="flex justify-around space-x-10">
        <ul className="flex flex-col space-y-3">
          <li>Home</li>
          <li>About</li>
          <li>Reviews</li>
          <li>Contact us</li>
          <li>login</li></ul>
        <ul className="flex flex-col space-y-3">
          <li>Policy</li>
          <li>Technical</li>
          <li>Reviews</li>
          <li>Paging</li>
        </ul>
        <div className="flex flex-col space-y-5">
          <div className="flex flex-col space-y-2">
            <p className="text-2xl"> Contact us</p>
            <div className="flex space-x-9">
              <p className="text-sm">09-677513378</p>
              <p className="text-sm">aungsannoo962@gmail.com</p>
            </div>
          </div>
          <div className="border-b-2 border-white py-1 mt-6 w-fit ">
            <input type="text" className="outline-0  " placeholder="Enter email ...." />
            <button className="bg-white text-blue-600 rounded-sm  px-2 py-1  ">Send me</button>
          </div>
          <div className="mt-3 flex space-x-5">
            <i className="fa-brands fa-facebook text-xl" />
            <i className="fa-brands fa-x-twitter text-xl" />
            <i className="fa-brands fa-tiktok text-xl" />
            <i className="fa-brands fa-google text-xl" />
            <i className="fa-brands fa-paypal text-xl" />
          </div>
          <div className="text-left">
            <h1>2025 © AungSannOo™ All right Reversed</h1>
          </div>
        </div>
      </div>
    </section>
  </footer>
  )
}

export default Footer