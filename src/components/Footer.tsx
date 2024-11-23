"use client";

import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";

const Footer = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <footer className="pt-20">
      <div className="bg-[#F9F9F9] py-8 flex justify-center px-6 md:px-10">
        <div className="container">
          {/* Upper section */}
          <div className="upper grid grid-cols-1 lg:grid-cols-2 gap-4 items-center pb-10 border-b">
            <div>
              <h2 className="font-semibold text-xl text-center lg:text-left">
                Premium products at your doorsteps!
              </h2>
              <p className="text-[#323232a1] text-center lg:text-left">
                <small>
                  Never miss anything from Us by signing up to our newsletter.
                </small>
              </p>
            </div>
          </div>

          {/* Footer content section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-10">
            {/* Company info */}
            <div className="space-y-5 text-center md:text-left">
              <div className="flex justify-center md:justify-start">
                <img
                  src="/haarshe-full-logo.png"
                  alt="HAARSHE STORE"
                  width={270}
                  height={20}
                />
              </div>
              <p className="text-gray-500 text-sm">
                <small>
                  We provide you with top-notch quality products, competitive
                  prices, and fast delivery, so what are you waiting for?
                </small>
              </p>
              <div className="flex justify-center md:justify-start space-x-6">
                <Link href="https://www.tiktok.com/@haarshe?_t=8qpiDVIPhz0&_r=1">
                  <FaTiktok />
                </Link>
                <Link href="https://www.facebook.com/profile.php?id=61564404159725">
                  <FaFacebook className="text-blue-500" />
                </Link>
                <Link href="https://www.instagram.com/haarsheonline">
                  <FaInstagram className="text-purple-700" />
                </Link>
              </div>
            </div>

            {/* Categories section */}
            <div className="text-center md:text-left">
              <h2 className="text-xl font-semibold mb-5">Categories</h2>
              <ul>
                <li className="footer_links mb-2">
                  <Link href="/Kitchen-Accessories">Kitchen Accessories</Link>
                </li>
                <li className="footer_links mb-2">
                  <Link href="/Wearables">Wearables</Link>
                </li>
                <li className="footer_links mb-2">
                  <Link href="/Gadgets">Gadgets</Link>
                </li>
                <li className="footer_links mb-2">
                  <Link href="/new-arrivals">New Arrivals</Link>
                </li>
                <li className="footer_links mb-2">
                  <Link href="/sale">On Sale</Link>
                </li>
                <li className="footer_links mb-2">
                  <Link href="/best-sellers">Best Sellers</Link>
                </li>
              </ul>
            </div>

            {/* Quick links section */}
            <div className="text-center md:text-left">
              <h2 className="text-xl font-semibold mb-5">Quick Links</h2>
              <ul>
                <li className="footer_links mb-2">
                  <Link href="/">Home</Link>
                </li>
                <li className="footer_links mb-2">
                  <Link href="/all">Shop</Link>
                </li>
                <li className="footer_links mb-2">
                  <Link href="/About">About Us</Link>
                </li>
                <li className="footer_links mb-2">
                  <Link href="/About">Refund Policy</Link>
                </li>
                <li className="footer_links mb-2">
                  <Link href="/About">Privacy Policy</Link>
                </li>
              </ul>
            </div>

            {/* Store info section */}
            <div className="text-center md:text-left">
              <h2 className="text-xl font-semibold mb-5">Store Information</h2>
              <ul>
                <li className="footer_links mb-2">
                  17303 Yukon Apt G Torrance,
                  <br /> Los Angeles, CA 90504, United States
                </li>
                <li className="footer_links mb-2">Call us: (332) 772-3392</li>
                <li className="footer_links mb-2">
                  Email us: salesamz@haarsheonline.net
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="mx-auto max-w-6xl bg-white py-5 container flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0 px-6">
        <div>
          <p className="text-[#777777] text-center lg:text-left">
            Copyright© Haarshe Store. All Rights Reserved.
          </p>
        </div>
        <div className="flex space-x-3">
          <img
            className="cursor-pointer"
            src="/payment.png"
            alt="Payment-cards"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
