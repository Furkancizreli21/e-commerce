"use client";
import Image from "next/image";
import { CiSearch, CiHeart, CiUser, CiShoppingBasket } from "react-icons/ci";
import Hamburger from "@/components/Hamburger";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname();
  const isHome = path === "/";
  const logoSrc = isHome ? "/home/logo.webp" : "/home/logo-black.png";

  const iconColor = isHome ? "text-white" : "text-black";

  return (
    <nav className={`top-0 left-0 w-full flex justify-between items-center px-6 py-4 z-10 ${isHome ? "absolute" : "fixed "}`}>
      <Hamburger />

      <Link href="/">
        <Image src={logoSrc} alt="Logo" width={120} height={40} className="h-12 w-auto object-contain hover:opacity-90" />
      </Link>

      <ul className="flex items-center gap-3">
        <li>
          <CiUser size={25} className={`${iconColor} cursor-pointer`} />
        </li>
        <li>
          <CiSearch size={25} className={`${iconColor} cursor-pointer`} />
        </li>
        <li>
          <CiHeart size={25} className={`${iconColor} cursor-pointer`} />
        </li>
        <li>
          <CiShoppingBasket size={25} className={`${iconColor} cursor-pointer`} />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
