import { atom } from "recoil";

export const auctionNumber = atom<number | null>({
  key: "auction",
  default: 90,
});
