import Image from "next/image";

export default function OurStory() {
  return (
    <div className="bg-white pt-24 pb-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid gap-12 md:grid-cols-2 items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-gray-500">The Story Behind The Brand</p>

            <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-tight">Our Story</h1>

            <p className="mt-8 text-gray-700 leading-relaxed text-lg">
              “Discover the journey behind our brand — built on passion, creativity, and purpose. Every piece we create is crafted
              to inspire confidence and elevate your everyday style.”
            </p>

            <div className="mt-8">
              <p className="text-sm text-gray-500 mb-2">Be the first to know about new drops and editorials.</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Enter your email"
                />
                <button className="bg-black text-white px-5 py-2 rounded-md text-sm tracking-wide hover:bg-gray-900 transition">
                  Submit
                </button>
              </div>
            </div>

            <div className="mt-10">
              <div className="relative w-full aspect-4/3 overflow-hidden rounded-2xl shadow-md">
                <Image src="/ourstory/ourstorywoman.png" fill className="object-cover" alt="Our story visual" />
              </div>
            </div>
          </div>

          <div className="space-y-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold">Premium Editorial Showcase</h2>
              <p className="mt-4 text-gray-600">A glimpse into the visual world that shapes our collections.</p>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="relative w-full md:w-2/3 aspect-3/4 overflow-hidden rounded-2xl shadow-md">
                <Image src="/ourstory/ourstorywoman2.jpeg" fill className="object-cover" alt="Editorial visual" />
              </div>

              <p className="text-lg leading-relaxed text-gray-700 md:w-1/2">
                Our story began with a simple vision: to create timeless pieces that elevate everyday style. Guided by passion and
                craftsmanship, we focus on quality, comfort, and individuality. Every collection reflects our commitment to
                authenticity and modern elegance, designed to inspire confidence and celebrate your unique journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
              <div>
                <h3 className="text-lg font-semibold mb-2">Quality</h3>
                <p className="text-gray-600 text-sm">
                  We craft every piece with premium materials and refined attention to detail.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Sustainability</h3>
                <p className="text-gray-600 text-sm">
                  Our collections focus on conscious choices that respect people and the planet.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Timeless Design</h3>
                <p className="text-gray-600 text-sm">Styles created to stay elegant and relevant beyond seasons.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full mt-24">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Vision &amp; Mission</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="p-8 border border-gray-200 rounded-2xl shadow-sm bg-white">
              <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                To redefine modern elegance through timeless designs that inspire confidence, individuality, and authenticity. Our
                vision is to build a global community that appreciates craftsmanship, sustainability, and meaningful fashion.
              </p>
            </div>

            <div className="p-8 border border-gray-200 rounded-2xl shadow-sm bg-white">
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Our mission is to create high-quality, thoughtfully crafted pieces that prioritize comfort, durability, and style.
                We strive to empower every individual through designs that celebrate self-expression, ethical production, and
                modern sophistication.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
