import { ChefHat, ShoppingBag, Utensils } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

const Ad = () => {
  return (
    <div className="h-screen overflow-hidden">
      <main className="relative h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Animated blobs with adjusted positions */}
        <div className="absolute -left-40 top-1/4 h-72 w-72 animate-blob rounded-full bg-red-300 opacity-70 mix-blend-multiply blur-xl filter"></div>
        <div className="animation-delay-2000 absolute -right-40 top-1/3 h-72 w-72 animate-blob rounded-full bg-yellow-300 opacity-70 mix-blend-multiply blur-xl filter"></div>
        <div className="animation-delay-4000 absolute -bottom-8 left-20 h-72 w-72 animate-blob rounded-full bg-pink-300 opacity-70 mix-blend-multiply blur-xl filter"></div>

        <div className="relative z-10 w-full max-w-5xl overflow-hidden rounded-2xl bg-white/80 shadow-2xl backdrop-blur-sm">
          <div className="grid gap-6 px-6 py-8 lg:grid-cols-2 lg:gap-12 lg:p-12">
            <div className="flex flex-col justify-center text-center lg:text-left">
              <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Spice Up Your Kitchen Game!
              </h1>
              <p className="mb-6 text-base text-gray-700 sm:text-lg">
                Discover our fun and colorful kitchen accessories that make
                cooking a joy. From quirky utensils to stylish cookware, we've
                got everything to make your kitchen pop!
              </p>
              <div className="flex flex-col space-y-3 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0 lg:justify-start">
                <button className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-red-500 hover:bg-red-600 rounded-lg transition duration-200">
                  Shop Now
                </button>
                <button className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-red-500 border-2 border-red-500 rounded-lg hover:bg-red-50 transition duration-200">
                  Explore Collections
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80&w=2067"
                alt="Colorful kitchen accessories"
                className="rounded-xl object-cover w-full h-[300px] lg:h-[400px] shadow-lg"
              />
              <div className="absolute -right-4 -top-4 flex h-20 w-20 items-center justify-center rounded-full bg-yellow-400 text-2xl font-bold text-white shadow-lg">
                <span className="animate-bounce">50% OFF</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 flex items-center justify-center space-x-8">
          <div className="text-center">
            <Utensils className="mx-auto h-8 w-8 text-red-500" />
            <p className="mt-2 text-sm font-medium text-gray-700">
              1000+ Products
            </p>
          </div>
          <div className="text-center">
            <ShoppingBag className="mx-auto h-8 w-8 text-red-500" />
            <p className="mt-2 text-sm font-medium text-gray-700">
              Free Shipping
            </p>
          </div>
          <div className="text-center">
            <ChefHat className="mx-auto h-8 w-8 text-red-500" />
            <p className="mt-2 text-sm font-medium text-gray-700">
              Recipe Ideas
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};
export default Ad;
