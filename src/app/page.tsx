// app/page.js

import Hero from "./components/Hero";
import Main from "./components/Main";
import Middle from "./components/Middle";
import Giveback from "./components/Giveback";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-screen flex justify-center items-center bg-gradient-to-b from-transparent to-blue-200">
        <Hero />
      </section>

      {/* Main Section */}
      <section className="min-h-screen">
        <Main />
      </section>

      {/* Giveback Section */}
      <section className="min-h-screen">
        <Giveback />
      </section>

      {/* Middle Section */}
      <section className="min-h-screen">
        <Middle />
      </section>
    </div>
  );
}
