import React from "react";
import Link from "next/link";

interface NavProps {
  about?: boolean;
  gallery?: boolean;
  four?: boolean;
}

const Nav = ({ about, gallery, four }: NavProps) => {
  return (
    <div
      className={`flex justify-between m-auto border-b py-4 mb-8
       ${four ? "border-black" : "border-nouns-border"} 
       ${about && "border-nouns-blue-border"}
       ${gallery && "border-nouns-yellow border-opacity-20"}
       `}
    >
      <Link href="/">
        <a>
          <img
            className="xs:hidden sm:block"
            src={`./${about || gallery ? "Logo_Light" : "Logo"}.svg`}
            alt="logo"
          />
          <img className="sm:hidden" src={`./nouns-mobile.svg`} alt="logo" />
        </a>
      </Link>

      <div
        className={`flex xs:gap-3 self-center sm:gap-6 text-nouns
        ${about || gallery ? "text-white" : "text-black"}
        `}
      >
        <Link href="/">
          <a
            className={`cursor-pointer hover:text-black transition duration-200
            ${gallery && "hover:text-nouns-yellow opacity-50 hover:opacity-100"}
            ${about && "opacity-50 hover:opacity-100"}
            `}
          >
            Home
          </a>
        </Link>

        <Link href="/about">
          <a
            className={`cursor-pointer hover:text-black transition duration-200
            ${gallery && "hover:text-nouns-yellow opacity-50 hover:opacity-100"}
            ${
              !about &&
              !gallery &&
              !four &&
              "opacity-50 hover:opacity-100 hover:text-white"
            }
            `}
          >
            About
          </a>
        </Link>
        <Link href="/gallery">
          <a
            className={`cursor-pointer hover:text-black transition duration-200 ${
              gallery && "hover:text-nouns-yellow "
            }
              ${about && "opacity-50 hover:opacity-100"}
              ${!about && !gallery && !four && "opacity-50 hover:opacity-100"}
            `}
          >
            Gallery
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
