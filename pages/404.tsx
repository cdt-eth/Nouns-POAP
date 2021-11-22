import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Nav from "./components/Nav";
import Header from "./components/Header";

const Custom404 = () => {
  return (
    <div className="four bg-nouns-pink h-screen">
      <Header title="404 | Nouns POAP" />
      <div className="w-11/12  m-auto maxW ">
        <Nav about={false} four />
        <div className="text-center flex flex-col items-center pt-10">
          <img className="mb-10 sm:w-8/12" src="404a.png" alt="404" />

          <div className="sm:mt-6">
            <p className="text-nouns text-3xl mb-4">Looks like you got lost.</p>
            <Link href="/">
              <a className="text-xl font-light  text-nouns hover:text-nouns-grey transition duration-200 text-nouns-brown">
                Go Home
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Custom404;
