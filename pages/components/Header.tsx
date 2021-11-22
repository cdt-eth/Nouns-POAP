import Head from "next/head";

// interface HeaderProps {
//   title: string;
// }

const Header = ({ title }): any => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Header;
