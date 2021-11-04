import React from "react";
import Link from "next/link";

interface NavProps {
  dark: boolean;
  gallery?: boolean;
}

const Nav = ({ dark, gallery }: NavProps) => {
  return (
    <div
      className={`flex justify-between m-auto border-b ${
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
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/gallery">
          <a>Gallery</a>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
