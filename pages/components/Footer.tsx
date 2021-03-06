import React from "react";

interface FooterProps {
  dark: boolean;
  gallery?: boolean;
}

const Footer = ({ dark, gallery }: FooterProps) => {
  // xs:w-11/12 sm:w-9/12
  return (
    <div
      className={`
          flex
          gap-8
          text-nouns
          py-8
          m-auto
          border-t
          xs:justify-around
          sm:justify-start
          ${dark && !gallery && "text-white border-about"}
          ${
            gallery &&
            "border-nouns-yellow text-nouns-yellow border-opacity-20 "
          }
          ${!dark && !gallery && "border-nouns-border"}
          `}
    >
      <a
        className={`cursor-pointer hover:text-nouns-blue transition duration-200 hover:underline ${
          gallery && "hover:text-white"
        }`}
        href="https://nouns.wtf"
        target="_blank"
        rel="noreferrer"
      >
        Nouns.wtf
      </a>
      <a
        className={`cursor-pointer hover:text-nouns-blue transition duration-200 hover:underline ${
          gallery && "hover:text-white"
        }`}
        href="https://twitter.com/nounsdao"
        target="_blank"
        rel="noreferrer"
      >
        Twitter
      </a>
      <a
        className={`cursor-pointer hover:text-nouns-blue transition duration-200 hover:underline ${
          gallery && "hover:text-white"
        }`}
        href="https://discord.gg/nouns"
        target="_blank"
        rel="noreferrer"
      >
        Discord
      </a>
    </div>
  );
};

export default Footer;
