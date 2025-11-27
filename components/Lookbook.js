import Image from "next/image";
import Link from "next/link";

export default function Lookbook() {
  return (
    <div className="relative w-full h-[400px] my-12">
      <Image src="/ProductImages/HomeImages/fashion.webp" alt="Lookbook" fill className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Style Lookbook 2025</h2>
        <p className="max-w-lg mb-6">
          Discover the latest trends and get inspired by our fashion lookbook — curated for every season.
        </p>
        <Link href="/lookbook" className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition cursor-pointer">
          Explore the Lookbook
        </Link>
      </div>
    </div>
  );
}
