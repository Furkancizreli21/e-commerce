import { useState } from "react";
import video from "../images/home/home.mp4";
import logo from "../images/home/logo.webp";
import { CiSearch, CiHeart, CiUser, CiShoppingBasket } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { Sidebar } from "primereact/sidebar";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { productDetails } from "../../dummy/dummy-data";
import woman from "../images/ProductImages/HomeImages/woman.webp";
import man from "../images/ProductImages/HomeImages/man.webp";
function Home() {
  const [visible, setVisible] = useState(false);

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

  return (
    <>
      <div className="relative h-screen w-full overflow-hidden">
        {/* Arka plan videosu */}
        <video className="absolute h-screen w-full object-cover" autoPlay muted loop playsInline>
          <source src={video} type="video/mp4" />
        </video>
        {/* Navbar */}
        <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-6 py-4 z-10">
          {/* Hamburger */}
          <RxHamburgerMenu
            onClick={() => setVisible(true)}
            fontSize={35}
            className="text-white cursor-pointer hover:opacity-80 transition"
          />

          {/* Logo */}
          <a href="">
            <img src={logo} alt="Logo" className="h-12 object-contain hover:opacity-90" />
          </a>

          {/* İcons */}
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
        <Sidebar visible={visible} onHide={() => setVisible(false)} position="left" className="bg-white text-black w-1/4">
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
      {/*Products*/}
      <div className="p-10 bg-white text-black">
        <h2 className="text-xl font-bold mb-4 text-center">BESTSELLERS</h2>
        <Carousel responsive={responsive} infinite={true} autoPlay={true}>
          {productDetails.map((product, index) => {
            return (
              <div key={index}>
                <img src={product.image} className="h-130 object-contain cursor-pointer" />
                <h3 className="text-md font-medium">{product.name}</h3>
                <p className=" text-md mt-2">{product.price.toLocaleString("tr-TR")}$</p>
                <a href="" className="inline-block border-b hover:scale-105 transition-transform duration-300">
                  Add to Cart
                </a>
              </div>
            );
          })}
        </Carousel>
      </div>
      <div className="flex w-full  gap-3">
        {/* Erkek resmi */}
        <div className="relative w-[calc(50%-6px)] h-full">
          <img src={man} className="w-full h-full object-cover" alt="Man" />
          <button className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-black/60 text-white px-6 py-2 rounded-full hover:bg-black transition cursor-pointer">
            Man
          </button>
        </div>

        {/* Kadın resmi */}
        <div className="relative w-[calc(50%-6px)] h-full">
          <img src={woman} className="w-full h-full object-cover" alt="Woman" />
          <button className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-black/60 text-white px-6 py-2 rounded-full hover:bg-black transition cursor-pointer">
            Woman
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
