import { useState } from "react";
import video from "../images/home/home.mp4";
import logo from "../images/home/logo.webp";
import { CiSearch, CiHeart, CiUser, CiShoppingBasket } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { Sidebar } from "primereact/sidebar";

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

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Arka plan videosu */}
      <video className="absolute h-screen w-full object-cover" autoPlay muted loop playsInline>
        <source src={video} type="video/mp4" />
      </video>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 z-10">
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

        {/* İkonlar */}
        <ul className="flex items-center gap-3">
          <li>
            <CiSearch size={25} className="text-white hover:text-cyan-200 cursor-pointer transition" />
          </li>
          <li>
            <CiHeart size={25} className="text-white hover:text-cyan-200 cursor-pointer transition" />
          </li>
          <li>
            <CiUser size={25} className="text-white hover:text-cyan-200 cursor-pointer transition" />
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
  );
}

export default Home;
