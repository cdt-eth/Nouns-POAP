import "tailwindcss/tailwind.css";
import "../styles/global.css";
import { RecoilRoot } from "recoil";
import { Mainnet, DAppProvider, useEthers, Config } from "@usedapp/core";

const config: Config = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]:
      "https://mainnet.infura.io/v3/62687d1a985d4508b2b7a24827551934",
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <DAppProvider config={config}>
        <Component {...pageProps} />
      </DAppProvider>
    </RecoilRoot>
  );
}

export default MyApp;
