import React from "react";

interface FooterProps {
  dark: boolean;
  gallery?: boolean;
}

const Footer = ({ dark, gallery }: FooterProps) => {
  return (
    <div
      className={`
          flex
          gap-8
          text-nouns
          py-8
          px-10
          border-t
          xs:justify-around
          sm:justify-start
          ${dark && !gallery && "text-white"}
          ${gallery && "border-nouns-yellow text-nouns-yellow"}
          `}
    >
      <a
        className="cursor-pointer hover:text-nouns-blue transition duration-200 hover:underline"
        href="https://nouns.wtf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Nouns.wtf
      </a>
      <a
        className="cursor-pointer hover:text-nouns-blue transition duration-200 hover:underline"
        href="https://twitter.com/nounsdao"
        target="_blank"
        rel="noopener noreferrer"
      >
        Twitter
      </a>
      <a
        className="cursor-pointer hover:text-nouns-blue transition duration-200 hover:underline"
        href="https://discord.gg/nouns"
        target="_blank"
        rel="noopener noreferrer"
      >
        Discord
      </a>
    </div>
  );
};

export default Footer;
