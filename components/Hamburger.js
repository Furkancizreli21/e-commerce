"use client";
import { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { RxHamburgerMenu } from "react-icons/rx";
import { usePathname } from "next/navigation";
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

const Hamburger = () => {
  const [visible, setVisible] = useState(false);
  const path = usePathname();
  const isHome = path === "/";
  return (
    <div>
      <Sidebar
        visible={visible}
        onHide={() => setVisible(false)}
        position="left"
        className="bg-white text-black w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
      >
        <h2 className="text-lg font-semibold mb-4 text-center">Categories</h2>
        <ul>
          {menuItems.map((item, index) => (
            <li key={index} className="py-2 px-5 border-b border-gray-200 cursor-pointer hover:bg-gray-100">
              <a href="">{item}</a>
            </li>
          ))}
        </ul>
      </Sidebar>
      <RxHamburgerMenu
        onClick={() => setVisible(true)}
        fontSize={35}
        className={`${
          isHome
            ? "text-white cursor-pointer hover:opacity-80 transition"
            : "text-black cursor-pointer hover:opacity-80 transition"
        }`}
      />
    </div>
  );
};

export default Hamburger;
