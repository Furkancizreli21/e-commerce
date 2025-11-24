"use client";

import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { productDetails } from "@/helpers/dummy-data";

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

export default function ProductsCarousel() {
  return (
    <div className="p-10 bg-white text-black">
      <h2 className="text-xl font-bold mb-10 text-center mt-10">BESTSELLERS</h2>

      <Carousel responsive={responsive} infinite autoPlay>
        {productDetails.map((product, index) => (
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
        ))}
      </Carousel>
    </div>
  );
}
