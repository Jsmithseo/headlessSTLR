import React from "react";
import { logo, miaKeys } from "../../public/images/index";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

function page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="flex flex-col bg-black text-white px-7 lg:px-[72px] md:px-[38px] gap-10">
      <header className="flex flex-col gap-10 md:gap-5">
        <nav className="flex flex-row items-center py-10 justify-between lg:px-8">
          <div className="flex flex-col md:flex-row  gap-4 ">
          <Link href="https://www.stlrentertainment.com">
            <Image
              src={logo}
              alt="logo"
              width={48}
              height={59}
              className="w-[68px] h-[85px]"
            />
            </Link>
            
            <div className="flex flex-col justify-center gap-3">
              <h1 className="text-4xl lg:text-[43.2px] font-extrabold">
                STLR Entertainment
              </h1>
              <p className="text-lg font-semibold text-[#767676] ">
                We Book Premiere Talent
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between items-start h-full">
            <button
              className="lg:hidden  text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? "Close" : "Menu"}
            </button>
          </div>

          <div className="hidden lg:flex">
            <ul className="flex flex-row gap-2 text-[#767676] font-bold text-sm">
              <li>
                <Link href="services">SERVICES</Link>
              </li>
              <li>
                <Link href="artists">ARTISTS</Link>
              </li>
              <li>
                <Link href="news">NEWS</Link>
              </li>
              <li>
                <Link href="events">EVENTS</Link>
              </li>
              <li>
                <Link href="contact us">CONTACT US</Link>
              </li>
            </ul>
          </div>
        </nav>
        <aside className="flex flex-col gap-3">
          <h2 className="text-[32px] font-bold lg:font-semibold">Artists</h2>
          <p className="text-[#999999] text-lg">
            STLR Entertainment features a diverse network of talent, performing
            in genres from Classical, Jazz, to Rock and Roll.{" "}
          </p>

          <p className="text-lg">
            <strong>Call 1 (510) 603-6726 to book artists today.</strong>
          </p>
        </aside>
      </header>
      <main className="flex flex-col gap-2">
        <div className="flex flex-col gap-1 lg:flex-row lg:items-center">
          <label htmlFor="browse" className="text-[#999999] text-2xl">
            Browse by
          </label>
          <select
            name="browse"
            id="browse"
            className="rounded-lg p-4 text-black select-container px-4 lg:w-max"
          >
            <option value="featured">Featured Artists</option>
            <option value="americana">Americana</option>
            <option value="bluegrass">Bluegrass</option>
            <option value="jazz">Jazz</option>
          </select>
        </div>

        {/*artists filter */}
        <div className="flex flex-col md:flex-row md:flex-wrap lg:grid lg:grid-cols-4 items-start justify-start gap-1">
          <div className="my-4 mx-auto max-w-[300px] lg:mx-0  border-2 border-[#333] p-2.5 flex flex-col gap-3 items-center ">
            <Link
              href="https://www.stlrentertainment.com/mia-keys-on-fire/"
              className="h-52"
            >
              <figure className="h-full">
                <Image src={miaKeys} alt="mia" className="h-full" />
              </figure>
            </Link>
            <p className="text-lg py-2.5">
              <Link href="https://www.stlrentertainment.com/mia-keys-on-fire/">
                MIA: Keys on Fire!
              </Link>
            </p>
          </div>
          <div className="my-4 mx-auto max-w-[300px]  border-2 border-[#333] p-2.5 flex flex-col gap-3 items-center ">
            <Link
              href="https://www.stlrentertainment.com/mia-keys-on-fire/"
              className="h-52"
            >
              <figure className="h-full">
                <Image src={miaKeys} alt="mia" className="h-full" />
              </figure>
            </Link>
            <p className="text-lg py-2.5">
              <Link href="https://www.stlrentertainment.com/mia-keys-on-fire/">
                MIA: Keys on Fire!
              </Link>
            </p>
          </div>
          <div className="my-4 mx-auto max-w-[300px]  border-2 border-[#333] p-2.5 flex flex-col gap-3 items-center ">
            <Link
              href="https://www.stlrentertainment.com/mia-keys-on-fire/"
              className="h-52"
            >
              <figure className="h-full">
                <Image src={miaKeys} alt="mia" className="h-full" />
              </figure>
            </Link>
            <p className="text-lg py-2.5">
              <Link href="https://www.stlrentertainment.com/mia-keys-on-fire/">
                MIA: Keys on Fire!
              </Link>
            </p>
          </div>
          <div className="my-4 mx-auto max-w-[300px]  border-2 border-[#333] p-2.5 flex flex-col gap-3 items-center ">
            <Link
              href="https://www.stlrentertainment.com/mia-keys-on-fire/"
              className="h-52"
            >
              <figure className="h-full">
                <Image src={miaKeys} alt="mia" className="h-full" />
              </figure>
            </Link>
            <p className="text-lg py-2.5">
              <Link href="https://www.stlrentertainment.com/mia-keys-on-fire/">
                MIA: Keys on Fire!
              </Link>
            </p>
          </div>
          <div className="my-4 mx-auto max-w-[300px]  border-2 border-[#333] p-2.5 flex flex-col gap-3 items-center ">
            <Link
              href="https://www.stlrentertainment.com/mia-keys-on-fire/"
              className="h-52"
            >
              <figure className="h-full">
                <Image src={miaKeys} alt="mia" className="h-full" />
              </figure>
            </Link>
            <p className="text-lg py-2.5">
              <Link href="https://www.stlrentertainment.com/mia-keys-on-fire/">
                MIA: Keys on Fire!
              </Link>
            </p>
          </div>
          <div className="my-4 mx-auto max-w-[300px]  border-2 border-[#333] p-2.5 flex flex-col gap-3 items-center ">
            <Link
              href="https://www.stlrentertainment.com/mia-keys-on-fire/"
              className="h-52"
            >
              <figure className="h-full">
                <Image src={miaKeys} alt="mia" className="h-full" />
              </figure>
            </Link>
            <p className="text-lg py-2.5">
              <Link href="https://www.stlrentertainment.com/mia-keys-on-fire/">
                MIA: Keys on Fire!
              </Link>
            </p>
          </div>
          <div className="my-4 mx-auto max-w-[300px]  border-2 border-[#333] p-2.5 flex flex-col gap-3 items-center ">
            <Link
              href="https://www.stlrentertainment.com/mia-keys-on-fire/"
              className="h-52"
            >
              <figure className="h-full">
                <Image src={miaKeys} alt="mia" className="h-full" />
              </figure>
            </Link>
            <p className="text-lg py-2.5">
              <Link href="https://www.stlrentertainment.com/mia-keys-on-fire/">
                MIA: Keys on Fire!
              </Link>
            </p>
          </div>
          <div className="my-4 mx-auto max-w-[300px]  border-2 border-[#333] p-2.5 flex flex-col gap-3 items-center ">
            <Link
              href="https://www.stlrentertainment.com/mia-keys-on-fire/"
              className="h-52"
            >
              <figure className="h-full">
                <Image src={miaKeys} alt="mia" className="h-full" />
              </figure>
            </Link>
            <p className="text-lg py-2.5">
              <Link href="https://www.stlrentertainment.com/mia-keys-on-fire/">
                MIA: Keys on Fire!
              </Link>
            </p>
          </div>
        </div>

        <p className="text-sm text-[#999999]">
          Tuesday 20th of August 2024 01:19:37 AM
        </p>
      </main>

      <footer>
        <span className="text-[#999999] text-sm">
          Copyrigt @ 2024. STLR Entertainment LLC.{" "}
          <Link
            href="https://www.stlrentertainment.com/privacy-policy/"
            className="text-white underline"
          >
            Privacy Policy
          </Link>
        </span>
      </footer>
    </div>
  );
}

export default page;