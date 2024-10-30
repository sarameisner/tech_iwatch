"use client";
import { useState } from "react";
import Nav from "./components/Nav";
import WatchColor from "./components/WatchColor";

export default function HomePage() {
  const [selectedColor, setSelectedColor] = useState("navy");

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#C8DCE5] to-[#B6CCDA]">
      <Nav />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
        <div className="text-black">
          <h1 className="text-6xl font-bold">The Perfect Moment</h1>
          <p className="text-2xl mt-4">Between Past And Future.</p>
          <button className="mt-6 bg-white text-blue-500 font-bold py-2 px-6 rounded-lg">Buy Now</button>
        </div>

        <WatchColor color={selectedColor} />
        <div className="flex space-x-4 mt-4">
          <button className={`${selectedColor === "navy" ? "bg-gray-300" : "bg-white"} py-2 px-4 rounded-lg`} onClick={() => setSelectedColor("navy")}>
            Navy
          </button>
          <button className={`${selectedColor === "mint" ? "bg-gray-300" : "bg-white"} py-2 px-4 rounded-lg`} onClick={() => setSelectedColor("mint")}>
            Mint
          </button>
          <button className={`${selectedColor === "ocean" ? "bg-gray-300" : "bg-white"} py-2 px-4 rounded-lg`} onClick={() => setSelectedColor("ocean")}>
            Ocean
          </button>
        </div>
      </div>
    </div>
  );
}
