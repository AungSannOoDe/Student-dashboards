"use client";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-blue-400    mt-10 ">
      <section className="px-12 py-10  text-white">
        <div className="flex lg:flex-row flex-col   justify-around space-x-10">
          <ul className="flex flex-col space-y-3">
            <li className="font-bold text-2xl">Pages</li>
            <li>
              {" "}
              <Link href="">Home</Link>{" "}
            </li>
            <li>
              <Link href="">Information</Link>
            </li>
            <li>
              <Link href="">Gallery</Link>
            </li>
            <li>
              <Link href="">Admin</Link>
            </li>
          </ul>
          <ul className="flex flex-col space-y-3">
            <li className="font-bold text-2xl">Rules</li>
            <li>Licnces</li>
            <li> <Link  href={"/clients/aboutus"}>About us</Link></li>
            <li>
              {" "}
              <Link href="/clients/terms">Terms and Conditions</Link>{" "}
            </li>
          </ul>
          <div className="flex flex-col space-y-5">
            <p className="text-3xl font-bold"> Contact us</p>
            <div className="flex flex-col space-y-2">
              <p className="text-2xl font-bold">Admin Team</p>
              <div className="flex space-x-9">
                <p className="text-sm">09-677513378</p>
                <p className="text-sm">aungsannoo962@gmail.com</p>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <p className="text-2xl font-bold">Student Affairs</p>
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
  );
};

export default Footer;
