"use client";

import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { productDetails } from "@/helpers/dummy-data";

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1600 }, items: 5 },
  desktop: { breakpoint: { max: 1600, min: 1024 }, items: 4 },
  tablet: { breakpoint: { max: 1024, min: 768 }, items: 2 },
  mobile: { breakpoint: { max: 768, min: 0 }, items: 1 },
};

export default function ProductsCarousel() {
  return (
    <section className="py-20 bg-white text-black">
      <div className="container mx-auto px-4">
        {/* Modern Başlık */}
        <h2 className="text-3xl font-light tracking-[0.2em] text-center mb-14 uppercase">Bestsellers</h2>

        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={3000}
          containerClass="-mx-3 pb-8" // pb-8: Alt taraftaki noktalar (dots) için boşluk bırakır
          itemClass="px-3"
          removeArrowOnDeviceType={["tablet", "mobile"]}
        >
          {productDetails.map((product, index) => (
            <div key={index} className="group cursor-pointer flex flex-col h-full">
              {/* Görsel Alanı: Resim tam oturur, hover'da büyür, buton alttan çıkar */}
              <div className="relative w-full aspect-3/4 bg-gray-100 overflow-hidden mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Hover Butonu */}
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-10">
                  <button className="w-full bg-white text-black font-medium py-3 text-sm shadow-lg hover:bg-black hover:text-white transition-colors uppercase tracking-wide cursor-pointer">
                    Add to Cart
                  </button>
                </div>
              </div>

              {/* Bilgiler */}
              <div className="text-center space-y-1">
                <h3 className="text-sm font-medium text-gray-900 uppercase tracking-wide truncate px-2">{product.name}</h3>
                <p className="text-base text-gray-500 font-light">€{product.price.toLocaleString("tr-TR")}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
