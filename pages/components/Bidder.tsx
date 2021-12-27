import React from "react";
import { utils, BigNumber } from 'ethers';
import { useEthers } from '@usedapp/core';
import { useEffect, useState } from 'react';

const useReverseENSLookUp = (address: string) => {
  const { library } = useEthers();
  const [ens, setEns] = useState<string>();

  useEffect(() => {
    let mounted = true;
    if (address && library) {
      library
        .lookupAddress(address)
        .then(name => {
          if (!name) return;
          if (mounted) {
            setEns(name);
          }
        })
        .catch(error => {
          console.log(`error resolving reverse ens lookup: `, error);
        });
    }

    return () => {
      setEns('');
      mounted = false;
    };
  }, [address, library]);

  return ens;
};

interface BidderProps {
  bidder: any;
  idx: number;
}

const Bidder = ({ bidder, idx }: BidderProps) => {
  idx += 1;

  const address = bidder ? bidder.address: '';
  const ens = useReverseENSLookUp(address);
  const shortAddress = address && [address.substr(0, 4), address.substr(38, 4)].join('...');

  return (
    <div
      className="flex gap-4 items-center border-t border-nouns-border 
    xs:py-6 sm:py-14"
    >
      {bidder && (
        <>
          <p className="w-1/12 xs:text-lg sm:text-2xl	">
            {idx + 1 < 10 ? "0" + idx : idx}
          </p>
          <p className="xs:w-8/12 sm:w-9/12 text-nouns font-light xs:text-xl sm:text-7xl">
            {ens ? ens: shortAddress}
          </p>
          <p className="xs:w-3/12 sm:w-2/12 text-nouns text-right xs:text-sm sm:text-2xl font-light">
            {utils.formatEther(BigNumber.from(bidder ? bidder.amount.toString(): '0'))} ETH
          </p>
        </>
      )}
    </div>
  );
};

export default Bidder;
