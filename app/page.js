"use client";

import Image from "next/image";
import { useState } from "react";
import { CiSearch, CiHeart, CiUser, CiShoppingBasket } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { Sidebar } from "primereact/sidebar";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { productDetails } from "@/helpers/dummy-data";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const menuItems = [
  "Men's Clothing",
  "Women's Clothing",
  "Kids' Clothing",
  "Shoes",
  "Accessories",
  "Sportswear",
  "Outerwear",
  "Underwear & Lingerie",
  "Bags & Wallets",
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1600 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1600, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
  },
};

export default function Home() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div className="relative h-screen w-full overflow-hidden">
        <video className="absolute inset-0 h-full w-full object-cover" autoPlay muted loop playsInline>
          <source src="/home/home.mp4" type="video/mp4" />
        </video>

        <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-6 py-4 z-10">
          <RxHamburgerMenu
            onClick={() => setVisible(true)}
            fontSize={35}
            className="text-white cursor-pointer hover:opacity-80 transition"
          />

          <a href="">
            <Image
              src="/home/logo.webp"
              alt="Logo"
              width={120}
              height={40}
              className="h-12 w-auto object-contain hover:opacity-90"
            />
          </a>

          <ul className="flex items-center gap-3">
            <li>
              <CiUser size={25} className="text-white hover:text-cyan-200 cursor-pointer transition" />
            </li>
            <li>
              <CiSearch size={25} className="text-white hover:text-cyan-200 cursor-pointer transition" />
            </li>
            <li>
              <CiHeart size={25} className="text-white hover:text-cyan-200 cursor-pointer transition" />
            </li>
            <li>
              <CiShoppingBasket size={25} className="text-white hover:text-cyan-200 cursor-pointer transition" />
            </li>
          </ul>
        </nav>

        {/* PrimeReact Sidebar */}
        <Sidebar
          visible={visible}
          onHide={() => setVisible(false)}
          position="left"
          className="bg-white text-black w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
        >
          <h2 className="text-lg font-semibold mb-4 text-center">Categories</h2>
          <ul>
            {menuItems.map((item, index) => (
              <li key={index} className="py-2 px-5 border-b border-gray-200 cursor-pointer hover:bg-gray-100">
                <a href="">{item}</a>
              </li>
            ))}
          </ul>
        </Sidebar>
      </div>

      {/* Products */}
      <div className="p-10 bg-white text-black">
        <h2 className="text-xl font-bold mb-4 text-center">BESTSELLERS</h2>
        <Carousel responsive={responsive} infinite autoPlay>
          {productDetails.map((product, index) => {
            return (
              <div key={index} className="px-3">
                <div className="relative w-full h-[300px] mb-3">
                  <Image src={product.image} alt={product.name} fill className="object-contain cursor-pointer" />
                </div>
                <h3 className="text-md font-medium">{product.name}</h3>
                <p className="text-md mt-2">{product.price.toLocaleString("tr-TR")}$ </p>
                <a href="" className="inline-block border-b hover:scale-105 transition-transform duration-300">
                  Add to Cart
                </a>
              </div>
            );
          })}
        </Carousel>
      </div>

      {/* Man / Woman */}
      <div className="flex w-full gap-3 px-3 mb-10">
        {/* Man */}
        <div className="relative w-[calc(50%-6px)] h-[400px]">
          <Image src="/ProductImages/HomeImages/man.webp" alt="Man" fill className="w-full h-full object-cover" />
          <button className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-black/60 text-white px-6 py-2 rounded-full hover:bg-black transition cursor-pointer">
            Man
          </button>
        </div>

        {/* Woman */}
        <div className="relative w-[calc(50%-6px)] h-[400px]">
          <Image src="/ProductImages/HomeImages/woman.webp" alt="Woman" fill className="w-full h-full object-cover" />
          <button className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-black/60 text-white px-6 py-2 rounded-full hover:bg-black transition cursor-pointer">
            Woman
          </button>
        </div>
      </div>

      {/* About / Brand Story */}
      <div className="bg-gray-50 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Our Story</h2>
        <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
          We started with a simple mission — to bring comfort and style together. Each product is crafted with care, designed to
          last, and made for people who value quality.
        </p>
        <button className="mt-6 bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition cursor-pointer">
          Learn More
        </button>
      </div>

      {/* Lookbook */}
      <div className="relative w-full h-[400px] my-12">
        <Image src="/ProductImages/HomeImages/fashion.webp" alt="Lookbook" fill className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Style Lookbook 2025</h2>
          <p className="max-w-lg mb-6">
            Discover the latest trends and get inspired by our fashion lookbook — curated for every season.
          </p>
          <button className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition cursor-pointer">
            Explore the Lookbook
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-8 mt-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4 tracking-wide">Lumière</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Redefining fashion for the modern world. Quality, comfort, and style — all in one place.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">About</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Sustainability
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Shop</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Men
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Women
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Kids
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Accessories
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Contact</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                Email:{" "}
                <a href="mailto:info@lumiere.com" className="hover:text-white">
                  info@lumiere.com
                </a>
              </li>
              <li>
                Phone:{" "}
                <a href="tel:+905134146411" className="hover:text-white">
                  +90 513 414 64 11
                </a>
              </li>
              <li>Address: Istanbul, Türkiye</li>
            </ul>

            <div className="flex gap-4 mt-4 text-gray-400">
              <FaFacebookF className="hover:text-white cursor-pointer" />
              <FaInstagram className="hover:text-white cursor-pointer" />
              <FaTwitter className="hover:text-white cursor-pointer" />
              <FaYoutube className="hover:text-white cursor-pointer" />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Lumière. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
