import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import HomeButton from "./components/button";
import { logo, headerMedia, sweetTinaTributeBand } from "../../public/images";
import Header1 from "./typography/Header1";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Services", link: "services" },
    { name: "Artists", link: "artists" },
    { name: "News", link: "news" },
    { name: "Events", link: "events" },
    { name: "Contact Us", link: "contact-us" },
  ];

  return (
    <header className="flex flex-col gap-4 sm:gap-6 md:gap-8 relative z-50  text-white px-7 py-7 lg:px-[75px] lg:h-screen">
      {/* Navigation bar */}
      <nav className="relative flex flex-row sm:flex-row justify-between items-center bg-transparent z-50 py-7 ">
        <div className="flex flex-col lg:flex-row  gap-4 ">
          <Image
            src={logo}
            alt="logo"
            width={48}
            height={59}
            className="w-12 h-auto sm:w-16 sm:h-auto"
          />
          <div className="flex flex-col justify-between">
            <Header1 className="text-2xl sm:text-2xl md:text-3xl">
              STLR Entertainment
            </Header1>
            <p className="text-sm sm:text-base md:text-lg font-bold text-white">
              We Book Premiere Talent
            </p>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="flex flex-col justify-between items-start h-full">
          <button
            className="sm:hidden  text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? "Close" : "Menu"}
          </button>
        </div>
        <div
          className={`flex flex-col items-end justify-between mt-4 sm:mt-0 w-full sm:w-auto ${
            isMenuOpen ? "block" : "hidden lg:flex"
          }`}
        >
          <div>
            <p className="text-white text-sm sm:text-base">1 (510) 603-6726</p>
          </div>
          <ul className="flex flex-col lg:flex-row gap-2 sm:gap-4 items-center justify-center mt-2 sm:mt-0">
            {navItems.map((navItem) => (
              <li key={navItem.name} className="list-none">
                <Link
                  href={navItem.link}
                  className="text-white hover:underline text-sm sm:text-base"
                >
                  {navItem.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <section className="flex flex-col md:flex-row md:grid md:grid-cols-[30%_auto] md:h-full z-50 items-center justify-center ">
        <div
          className=" bg-cover bg-center bg-no-repeat w-[264px] h-[264px]  md:h-[207px] md:w-[207px]"
          style={{
            backgroundImage: `url(${sweetTinaTributeBand.src})`,
          }}
        />

        <div className="flex flex-col gap-4 sm:gap-6 text-center md:text-left">
          <div>
            <Header1 className="text-[42px] text-left leading-[1.2] ">
              Book Live <br />
              Entertainment Artists
            </Header1>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-4 justify-center md:justify-start">
            <HomeButton className="border-none text-sm sm:text-base w-min">
              BOOK AN ARTIST
            </HomeButton>
            <HomeButton className="bg-transparent border-gray-700 text-sm sm:text-base w-min">
              NEWSLETTER
            </HomeButton>
          </div>
          <div>
            <p className="text-lg text-left text-[#999999] leading-[1.75]">
              Are you looking to elevate your next event with live music
              entertainment?{" "}
              <Link
                href="https://www.stlrentertainment.com/artists/"
                className="underline text-white"
              >
                Book an STLR Artist!
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Background image */}
      <div
        className="absolute inset-0 h-full z-0"
        style={{
          backgroundImage: `url(${headerMedia.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </header>
  );
}

export default Header;
