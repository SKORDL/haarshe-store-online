"use client";

import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ShoppingBag,
  Leaf,
  Package,
  Recycle,
} from "lucide-react";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1610024062303-e355e94c7a8c?q=80&w=2070&auto=format&fit=crop",
    title: "Eco-Friendly Essentials",
    subtitle: "Sustainable living starts here",
    description: "Shop our collection of environmentally conscious products",
  },
  {
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2074&auto=format&fit=crop",
    title: "Zero Waste Living",
    subtitle: "Reduce your footprint",
    description: "Discover our range of reusable alternatives",
  },
  {
    image:
      "https://images.unsplash.com/photo-1585914924626-15adac1e6402?q=80&w=2071&auto=format&fit=crop",
    title: "Sustainable Style",
    subtitle: "Beauty meets responsibility",
    description: "Eco-conscious choices for modern living",
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
    <div className="relative h-screen bg-gray-50">
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
                <button className="mt-8 px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-full font-medium inline-flex items-center space-x-2 transition duration-300">
                  <ShoppingBag className="w-5 h-5" />
                  <span>Shop Now</span>
                </button>
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
              <h3 className="font-semibold text-lg">Eco-Friendly</h3>
              <p className="text-gray-600">Sustainable materials</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-6 bg-white rounded-xl shadow-lg">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Package className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Zero Waste</h3>
              <p className="text-gray-600">Minimal packaging</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-6 bg-white rounded-xl shadow-lg">
            <div className="p-3 bg-purple-100 rounded-lg">
              <Recycle className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Recyclable</h3>
              <p className="text-gray-600">100% recyclable products</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
