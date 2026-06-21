import FlickeringDots from "../FlickeringDots"
import Features from "./Features"
import Hero from "./Hero"
import Home from "./Home"
import OfferForm from "./OfferForm"
import Sample from "./Sample"
import { useRef } from "react";

function App() {
  const offerRef = useRef(null);
  return (
    <div className="relative flex flex-col items-center justify-center bg-[#05070d] overflow-hidden text-white">
      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.05)_1px,transparent_1px)] bg-size-[60px_60px] opacity-40" />

      {/* SOFT GLOW OVERLAY */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black opacity-80" />
      <FlickeringDots count="17" />
     
        <Hero offerRef={offerRef} />
        <Features />
        <OfferForm offerRef={offerRef} />

    </div>)
}

export default App
