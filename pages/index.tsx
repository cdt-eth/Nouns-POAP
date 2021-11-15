import React from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import { format } from "date-fns";
import Bidder from "./components/Bidder";
import Footer from "./components/Footer";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { auctionsState } from "../atoms";
import auctionData from "./api/auctions.json";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  const [auctions, setAuctions] = useRecoilState(auctionsState);

  auctionData && setAuctions(auctionData);

  return (
    <div className="min-h-screen bg-nouns-bg-grey">
      <Header />
      <div className="xs:w-11/12 sm:w-9/12 m-auto sm:max">
        <Nav about={false} />

        {auctions && (
          <>
            <div>
              <p className="text-nouns text-black header leading-none	 text-center">
                Noun {auctions[0].auction} POAP
              </p>
            </div>

            <div className="text-center	date uppercase">
              <p>{format(new Date(), "PP")}</p>
            </div>

            <div className="mt-10 mb-16">
              <img
                className="m-auto rounded-full shadow-lg hero"
                src={`./beings/n${auctions[0].auction}.png`}
                alt="hero"
              />
            </div>

            <div>
              <div className="flex xs:flex-col sm:flex-row justify-between  sm:items-end sm:pb-2 ">
                <p className="text-nouns xs:text-3xl sm:text-5xl">
                  POAP Winners{" "}
                  <span className="text-nouns-grey cursor-pointer">
                    <a
                      href={`https://nouns.wtf/auction/${auctions[0].auction}`}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-nouns-blue  transition duration-200"
                    >
                      Noun {auctions[0].auction}
                    </a>
                  </span>
                </p>
                <Link href="/gallery">
                  <a className="cursor-pointer text-nouns-blue font-bold transition duration-200   xs:hidden sm:block sm:mr-8 arrow">
                    {/* <a className="button arrow">Read More</a> */}
                    {/* <a> */}
                    Previous Winners
                    {/* <img src="./Arrow_2.svg" alt="arrow" /> */}
                  </a>
                </Link>
              </div>

              <p className="uppercase text-xs date sm:pt-0">Top 5 Runner-ups</p>
            </div>

            <div className="xs:mt-6 sm:mt-8">
              {auctions[0].bids &&
                auctions[0].bids.map((b, idx) => (
                  <Bidder key={uuidv4()} bidder={b} idx={idx} />
                ))}
            </div>
          </>
        )}
        <div className="xs:text-xs  sm:text-base border-t border-nouns-border pt-4 poap-text ">
          <div className="sm:w-1/2 line">
            POAP Winners automatically receive their badge on{" "}
            <a
              className="cursor-pointer text-nouns-blue transition duration-200 hover:text-nouns-bg-darkblue hover:underline"
              href="https://poap.xyz/"
              target="_blank"
              rel="noreferrer"
            >
              POAP.xyz
            </a>
            .
          </div>
        </div>

        <div className="xs:py-16 sm:py-36">
          <div className="text-nouns xs:text-3xl sm:text-6xl sm:w-8/12 leading-tight">
            A badge to memoralize participation in the historic Nouns auction.
          </div>

          <div className="sm:py-8 sm:w-1/2 sm:m-auto text-base">
            <div className="xs:pt-4 sm:pt-0 sm:w-10/12 m-auto">
              <p className="text-dm font-normal xs:pt-4 sm:pt-11 pb-6">
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
