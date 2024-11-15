"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag, Menu, LogOut, User } from "lucide-react";
import { useShoppingCart } from "use-shopping-cart";
import { useState } from "react";
import { useAuth } from "@/app/context/AuthContext";
import AuthModal from "./AuthModal";

const links = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/all" },
  { name: "🌟 New Arrivals", href: "/new-arrivals" },
  { name: "❇️ On Sale", href: "/sale" },
  { name: "Contact Us", href: "/ContactUs" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { handleCartClick, cartCount = 0 } = useShoppingCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { user, logout } = useAuth();

  return (
    <header className="border-b">
      <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        <Link href="/">
          <img
            src="/haarshe-full-logo.png"
            alt="HAARSHE STORE"
            width={170}
            height={1}
          />
        </Link>

        {/* Navigation links shown on larger screens */}
        <nav className="hidden gap-6 lg:flex 2xl:ml-16">
          {links.map((link, idx) => (
            <div key={idx}>
              {pathname === link.href ? (
                <Link
                  className="text-lg font-semibold text-primary"
                  href={link.href}
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  href={link.href}
                  className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Cart and Menu buttons */}
        <div className="flex divide-x border-r sm:border-l">
          <Button
            variant={"outline"}
            onClick={() => handleCartClick()}
            className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none"
          >
            <ShoppingBag />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 -mt-2 -mr-2 bg-primary text-orange rounded-full px-2 text-xs font-bold">
                {cartCount}
              </span>
            )}
            <span className="hidden text-xs font-semibold text-gray-500 sm:block">
              Cart
            </span>
          </Button>
          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <Button
                  variant={"outline"}
                  onClick={logout}
                  className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none"
                >
                  <LogOut />
                  <span className="hidden text-xs font-semibold text-gray-500 sm:block">
                    {user.username}
                  </span>
                </Button>
              </div>
            ) : (
              <Button
                variant={"outline"}
                onClick={() => setIsAuthModalOpen(true)}
                className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none"
              >
                <User />
                <span className="hidden text-xs font-semibold text-gray-500 sm:block">
                  Login
                </span>
              </Button>
            )}
          </div>
          <Button
            variant={"outline"}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none lg:hidden"
          >
            <Menu />
            <span className="hidden text-xs font-semibold text-gray-500 sm:block">
              Menu
            </span>
          </Button>
        </div>
      </div>

      {/* Navigation links shown on mobile*/}
      {isMenuOpen && (
        <div className="lg:hidden px-4 py-3 border-t">
          <nav className="flex flex-col gap-1">
            {links.map((link, idx) => (
              <div key={idx}>
                {pathname === link.href ? (
                  <Link
                    className="text-base font-semibold text-primary"
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <Link
                    href={link.href}
                    className="text-base font-semibold text-gray-600 transition duration-100 hover:text-primary"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </header>
  );
}
