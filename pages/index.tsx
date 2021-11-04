import React from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import { format } from "date-fns";
import Bidder from "./components/Bidder";
import Footer from "./components/Footer";
import Link from "next/link";

const Home = () => {
  return (
    <div className="min-h-screen bg-nouns-bg-grey">
      <Header />

      <div className="xs:w-10/12 sm:w-9/12 m-auto">
        <Nav dark={false} />

        <div>
          <p className="text-nouns text-black header text-center">
            Noun 90 POAP
          </p>
        </div>

        <div className="text-center sm:-mt-10	">
          <p>{format(new Date(), "PP")}</p>
        </div>

        <img className="m-auto" src="./hero.png" alt="hero" />

        <div>
          <div className="flex xs:flex-col sm:flex-row justify-between xs:items-center sm:items-end sm:pb-2">
            <p className="text-nouns xs:text-3xl sm:text-5xl">
              POAP Winners <span className="text-nouns-grey">Noun 90</span>
            </p>
            <a
              className="cursor-pointer text-nouns-blue font-bold"
              href="https://nouns.wtf/"
              target="_blank"
              rel="noreferrer"
            >
              Previous Winners -{">"}
            </a>
          </div>

          <p className="uppercase text-xs xs:pt-6 sm:pt-0">Top 5 Runner-ups</p>
        </div>

        <div className="xs:mt-2 sm:mt-8">
          <Bidder num={1} address="cdt.eth" amount={100} />
          <Bidder num={2} address="0x95..C5EC" amount={99} />
          <Bidder num={3} address="beautifulpunks.eth" amount={97} />
          <Bidder num={4} address="0x13...1eb5" amount={86} />
          <Bidder num={5} address="longling.eth" amount={45} />
        </div>
        <p className="text-2xs border-t pt-4">
          POAP Winners automatically receive their badge on{" "}
          <a
            className="cursor-pointer text-nouns-blue transition duration-200 hover:text-nouns-bg-darkblue hover:underline"
            href="https://poap.xyz/"
            target="_blank"
            rel="noreferrer"
          >
            POAP.xyz
          </a>
          . To migrate the POAP to mainnet, please visit{" "}
          <a
            className="cursor-pointer text-nouns-blue transition duration-200 hover:text-nouns-bg-darkblue hover:underline"
            href="https://poap.xyz/"
            target="_blank"
            rel="noreferrer"
          >
            POAP.xyz
          </a>{" "}
          and connect the wallet of your bidding address.
        </p>

        <div className="xs:py-8 sm:py-36">
          <div className="text-nouns xs:text-3xl sm:text-6xl sm:w-8/12 leading-tight">
            A badge to memoralize participation in the historic Nouns auction.
          </div>

          <div className="sm:py-8 sm:w-1/2 sm:m-auto text-xl">
            <div className="xs:pt-4 sm:pt-0 sm:w-10/12 m-auto">
              <p className="text-dm font-normal">
                The top 5 runner-ups of every Nouns auction receive a unique
                numbered badge as proof of commitment to the Nouns ecosystem.
                Each POAP is a 1/1 being hand created by renowned NFT artist
                David Horvath.
              </p>

              <Link href="/about">
                <a className="cursor-pointer text-nouns-blue font-bold transition duration-200 hover:underline">
                  Learn More -{">"}
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer dark={false} />
    </div>
  );
};

export default Home;
