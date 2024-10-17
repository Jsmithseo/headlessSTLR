import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import HomeButton from "./components/button";
import { logo, headerMedia, sweetTinaTributeBand } from "../../public/images";

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
    <header className="flex flex-col  relative z-50  text-white md:h-screen lg:h-screen prose">
      <div className="px-7 py-14 lg:px-40">
        {/* Navigation bar */}
        <nav className="relative flex flex-row sm:flex-row justify-between items-center bg-transparent z-50 ">
          <div className="flex flex-col md:flex-row  gap-4 ">
            <Image
              src={logo}
              alt="logo"
              width={48}
              height={59}
              className="w-[68px] h-[85px]"
            />
            <div className="flex flex-col justify-between">
              <h1 className="text-[27px] md:text-5xl">STLR Entertainment</h1>
              <p className="text-lg md:text-xl font-bold ">
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
              <p className="text-white text-sm sm:text-base">
                1 (510) 603-6726
              </p>
            </div>
            <ul className="flex flex-col lg:flex-row gap-10 items-center justify-center mt-2 sm:mt-0">
              {navItems.map((navItem) => (
                <li key={navItem.name} className="list-none">
                  <Link
                    href={navItem.link}
                    className="text-darkGrey font-bold text-sm md:text-base no-underline"
                  >
                    {navItem.name.toUpperCase()}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>

      <div className="px-7 lg:px-40 flex flex-col  md:flex-row md:grid md:grid-cols-[30%_auto] md:h-full z-50 items-center">
        <div
          className=" bg-cover bg-center bg-no-repeat  h-[369px] w-full object-cover"
          style={{
            backgroundImage: `url(${sweetTinaTributeBand.src})`,
          }}
        />

        <div className="flex flex-col gap-6  md:text-left md:pl-16">
          <div>
            <h1 className=" font-extrabold text-4xl md:text-[42px] leading-[1.2]">
              Book Live <br />
              Entertainment Artists
            </h1>
          </div>
          <div className="flex flex-row gap-6 sm:gap-4= justify-center md:justify-start">
            <HomeButton className="border-none text-sm sm:text-base w-min">
              BOOK AN ARTIST
            </HomeButton>
            <HomeButton className="bg-transparent border border-gray-700 text-sm sm:text-base w-min">
              NEWSLETTER
            </HomeButton>
          </div>
          <div>
            <p className="md:text-2xl text-left text-[#999999]">
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
      </div>

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
