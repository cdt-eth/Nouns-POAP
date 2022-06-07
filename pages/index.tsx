import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import { format } from "date-fns";
import Bidder from "./components/Bidder";
import Footer from "./components/Footer";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  const [mostRecentCompletedAuctionId, setMostRecentCompletedAuctionId] =
    useState(0);
  const [biddersGettingPOAP, setBiddersGettingPOAP] = useState(
    new Array<any>()
  );
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getMostRecentAuctionId = async () => {
      const settings = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // GraphQL query to get id of settled auction with highest endTime
          query: `{
              auctions(orderBy: endTime, orderDirection:desc, where: {settled:true}, first: 1) {
                id
              }
            }`,
        }),
      };
      try {
        setIsLoading(true);
        const fetchResponse = await fetch(
          "https://api.thegraph.com/subgraphs/name/nounsdao/nouns-subgraph",
          settings
        );
        const data = await fetchResponse.json();
        // setMostRecentCompletedAuctionId(data.data.auctions[0].id);
        setMostRecentCompletedAuctionId(296);
      } catch {
        console.log("Error fetching most recent auction");
      }
    };

    getMostRecentAuctionId();
  }, []);

  useEffect(() => {
    const getBiddersForPOAP = async () => {
      const settings = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // GraphQL query to get all bids for mostRecentlyCompletedAuctionId
          query: `{
              auctions(where: {id: "${mostRecentCompletedAuctionId}"}) {
                id,
                bidder {
                  id
                }
                bids {
                  id
                  amount
                  bidder {
                    id
                  }
                }
              }
             }`,
        }),
      };

      try {
        if (mostRecentCompletedAuctionId == 0) {
          return;
        }

        const fetchResponse = await fetch(
          "https://api.thegraph.com/subgraphs/name/nounsdao/nouns-subgraph",
          settings
        );
        const data = await fetchResponse.json();
        // console.log("data", data.auctions[0].bids);
        // Get winning bidder
        const winningBidderAddr = data.data.auctions[0].bidder.id;

        // Filter the winning bidder out of bid info list
        const filteredBidInfo = data.data.auctions[0].bids.filter(
          (bidInfo: any, id: number) => {
            return bidInfo.bidder.id !== winningBidderAddr;
          }
        );

        // Construct map relating address => highestBidAmount
        const bidMap = new Map<string, number>();
        filteredBidInfo.forEach((bidInfo: any) => {
          if (bidMap.has(bidInfo.bidder.id)) {
            if (bidMap.get(bidInfo.bidder.id) < Number(bidInfo.amount)) {
              bidMap.set(bidInfo.bidder.id, Number(bidInfo.amount));
            }
          } else {
            bidMap.set(bidInfo.bidder.id, Number(bidInfo.amount));
          }
        });

        // Sort by bid amount and take top 5
        const addressesGettingPOAP = Array.from(
          bidMap,
          ([address, amount]) => ({ address, amount })
        )
          .sort((firstBidder, secondBidder) => {
            return secondBidder.amount - firstBidder.amount;
          })
          .slice(0, 5);

        setBiddersGettingPOAP(addressesGettingPOAP);
        setIsLoading(false);
      } catch {
        console.log("Error fetching POAP wining bidders");
      }
    };

    getBiddersForPOAP();
  }, [mostRecentCompletedAuctionId]);

  return (
    <div className="min-h-screen bg-nouns-bg-grey">
      <Header title="Nouns POAP" />
      <div className="maxW w-11/12 m-auto">
        <Nav home about={false} />

        {mostRecentCompletedAuctionId > 0 && (
          <>
            <div>
              <p className="text-nouns text-black header leading-none	text-center">
                Noun {mostRecentCompletedAuctionId} POAP
              </p>
            </div>

            <div className="text-center	date uppercase">
              <p>May 4, 2022</p>
            </div>

            <div className="mt-10 mb-16">
              <img
                className="m-auto rounded-full shadow-lg hero"
                src={`./beings/n${mostRecentCompletedAuctionId}.png`}
                alt="hero"
              />
            </div>

            <div>
              <div className="flex xs:flex-col sm:flex-row justify-between  sm:items-end sm:pb-2 ">
                <p className="text-nouns xs:text-3xl sm:text-5xl">
                  POAP Winners{" "}
                  <span className="text-nouns-grey cursor-pointer">
                    <a
                      href={`https://nouns.wtf/auction/${mostRecentCompletedAuctionId}`}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-nouns-blue  transition duration-200"
                    >
                      Noun {mostRecentCompletedAuctionId}
                    </a>
                  </span>
                </p>

                <div className="xs:hidden sm:flex gap-2 sm:cursor-pointer sm:hover:underline transition duration-200">
                  <Link href="/gallery">
                    <a className=" text-nouns-blue font-bold ">
                      Previous Winners
                    </a>
                  </Link>
                  <img src="Arrow_2.svg" alt="arrow" />
                </div>
              </div>

              <p className="uppercase text-xs date sm:pt-0">Top 5 Runner-ups</p>
            </div>

            <div className="xs:mt-6 sm:mt-8">
              {biddersGettingPOAP &&
                biddersGettingPOAP.map((b, idx) => (
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
            A badge to memorialize participation in the historic Nouns auction.
          </div>

          <div className="sm:py-8 sm:w-1/2 sm:m-auto text-base">
            <div className="xs:pt-4 sm:pt-0 sm:w-10/12 m-auto">
              <p className="text-dm font-normal xs:pt-4 sm:pt-11 pb-6">
                The top 5 runner-ups of every Nouns auction receive a unique
                numbered badge as proof of commitment to the Nouns ecosystem.
                Each POAP is a 1/1 being hand created by renowned NFT artist
                David Horvath.
              </p>

              <div className="flex gap-2 sm:cursor-pointer sm:hover:underline transition duration-200 ">
                <Link href="/about">
                  <a className=" text-nouns-blue font-bold ">Learn More</a>
                </Link>
                <img src="Arrow_2.svg" alt="arrow" />
              </div>
            </div>
          </div>
        </div>
        <Footer dark={false} />
      </div>
    </div>
  );
};

export default Home;
