import Image from "next/image";
import { client, urlFor } from "../lib/sanity";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  ArrowRight,
  ChevronRight,
  Shield,
  ShoppingBag,
  Truck,
} from "lucide-react";

async function getData() {
  const query = "*[_type == 'heroImage'][0]";

  const data = await client.fetch(query);

  return data;
}

export default async function Hero() {
  const data = await getData();
  return (
    <div className="min-h-[calc(100vh-4rem)]">
      <div className="relative overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-6rem)] py-8">
            {/* Left Column - Content */}
            <div className="flex flex-col justify-center space-y-8">
              <div className="space-y-6">
                <span className="inline-flex items-center rounded-full bg-indigo-50 px-4 py-1.5 text-sm font-medium text-violet-800">
                  New Collection 2024
                </span>
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900">
                  Quality Products at
                  <span className="block text-violet-800">Great Prices!</span>
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl">
                  We sell only the most exclusive and high quality products for
                  you. We are the best so come and shop with us.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/all">
                  <button className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-red-600 hover:bg-red-400 rounded-full transition duration-200 shadow-lg hover:shadow-xl">
                    Shop Now
                    <ShoppingBag className="ml-2 h-5 w-5" />
                  </button>
                </Link>
                <Link href="/all">
                  <button className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-red-600 bg-white border-2 border-red-600 rounded-full hover:bg-red-50 transition duration-200">
                    View Collection
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-4 pt-8 border-t border-gray-100">
                <div className="flex items-center gap-3">
                  <Truck className="h-8 w-8 text-red-600" />
                  <div>
                    <h3 className="font-semibold">Free Shipping</h3>
                    <p className="text-sm text-gray-600">On orders over $100</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="h-8 w-8 text-red-600" />
                  <div>
                    <h3 className="font-semibold">Secure Payment</h3>
                    <p className="text-sm text-gray-600">100% Protected</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative lg:h-[36rem] rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop"
                alt="Fashion Model"
                className="object-cover w-full h-full rounded-3xl shadow-2xl transform hover:scale-105 transition duration-700"
              />
              {/* Floating Card */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-indigo-600">
                      Spring Collection
                    </p>
                    <p className="text-2xl font-bold text-gray-900">
                      Up to 40% Off
                    </p>
                  </div>
                  <div className="bg-indigo-600 text-white px-4 py-2 rounded-lg">
                    <p className="font-semibold">Shop Now</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
