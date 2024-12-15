import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="w-full bg-somig text-black py-6 font-quick border-t-2 border-chgrey">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between pl-20">
          {/* Column 1 */}
          <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
            <h2 className="text-3xl font-bold mb-2">About Us</h2>
            <p className="text-lg font-semibold w-2/3">
              We are a company dedicated to providing excellent services and products. Our goal is to exceed your expectations.
            </p>
          </div>

          {/* Column 2 */}
          <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
            <h2 className="text-2xl font-bold mb-2">Quick Links</h2>
            <ul className="text-lg space-y-2">
              <li><a href="#" className="hover:underline font-semibold">Home</a></li>
              <li><a href="#" className="hover:underline font-semibold">Services</a></li>
              <li><a href="#" className="hover:underline font-semibold">Contact</a></li>
              <li><a href="#" className="hover:underline font-semibold">About</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="w-full sm:w-1/3">
            <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
            <p className="text-lg font-semibold">
              Email: <a href="mailto:info@company.com" className="hover:underline text-lg font-semibold">info@company.com</a>
            </p>
            <p className="text-lg font-semibold">Phone: +123 456 7890</p>
            <p className="text-lg font-semibold">Address: 123 Main Street, City, Country</p>
                   {/* Social Media Icons */}
        <div className="flex justify-left gap-3 mt-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <button className="w-12 h-12 bg-somig text-black border-2 border-chgrey hover:text-white rounded-full flex items-center justify-center hover:bg-blue-600 hover:border-0 transition duration-300">
              <FaFacebook size={24} />
            </button>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <button className="w-12 h-12 bg-somig text-black border-2 border-chgrey hover:text-white rounded-full flex items-center justify-center hover:bg-black hover:border-0 transition duration-300">
              <FaXTwitter size={24} />
            </button>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <button className="w-12 h-12 bg-somig text-black border-2 border-chgrey hover:text-white rounded-full flex items-center justify-center hover:bg-pink-600 hover:border-0 transition duration-300">
              <FaInstagram size={24} />
            </button>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <button className="w-12 h-12 bg-somig text-black border-2 border-chgrey hover:text-white rounded-full flex items-center justify-center hover:bg-blue-700 hover:border-0 transition duration-300">
              <FaLinkedin size={24} />
            </button>
          </a>
        </div>
          </div>
        </div>

 

        <div className="text-center mt-6 border-t border-gray-700 pt-4">
          <p className="text-lg font-semibold">&copy; {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
