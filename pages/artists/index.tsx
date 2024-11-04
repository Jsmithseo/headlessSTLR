import React from "react";
import { logo, miaKeys, manhattans, KuEgenti, Soma, tony, fb, dw3, img } from "../../public/images/index";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../components/ui/ui/tooltip";
import { Menu } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "../../components/ui/ui/sheet";

function page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Services", link: "services" },
    { name: "Artists", link: "artists" },
    { name: "News", link: "news" },
    { name: "Events", link: "events" },
    { name: "Contact Us", link: "contact-us" },
  ];

  return (
    <div className="flex flex-col bg-black text-white px-7 lg:px-[72px] md:px-[38px] gap-10">
      <header className="flex flex-col gap-10 md:gap-5 text-[#999999]">
        <div className="px-2 py-8 lg:px-10 lg:py-12">
          {/* Navigation bar */}
          <nav className="relative flex flex-row sm:flex-row justify-between items-center bg-transparent z-50 ">
            <div className="flex flex-col md:flex-row md:items-center gap-4 ">
              <Link href='https://www.stlrentertainment.com/'>
              <Image
                src={logo}
                alt="logo"
                width={48}
                height={59}
                className="w-[68px] h-[85px]"
              />
              </Link>
              <div className="flex flex-col gap-1">
                <h1 className="text-4xl lg:text-[44px] lg:font-[800] font-bold  text-white">
                  STLR Entertainment
                </h1>
                <p className="text-lg md:text-xl font-bold lg:font-normal lg:text-lg">
                  We Book Premiere Talent
                </p>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="flex flex-col justify-between items-start h-full lg:hidden">
              <Sheet>
                <SheetTrigger>
                  <Menu />
                </SheetTrigger>
                <SheetContent className="pt-10">
                  <ul className="flex flex-col gap-3 items-end pt-10">
                    {navItems.map((navItem) => {
                      return (
                        <li key={navItem.link}>
                          <Link href={`/${navItem.link}`}>
                            {navItem.name.toUpperCase()}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </SheetContent>
              </Sheet>
            </div>

            {/* Navigation links */}
            <ul className="hidden lg:flex flex-col lg:flex-row gap-8 items-center justify-center ">
              {navItems.map((navItem) => (
                <li key={navItem.name} className="list-none ">
                  {navItem.name === "Artists" ? (
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <Link
                            href={navItem.link}
                            className="text-darkGrey font-bold text-sm no-underline"
                          >
                            {navItem.name.toUpperCase()}
                          </Link>
                        </TooltipTrigger>
                        <TooltipContent
                          side="bottom"
                          className="flex flex-col gap-3 text-white text-xs font-bold p-5 border-none bg-[#101010]"
                        >
                          <Link
                            href="https://www.stlrentertainment.com/educators/"
                            className="text-[#999999]"
                          >
                            ARTIST EDUCATORS
                          </Link>
                          <Link href="https://www.stlrentertainment.com/artists/">
                            PERFORMING ARTISTS
                          </Link>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  ) : (
                    <Link
                      href={navItem.link}
                      className="text-darkGrey font-bold text-sm no-underline"
                    >
                      {navItem.name.toUpperCase()}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <aside className="flex flex-col gap-3">
          <h2 className="text-[32px] font-bold lg:font-semibold text-white">
            Artists
          </h2>
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
              href="https://www.stlrentertainment.com/the-manhattans/"
              className="h-52"
            >
              <figure className="h-full">
                <Image src={manhattans} alt="man" className="h-full" />
              </figure>
            </Link>
            <p className="text-lg py-2.5">
              <Link href="https://www.stlrentertainment.com/the-manhattans/">
                The Manhattans of Sony Bivins
              </Link>
            </p>
          </div>
          <div className="my-4 mx-auto max-w-[300px]  border-2 border-[#333] p-2.5 flex flex-col gap-3 items-center ">
            <Link
              href="https://www.stlrentertainment.com/andre-delano/"
              className="h-52"
            >
              <figure className="h-full">
                <Image src={img} alt="and" className="h-full" />
              </figure>
            </Link>
            <p className="text-lg py-2.5">
              <Link href="https://www.stlrentertainment.com/andre-delano/">
                Andre Delano
              </Link>
            </p>
          </div>
          <div className="my-4 mx-auto max-w-[300px]  border-2 border-[#333] p-2.5 flex flex-col gap-3 items-center ">
            <Link
              href="https://www.stlrentertainment.com/soma/"
              className="h-52"
            >
              <figure className="h-full">
                <Image src={Soma} alt="som" className="h-full" />
              </figure>
            </Link>
            <p className="text-lg py-2.5">
              <Link href="https://www.stlrentertainment.com/soma/">
                Soma
              </Link>
            </p>
          </div>
          <div className="my-4 mx-auto max-w-[300px]  border-2 border-[#333] p-2.5 flex flex-col gap-3 items-center ">
            <Link
              href="https://www.stlrentertainment.com/ku-egenti-commedian/"
              className="h-52"
            >
              <figure className="h-full">
                <Image src={KuEgenti} alt="ku" className="h-full" />
              </figure>
            </Link>
            <p className="text-lg py-2.5">
              <Link href="https://www.stlrentertainment.com/ku-egenti-commedian/">
                Ku Egenti
              </Link>
            </p>
          </div>
          <div className="my-4 mx-auto max-w-[300px]  border-2 border-[#333] p-2.5 flex flex-col gap-3 items-center ">
            <Link
              href="https://www.stlrentertainment.com/dw3/"
              className="h-52"
            >
              <figure className="h-full">
                <Image src={dw3} alt="dw3" className="h-full" />
              </figure>
            </Link>
            <p className="text-lg py-2.5">
              <Link href="https://www.stlrentertainment.com/dw3/">
                DW3
              </Link>
            </p>
          </div>
          <div className="my-4 mx-auto max-w-[300px]  border-2 border-[#333] p-2.5 flex flex-col gap-3 items-center ">
            <Link
              href="https://www.stlrentertainment.com/intruders/"
              className="h-52"
            >
              <figure className="h-full">
                <Image src={fb} alt="fb" className="h-full" />
              </figure>
            </Link>
            <p className="text-lg py-2.5">
              <Link href="https://www.stlrentertainment.com/intruders/">
                The Intruders
              </Link>
            </p>
          </div>
          <div className="my-4 mx-auto max-w-[300px]  border-2 border-[#333] p-2.5 flex flex-col gap-3 items-center ">
            <Link
              href="https://www.stlrentertainment.com/tony-saunders/"
              className="h-52"
            >
              <figure className="h-full">
                <Image src={tony} alt="ton" className="h-full" />
              </figure>
            </Link>
            <p className="text-lg py-2.5">
              <Link href="https://www.stlrentertainment.com/tony-saunders/">
                Tony Saunders
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