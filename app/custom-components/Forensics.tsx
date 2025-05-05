import Link from "next/link";

export default function Forensics() {
  return (
    <div className="w-full px-5 max-h-full flex flex-col gap-y-10 items-center justify-center bg-black">
      <h1 className="text-2xl sm:text-4xl md:text-4xl xl:text-5xl font-extrabold text-white text-center">
         <span className="text-primary-yellow">Digital Forensics </span>
      </h1>
      <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold text-center">
        Expert analysis. Defensible results. Digital clarity when it matters most.
      </h2>
      <div>
        <Link
          href="/Forensics"
          className=" lg:flex items-center gap-3 px-10 py-2.5 border font-medium text-lg border-gray-500 text-white rounded-2xl relative overflow-hidden group transition-colors duration-500 hover:text-black"
        >
          <span className="relative z-10">Contact Us Today</span>
          <span className="absolute inset-0 lg:bg-[#b1d450] scale-x-0 origin-left transition-transform duration-1000 ease-out group-hover:scale-x-100"></span>
        </Link>
      </div>
    </div>
  );
}
