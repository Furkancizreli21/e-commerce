import Hero from "@/components/Hero";
import ProductsCarousel from "@/components/ProductsCarousel";
import GenderSection from "@/components/GenderSection";
import BrandStory from "@/components/BrandStory";
import Lookbook from "@/components/Lookbook";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductsCarousel />
      <GenderSection />
      <BrandStory />
      <Lookbook />
      <Footer />
    </>
  );
}
