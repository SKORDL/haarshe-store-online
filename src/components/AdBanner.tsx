import React from "react";
import Link from "next/link";

const BannerOffer2: React.FC = () => {
  return (
    <div className="container mt-12 md:mt-20 lg:mt-26 flex justify-center">
      <div className="relative bg-[#F8FAFC] rounded-[40px] px-5 pt-10 lg:px-24 max-w-screen-xl">
        <div className="absolute inset-0">
          <img
            className="absolute w-full h-full object-contain dark:opacity-5"
            src="https://chisnghiax.com/ciseco/static/media/Moon.bf27dc577d1acccaba48430d353dbbe0.svg"
            alt="backgroundLineSvg"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <div className="flex flex-col h-full justify-center">
            <div className="w-16">
              <Link href="/" passHref>
                <img className="w-full h-full" src="H_logo.png" alt="Logo" />
              </Link>
            </div>
            <h2 className="font-semibold text-3xl sm:text-4xl xl:text-5xl  2xl:text-6xl mt-6 sm:mt-10 !leading-[1.13] tracking-tight">
              Don't miss out on
              <br />
              special offers
            </h2>
            <span className="block mt-6 text-slate-500 dark:text-slate-400">
              Register to receive news about the latest, savings combos,
              discount codes...
            </span>
            <ul className="space-y-4 mt-10">
              <li className="flex items-center space-x-4">
                <span className="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs text-purple-800 bg-purple-100 relative">
                  01
                </span>
                <span className="font-medium text-neutral-700 dark:text-neutral-300">
                  Savings combos
                </span>
              </li>
              <li className="flex items-center space-x-4">
                <span className="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs text-blue-800 bg-blue-100 relative">
                  02
                </span>
                <span className="font-medium text-neutral-700 dark:text-neutral-300">
                  Freeship
                </span>
              </li>
              <li className="flex items-center space-x-4">
                <span className="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-red-800 bg-red-100">
                  03
                </span>
                <span className="font-medium text-neutral-700 dark:text-neutral-300">
                  Premium magazines
                </span>
              </li>
            </ul>
          </div>
          <div className="mt-10 lg:mt-0 flex justify-center">
            <img
              className="w-full h-full"
              src="offer2.png"
              alt="Offer"
              style={{ display: "block", margin: "0 auto" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerOffer2;
