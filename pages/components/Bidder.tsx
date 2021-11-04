import React from "react";

interface BidderProps {
  bidder: any;
  idx: number;
}

const Bidder = ({ bidder, idx }: BidderProps) => {
  idx += 1;

  return (
    <div className="flex gap-4 items-center border-t py-6">
      {bidder && (
        <>
          <p className="w-1/12">{idx + 1 < 10 ? "0" + idx : idx}</p>
          <p className="xs:w-8/12 sm:w-9/12 text-nouns font-light xs:text-xl sm:text-7xl">
            {bidder.address}
          </p>
          <p className="xs:w-3/12 sm:w-2/12 text-nouns text-right xs:text-sm">
            {bidder.amount} ETH
          </p>
        </>
      )}
    </div>
  );
};

export default Bidder;
