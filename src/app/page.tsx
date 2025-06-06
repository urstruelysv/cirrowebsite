// app/page.js

import Hero from "./components/Hero";
import Main from "./components/Main";
import Middle from "./components/Middle";
import Giveback from "./components/Giveback";
import Fotter from "./components/Fotter";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="flex justify-center items-center bg-gradient-to-b from-transparent to-blue-200">
        <Hero />
      </section>

      {/* Main Section */}
      <section className="bg-blue-200">
        <Main />
      </section>

      {/* Giveback Section */}
      <section className="bg-blue-200 ">
        <Giveback />
      </section>

      {/* Middle Section */}
      <section className="min-h-screen ">
        <Middle />
      </section>
      <Fotter />
    </div>
  );
}
