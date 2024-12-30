import Hero from "./components/Hero";
import Main from "./components/Main";
import Middle from "./components/Middle";

export default function Home() {
  return (
    <div>
      <div className="h-screen justify-center items-center bg-gradient-to-b from-transparent to-blue-200">
        <Hero />
      </div>
      <Main />
      <Middle />
    </div>
  );
}
