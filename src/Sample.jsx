import FlickeringDots from "../FlickeringDots"

export default function Sample(){
    return   <div className="relative min-h-screen bg-[#05070d] overflow-hidden flex items-center justify-center">

asdjhasjd
      {/* grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px] opacity-40" />

      {/* dot grid */}
      <div className="absolute inset-0 bg-dots opacity-20" />

      {/* random flickering dots */}
      <FlickeringDots count={4} />
     {/* vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_40%,rgba(0,0,0,0.9))]" />

      {/* content */}
      <div className="relative z-10 text-center">
        {/* title, shimmer text, buttons */}
           <h1 className="text-[64px] md:text-[120px] font-bold leading-none tracking-wide">
          findsbyte<span className=" text-cyan-400">.shop</span>
        </h1>
      </div>

    </div>
}