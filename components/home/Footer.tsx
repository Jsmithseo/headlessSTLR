import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto text-center">
        <p>© 2024 STL Entertainment | All Rights Reserved</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="https://facebook.com" className="hover:text-gray-400">
            Facebook
          </a>
          <a href="https://instagram.com" className="hover:text-gray-400">
            Instagram
          </a>
          <a href="https://twitter.com" className="hover:text-gray-400">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
