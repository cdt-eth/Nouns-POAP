import { atom } from "recoil";

export const auctionsState = atom<any | undefined>({
  key: "auctions",
  default: undefined,
});
