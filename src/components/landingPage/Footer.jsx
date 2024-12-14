import React from 'react';

function Footer() {
  return (
    <footer className="w-full bg-somig text-black py-6 font-awe border-t-2 border-chgrey">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between pl-20">
          {/* Column 1 */}
          <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
            <h2 className="text-3xl font-bold mb-2">About Us</h2>
            <p className="text-lg w-2/3">
              We are a company dedicated to providing excellent services and products. Our goal is to exceed your expectations.
            </p>
          </div>

          {/* Column 2 */}
          <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
            <h2 className="text-2xl font-bold mb-2">Quick Links</h2>
            <ul className="text-lg space-y-2">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Services</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
              <li><a href="#" className="hover:underline">About</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="w-full sm:w-1/3">
            <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
            <p className="text-lg">
              Email: <a href="mailto:info@company.com" className="hover:underline">info@company.com</a>
            </p>
            <p className="text-sm">Phone: +123 456 7890</p>
            <p className="text-sm">Address: 123 Main Street, City, Country</p>
          </div>
        </div>

        <div className="text-center mt-6 border-t border-gray-700 pt-4">
          <p className="text-lg">&copy; {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
