import Header from "./components/Header";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Header />

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="text-nouns ">
          <h1 className="text-6xl text-nouns-bg-blue">NOUNS POAP</h1>
          <h1 className="text-6xl text-nouns-bg-grey">NOUNS POAP</h1>
          <h1 className="text-6xl text-nouns-blue">NOUNS POAP</h1>
          <h1 className="text-6xl text-nouns-grey">NOUNS POAP</h1>
          <h1 className="text-6xl text-nouns-yellow">NOUNS POAP</h1>
          <h1 className="text-6xl text-nouns-darkblue">NOUNS POAP</h1>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by
        </a>
      </footer>
    </div>
  );
}
