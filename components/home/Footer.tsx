import React from "react";
import Link from "next/link";
import Image from "next/image";
import { threads } from "../../public/images";
import Container from "./components/container";

import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

import { tonySaunders, IMG_3146 } from "../../public/images";

function Footer() {
  const socials = [
    {
      link: "https://www.facebook.com/STLRENTERTAIN",
      icon: FaFacebook,
    },
    {
      link: "https://twitter.com/stlr_theris",
      icon: FaTwitter,
    },
    {
      link: "https://www.linkedin.com/in/stlrentertainment/",
      icon: FaLinkedin,
    },
    {
      link: "https://www.instagram.com/stlr_entertainment/",
      icon: FaInstagram,
    },
    {
      link: "https://www.youtube.com/channel/UCgDM6NHdkfEX38qhnoC8xkw",
      icon: FaYoutube,
    },
  ];

  const contacts = [
    { link: "(510) 603-6726", icon: FaPhone },
    { link: "contact@stlrentertainment.com", icon: FaEnvelope },
  ];

  const recent_posts = [
    {
      image: tonySaunders,
      title: "TONY SAUNDERS ALBUM RELEASE PARTY",
      link: "https://www.stlrentertainment.com/tony-saunders-album-release-party/",
      date: "",
    },
    {
      image: IMG_3146,
      title: "Navigating Pain Points When Booking Talent for Live Events",
      link: "https://www.stlrentertainment.com/navigating-pain-points-when-booking-talent-for-live-events/",
      date: "",
    },
  ];
  return (
    <footer className="bg-black ">
      <div className="flex flex-col gap-10 lg:gap-16 bg-[#121212] lg:flex-row px-7 py-10 lg:px-40">
        <div className="flex flex-col gap-5 flex-1">
          <div className="flex flex-col gap-10">
            <h2 className="text-xl">THE STLR EXPERIENCE</h2>
            <p className="lg:text-xl">
              As the world changes, we adapt. We’ve re-crafted and perfected our
              offerings to ensure we meet your entertainment needs in the
              ever-changing environment. From live bands to virtual DJs, tribute
              bands to personalized shows, we book every type of entertainer
              imaginable.
            </p>
          </div>
          <p>
            <Link
              href="https://www.threads.net/@stlr_entertainment"
              className="flex flex-row gap-2 items-center text-darkGrey no-underline"
            >
              <Image src={threads} alt="img" width={24} height={24} />
              New! Follow us on Threads!
            </Link>
          </p>
          <ul className="flex flex-row gap-4 list-none">
            {socials.map((social, i) => (
              <li key={i}>
                <Link href={social.link}>
                  <social.icon />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-10 flex-1">
          <h2 className="text-xl">CONTACT</h2>

          <div className="flex flex-col gap-2 ">
            {contacts.map((contact, i) => (
              <div className="flex flex-row items-center gap-3">
                <contact.icon size={18} color="#c65a1b" />
                <p className="text-white">{contact.link}</p>
              </div>
            ))}
          </div>

          <div>
            <p className="text-white">Billing and Accounting</p>
          </div>
        </div>
        <div className="flex flex-col gap-10 flex-1">
          <h2 className="text-lg">RECENT POSTS</h2>
          <div>
            <ul className="flex flex-col gap-5 list-none ">
              {recent_posts.map((post, i) => (
                <li key={i}>
                  <Link
                    href={post.link}
                    className="flex flex-row gap-3 no-underline"
                  >
                    <Image src={post.image} alt="img" height={75} />
                    <div className="flex flex-col gap-2">
                      <h2 className="text-lg">{post.title}</h2>
                      <p>{post.date}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="px-7 py-8 lg:px-40">
        <p className="text-sm">
          Copyright © 2024. STLR Entertainment LLC.{" "}
          <Link
            className="text-darkGrey font-normal text-sm"
            href="https://www.stlrentertainment.com/privacy-policy/"
          >
            Privacy Policy
          </Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
