import React from "react";

interface BidderProps {
  num: number;
  address: string;
  amount: number;
}

const Bidder = ({ num, address, amount }: BidderProps) => {
  return (
    <div className="flex gap-4 items-center border-t py-6">
      <p className="w-1/12">{num < 10 ? "0" + num : num}</p>
      <p className="xs:w-8/12 sm:w-9/12 text-nouns font-light xs:text-xl sm:text-7xl">
        {address}
      </p>
      <p className="xs:w-3/12 sm:w-2/12 text-nouns text-right xs:text-sm">
        {amount} ETH
      </p>
    </div>
  );
};

export default Bidder;
