import Image from "next/image";
import Link from "next/link";

export default function GenderSection() {
  return (
    <div className="flex w-full gap-3 px-3 mb-10 mt-10">
      {/* Man */}
      <div className="relative w-[calc(50%-6px)] h-screen">
        <Link href="/man" className="block w-full h-full relative">
          <Image src="/ProductImages/HomeImages/man.webp" alt="Man" fill className="object-contain" />
          <button className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-black/60 text-white px-6 py-2 rounded-full hover:bg-black transition cursor-pointer">
            Man
          </button>
        </Link>
      </div>

      {/* Woman */}
      <div className="relative w-[calc(50%-6px)] h-screen">
        <Link href="/woman" className="block w-full h-full relative">
          <Image src="/ProductImages/HomeImages/woman.webp" alt="Woman" fill className="object-contain" />
          <button className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-black/60 text-white px-6 py-2 rounded-full hover:bg-black transition cursor-pointer">
            Woman
          </button>
        </Link>
      </div>
    </div>
  );
}
