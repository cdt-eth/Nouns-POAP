import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Custom404 = () => {
  return (
    <div className="four h-screen">
      <div className="text-center flex flex-col items-center pt-20">
        <img className="xs:w-3/4 sm:w-1/2" src="404a.png" alt="404" />

        <div className="mt-6">
          <Link href="/">
            <a className="text-nouns text-white text-3xl hover:text-nouns-yellow transition duration-200">
              Go Home
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Custom404;
