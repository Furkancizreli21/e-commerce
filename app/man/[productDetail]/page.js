import { manProducts } from "@/helpers/dummy-data";
import Image from "next/image";
import { Button, Rating } from "@mui/material";
import { ChevronRight, Heart, Link, RefreshCw, Share2, ShieldCheck, Truck } from "lucide-react";

export default async function ProductPage({ params }) {
  const { productDetail } = await params;
  const product = manProducts.find((item) => String(item.id) === String(productDetail));

  if (!product) {
    return <div className="pt-24 text-center text-sm text-gray-500">Product not found: {productDetail}</div>;
  }

  return (
    <div className="bg-white min-h-screen pb-20 pt-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center text-sm text-gray-500 mb-8 overflow-hidden">
          <span className="hover:text-gray-900 cursor-pointer transition">Home</span>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link href="/man" className="hover:text-gray-900 cursor-pointer transition">
            Man
          </Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="hover:text-gray-900 cursor-pointer transition">Clothing</span>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="font-medium text-gray-900 truncate">{product.name}</span>
        </nav>

        <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
          <div className="product-gallery flex flex-col-reverse lg:flex-row gap-4">
            <div className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-hidden pb-2 lg:pb-0 w-full lg:w-24 shrink-0 no-scrollbar">
              {[product.image, product.image, product.image, product.image].map((img, idx) => (
                <button
                  key={idx}
                  className={`relative w-20 h-24 lg:w-full lg:h-32 shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                    idx === 0 ? "border-black ring-1 ring-black/10" : "border-transparent hover:border-gray-200"
                  }`}
                >
                  <Image src={img} alt="thumbnail" fill className="object-cover" />
                </button>
              ))}
            </div>

            <div className="relative w-full aspect-3/4 lg:aspect-4/5 bg-gray-100 rounded-xl overflow-hidden shadow-sm group">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full shadow-sm">
                New Season
              </div>
            </div>
          </div>

          <div className="mt-10 lg:mt-0 lg:sticky lg:top-24 h-fit">
            <div className="mb-6 border-b border-gray-100 pb-6">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-2">{product.name}</h1>

              <div className="flex items-center justify-between mt-4">
                <div className="flex items-end gap-3">
                  <p className="text-3xl font-medium text-gray-900">€{product.price}</p>
                  <span className="mb-1 text-sm text-gray-500 line-through">€{(product.price * 1.2).toFixed(2)}</span>
                </div>

                <div className="flex items-center gap-1">
                  <Rating name="read-only" value={4.5} precision={0.5} readOnly size="small" />
                  <span className="text-sm text-gray-500 ml-1 underline cursor-pointer hover:text-gray-900">42 Reviews</span>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-900 mb-3">
                Color: <span className="text-gray-500 font-normal">Black</span>
              </h3>
              <div className="flex gap-3 ">
                <button className="w-10 h-10 rounded-full bg-black border-2 border-white ring-2 ring-gray-300 ring-offset-2 transition-all cursor-pointer"></button>
                <button className="w-10 h-10 rounded-full bg-blue-900 border-2 border-white ring-1 ring-gray-200 transition-all hover:scale-110 cursor-pointer"></button>
                <button className="w-10 h-10 rounded-full bg-[#f5f5dc] border-2 border-white ring-1 ring-gray-200 transition-all hover:scale-110 cursor-pointer"></button>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-medium text-gray-900">Select Size</h3>
                <button className="text-xs font-medium text-indigo-600 hover:text-indigo-500 underline">Size Guide</button>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                  <button
                    key={size}
                    className={`flex items-center justify-center py-2 text-sm font-medium uppercase border rounded-md transition-all cursor-pointer ${
                      size === "M"
                        ? "border-black bg-black text-white shadow-md"
                        : "border-gray-200 text-gray-900 hover:border-gray-900 bg-white hover:bg-gray-50"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="flex-1 bg-black border border-transparent text-white py-2 px-4 rounded-full text-base font-semibold hover:bg-gray-800 transition-all active:scale-[0.98] shadow-lg shadow-gray-200 cursor-pointer">
                Add to Cart
              </button>
              <button className="group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-gray-200 text-gray-500 hover:bg-gray-50 hover:text-red-500 transition-colors  cursor-pointer">
                <Heart className="w-6 h-6 group-hover:fill-current transition-all " />
              </button>
              <button className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors cursor-pointer">
                <Share2 className="w-5 h-5 " />
              </button>
            </div>

            <div className="grid grid-cols-1 gap-y-4 pt-8 border-t border-gray-100">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-gray-50 rounded-lg">
                  <Truck className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Free Shipping</p>
                  <p className="text-xs text-gray-500">Free standard shipping on orders over €100.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-gray-50 rounded-lg">
                  <RefreshCw className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Easy Returns</p>
                  <p className="text-xs text-gray-500">Return within 30 days of purchase.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-gray-50 rounded-lg">
                  <ShieldCheck className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Secure Checkout</p>
                  <p className="text-xs text-gray-500">SSL Encrypted seamless transaction.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
