"use client";
import Link from "next/link";
import Image from "next/image";
import { manProducts } from "@/helpers/dummy-data";
import { Rating } from "@mui/material";

export default function ManPage() {
  return (
    <section className="pt-24 mx-auto max-w-7xl px-4 pb-10">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:grid-cols-4">
        {manProducts.map((product) => (
          <Link key={product.id} href={`/man/${product.id}`} className="border-b border-r border-neutral-200">
            <div className="relative w-full aspect-3/4 bg-[#f7f7f7] ">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover "
              />
            </div>
            <div className="px-4 py-4 text-left flex flex-col">
              <p className="mt-2 text-[12px] text-neutral-900">₺{product.price?.toLocaleString("tr-TR")}</p>
              <p>{product.name}</p>
              <Rating name="static-rating" value={4.5} precision={0.5} readOnly size="small" />
              <button className="w-fit border-b border-gray-400 cursor-pointer hover:opacity-60 text-start">Add to cart</button>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
