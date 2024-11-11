"use client";

import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

import React, { useState } from "react";

import Link from "next/link";

const Footer = () => {
  return (
    <div className="pt-20">
      <div className="bg-[#F9F9F9] py-8 flex justify-center">
        <div className="container">
          <div className="upper grid grid-cols-1  lg:grid-cols-2 gap-4 items-center pb-10 border-b">
            <div className="">
              <h2 className="font-semibold text-xl">
                Premium products at your doorsteps!
              </h2>
              <p className="text-[#323232a1]">
                <small>
                  Never Miss Anything From Multikart By Signing Up To Our
                  Newsletter.
                </small>
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4 pt-10">
            <div className="space-y-5">
              <div>
                <img
                  src="/haarshe-full-logo.png"
                  alt="HAARSHE STORE"
                  width={270}
                  height={20}
                />
              </div>
              <p className="text-gray-500 text-sm">
                <small>
                  We provide you with top notch quality products, competetive
                  prices and fast delivery, so what are you waiting for?
                </small>
              </p>

              <div className="flex space-x-8">
                <Link href="https://www.tiktok.com/@haarshe?_t=8qpiDVIPhz0&_r=1">
                  <FaTiktok />
                </Link>
                <Link href="https://www.tiktok.com/@haarshe?_t=8qpiDVIPhz0&_r=1">
                  <FaYoutube className="text-red-500" />
                </Link>
                <Link href="https://www.tiktok.com/@haarshe?_t=8qpiDVIPhz0&_r=1">
                  <FaInstagram className="text-purple-700" />
                </Link>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-5">CATEGORY</h2>
              <ul>
                <li className="footer_links ">Utilities</li>
                <li className="footer_links">Clothing</li>
                <li className="footer_links">Accessories</li>
                <li className="footer_links">Featured</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-5">WHY WE CHOOSE</h2>
              <ul>
                <li className="footer_links">Shipping & Return</li>
                <li className="footer_links">Secure Shopping</li>
                <li className="footer_links">Gallery</li>
                <li className="footer_links">Affiliates</li>
                <li className="footer_links">Contacrts</li>
                <li className="footer_links">
                  <Link href="/terms">Terms and condition</Link>
                </li>
                <li className="footer_links">Privacy Policy</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-5">STORE INFORMATION</h2>
              <ul>
                <li className="footer_links">
                  17303 Yukon Apt G Torrance,
                  <br /> Los Angeles, CA 90504, United States
                </li>
                <li className="footer_links">Call us: (332) 772-3392</li>
                <li className="footer_links">
                  Email us: salesamz@haarsheonline.net
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-6xl bg-white py-5 container flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
        <div>
          <p className="text-[#777777]">
            {" "}
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
    </div>
  );
};

export default Footer;
