import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Nav from "./components/Nav";

const Custom404 = () => {
  return (
    <div className="four h-screen bg-nouns-pink ">
      <div className="xs:w-11/12 sm:w-9/12 m-auto">
        <Nav dark={false} four />
        <div className="text-center flex flex-col items-center pt-10">
          <img className="mb-10" src="404a.png" alt="404" />

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
