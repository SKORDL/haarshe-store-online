"use client";

import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ShoppingBag,
  Leaf,
  Package,
  Flame,
} from "lucide-react";
import Link from "next/link";

const slides = [
  {
    image:
      "https://plus.unsplash.com/premium_photo-1726736512382-dde5c56ecdd1?q=80&w=2979&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Premium Essentials",
    subtitle: "Sustainable living starts here",
    description: "Shop our collection of top-notch quality products",
  },
  {
    image:
      "https://images.unsplash.com/photo-1557330359-ffb0deed6163?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Quality Living",
    subtitle: "Reduce your footprint",
    description: "Discover our range of daily use alternatives",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1681490810580-1e1525ee415f?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Sustainable Style",
    subtitle: "Beauty meets responsibility",
    description: "Perfect item choices for modern living",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-screen bg-transparent">
      {/* Slider */}
      <div className="relative h-[70vh] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white space-y-6 max-w-4xl px-4">
                <p className="text-lg font-medium tracking-wider">
                  {slide.subtitle}
                </p>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl">{slide.description}</p>
                <Link href="/all">
                  <button className="mt-8 px-8 py-4 bg-violet-900 hover:bg-violet-700 text-white rounded-full font-medium inline-flex items-center space-x-2 transition duration-300">
                    <ShoppingBag className="w-5 h-5" />
                    <span>Shop Now</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/30 hover:bg-white/50 transition duration-300"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/30 hover:bg-white/50 transition duration-300"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-white w-8" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex items-center space-x-4 p-6 bg-white rounded-xl shadow-lg">
            <div className="p-3 bg-green-100 rounded-lg">
              <Leaf className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Innovate</h3>
              <p className="text-gray-600">Innovate Your Space</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-6 bg-white rounded-xl shadow-lg">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Package className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Quality awaits</h3>
              <p className="text-gray-600">Quality daily essentials</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-6 bg-white rounded-xl shadow-lg">
            <div className="p-3 bg-purple-100 rounded-lg">
              <Flame className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Stylish</h3>
              <p className="text-gray-600">Your dream products awaits</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
