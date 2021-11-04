import { atom } from "recoil";

export const auctionsState = atom<any | undefined>({
  key: "auctions",
  default: undefined,
});

export const auctionNumber = atom<number | null>({
  key: "auctionNumber",
  default: 90,
});
