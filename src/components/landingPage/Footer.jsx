import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="w-full bg-somig text-black py-6 font-quick border-t-2 border-chgrey">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center sm:pl-8 sm:pr-8">
          {/* Column 1 - About Us */}
          <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">About Us</h2>
            <p className="text-lg sm:text-md font-semibold w-full sm:w-2/3">
              HobbyHive connects enthusiasts, fostering communities and sharing passions through tailored experiences, interactive groups, and collaboration.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
            <h2 className="text-xl font-bold mb-2">Quick Links</h2>
            <ul className="text-md space-y-2">
              <li><a href="#" className="hover:underline font-semibold">Home</a></li>
              <li><a href="#" className="hover:underline font-semibold">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline font-semibold">Terms & Conditions</a></li>
              <li><a href="#" className="hover:underline font-semibold">FAQ</a></li>
            </ul>
          </div>

          {/* Column 3 - Contact Us */}
          <div className="w-full sm:w-1/3">
            <h2 className="text-xl font-bold mb-2">Contact Us</h2>
            <p className="text-md font-semibold">
              Email: <a href="mailto:info@company.com" className="hover:underline text-md font-semibold">contactus@hobbyhive.com</a>
            </p>
            <p className="text-md font-semibold">Phone: +91 9876543210</p>
            <p className="text-md font-semibold">Address: New Delhi, India</p>
            {/* Social Media Icons */}
            <div className="flex justify-start gap-4 mt-6 sm:mt-0">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <button className="w-10 h-10 sm:w-12 sm:h-12 bg-somig text-black border-2 border-chgrey hover:text-white rounded-full flex items-center justify-center hover:bg-blue-600 hover:border-0 transition duration-300">
                  <FaFacebook size="1.5rem" />
                </button>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <button className="w-10 h-10 sm:w-12 sm:h-12 bg-somig text-black border-2 border-chgrey hover:text-white rounded-full flex items-center justify-center hover:bg-black hover:border-0 transition duration-300">
                  <FaTwitter size="1.5rem" />
                </button>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <button className="w-10 h-10 sm:w-12 sm:h-12 bg-somig text-black border-2 border-chgrey hover:text-white rounded-full flex items-center justify-center hover:bg-pink-600 hover:border-0 transition duration-300">
                  <FaInstagram size="1.5rem" />
                </button>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <button className="w-10 h-10 sm:w-12 sm:h-12 bg-somig text-black border-2 border-chgrey hover:text-white rounded-full flex items-center justify-center hover:bg-blue-700 hover:border-0 transition duration-300">
                  <FaLinkedin size="1.5rem" />
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-6 border-t border-gray-700 pt-4">
          <p className="text-md font-semibold">&copy; {new Date().getFullYear()} HobbyHive. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
