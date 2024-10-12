import React from "react";
import Header1 from "./typography/Header1";
import HomeButton from "./components/button";
import Link from "next/link";
import Image from "next/image";

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
  brooke,
} from "../../public/images";

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

  return (
    <main className="bg-black flex flex-col p-4 sm:p-6 md:p-8 lg:p-10 gap-5 text-white">
      <div className="artist-roster flex flex-col gap-4">
        <div>
          <h6 className="text-sm sm:text-base">ARTIST ROSTER</h6>
        </div>
        <div>
          <Header1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            STLR PERFORMING ARTISTS & EDUCATORS
          </Header1>
        </div>

        <div className="flex flex-col lg:flex-row gap-5">
          <section className="flex flex-col gap-5 lg:w-1/3 flex-1">
            <article className="text-sm sm:text-base">
              Choose from a wide variety of artists in our roster, including
              singers, musicians, tribute bands, DJ's, and more. Whether you're
              planning a wedding, corporate event, music festival, or any other
              special occasion, make your next event unforgettable with STLR
              Entertainment.
            </article>
            <div className="flex flex-row gap-4">
              <HomeButton className="text-sm sm:text-base">
                PERFORMERS
              </HomeButton>
              <HomeButton className="text-sm sm:text-base">
                EDUCATORS
              </HomeButton>
            </div>
          </section>
          <section className="grid grid-cols-[repeat(2,minmax(0,100px))] md:grid-cols-[repeat(4,minmax(0,100px))] gap-4 items-center justify-center flex-1">
            {artists_and_educators.slice(0, 8).map((item) => (
              <div
                className="artist-showcase-item w-[100px] h-[100px] aspect-square border border-solid p-1 rounded-full border-[#333] overflow-hidden"
                key={item.caption}
              >
                <Link
                  className="artist-showcase-item-thumb w-full h-full rounded-full overflow-hidden flex items-center justify-center"
                  href={item.artist_link}
                >
                  <Image
                    src={item.image_link}
                    alt={item.caption}
                    className="w-full h-full object-cover"
                    width={100}
                    height={100}
                    layout="responsive"
                  />
                </Link>
              </div>
            ))}
          </section>
        </div>
      </div>

      <div className="about-us flex flex-col lg:flex-row gap-5 mt-8">
        <div className="flex flex-col gap-5 lg:w-3/5">
          <h3 className="text-lg sm:text-xl">ABOUT US</h3>
          <Header1 className="text-2xl sm:text-3xl md:text-4xl">
            Entertainment is necessary
          </Header1>
          <p className="text-sm sm:text-base">
            Founded in 2016, STLR Entertainment was born from a profound love
            for music and a vision to unite gifted artists with those seeking
            live music entertainment and educational presentations. Our goal was
            to create a seamless platform where venues, educational
            institutions, and music talent agency buyers could effortlessly
            discover and connect with professional music artists.
          </p>
          <p className="text-sm sm:text-base">
            STLR provides event music booking for live music entertainment and
            educational presentations for venues and educational institutions of
            all sizes. We bring together the services and talents of
            professional music artists for music talent agency buyers and
            educational music presentations. In addition, STLR provides live
            music entertainment and consulting services, as well as music
            industry resources.
          </p>

          <HomeButton className="w-max text-sm sm:text-base">
            BOOK ARTISTS
          </HomeButton>
        </div>
        <figure className="lg:w-2/5">
          {artists_and_educators.slice(8, 9).map((item) => (
            <Link key={item.caption} href={item.artist_link}>
              <Image
                src={item.image_link}
                alt="image"
                layout="responsive"
                width={100}
                height={100}
                className="w-full h-auto"
              />
            </Link>
          ))}
        </figure>
      </div>
    </main>
  );
}

export default Main;
