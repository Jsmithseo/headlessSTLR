"use client";
import React from "react";
import Header1 from "./typography/Header1";
import HomeButton from "./components/button";
import Image from "next/image";
import Input from "../input";
import { useForm } from "react-hook-form";
import Container from "./components/container";

import {
  miaKeys,
  manhattan,
  andre,
  KuEgenti,
  Soma,
  Tony,
  FB_IMG_15659818965161,
  dw3,
  cutoutTierra,
  shopping,
  brooke,
  vasti,
  akiko,
  merchandise,
  Andre,
  AndreFlyer,
  cta,
} from "../../public/images";
import CardYouTube from "./components/cardYoutube";
import Link from "next/link";

function Main() {
  const artists_and_educators = [
    {
      caption: "MIA-Keys on Fire!",
      artist_link: "https://www.stlrentertainment.com/mia-keys-on-fire/",
      image_link: miaKeys,
    },
    {
      caption: "The Manhattans Of Sonny Bivins!",
      artist_link: "https://www.stlrentertainment.com/the-manhattans/",
      image_link: manhattan,
    },
    {
      caption: "Andre Delano",
      artist_link: "https://www.stlrentertainment.com/andre-delano/",
      image_link: andre,
    },
    {
      caption: "Soma",
      artist_link: "https://www.stlrentertainment.com/soma/",
      image_link: Soma,
    },
    {
      caption: "Ku Egenti",
      artist_link: "https://www.stlrentertainment.com/ku-egenti-comedian/",
      image_link: KuEgenti,
    },
    {
      caption: "DW3",
      artist_link: "https://www.stlrentertainment.com/dw3/",
      image_link: dw3,
    },
    {
      caption: "The Intruders",
      artist_link: "https://www.stlrentertainment.com/intruders/",
      image_link: FB_IMG_15659818965161,
    },
    {
      caption: "Tony Saunders",
      artist_link: "https://www.stlrentertainment.com/tony-saunders",
      image_link: Tony,
    },
    {
      caption: "Cutout Tierra Legacy",
      artist_link: "https://www.stlrentertainment.com/tierra-legacy/",
      image_link: cutoutTierra,
    },
    {
      caption: "Brooke",
      artist_link: "https://www.stlrentertainment.com/brooke-alford-violin/",
      image_link: brooke,
    },
  ];

  const featured_artists = [
    {
      name: "Vasti Jackson",
      genre: "Blues",
      description:
        "Vasti Jackson is an American electric blues guitarist, singer, songwriter and record producer. ",
      href: "https://www.stlrentertainment.com/vasti-jackson/",
      alt: "Visit Vasti’s profile page",
      imgSrc: vasti,
      embedId: "f4_MT5Bs5IA",
      title:
        "That&#39;s What Love Will Make You Do feat. Vasti Jackson | Playing For Change Band Live",
    },
    {
      name: "Akiko Tsuruga",
      genre: "Jazz",
      imgSrc: akiko,
      description:
        "Dubbed “Queen of the Organ”. Akiko Tsuruga is a world renowned, jazz musician of the highest caliber.",
      href: "https://www.stlrentertainment.com/akiko-tsuruga/",
      alt: "Visit Akiko’s profile page",
      embedId: "iMmoO2wpvQY",
      title: "Aligator Boogaloo",
    },
  ];

  const { register, handleSubmit, formState } = useForm();

  // const onSubmit = async () => {
  //   console.log(data);
  // };

  return (
    <main className="bg-black flex flex-col gap-5 text-white">
      <div className="artist-roster flex flex-col gap-4 lg:gap-10  px-7 py-14 lg:px-40">
        <div>
          <p className="font-bold">ARTIST ROSTER</p>
        </div>
        <div className="prose">
          <h2 className="font-extrabold lg:text-[50px]">
            STLR PERFORMING ARTISTS & EDUCATORS
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-5">
          <section className="flex flex-col gap-5 lg:w-1/3 flex-1">
            <p className="lg:text-2xl text-left text-[#999999] ">
              Choose from a wide variety of artists in our roster, including
              singers, musicians, tribute bands, DJ's, and more. Whether you're
              planning a wedding, corporate event, music festival, or any other
              special occasion, make your next event unforgettable with STLR
              Entertainment.
            </p>
            <div className="flex flex-row gap-10">
              <HomeButton className="text-sm sm:text-base w-min">
                PERFORMERS
              </HomeButton>
              <HomeButton className="text-sm sm:text-base w-min">
                EDUCATORS
              </HomeButton>
            </div>
          </section>
          <section className="flex flex-wrap gap-4 items-center justify-center flex-1">
            {artists_and_educators.slice(0, 8).map((item) => (
              <div
                className="artist-showcase-item w-[140px] h-[140px] aspect-square border border-solid p-2 rounded-full border-[#333] overflow-hidden"
                key={item.caption}
              >
                <Link
                  className="artist-showcase-item-thumb w-full h-full rounded-full overflow-hidden flex  justify-center"
                  href={item.artist_link}
                >
                  <Image
                    src={item.image_link}
                    alt={item.caption}
                    className="w-full h-full object-cover"
                    layout="responsive"
                  />
                </Link>
              </div>
            ))}
          </section>
        </div>
      </div>

      <div className="about-us flex flex-col-reverse md:flex-row md:grid md:grid-cols-[auto_40%]  lg:flex-row gap-12 mt-8 px-7 py-14 lg:px-40">
        <div className="flex flex-col gap-4 lg:w-full">
          <h3 className="text-lg sm:text-xl text-darkGrey font-bold">
            ABOUT US
          </h3>
          <h2 className="font-extrabold">Entertainment is Necessary</h2>
          <p className="">
            Founded in 2016, STLR Entertainment was born from a profound love
            for music and a vision to unite gifted artists with those seeking
            live music entertainment and educational presentations. Our goal was
            to create a seamless platform where venues, educational
            institutions, and music talent agency buyers could effortlessly
            discover and connect with professional music artists.
          </p>
          <p className=" text-darkGrey">
            STLR provides event music booking for{" "}
            <Link href="https://www.stlrentertainment.com/artists/">
              live music entertainment{" "}
            </Link>
            and{" "}
            <Link href="https://www.stlrentertainment.com/educators/">
              educational presentations
            </Link>{" "}
            for venues and educational institutions of all sizes. We bring
            together the services and talents of professional music artists for
            music talent agency buyers and educational music presentations. In
            addition, STLR provides live music entertainment and consulting
            services, as well as music industry resources.
          </p>

          <HomeButton className="w-max text-sm sm:text-base">
            BOOK ARTISTS
          </HomeButton>
        </div>
        <figure className="lg:w-full">
          {artists_and_educators.slice(8, 9).map((item) => (
            <Link key={item.caption} href={item.artist_link}>
              <Image
                src={item.image_link}
                alt="image"
                layout="responsive"
                className="w-full h-auto"
              />
            </Link>
          ))}
        </figure>
      </div>

      <div className=" featured artists grid  md:grid-cols-[40%_auto] gap-20 px-7 py-14 lg:px-40">
        <div>
          {artists_and_educators.slice(9, 10).map((item) => (
            <Image src={item.image_link} key={item.caption} alt="img" />
          ))}
        </div>
        <div className="flex flex-col gap-5 ">
          <h6 className=" text:lg md:text-2xl text-[darkGrey] font-bold">
            STLR ENTERTAINMENT'S
          </h6>
          <h2 className="text-4xl md:text-5xl font-bold">
            Featured Artists of the Month <br />
            for Jazz and Blues are ...
          </h2>
          <div className="flex flex-col gap-4 lg:flex-row">
            {featured_artists.map((artist) => (
              <div
                key={artist.name}
                className="flex flex-col items-center justify-center box-border relative w-full gap-10"
              >
                <div
                  className="relative items-center flex justify-center z-[1000000]"
                  style={{
                    backgroundImage: `url(${artist.imgSrc.src})`,
                    backgroundPosition: "center",
                    height: "270px",
                    width: "100%",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <span className="absolute w-full h-full left-0 right-0 top-0 bottom-0 opacity-50 z-[1] bg-black"></span>

                  <div className="z-50">
                    <h2 className="text-2xl md:text-4xl font-bold">
                      {`${artist.genre.toUpperCase()}: `}
                      <br />
                      {`${artist.name}: `}
                    </h2>
                  </div>
                </div>

                <CardYouTube embedId={artist.embedId} title={artist.title} />
                <div className="artist link flex flex-col gap-4">
                  <p className="text-[darkGrey] text-sm leading-[1.75]">
                    {artist.description}
                    <br />
                    <Link href={artist.href}>{artist.alt}</Link>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:grid-cols-[40%_auto] lg:grid gap-10 items-center px-7 py-14 lg:px-40">
        <aside className="newsletter flex flex-col gap-5">
          <h2 className="text-center">
            Join the official STLR Entertainment newsletter
          </h2>
          <form className="flex flex-col gap-3">
            <Input
              label="Email"
              type="email"
              name="email"
              className="w-full bg-gray-200 rounded-[3px] space-y-3"
            />

            <div className="flex flex-col md:flex-row gap-3 w-full">
              <Input
                label="Firstname"
                type="firstname"
                name="firstname"
                className="w-full bg-gray-200 rounded-[3px] space-y-3"
              />
              <Input
                label="Lastname"
                type="lastname"
                name="lastname"
                className="w-full bg-gray-200 rounded-[3px] space-y-3"
              />
            </div>
            <article className="text-[#33475b] text-sm leading-[1.7]">
              STLR Entertainment needs the contact information you provide to us
              to contact you about our products and services. You may
              unsubscribe from these communications at anytime. For information
              on how to unsubscribe, as well as our privacy practices and
              commitment to protecting your privacy, check out our Privacy
              Policy.
            </article>
            <HomeButton className="bg-[#ff7a59] text-sm rounded mt-8">
              Submit
            </HomeButton>

            <span className=" before:content['sprocket']  text-[#33475b]">
              <Link
                href="https://app.hubspot.com/signup-hubspot"
                className="text-[#FF7A59] text-sm"
              >
                Create your own free forms
              </Link>{" "}
              to generate leads from your website
              <strong></strong>
            </span>
          </form>
        </aside>
        <aside className="w-full flex flex-col gap-10">
          <h2 className="text-4xl leading-[1.7] font-bold text-center ">
            Shop official STLR Merchandise
          </h2>
          <div className="w-full h-full ">
            <Image
              src={merchandise}
              alt="shopping-merchandise"
              className="w-full h-full object-cover rounded-full"
              width={50}
              height={50}
              layout="responsive"
            />
          </div>
        </aside>
      </div>
      <section></section>

      <section className="relative flex flex-col gap-10 items-center  justify-center">
        <div
          className="absolute inset-0 w-full h-full z-0"
          style={{
            backgroundImage: `url(${cta.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="z-50 p-11 flex flex-col gap-10 items-center">
          <div className="flex flex-col gap-5 ">
            <h2 className="text-center">Amazing Videos & Presentations</h2>
            <p className="text-white lg:text-2xl text-center">
              STLR goes further than promoting music, we create, we develop, we
              Inspire. <br />
              See what we accomplished with award-winning musician{" "}
              <Link href="https://www.stlrentertainment.com/andre-thierry/">
                Andre Thiery
              </Link>
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-10">
            <Image src={AndreFlyer} alt="andre" />
            <Image src={Andre} alt="andre" />
          </div>
          <HomeButton>WATCH NOW</HomeButton>
        </div>
      </section>

      <div className="flex flex-col gap-10 prose px-7 py-14 lg:px-40">
        <Header1>Giving Back</Header1>
        <p className="lg:text-2xl">
          As part of our “Giving Back to the Community Commitment”, we partner
          with the{" "}
          <Link href="Gellert Family Busines Center">
            Gellert Family Busines Center
          </Link>
          at the{" "}
          <Link href="https://www.usfca.edu/">
            University of San Francisco’s business program
          </Link>
          , mentoring students in modern business practices.
        </p>
      </div>
    </main>
  );
}

export default Main;
