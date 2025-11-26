import Link from "next/link";

export default function BrandStory() {
  return (
    <div className="bg-gray-50 py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-4">Our Story</h2>
      <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
        We started with a simple mission — to bring comfort and style together. Each product is crafted with care, designed to
        last, and made for people who value quality.
      </p>
      <div className="mt-5">
        <Link
          href="/ourstory"
          className="mt-6 bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition cursor-pointer"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}
