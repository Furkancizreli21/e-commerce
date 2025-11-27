import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-8 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4 tracking-wide">Lumière</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Redefining fashion for the modern world. Quality, comfort, and style — all in one place.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">About</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <a href="#" className="hover:text-white transition">
                Our Story
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Sustainability
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Shop</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <a href="#" className="hover:text-white transition">
                Men
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Women
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Kids
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Accessories
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              Email:{" "}
              <a href="mailto:info@lumiere.com" className="hover:text-white">
                info@lumiere.com
              </a>
            </li>
            <li>
              Phone:{" "}
              <a href="tel:+905134146411" className="hover:text-white">
                +90 513 414 64 11
              </a>
            </li>
            <li>Address: Istanbul, Türkiye</li>
          </ul>

          <div className="flex gap-4 mt-4 text-gray-400">
            <FaFacebookF className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
            <FaTwitter className="hover:text-white cursor-pointer" />
            <FaYoutube className="hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Lumière. All rights reserved.</p>
      </div>
    </footer>
  );
}
