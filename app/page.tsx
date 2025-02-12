import { About } from "./components/About";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-3xl text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 text-black">home component</h1>
      </div>
      <About />
    </div>
  );
}