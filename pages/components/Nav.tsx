import React from "react";
import Link from "next/link";

interface NavProps {
  dark: boolean;
  gallery?: boolean;
}

const Nav = ({ dark, gallery }: NavProps) => {
  return (
    <div
      className={`flex justify-between m-auto border-b border-nouns-border  ${
        gallery && "border-nouns-yellow border-opacity-20"
      } py-4 mb-8`}
    >
      <Link href="/">
        <a>
          <img src={`./${dark ? "Logo_Light" : "Logo"}.svg`} alt="logo" />
        </a>
      </Link>
      <div
        className={`flex xs:gap-3 self-center sm:gap-6 text-nouns ${
          dark ? "text-white" : "text-black"
        }`}
      >
        <Link href="/">
          <a
            className={`cursor-pointer hover:text-black transition duration-200 ${
              gallery && "hover:text-nouns-yellow "
            }`}
          >
            Home
          </a>
        </Link>
        <Link href="/about">
          <a
            className={`cursor-pointer hover:text-black transition duration-200 ${
              gallery && "hover:text-nouns-yellow "
            }`}
          >
            About
          </a>
        </Link>
        <Link href="/gallery">
          <a
            className={`cursor-pointer hover:text-black transition duration-200 ${
              gallery && "hover:text-nouns-yellow "
            }`}
          >
            Gallery
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
